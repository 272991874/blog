"use strict";
exports.id = 7871;
exports.ids = [7871];
exports.modules = {

/***/ 4463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-526617df",
  "path": "/algorithm/Raft_base.html",
  "title": "Raft协议",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "algorithm/Raft_base.md",
  "git": {
    "contributors": [
      {
        "name": "yaomin",
        "email": "272991874@qq.com",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 3433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Raft_base_html)
});

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/algorithm/Raft_base.html.vue?vue&type=template&id=6a6df40b


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="raft协议" tabindex="-1"><a class="header-anchor" href="#raft协议" aria-hidden="true">#</a> Raft协议</h1><nav class="table-of-contents"><ul></ul></nav><p>raft协议中，一个节点任一时刻处于以下三个状态之一：</p><ul><li>leader</li><li>follower</li><li>candidate</li></ul><img${(0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/algorithm/raft2021092701.png'))} alt="raft2021092701.png"><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>可以看出所有节点启动时都是follower状态；在一段时间内如果没有收到来自leader的心跳，从follower切换到candidate，发起选举；如果收到majority的造成票（含自己的一票）则切换到leader状态；如果发现其他节点比自己更新，则主动切换到follower。</p><p>总之，系统中最多只有一个leader，如果在一段时间里发现没有leader，则大家通过选举-投票选出leader。leader会不停的给follower发心跳消息，表明自己的存活状态。如果leader故障，那么follower会转换成candidate，重新选出leader。</p></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/algorithm/Raft_base.html.vue?vue&type=template&id=6a6df40b

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/algorithm/Raft_base.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\algorithm\\Raft_base.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const Raft_base_html = (script);

/***/ })

};
;
//# sourceMappingURL=7871.app.js.map