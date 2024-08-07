<?php

namespace Msc\Gemini\Listener;

use Flarum\Discussion\Event\Started;
use Illuminate\Contracts\Queue\Queue;
use Msc\Gemini\Agent;
use Msc\Gemini\Job\ReplyJob;

class ReplyToPost
{
    public function __construct(
        protected Agent $agent,
        protected Queue $queue
    ) {
    }

    /**
     * @param  \Flarum\Discussion\Event\Started  $event
     * @return void
     */
    public function handle(Started $event): void
    {
        // See https://docs.flarum.org/extend/backend-events.html for more information.
        $this->queue->push(new ReplyJob($event->discussion));
    }
}
