"use strict";
exports.id = 8156;
exports.ids = [8156];
exports.modules = {

/***/ 2399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7137c354",
  "path": "/java/java_volatile.html",
  "title": "volatile关键字",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "线程可见性",
      "slug": "线程可见性",
      "children": [
        {
          "level": 3,
          "title": "什么是线程间的可见性？",
          "slug": "什么是线程间的可见性",
          "children": []
        },
        {
          "level": 3,
          "title": "什么是共享变量？",
          "slug": "什么是共享变量",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "禁止指令重排序",
      "slug": "禁止指令重排序",
      "children": []
    },
    {
      "level": 2,
      "title": "禁止指令重排序volatile与synchrinized实现",
      "slug": "禁止指令重排序volatile与synchrinized实现",
      "children": [
        {
          "level": 3,
          "title": "volatile实现细节",
          "slug": "volatile实现细节",
          "children": []
        },
        {
          "level": 3,
          "title": "synchrinized实现细节",
          "slug": "synchrinized实现细节",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "java/java_volatile.md",
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

/***/ 1229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ java_volatile_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/java/java_volatile.html.vue?vue&type=template&id=be4b4470



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="volatile关键字" tabindex="-1"><a class="header-anchor" href="#volatile关键字" aria-hidden="true">#</a> volatile关键字</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#线程可见性" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`线程可见性`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("线程可见性")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#什么是线程间的可见性" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`什么是线程间的可见性？`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("什么是线程间的可见性？")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#什么是共享变量" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`什么是共享变量？`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("什么是共享变量？")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#禁止指令重排序" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`禁止指令重排序`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("禁止指令重排序")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#禁止指令重排序volatile与synchrinized实现" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`禁止指令重排序volatile与synchrinized实现`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("禁止指令重排序volatile与synchrinized实现")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#volatile实现细节" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`volatile实现细节`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("volatile实现细节")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#synchrinized实现细节" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`synchrinized实现细节`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("synchrinized实现细节")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul></nav><p>volatile用来修饰变量，使变量保持线程的可见性。</p><h2 id="线程可见性" tabindex="-1"><a class="header-anchor" href="#线程可见性" aria-hidden="true">#</a> 线程可见性</h2><h3 id="什么是线程间的可见性" tabindex="-1"><a class="header-anchor" href="#什么是线程间的可见性" aria-hidden="true">#</a> 什么是线程间的可见性？</h3><p>一个线程对共享变量值的修改，能够及时的被其他线程看到。</p><h3 id="什么是共享变量" tabindex="-1"><a class="header-anchor" href="#什么是共享变量" aria-hidden="true">#</a> 什么是共享变量？</h3><p>如果一个变量在多个线程的工作内存中都存在副本，那么这个变量就是这几个线程的共享变量。</p><p>volatile对线程可见性的实现使用了CPU的缓存一致性协议（其中最出名的为Intel的MESI协议）来确保线程可见性</p><h2 id="禁止指令重排序" tabindex="-1"><a class="header-anchor" href="#禁止指令重排序" aria-hidden="true">#</a> 禁止指令重排序</h2><p>volatile通过加入内存屏障来禁止指令的重排序，loadfence/storefence结合使用实现 DCL(Double Check Lock 双重检查锁定)单例需要加volatile，否则在对象创建的半初始化状态的时候可能发生指令重排序</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    假设o中有个int类型参数a，new o的时候将a赋值为8

    Objtec o=null; //1
    //int类型初始值为0，即a=0
    半初始化o.a=8; //2
    o=半初始化o; //3


    当发生了指令重排序后

    Objtec o=null; //1
    //int类型初始值为0，即a=0
    o=半初始化o; //3
    半初始化o.a=8; //2

    即2与3发生了指令重排序，导致破坏了1多线程程序的语义
    具体半初始化见JVM

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="禁止指令重排序volatile与synchrinized实现" tabindex="-1"><a class="header-anchor" href="#禁止指令重排序volatile与synchrinized实现" aria-hidden="true">#</a> 禁止指令重排序volatile与synchrinized实现</h2><h3 id="volatile实现细节" tabindex="-1"><a class="header-anchor" href="#volatile实现细节" aria-hidden="true">#</a> volatile实现细节</h3><h4 id="_1-字节码层面" tabindex="-1"><a class="header-anchor" href="#_1-字节码层面" aria-hidden="true">#</a> 1. 字节码层面</h4><ul><li>字节码中会将Fields中的参数添加Access flags：0x0040 ACC_VOLATILE</li></ul><h4 id="_2-jvm层面" tabindex="-1"><a class="header-anchor" href="#_2-jvm层面" aria-hidden="true">#</a> 2.JVM层面</h4><ul><li>他对所有内存volatile写操作前加了StoreStoreBarrier，后面加了一个StoreLoadBarrier</li><li>对所有读操作前加上了LoadLoadBarrier,后面加了一个LoadStoreBarrier</li></ul><h4 id="_3-os和硬件层面" tabindex="-1"><a class="header-anchor" href="#_3-os和硬件层面" aria-hidden="true">#</a> 3.OS和硬件层面</h4><ul><li>使用hsdis观察汇编码 hsdis – Hotspot Dis Assembler 虚拟机的反汇编</li></ul><h3 id="synchrinized实现细节" tabindex="-1"><a class="header-anchor" href="#synchrinized实现细节" aria-hidden="true">#</a> synchrinized实现细节</h3><h4 id="_1-字节码层面-1" tabindex="-1"><a class="header-anchor" href="#_1-字节码层面-1" aria-hidden="true">#</a> 1.字节码层面：</h4><p>方法添加0x0020 ACC_SYNCHRONIZED标志 汇编添加一对monitorenter与monitorexit 由于遇到异常也会自动退出，所有有两条exit</p><h4 id="_2-jvm层面-1" tabindex="-1"><a class="header-anchor" href="#_2-jvm层面-1" aria-hidden="true">#</a> 2.JVM层面：</h4><p>C和C++调用了操作系统提供的同步机制</p><h4 id="_3-os和硬件层面-1" tabindex="-1"><a class="header-anchor" href="#_3-os和硬件层面-1" aria-hidden="true">#</a> 3.OS和硬件层面</h4><p>X86：lock comxchg xxxx</p><div class="custom-container tip"><p class="custom-container-title">lock指令 xxx执行 xxx指令的时候保证对内存区域加锁</p></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_volatile.html.vue?vue&type=template&id=be4b4470

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_volatile.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\java\\java_volatile.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const java_volatile_html = (script);

/***/ })

};
;
//# sourceMappingURL=8156.app.js.map