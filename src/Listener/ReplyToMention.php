<?php

namespace Msc\Gemini\Listener;

use Flarum\Post\Event\Posted;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Queue\Queue;
use Msc\Gemini\Agent;
use Msc\Gemini\Job\ReplyJob;

class ReplyToMention
{
    public function __construct(
        protected Agent $agent,
        protected Queue $queue,
        protected SettingsRepositoryInterface $settings
    ) {
    }

    public function handle(Posted $event): void
    {
        $post = $event->post;
        $discussion = $post->discussion;

        // Don't reply to self
        if ($post->user_id === $this->agent->user->id) {
            return;
        }

        // Check tags if enabled
        $enabledTags = json_decode($this->settings->get('muhammedsaidckr-gemini.enabled-tags') ?? '[]', true);
        if (!empty($enabledTags)) {
            $discussionTags = $discussion->tags->pluck('id')->toArray();
            if (empty(array_intersect($discussionTags, $enabledTags))) {
                return;
            }
        }

        // Check for mention
        if (str_contains($post->content, '@' . $this->agent->user->username)) {
            $this->queue->push(new ReplyJob($discussion));
        }
    }
}
