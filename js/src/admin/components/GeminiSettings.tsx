import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import type Mithril from 'mithril';

export default class GeminiSettings extends ExtensionPage {
  oninit(vnode: Mithril.Vnode) {
    super.oninit(vnode);
    this.loading = false;
  }

  content() {
    return (
      <div className="ExtensionPage-settings">
        <div className="container">
          <div className="Form">
            {this.buildSettingComponent({
              setting: 'muhammedsaidckr-gemini.api_key',
              type: 'text',
              label: app.translator.trans('muhammedsaidckr-gemini.admin.settings.api_key_label'),
              placeholder: '...',
            })}
            {this.buildSettingComponent({
              setting: 'muhammedsaidckr-gemini.model',
              type: 'dropdown',
              options: {
                'models/gemini-3.1-ultra': 'gemini-3.1-ultra',
                'models/gemini-3.1-pro': 'gemini-3.1-pro',
                'models/gemini-3.1-flash': 'gemini-3.1-flash',
                'models/gemini-3.1-flash-lite': 'gemini-3.1-flash-lite',
                'models/gemini-1.5-pro': 'gemini-1.5-pro',
                'models/gemini-1.5-flash': 'gemini-1.5-flash',
                'models/gemini-pro': 'gemini-pro',
              },
              label: app.translator.trans('muhammedsaidckr-gemini.admin.settings.model_label'),
            })}
            {this.buildSettingComponent({
              setting: 'muhammedsaidckr-gemini.role',
              type: 'text',
              label: app.translator.trans('muhammedsaidckr-gemini.admin.settings.role_label'),
              help: app.translator.trans('muhammedsaidckr-gemini.admin.settings.role_help'),
            })}
            {/* new settings for prompt */}
            {this.buildSettingComponent({
              setting: 'muhammedsaidckr-gemini.prompt',
              type: 'text',
              label: app.translator.trans('muhammedsaidckr-gemini.admin.settings.prompt_label'),
              help: app.translator.trans('muhammedsaidckr-gemini.admin.settings.prompt_help'),
            })}
            {this.buildSettingComponent({
              setting: 'muhammedsaidckr-gemini.user_prompt',
              type: 'text',
              label: app.translator.trans('muhammedsaidckr-gemini.admin.settings.user_prompt_label'),
              help: app.translator.trans('muhammedsaidckr-gemini.admin.settings.user_prompt_help'),
            })}
            {this.buildSettingComponent({
              setting: 'muhammedsaidckr-gemini.user_prompt_badge_text',
              type: 'text',
              label: app.translator.trans('muhammedsaidckr-gemini.admin.settings.user_prompt_badge_label'),
              help: app.translator.trans('muhammedsaidckr-gemini.admin.settings.user_prompt_badge_help'),
            })}
            {this.buildSettingComponent({
              setting: 'muhammedsaidckr-gemini.enable_on_discussion_started',
              type: 'boolean',
              label: app.translator.trans('muhammedsaidckr-gemini.admin.settings.enable_on_discussion_started_label'),
              help: app.translator.trans('muhammedsaidckr-gemini.admin.settings.enable_on_discussion_started_help'),
            })}
            {this.buildSettingComponent({
              type: 'flarum-tags.select-tags',
              setting: 'muhammedsaidckr-gemini.enabled-tags',
              label: app.translator.trans('muhammedsaidckr-gemini.admin.settings.enabled_tags_label'),
              help: app.translator.trans('muhammedsaidckr-gemini.admin.settings.enabled_tags_help'),
              options: {
                requireParentTag: false,
                limits: {
                  max: {
                    secondary: 0,
                  },
                },
              },
            })}
            <div className="Form-group">{this.submitButton()}</div>
          </div>
        </div>
      </div>
    );
  }
}
