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
        protected ?Client    $client = null,
        string               $model = null,
    )
    {
        $this->model = $model ?? 'gemini-1.5-flash';
    }

    public function repliesTo(Discussion $discussion): void
    {
        $content = $discussion->posts()->first()->content;
        $title = $discussion->title;
        $settings = resolve(SettingsRepositoryInterface::class);
        $instruction = $this->createMessageForSystem($settings->get('muhammedsaidckr-gemini.role'), $settings->get('muhammedsaidckr-gemini.prompt'), $title);

        $response = $this->client->generativeModelWithSystemInstruction($this->model, $instruction)->generateContent($content);

        $respond = $response->text();

        if (empty($respond)) {
            return;
        }

        $userPrompt = $this->user->id;

        CommentPost::reply(
            discussionId: $discussion->id,
            content: $respond,
            userId: $userPrompt,
            ipAddress: '127.0.0.1'
        )->save();
    }

    private function createMessageForSystem($role, $prompt, $title): array
    {
        $prompt = str_replace(
            ['[title]', '[content]'],
            [$title, ''],
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
