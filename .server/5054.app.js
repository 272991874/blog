"use strict";
exports.id = 5054;
exports.ids = [5054];
exports.modules = {

/***/ 3068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3bcf0b9f",
  "path": "/dataStructure/",
  "title": "数据结构",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一、线性表",
      "slug": "一、线性表",
      "children": [
        {
          "level": 3,
          "title": "1.数组",
          "slug": "_1-数组",
          "children": []
        },
        {
          "level": 3,
          "title": "2.链表",
          "slug": "_2-链表",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "二、栈与队列",
      "slug": "二、栈与队列",
      "children": []
    },
    {
      "level": 2,
      "title": "三、树与二叉树",
      "slug": "三、树与二叉树",
      "children": [
        {
          "level": 3,
          "title": "1.树",
          "slug": "_1-树",
          "children": []
        },
        {
          "level": 3,
          "title": "2.二叉树基本概念",
          "slug": "_2-二叉树基本概念",
          "children": []
        },
        {
          "level": 3,
          "title": "3.二叉查找树",
          "slug": "_3-二叉查找树",
          "children": []
        },
        {
          "level": 3,
          "title": "4.平衡二叉树",
          "slug": "_4-平衡二叉树",
          "children": []
        },
        {
          "level": 3,
          "title": "5.红黑树",
          "slug": "_5-红黑树",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "四、图",
      "slug": "四、图",
      "children": []
    }
  ],
  "filePathRelative": "dataStructure/README.md",
  "git": {
    "contributors": [
      {
        "name": "yaomin",
        "email": "272991874@qq.com",
        "commits": 4
      }
    ]
  }
}


/***/ }),

/***/ 7943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dataStructure/index.html.vue?vue&type=template&id=042de1a8



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h1><h2 id="一、线性表" tabindex="-1"><a class="header-anchor" href="#一、线性表" aria-hidden="true">#</a> 一、线性表</h2><h3 id="_1-数组" tabindex="-1"><a class="header-anchor" href="#_1-数组" aria-hidden="true">#</a> 1.数组</h3><h3 id="_2-链表" tabindex="-1"><a class="header-anchor" href="#_2-链表" aria-hidden="true">#</a> 2.链表</h3><h2 id="二、栈与队列" tabindex="-1"><a class="header-anchor" href="#二、栈与队列" aria-hidden="true">#</a> 二、栈与队列</h2><h2 id="三、树与二叉树" tabindex="-1"><a class="header-anchor" href="#三、树与二叉树" aria-hidden="true">#</a> 三、树与二叉树</h2><h3 id="_1-树" tabindex="-1"><a class="header-anchor" href="#_1-树" aria-hidden="true">#</a> 1.树</h3><h3 id="_2-二叉树基本概念" tabindex="-1"><a class="header-anchor" href="#_2-二叉树基本概念" aria-hidden="true">#</a> 2.二叉树基本概念</h3><h3 id="_3-二叉查找树" tabindex="-1"><a class="header-anchor" href="#_3-二叉查找树" aria-hidden="true">#</a> 3.二叉查找树</h3><h3 id="_4-平衡二叉树" tabindex="-1"><a class="header-anchor" href="#_4-平衡二叉树" aria-hidden="true">#</a> 4.平衡二叉树</h3><h3 id="_5-红黑树" tabindex="-1"><a class="header-anchor" href="#_5-红黑树" aria-hidden="true">#</a> 5.红黑树</h3><h2 id="四、图" tabindex="-1"><a class="header-anchor" href="#四、图" aria-hidden="true">#</a> 四、图</h2><p>树存储结构 图存储结构</p><p>#字符串</p><p>#数组和广义表</p><p><a href="https://zhuanlan.zhihu.com/p/78094287" target="_blank" rel="noopener noreferrer">数组与链表`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 数据的逻辑结构主要分为两种：</p><ul><li><p>线性的：就是连成一条线的结构，本文要讲的数组和链表就属于这一类，另外还有 队列、栈 等</p></li><li><p>非线性的：顾名思义，数据之间的关系是非线性的，比如 堆、树、图 等</p></li><li><p>数组的访问时间复杂度是 O(1)</p></li><li><p>数组插入和删除的时间复杂度是O(n)</p></li></ul><p>链表的时间插入删除的时间复杂度为O(1)，不过这里指的是找到节点之后纯粹的插入或删除动作所需的时间复杂度。 如果当前还未定位到指定的节点，只是拿到链表的Head，这个时候要去删除此链表中某个固定内容的节点，则需要先查找到那个节点，这个查找的动作又是一个遍历动作了，这个遍历查找的时间复杂度却是O(n)，两者加起来总的时间复杂度其实是O(n)的。</p><p><a href="https://zhuanlan.zhihu.com/p/79435086" target="_blank" rel="noopener noreferrer">堆栈`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p><a href="https://zhuanlan.zhihu.com/p/81018602" target="_blank" rel="noopener noreferrer">队列`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p><a href="https://zhuanlan.zhihu.com/p/81952290" target="_blank" rel="noopener noreferrer">递归`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>http://c.biancheng.net/view/3361.html</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dataStructure/index.html.vue?vue&type=template&id=042de1a8

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dataStructure/index.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\dataStructure\\index.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const index_html = (script);

/***/ })

};
;
//# sourceMappingURL=5054.app.js.map