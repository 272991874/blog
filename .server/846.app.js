"use strict";
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 8089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-07337fde",
  "path": "/java/java_jvm_dump.html",
  "title": "JVM问题排查",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一、生成dump文件",
      "slug": "一、生成dump文件",
      "children": [
        {
          "level": 3,
          "title": "出现OOM时自动生成堆dump",
          "slug": "出现oom时自动生成堆dump",
          "children": []
        },
        {
          "level": 3,
          "title": "人工通过执行指令，直接生成当前JVM的dump文件",
          "slug": "人工通过执行指令-直接生成当前jvm的dump文件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "二、分析dump",
      "slug": "二、分析dump",
      "children": []
    }
  ],
  "filePathRelative": "java/java_jvm_dump.md",
  "git": {
    "contributors": [
      {
        "name": "Amin.Yao",
        "email": "Amin.Yao@gaiaworks.cn",
        "commits": 2
      }
    ]
  }
}


/***/ }),

/***/ 8619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ java_jvm_dump_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/java/java_jvm_dump.html.vue?vue&type=template&id=7a12811c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="jvm问题排查" tabindex="-1"><a class="header-anchor" href="#jvm问题排查" aria-hidden="true">#</a> JVM问题排查</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#一、生成dump文件" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`一、生成dump文件`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("一、生成dump文件")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#出现oom时自动生成堆dump" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`出现OOM时自动生成堆dump`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("出现OOM时自动生成堆dump")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#人工通过执行指令-直接生成当前jvm的dump文件" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`人工通过执行指令，直接生成当前JVM的dump文件`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("人工通过执行指令，直接生成当前JVM的dump文件")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#二、分析dump" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`二、分析dump`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("二、分析dump")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></nav><h2 id="一、生成dump文件" tabindex="-1"><a class="header-anchor" href="#一、生成dump文件" aria-hidden="true">#</a> 一、生成dump文件</h2><h3 id="出现oom时自动生成堆dump" tabindex="-1"><a class="header-anchor" href="#出现oom时自动生成堆dump" aria-hidden="true">#</a> 出现OOM时自动生成堆dump</h3><p>JVM启动命令增加两个参数: -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/home/app/dumps/</p><h3 id="人工通过执行指令-直接生成当前jvm的dump文件" tabindex="-1"><a class="header-anchor" href="#人工通过执行指令-直接生成当前jvm的dump文件" aria-hidden="true">#</a> 人工通过执行指令，直接生成当前JVM的dump文件</h3><p>例：</p><ul><li><p>jmap -dump:format=b,file=/home/app/dump.hprof 21488，其中21488是JVM的当前进程号</p></li><li><p>内存或线程日志 jmap -dump:live,format=b,file=/home/myHeapDump.hprof 21488</p></li></ul><h2 id="二、分析dump" tabindex="-1"><a class="header-anchor" href="#二、分析dump" aria-hidden="true">#</a> 二、分析dump</h2><ol><li>打开JDK的 bin目录下jvisualvm.exe</li><li>在点击工具-&gt;插件里安装VisualVM-Classfish</li><li>导入.hprof文件</li></ol><p><a href="https://zhuanlan.zhihu.com/p/267381560" target="_blank" rel="noopener noreferrer">更多`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_jvm_dump.html.vue?vue&type=template&id=7a12811c

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_jvm_dump.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\java\\java_jvm_dump.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const java_jvm_dump_html = (script);

/***/ })

};
;
//# sourceMappingURL=846.app.js.map