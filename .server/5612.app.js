"use strict";
exports.id = 5612;
exports.ids = [5612];
exports.modules = {

/***/ 5612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _404)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/index.js
var lib = __webpack_require__(7621);
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/index.js + 9 modules
var composables = __webpack_require__(9014);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-30.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/layouts/404.vue?vue&type=script&setup=true&lang=ts





/* harmony default export */ const _404vue_type_script_setup_true_lang_ts = ((0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = (0,lib/* useRouteLocale */.I)();
    const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink");
      _push(`<div${(0,server_renderer_.ssrRenderAttrs)((0,external_vue_.mergeProps)({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${(0,server_renderer_.ssrInterpolate)(getMsg())}</blockquote>`);
      _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: (0,external_vue_.unref)(homeLink) }, {
        default: (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${(0,server_renderer_.ssrInterpolate)((0,external_vue_.unref)(homeText))}`);
          } else {
            return [
              (0,external_vue_.createTextVNode)((0,external_vue_.toDisplayString)((0,external_vue_.unref)(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/layouts/404.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/layouts/404.vue



/* harmony default export */ const _404 = (_404vue_type_script_setup_true_lang_ts);

/***/ })

};
;
//# sourceMappingURL=5612.app.js.map