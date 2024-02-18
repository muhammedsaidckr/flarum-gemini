/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/components/GeminiSettings.tsx":
/*!*************************************************!*\
  !*** ./src/admin/components/GeminiSettings.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GeminiSettings)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);



var GeminiSettings = /*#__PURE__*/function (_ExtensionPage) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GeminiSettings, _ExtensionPage);
  function GeminiSettings() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  var _proto = GeminiSettings.prototype;
  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);
    this.loading = false;
  };
  _proto.content = function content() {
    return m("div", {
      className: "ExtensionPage-settings"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "Form"
    }, this.buildSettingComponent({
      setting: 'muhammedsaidckr-gemini.api_key',
      type: 'text',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('muhammedsaidckr-gemini.admin.settings.api_key_label'),
      placeholder: '...'
    }), this.buildSettingComponent({
      setting: 'muhammedsaidckr-gemini.model',
      type: 'dropdown',
      options: {
        'gemini-pro': 'gemini-pro'
      },
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('muhammedsaidckr-gemini.admin.settings.model_label')
    }), this.buildSettingComponent({
      setting: 'muhammedsaidckr-gemini.max_tokens',
      type: 'number',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('muhammedsaidckr-gemini.admin.settings.max_tokens_label'),
      "default": 100
    }), this.buildSettingComponent({
      setting: 'muhammedsaidckr-gemini.user_prompt',
      type: 'text',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('muhammedsaidckr-gemini.admin.settings.user_prompt_label'),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('muhammedsaidckr-gemini.admin.settings.user_prompt_help')
    }), this.buildSettingComponent({
      setting: 'muhammedsaidckr-gemini.user_prompt_badge_text',
      type: 'text',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('muhammedsaidckr-gemini.admin.settings.user_prompt_badge_label'),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('muhammedsaidckr-gemini.admin.settings.user_prompt_badge_help')
    }), this.buildSettingComponent({
      setting: 'muhammedsaidckr-gemini.enable_on_discussion_started',
      type: 'boolean',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('muhammedsaidckr-gemini.admin.settings.enable_on_discussion_started_label'),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('muhammedsaidckr-gemini.admin.settings.enable_on_discussion_started_help')
    }), this.buildSettingComponent({
      type: 'flarum-tags.select-tags',
      setting: 'muhammedsaidckr-gemini.enabled-tags',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('muhammedsaidckr-gemini.admin.settings.enabled_tags_label'),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('muhammedsaidckr-gemini.admin.settings.enabled_tags_help'),
      options: {
        requireParentTag: false,
        limits: {
          max: {
            secondary: 0
          }
        }
      }
    }), m("div", {
      className: "Form-group"
    }, this.submitButton()))));
  };
  return GeminiSettings;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GeminiSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/GeminiSettings */ "./src/admin/components/GeminiSettings.tsx");


flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('muhammedsaidckr-gemini', function () {
  console.log('Hello, admin!');
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('muhammedsaidckr-gemini').registerPermission({
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('muhammedsaidckr-gemini.admin.permissions.use_gemini_assistant_label'),
    icon: 'fas fa-comment',
    permission: 'discussion.useGeminiAssistant',
    allowGuest: false
  }, 'start').registerPage(_components_GeminiSettings__WEBPACK_IMPORTED_MODULE_1__["default"]);
});

/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('muhammedsaidckr/flarum-chatgpt', function () {
  console.log('[muhammedsaidckr/flarum-chatgpt] Hello, forum and admin!');
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map