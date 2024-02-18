<?php

namespace Msc\Gemini\Job;

use Flarum\Discussion\Discussion;
use Flarum\Queue\AbstractJob;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Msc\Gemini\Agent;

class ReplyJob extends AbstractJob
{
    use Queueable;
    use SerializesModels;

    public function __construct(protected Discussion $discussion)
    {
    }

    public function handle(Agent $agent): void
    {
        $agent->repliesTo($this->discussion);
    }
}
