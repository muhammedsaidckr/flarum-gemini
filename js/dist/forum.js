(()=>{var e={n:o=>{var r=o&&o.__esModule?()=>o.default:()=>o;return e.d(r,{a:r}),r},d:(o,r)=>{for(var t in r)e.o(r,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:r[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};(()=>{"use strict";e.r(o);const r=flarum.core.compat["common/app"];e.n(r)().initializers.add("muhammedsaidckr/flarum-chatgpt",(function(){console.log("[muhammedsaidckr/flarum-chatgpt] Hello, forum and admin!")}));const t=flarum.core.compat["forum/app"];var a=e.n(t);const n=flarum.core.compat["common/extend"],i=flarum.core.compat["forum/components/PostUser"];var d=e.n(i);a().initializers.add("muhammedsaidckr-gemini",(function(){(0,n.extend)(d().prototype,"view",(function(e){var o=this.attrs.post.user();o&&a().forum.attribute("GeminiUserPromptId")===o.id()&&e.children.push(m("div",{className:"UserPromo-badge"},m("div",{className:"badge"},a().forum.attribute("GeminiBadgeText"))))}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map