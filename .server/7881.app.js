"use strict";
exports.id = 7881;
exports.ids = [7881];
exports.modules = {

/***/ 7155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-39ca6000",
  "path": "/dataStructure/linear_list.html",
  "title": "线性表",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "什么是线性表？",
      "slug": "什么是线性表",
      "children": []
    },
    {
      "level": 2,
      "title": "原理",
      "slug": "原理",
      "children": []
    }
  ],
  "filePathRelative": "dataStructure/linear_list.md",
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

/***/ 5956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ linear_list_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dataStructure/linear_list.html.vue?vue&type=template&id=1344fe69



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="线性表" tabindex="-1"><a class="header-anchor" href="#线性表" aria-hidden="true">#</a> 线性表</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#什么是线性表" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`什么是线性表？`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("什么是线性表？")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#原理" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`原理`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("原理")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></nav><h2 id="什么是线性表" tabindex="-1"><a class="header-anchor" href="#什么是线性表" aria-hidden="true">#</a> 什么是线性表？</h2><blockquote><p>线性表，数据结构中最简单的一种存储结构，专门用于存储逻辑关系为&quot;一对一&quot;的数据。</p></blockquote><blockquote><p>线性表，基于数据在实际物理空间中的存储状态，又可细分为顺序表（顺序存储结构）和链表（链式存储结构）。</p></blockquote><p>线性表，全名为线性存储结构。使用线性表存储数据的方式可以这样理解，即“把所有数据用一根线儿串起来，再存储到物理空间中”。</p><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>[1,2,3,4,5]这是一组具有“一对一”关系的数据，我们接下来采用线性表将其储存到物理空间中。</p><p>首先，用“一根线儿”把它们按照顺序“串”起来，如图所示：</p><img${
    (0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/dataStructure/linear_list_1.png'))
  } alt="linear_list_1"><p>上图中，左侧是“串”起来的数据，右侧是空闲的物理空间。把这“一串儿”数据放置到物理空间，我们可以选择以下两种方式，如下图所示。</p><img${
    (0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/dataStructure/linear_list_2.png'))
  } alt="linear_list_2"><blockquote><p>图 3a) 是多数人想到的存储方式，而图 3b) 却少有人想到。我们知道，数据存储的成功与否，取决于是否能将数据完整地复原成它本来的样子。如果把图 3a) 和图 3b) 线的一头扯起，你会发现数据的位置依旧没有发生改变（和图 1 一样）。因此可以认定，这两种存储方式都是正确的。</p></blockquote><p>将具有“一对一”关系的数据“线性”地存储到物理空间中，这种存储结构就称为线性存储结构（简称线性表）。</p><p>使用线性表存储的数据，如同向数组中存储数据那样，要求数据类型必须一致，也就是说，线性表存储的数据，要么全部都是整形，要么全部都是字符串。一半是整形，另一半是字符串的一组数据无法使用线性表存储。</p><ul><li>顺序存储结构和链式存储结构</li></ul><blockquote><p>图 3 中我们可以看出，线性表存储数据可细分为以下 2 种：</p><ol><li>如图 3a) 所示，将数据依次存储在连续的整块物理空间中，这种存储结构称为顺序存储结构（简称顺序表）；</li><li>如图 3b) 所示，数据分散的存储在物理空间中，通过一根线保存着它们之间的逻辑关系，这种存储结构称为链式存储结构（简称链表）；</li></ol></blockquote><p>也就是说，线性表存储结构可细分为顺序存储结构和链式存储结构。</p><ul><li>前驱和后继</li></ul><blockquote><p>数据结构中，一组数据中的每个个体被称为“数据元素”（简称“元素”）。例如，图 1 显示的这组数据，其中 1、2、3、4 和 5 都是这组数据中的一个元素。</p></blockquote><p>另外，对于具有“一对一”逻辑关系的数据，我们一直在用“某一元素的左侧（前边）或右侧（后边）”这样不专业的词，其实线性表中有更准确的术语：</p><ul><li>某一元素的左侧相邻元素称为“直接前驱”，位于此元素左侧的所有元素都统称为“前驱元素”；</li><li>某一元素的右侧相邻元素称为“直接后继”，位于此元素右侧的所有元素都统称为“后继元素”；</li></ul><p>以图 1 数据中的元素 3 来说，它的直接前驱是 2 ，此元素的前驱元素有 2 个，分别是 1 和 2；同理，此元素的直接后继是 4 ，后继元素也有 2 个，分别是 4 和 5。如图 4 所示：</p><img${
    (0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/dataStructure/linear_list_3.png'))
  } alt="linear_list_3"><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dataStructure/linear_list.html.vue?vue&type=template&id=1344fe69

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dataStructure/linear_list.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\dataStructure\\linear_list.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const linear_list_html = (script);

/***/ })

};
;
//# sourceMappingURL=7881.app.js.map