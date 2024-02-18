import app from 'flarum/admin/app';
import GeminiSettings from "./components/GeminiSettings";

app.initializers.add('muhammedsaidckr-gemini', () => {
  console.log('Hello, admin!')
  app.extensionData
    .for('muhammedsaidckr-gemini')
    .registerPermission(
      {
        label: app.translator.trans('muhammedsaidckr-gemini.admin.permissions.use_gemini_assistant_label'),
        icon: 'fas fa-comment',
        permission: 'discussion.useGeminiAssistant',
        allowGuest: false,
      },
      'start'
    ).registerPage(GeminiSettings);
});
