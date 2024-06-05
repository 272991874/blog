"use strict";
exports.id = 4448;
exports.ids = [4448];
exports.modules = {

/***/ 1459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3ac60450",
  "path": "/algorithm/recursion.html",
  "title": "递归",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "商品分类递归",
      "slug": "商品分类递归",
      "children": []
    }
  ],
  "filePathRelative": "algorithm/recursion.md",
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

/***/ 8962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ recursion_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/algorithm/recursion.html.vue?vue&type=template&id=02e1cbe1

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h1><h2 id="商品分类递归" tabindex="-1"><a class="header-anchor" href="#商品分类递归" aria-hidden="true">#</a> 商品分类递归</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 递归算法,算出子节点
 * <span class="token keyword">@param</span> <span class="token parameter">categorySet</span>  空set集合
 * <span class="token keyword">@param</span> <span class="token parameter">categoryList</span> 分类所有数据
 * <span class="token keyword">@param</span> <span class="token parameter">categoryId</span> 当前分类id
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">private</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Category</span><span class="token punctuation">&gt;</span></span> <span class="token function">findChildCategory</span><span class="token punctuation">(</span><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Category</span><span class="token punctuation">&gt;</span></span> categorySet<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Category</span><span class="token punctuation">&gt;</span></span> categoryList<span class="token punctuation">,</span><span class="token class-name">Long</span> categoryId<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Category</span> category <span class="token operator">:</span> categoryList<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>category <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 把当前分类自己也添加进去</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>category<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>categoryId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                categorySet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>category<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>category<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>categoryId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                categorySet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>category<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">findChildCategory</span><span class="token punctuation">(</span>categorySet<span class="token punctuation">,</span>categoryList<span class="token punctuation">,</span>category<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> categorySet<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/algorithm/recursion.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\algorithm\\recursion.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const recursion_html = (script);

/***/ })

};
;
//# sourceMappingURL=4448.app.js.map