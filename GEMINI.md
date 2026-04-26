# Flarum Gemini Extension

This project is a Flarum extension that integrates Google's Gemini AI to provide intelligent conversation capabilities.

## Project Overview

- **Purpose:** Enables AI-powered conversation capabilities within Flarum by automatically replying to newly started discussions and responding when mentioned.
- **Backend:** PHP (Flarum extension architecture).
- **Frontend:** TypeScript / React (Flarum frontend architecture).
- **Core AI:** Google Gemini (supporting 3.1 series).

## Key Features

- **Automatic Discussion Replies:** Responds to new discussions based on the first post.
- **Reply on Mention:** Responds when the AI user is mentioned in a post.
- **Contextual Continuity:** Maintains conversation context by including the last few posts in the prompt.
- **Customizable Prompts:** Supports placeholders like `[title]`, `[author_name]`, and `[forum_title]`.
- **Tag Filtering:** Can be restricted to specific forum tags.

## Building and Running

### Backend
- **Install dependencies:** `composer install`
- **Enable extension:** `php flarum extension:enable muhammedsaidckr-gemini`
- **Run migrations:** `php flarum migrate`
- **Clear cache:** `php flarum cache:clear`

### Frontend (in `js/` directory)
- **Install dependencies:** `npm install`
- **Development build:** `npm run dev` (watches for changes)
- **Production build:** `npm run build`

### Testing
- **Run all tests:** `composer test`
- **Unit tests:** `composer test:unit`
- **Integration tests:** `composer test:integration` (requires setup: `composer test:setup`)

## Development Conventions

- **PHP:** PSR-4 autoloading (`Msc\Gemini\`). Follows standard Flarum extension patterns.
- **Events:** Listens for `Started` (new discussions) and `Posted` (mentions).
- **Queue:** Uses Flarum's queue system for non-blocking AI response generation.
- **Dependency Injection:** `Agent` is managed via `ClientProvider` and `BindingsProvider`.

## Key Files

- `extend.php`: The main entry point for the Flarum extension.
- `src/Agent.php`: Core logic for Gemini interaction and context building.
- `src/Listener/ReplyToPost.php`: Handles new discussion replies.
- `src/Listener/ReplyToMention.php`: Handles mention-based replies.
- `js/src/admin/components/GeminiSettings.tsx`: Admin configuration UI.
