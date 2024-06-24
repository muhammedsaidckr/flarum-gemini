<?php

namespace Msc\Gemini;

use Flarum\Discussion\Discussion;
use Flarum\Post\CommentPost;
use Flarum\Post\Post;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use Illuminate\Support\Arr;
use Gemini;
use Gemini\Client;

class Agent
{
    protected string $model;

    public function __construct(
        public readonly User $user,
        protected ?Client $client = null,
    ) {
    }

//    public function operational(): bool
//    {
//        return $this->client !== null;
//    }
//
//    public
//    function is(User $someone): bool
//    {
//        return $this->user->is($someone);
//    }

    public function repliesTo(Discussion $discussion): void
    {
        $content = $discussion->firstPost->content;

        $response = $this->client->geminiPro()->generateContent($content);

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

}
