"use strict";
exports.id = 1386;
exports.ids = [1386];
exports.modules = {

/***/ 8209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-eb3db4ee",
  "path": "/soft/nginx_tcp.html",
  "title": "Nginx 通过域名代理tcp",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1.需要 stream 模块",
      "slug": "_1-需要-stream-模块",
      "children": []
    },
    {
      "level": 2,
      "title": "2.stream 是一个单独的模块",
      "slug": "_2-stream-是一个单独的模块",
      "children": []
    },
    {
      "level": 2,
      "title": "修改nginx.conf，添加如下配置即可",
      "slug": "修改nginx-conf-添加如下配置即可",
      "children": []
    }
  ],
  "filePathRelative": "soft/nginx_tcp.md",
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

/***/ 7156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ nginx_tcp_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/soft/nginx_tcp.html.vue?vue&type=template&id=3d154e02



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="nginx-通过域名代理tcp" tabindex="-1"><a class="header-anchor" href="#nginx-通过域名代理tcp" aria-hidden="true">#</a> Nginx 通过域名代理tcp</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_1-需要-stream-模块" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`1.需要 stream 模块`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("1.需要 stream 模块")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_2-stream-是一个单独的模块" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`2.stream 是一个单独的模块`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("2.stream 是一个单独的模块")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#修改nginx-conf-添加如下配置即可" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`修改nginx.conf，添加如下配置即可`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("修改nginx.conf，添加如下配置即可")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></nav><h2 id="_1-需要-stream-模块" tabindex="-1"><a class="header-anchor" href="#_1-需要-stream-模块" aria-hidden="true">#</a> 1.需要 stream 模块</h2><p>nginx 添加stream 模块即可</p><h2 id="_2-stream-是一个单独的模块" tabindex="-1"><a class="header-anchor" href="#_2-stream-是一个单独的模块" aria-hidden="true">#</a> 2.stream 是一个单独的模块</h2><p>不需要放在nginx-http配置中，放在nginx.conf最后即可</p><h2 id="修改nginx-conf-添加如下配置即可" tabindex="-1"><a class="header-anchor" href="#修改nginx-conf-添加如下配置即可" aria-hidden="true">#</a> 修改nginx.conf，添加如下配置即可</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>stream {
    map \$ssl_preread_server_name \$name {
        mysql.test.com mysql;
        redis.test.com redis;
        default https_default_backend;
    }
    upstream mysql{
        server 10.0.0.3:3306;
    }
    upstream redis{
        server 10.0.0.4:6379;
    }
    upstream https_default_backend {
        server 127.0.0.1:443;
    }
    server {
        listen 10.0.0.1:443;
        proxy_pass \$name;
        ssl_preread on;
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>需要把map中参数变成域名</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/nginx_tcp.html.vue?vue&type=template&id=3d154e02

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/nginx_tcp.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\soft\\nginx_tcp.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const nginx_tcp_html = (script);

/***/ })

};
;
//# sourceMappingURL=1386.app.js.map