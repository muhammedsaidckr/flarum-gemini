<?php

namespace Msc\Gemini;

use Flarum\Extension\ExtensionManager;
use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\UserRepository;
use Gemini;
use Gemini\Client;
use Illuminate\Contracts\Container\Container;

class ClientProvider extends AbstractServiceProvider
{
    public function register()
    {
    }

    public function boot(Container $container)
    {
        /** @var \Flarum\Settings\SettingsRepositoryInterface $settings */
        $settings = $this->container->make(SettingsRepositoryInterface::class);

        $apiKey = $settings->get('muhammedsaidckr-gemini.api_key');
        $organisation = $settings->get('muhammedsaidckr-gemini.openai-api-organisation');

        if ($apiKey) {
            $this->container->singleton(Client::class, fn() => Gemini::client($apiKey));
        }

        /** @var ExtensionManager $extensions */
        $extensions = $this->container->make(ExtensionManager::class);

        $this->container->singleton(Agent::class, fn() => $this->getAgent($settings, $extensions));
    }

    protected function getAgent(SettingsRepositoryInterface $settings, ExtensionManager $extensions): Agent
    {
        $userId = $settings->get('muhammedsaidckr-gemini.user_prompt') ?? 1;

        /** @var \Flarum\User\UserRepository $users */
        $users = $this->container->make(UserRepository::class);
        $user = $users->findOrFail($userId);

        /** @var Client $client */
        $client = $this->container->has(Client::class)
            ? $this->container->make(Client::class)
            : null;

        $agent = new Agent(
            user: $user,
            client: $client,
            model: $settings->get('muhammedsaidckr-gemini.model'),
        );


        return $agent;
    }

}
