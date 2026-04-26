<?php

namespace Msc\Gemini;

use Flarum\Discussion\Discussion;
use Flarum\Post\CommentPost;
use Flarum\User\User;
use Gemini\Client;
use Flarum\Settings\SettingsRepositoryInterface;

class Agent
{
    protected string $model;

    public function __construct(
        public readonly User $user,
        protected SettingsRepositoryInterface $settings,
        protected ?Client    $client = null,
        string               $model = null,
    )
    {
        $this->model = $model ?? 'models/gemini-1.5-flash';
    }

    public function repliesTo(Discussion $discussion): void
    {
        if (!$this->client) {
            return;
        }

        $firstPost = $discussion->posts()->first();
        $content = $firstPost->content;
        $title = $discussion->title;

        // Fetch context (last 5 posts)
        $context = $discussion->posts()
            ->where('type', 'comment')
            ->orderBy('number', 'desc')
            ->limit(5)
            ->get()
            ->reverse()
            ->map(fn(CommentPost $post) => ($post->user ? $post->user->display_name : 'Guest') . ': ' . $post->content)
            ->implode("\n---\n");

        $instruction = $this->createMessageForSystem(
            $this->settings->get('muhammedsaidckr-gemini.role'),
            $this->settings->get('muhammedsaidckr-gemini.prompt'),
            $title,
            $firstPost->user ? $firstPost->user->display_name : 'Guest'
        );

        $promptContent = "Context of the discussion:\n" . $context . "\n\nNew post to reply to:\n" . $content;

        $response = $this->client->generativeModelWithSystemInstruction($this->model, $instruction)->generateContent($promptContent);

        $respond = $response->text();

        if (empty($respond)) {
            return;
        }

        $userId = $this->user->id;

        CommentPost::reply(
            discussionId: $discussion->id,
            content: $respond,
            userId: $userId,
            ipAddress: null
        )->save();
    }

    private function createMessageForSystem($role, $prompt, $title, $authorName): array
    {
        $forumTitle = $this->settings->get('forum_title');

        $prompt = str_replace(
            ['[title]', '[author_name]', '[forum_title]'],
            [$title, $authorName, $forumTitle],
            $prompt
        );
        $systemPrompt = $role . ' ' . $prompt;

        return [
            'parts' => [
                ['text' => $systemPrompt]
            ]
        ];
    }
}
