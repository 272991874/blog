"use strict";
exports.id = 836;
exports.ids = [836];
exports.modules = {

/***/ 6522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1a716641",
  "path": "/soft/mysql_linux_remove.html",
  "title": "Linux下mysql的彻底卸载",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1、查看mysql的安装情况",
      "slug": "_1、查看mysql的安装情况",
      "children": []
    },
    {
      "level": 2,
      "title": "2、删除上图安装的软件(停止mysql服务)",
      "slug": "_2、删除上图安装的软件-停止mysql服务",
      "children": []
    },
    {
      "level": 2,
      "title": "3、都删除成功之后，查找相关的mysql的文件",
      "slug": "_3、都删除成功之后-查找相关的mysql的文件",
      "children": []
    },
    {
      "level": 2,
      "title": "4、删除全部文件",
      "slug": "_4、删除全部文件",
      "children": []
    },
    {
      "level": 2,
      "title": "5、再次执行命令",
      "slug": "_5、再次执行命令",
      "children": []
    }
  ],
  "filePathRelative": "soft/mysql_linux_remove.md",
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

/***/ 148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mysql_linux_remove_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/soft/mysql_linux_remove.html.vue?vue&type=template&id=482b0efe



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="linux下mysql的彻底卸载" tabindex="-1"><a class="header-anchor" href="#linux下mysql的彻底卸载" aria-hidden="true">#</a> Linux下mysql的彻底卸载</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_1、查看mysql的安装情况" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`1、查看mysql的安装情况`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("1、查看mysql的安装情况")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_2、删除上图安装的软件-停止mysql服务" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`2、删除上图安装的软件(停止mysql服务)`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("2、删除上图安装的软件(停止mysql服务)")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_3、都删除成功之后-查找相关的mysql的文件" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`3、都删除成功之后，查找相关的mysql的文件`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("3、都删除成功之后，查找相关的mysql的文件")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_4、删除全部文件" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`4、删除全部文件`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("4、删除全部文件")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_5、再次执行命令" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`5、再次执行命令`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("5、再次执行命令")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></nav><h2 id="_1、查看mysql的安装情况" tabindex="-1"><a class="header-anchor" href="#_1、查看mysql的安装情况" aria-hidden="true">#</a> 1、查看mysql的安装情况</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -qa <span class="token operator">|</span> <span class="token function">grep</span> -i mysql


<span class="token punctuation">[</span>root@iZbp17xtpz52b5n1iuos0sZ java-test<span class="token punctuation">]</span><span class="token comment"># rpm -qa | grep -i mysql</span>
bt-mysql57-5.7.34-1.el7.x86_64
<span class="token punctuation">[</span>root@iZbp17xtpz52b5n1iuos0sZ java-test<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_2、删除上图安装的软件-停止mysql服务" tabindex="-1"><a class="header-anchor" href="#_2、删除上图安装的软件-停止mysql服务" aria-hidden="true">#</a> 2、删除上图安装的软件(停止mysql服务)</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -ev bt-mysql57-5.7.34-1.el7.x86_64 --nodeps

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_3、都删除成功之后-查找相关的mysql的文件" tabindex="-1"><a class="header-anchor" href="#_3、都删除成功之后-查找相关的mysql的文件" aria-hidden="true">#</a> 3、都删除成功之后，查找相关的mysql的文件</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> / -name mysql


<span class="token punctuation">[</span>root@iZbp17xtpz52b5n1iuos0sZ java-test<span class="token punctuation">]</span><span class="token comment"># find / -name mysql</span>
/www/server/panel/pyenv/lib/python3.7/site-packages/sqlalchemy/dialects/mysql
/www/server/mysql
/www/server/mysql/bin/mysql
/www/server/mysql/include/mysql
/www/server/data/mysql
/var/spool/mail/mysql
/run/lock/subsys/mysql
/etc/selinux/targeted/active/modules/100/mysql
/usr/lib64/mysql
/usr/share/mysql
/usr/bin/mysql
/usr/include/mysql
<span class="token punctuation">[</span>root@iZbp17xtpz52b5n1iuos0sZ java-test<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_4、删除全部文件" tabindex="-1"><a class="header-anchor" href="#_4、删除全部文件" aria-hidden="true">#</a> 4、删除全部文件</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> -rf /www/server/panel/pyenv/lib/python3.7/site-packages/sqlalchemy/dialects/mysql
<span class="token function">rm</span> -rf /www/server/mysql
<span class="token function">rm</span> -rf /www/server/mysql/bin/mysql
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_5、再次执行命令" tabindex="-1"><a class="header-anchor" href="#_5、再次执行命令" aria-hidden="true">#</a> 5、再次执行命令</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -qa <span class="token operator">|</span> <span class="token function">grep</span> -i mysql
<span class="token comment"># 如果没有显式则表示卸载完成</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/mysql_linux_remove.html.vue?vue&type=template&id=482b0efe

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/mysql_linux_remove.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\soft\\mysql_linux_remove.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const mysql_linux_remove_html = (script);

/***/ })

};
;
//# sourceMappingURL=836.app.js.map