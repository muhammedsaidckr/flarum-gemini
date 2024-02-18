import app from 'flarum/forum/app';
import {extend} from "flarum/common/extend";
import PostUser from "flarum/forum/components/PostUser";

app.initializers.add('muhammedsaidckr-gemini', () => {
  extend(PostUser.prototype, 'view', function (view) {
    const user = this.attrs.post.user();

    if (!user || app.forum.attribute('geminiUserPromptId') !== user.id()) return;

    view.children.push(
      <div className="UserPromo-badge">
        <div className="badge">{app.forum.attribute('geminiBadgeText')}</div>
      </div>
    );
  })
});
