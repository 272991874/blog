"use strict";
exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 8372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-471b0624",
  "path": "/devops/dm_ssh.html",
  "title": "服务器免密配置",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "devops/dm_ssh.md",
  "git": {
    "contributors": [
      {
        "name": "Amin.Yao",
        "email": "Amin.Yao@gaiaworks.cn",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 2321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dm_ssh_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/devops/dm_ssh.html.vue?vue&type=template&id=62642f8f

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="服务器免密配置" tabindex="-1"><a class="header-anchor" href="#服务器免密配置" aria-hidden="true">#</a> 服务器免密配置</h1><p>创建账号 1.1 创建tidb账号 sudo useradd -m -d /home/tidb tidb 1.2 修改账号密码 sudo passwd tidb 1.3 授予账号sudo权限 sudo visudo 在 sudo 文件尾部加上 tidb ALL=(ALL) NOPASSWD: ALL，为 tidb 用户设置免密使用 sudo。</p><p>1.4 切换为tidb账户 su - tidb</p><p>1.5 为 tidb 用户创建 SSH 密钥 ssh-keygen -t rsa</p><p>2.配置互信 2.1 在每个节点上添加tidb账户，并且声称ssh证书 2.2 切换为tidb账户 2.3 当登录端口为非22端口时，需要添加全局ssh命令配置 执行命令vi ~/.ssh/config，在文本中添加</p><p>Host server Hostname ip Port 10086 也可以单独只加入Port一行配置</p><p>2.4 使用ssh-copy-id 将证书添加到各个节点 执行 ssh-copy-id [ip]</p><p>当提示bad owner or permission，需要更新config文件权限</p><p>chown -R tidb:tidb ~/.ssh/config</p><p>如果还是提示再，执行sudo chmod 600 ~/.ssh/config</p><p>再次执行 ssh-copy-id [ip]</p><p>然后使用ssh [ip]验证，是否可以免密登录</p><p>2.5 在各个节点上重复上述操作</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/devops/dm_ssh.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\devops\\dm_ssh.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const dm_ssh_html = (script);

/***/ })

};
;
//# sourceMappingURL=873.app.js.map