import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import PostUser from 'flarum/forum/components/PostUser';

app.initializers.add('muhammedsaidckr-gemini', () => {
  extend(PostUser.prototype, 'view', function (this: PostUser, view: any) {
    const post = (this.attrs as any).post;
    const user = post ? post.user() : null;

    if (!user || app.forum.attribute('GeminiUserPromptId') !== user.id()) return;

    if (view && view.children && Array.isArray(view.children)) {
      view.children.push(
        <div className="UserPromo-badge">
          <div className="badge">{app.forum.attribute('GeminiBadgeText')}</div>
        </div>
      );
    }
  });
});
