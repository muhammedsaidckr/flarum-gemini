import app from "flarum/admin/app";
import ExtensionPage, {ExtensionPageAttrs} from 'flarum/admin/components/ExtensionPage';

export default class GeminiSettings extends ExtensionPage {
  oninit(vnode) {
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
                'gemini-pro': 'gemini-pro'
              },
              label: app.translator.trans('muhammedsaidckr-gemini.admin.settings.model_label'),
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
