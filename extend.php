<?php

/*
 * This file is part of muhammedsaidckr/flarum-gemini.
 *
 * Copyright (c) 2023 Muhammed Said Cakir.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Msc\Gemini;

use Flarum\Discussion\Event\Started;
use Flarum\Extend;
use Msc\Gemini\Listener\ReplyToPost;
use Msc\Gemini\BindingsProvider;
use Msc\Gemini\ClientProvider;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    (new Extend\Locales(__DIR__.'/locale')),

    (new Extend\ServiceProvider())
        ->register(BindingsProvider::class)
        ->register(ClientProvider::class),

    (new Extend\Event())
        ->listen(Started::class, ReplyToPost::class),

    (new Extend\Settings())
        ->default('muhammedsaidckr-gemini.model', 'models/gemini-pro')
        ->default('muhammedsaidckr-gemini.enable_on_discussion_started', true)
        ->default('muhammedsaidckr-gemini.user_prompt_badge_text', 'Assistant')
        ->default('muhammedsaidckr-gemini.user_prompt', 1)
        ->default('muhammedsaidckr-gemini.role', 'You are a forum user')
        ->default('muhammedsaidckr-gemini.prompt',
            'Write a arguable or thankfully opinion asking or arguing something about an answer that has talked about "[title]". Don\'t talk about what you would like or don\'t like. Speak in a close tone, like you are writing in a Tech Forum. Be random and unpredictable.')
        ->serializeToForum('GeminiUserPromptId', 'muhammedsaidckr-gemini.user_prompt')
        ->serializeToForum('GeminiBadgeText', 'muhammedsaidckr-gemini.user_prompt_badge_text'),
];
