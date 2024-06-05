"use strict";
exports.id = 5106;
exports.ids = [5106];
exports.modules = {

/***/ 4147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-abb9a756",
  "path": "/java/java_hashcode.html",
  "title": "两个对象的 hashCode()相同，则 equals()也一定为 true，对吗？",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "为什么要用31*h？",
      "slug": "为什么要用31-h",
      "children": []
    },
    {
      "level": 2,
      "title": "总结",
      "slug": "总结",
      "children": []
    }
  ],
  "filePathRelative": "java/java_hashcode.md",
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

/***/ 5862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ java_hashcode_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/java/java_hashcode.html.vue?vue&type=template&id=13136432



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="两个对象的-hashcode-相同-则-equals-也一定为-true-对吗" tabindex="-1"><a class="header-anchor" href="#两个对象的-hashcode-相同-则-equals-也一定为-true-对吗" aria-hidden="true">#</a> 两个对象的 hashCode()相同，则 equals()也一定为 true，对吗？</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#为什么要用31-h" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`为什么要用31*h？`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("为什么要用31*h？")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#总结" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`总结`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("总结")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></nav><p>答案是否定的</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;Ma&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">&quot;NB&quot;</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s2<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>输出结果如下</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">2515</span>
<span class="token number">2515</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>什么情况？</p><p>下面是String的hashCode的算法</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">int</span> h <span class="token operator">=</span> hash<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token comment">//这里的value是String的char数组</span>
<span class="token keyword">char</span> val<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> value<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
h <span class="token operator">=</span> <span class="token number">31</span> <span class="token operator">*</span> h <span class="token operator">+</span> val<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
hash <span class="token operator">=</span> h<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> h<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>模拟一下运算，首先MaNB分别对应77,97,78,66。按照hash算法计算一遍就是</p><p>“Ma” = 31*(31*0+77)+97=2484</p><p>“NB” = 31*(312*0+78)+66=2484</p><p>按照这个规律，我们还可以得出O#的hash值也等于2484，hash值一样了，但是equals吗，很明显”Ma” ≠ “NB” ≠ “O#”</p><h2 id="为什么要用31-h" tabindex="-1"><a class="header-anchor" href="#为什么要用31-h" aria-hidden="true">#</a> 为什么要用31*h？</h2><p>The value 31 was chosen because it is an odd prime. If it were even and the multiplication overflowed, information would be lost, as multiplication by 2 is equivalent to shifting. The advantage of using a prime is less clear, but it is traditional. A nice property of 31 is that the multiplication can be replaced by a shift and a subtraction for better performance: 31 * i == (i &lt;&lt; 5) - i. Modern VMs do this sort of optimization automatically.</p><p>选择值31是因为它是奇数素数。如果是偶数，乘法溢出，信息将丢失，因为乘2等于移位。使用质数的优势不太明显。31的一个很好的特性是乘法可以用移位和减法来代替，以获得更好的性能：31*i 等价于（i 向左位移 5）-i，而位移操作是JVM里最有效的计算方式。现代的虚拟机会自动进行这种优化。</p><img${(0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/java-hashcode.png'))} alt="hashcode"><p>简单来说就是可以获取更好的性能，但是重复率较高</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>equals一样，hash一定一样<br> equals不一样，hash一定不一样<br> hash一样，equals不一定一样<br> hash不一样，equals一定不一样</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_hashcode.html.vue?vue&type=template&id=13136432

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_hashcode.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\java\\java_hashcode.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const java_hashcode_html = (script);

/***/ })

};
;
//# sourceMappingURL=5106.app.js.map