"use strict";
exports.id = 2962;
exports.ids = [2962];
exports.modules = {

/***/ 2570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-46d25bbf",
  "path": "/java/java_string.html",
  "title": "String 属于基础的数据类型吗？",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "基础数据类型和引用数据类型",
      "slug": "基础数据类型和引用数据类型",
      "children": []
    },
    {
      "level": 2,
      "title": "相关知识",
      "slug": "相关知识",
      "children": []
    },
    {
      "level": 2,
      "title": "静态区",
      "slug": "静态区",
      "children": []
    },
    {
      "level": 2,
      "title": "堆区",
      "slug": "堆区",
      "children": []
    },
    {
      "level": 2,
      "title": "栈区",
      "slug": "栈区",
      "children": []
    },
    {
      "level": 2,
      "title": "文字常量区",
      "slug": "文字常量区",
      "children": []
    }
  ],
  "filePathRelative": "java/java_string.md",
  "git": {
    "contributors": [
      {
        "name": "yaomin",
        "email": "272991874@qq.com",
        "commits": 2
      }
    ]
  }
}


/***/ }),

/***/ 1148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ java_string_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/java/java_string.html.vue?vue&type=template&id=0da814ce



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="string-属于基础的数据类型吗" tabindex="-1"><a class="header-anchor" href="#string-属于基础的数据类型吗" aria-hidden="true">#</a> String 属于基础的数据类型吗？</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#基础数据类型和引用数据类型" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`基础数据类型和引用数据类型`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("基础数据类型和引用数据类型")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#相关知识" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`相关知识`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("相关知识")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#静态区" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`静态区`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("静态区")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#堆区" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`堆区`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("堆区")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#栈区" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`栈区`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("栈区")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#文字常量区" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`文字常量区`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("文字常量区")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></nav><h2 id="基础数据类型和引用数据类型" tabindex="-1"><a class="header-anchor" href="#基础数据类型和引用数据类型" aria-hidden="true">#</a> 基础数据类型和引用数据类型</h2><blockquote><ul><li>基础数据类型表示简单的数字或字符</li></ul></blockquote><p>byte：在内存中占8位(bit)，即1个字节，取值范围-128~127，默认值0<br> short：短整型，在内存中占16位，即2个字节，取值范围-32768~32767，默认值0<br> int：在内在中占32位，即4个字节，取值范围-2147483648~2147483647，默认值0<br> long：在内存中占64位，即8个字节-2^63~2^63-1，默认值0L<br> float：在内存中占32位，即4个字节，用于存储带小数点的数字（与double的区别在于float类型有效小数点只有6~7位），默认值0<br> double：在内存中占64位，即8个字节，默认值0<br> char：在内存中占占16位，即2个字节，取值范围0~65535，默认值为空<br> boolean：占1个字节，用于判断真或假（仅有两个值，即true、false），默认值false</p><blockquote><ul><li>引用数据类型</li></ul></blockquote><p>String 类 接口类型 数组类型 枚举类型 注解类型</p><img${(0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/java-datatype.png'))} alt="datatype"><h2 id="相关知识" tabindex="-1"><a class="header-anchor" href="#相关知识" aria-hidden="true">#</a> 相关知识</h2><h2 id="静态区" tabindex="-1"><a class="header-anchor" href="#静态区" aria-hidden="true">#</a> 静态区</h2><p>保存自动全局变量和 static 变量（包括 static 全局和局部变量）。静态区的内容在总个程序的生命周期内都存在，由编译器在编译的时候分配。</p><h2 id="堆区" tabindex="-1"><a class="header-anchor" href="#堆区" aria-hidden="true">#</a> 堆区</h2><p>一般由程序员分配释放，由 malloc 系列函数或 new 操作符分配的内存，其生命周期由 free 或 delete 决定。在没有释放之前一直存在，直到程序结束，由OS释放。其特点是使用灵活，空间比较大，但容易出错</p><h2 id="栈区" tabindex="-1"><a class="header-anchor" href="#栈区" aria-hidden="true">#</a> 栈区</h2><p>由编译器自动分配释放，保存局部变量，栈上的内容只在函数的范围内存在，当函数运行结束，这些内容也会自动被销毁，其特点是效率高，但空间大小有限</p><h2 id="文字常量区" tabindex="-1"><a class="header-anchor" href="#文字常量区" aria-hidden="true">#</a> 文字常量区</h2><p>常量字符串就是放在这里的。 程序结束后由系统释放。</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_string.html.vue?vue&type=template&id=0da814ce

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_string.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\java\\java_string.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const java_string_html = (script);

/***/ })

};
;
//# sourceMappingURL=2962.app.js.map