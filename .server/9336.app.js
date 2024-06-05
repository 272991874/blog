"use strict";
exports.id = 9336;
exports.ids = [9336];
exports.modules = {

/***/ 7984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-9c28a48a",
  "path": "/web/css_bootstrap.html",
  "title": "CSS响应式布局",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "设置 meta 标签",
      "slug": "设置-meta-标签",
      "children": []
    },
    {
      "level": 2,
      "title": "媒体查询",
      "slug": "媒体查询",
      "children": []
    }
  ],
  "filePathRelative": "web/css_bootstrap.md",
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

/***/ 4521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ css_bootstrap_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/web/css_bootstrap.html.vue?vue&type=template&id=4d3685fc



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="css响应式布局" tabindex="-1"><a class="header-anchor" href="#css响应式布局" aria-hidden="true">#</a> CSS响应式布局</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#设置-meta-标签" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`设置 meta 标签`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("设置 meta 标签")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#媒体查询" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`媒体查询`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("媒体查询")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></nav><p>CSS 响应式布局也称自适应布局，是 Ethan Marcotte 在 2010 年 5 月份提出的一个概念，简单来讲就是一个网站能够兼容多个不同的终端（设备），而不是为每个终端做一个特定的版本。这个概念是为解决移动端浏览网页而诞生的。响应式布局能够为使用不同终端的用户提供很好的用户体验，而且随着大屏智能手机的普及，用“大势所趋”来形容也不为过。</p><p>要实现响应式布局，常用的方式有以下几种：</p><ul><li>使用 CSS 中的媒体查询（最简单）；</li><li>使用 JavaScript（使用成本比较高）；</li><li>使用第三方开源框架（例如 bootstrap，可以很好的支持各种浏览器）。</li></ul><p>接下来我们以媒体查询为例来具体演示一下响应式布局的实现。</p><h2 id="设置-meta-标签" tabindex="-1"><a class="header-anchor" href="#设置-meta-标签" aria-hidden="true">#</a> 设置 meta 标签</h2><p>首先，我们需要设置 meta 标签来告诉浏览器，让视口（网页的可视区域）的宽度等于设备的宽度，并禁止用户对页面的缩放，如下所示：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在设置视口时需要注意，视口就是网页可见区域的尺寸，设置视口时只设置宽度就行，不用在乎高度，具体高度由网页内容自动撑开。上面 meta 标签中内容的含义如下：</p><ul><li>viewport：即视口，表示网页的可视区域；</li><li>width：控制 viewport 的大小，可以指定一个具体的值，例如 600，也可以是由关键字组成的特殊值，例如 device-width 就表示设备的宽度；</li><li>initial-scale：表示初始缩放比例，也就是页面第一次加载时的缩放比例；</li><li>maximum-scale：表示允许用户缩放的最大比例，范围从 0 到 10.0；</li><li>minimum-scale：表示允许用户缩放到最小比例，范围从 0 到 10.0；</li><li>user-scalable：表示用户是否可以手动缩放，“yes”表示允许缩放，“no”表示禁止缩放。</li></ul><h2 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h2><p>CSS 媒体查询可以根据指定的条件，针对不同的媒体类型（screen print）定义不同的 CSS 样式，让使用不同设备的用户都能得到最佳的体验。</p><p>关于媒体查询有以下三种实现方式：</p><p>1、直接在 CSS 文件中使用，示例代码如下：</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/*0~320*/</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 321px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/*321~768*/</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 376px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 425px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/*376~425*/</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 426px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/*426~768*/</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 769px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/*769~+∞*/</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>2、使用 @import 导入，示例代码如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@<span class="token keyword">import</span> <span class="token string">&#39;index01.css&#39;</span> screen <span class="token function">and</span> <span class="token punctuation">(</span>max<span class="token operator">-</span>width<span class="token operator">:</span><span class="token number">1024</span>px<span class="token punctuation">)</span> <span class="token function">and</span> <span class="token punctuation">(</span>min<span class="token operator">-</span>width<span class="token operator">:</span><span class="token number">720</span>px<span class="token punctuation">)</span>
@<span class="token keyword">import</span> <span class="token string">&#39;index02.css&#39;</span> screen <span class="token function">and</span> <span class="token punctuation">(</span>max<span class="token operator">-</span>width<span class="token operator">:</span><span class="token number">720</span>px<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>3、在 link 标签中使用，示例代码如下：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index01.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen and (max-width:1024px) and (min-width:720px)<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index02.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen and (max-width:720px)<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>更多关于媒体查询的介绍大家可以查阅《CSS媒体查询》一节。</p><p>下面通过一个综合的示例来演示一下响应式布局的实现：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>响应式布局<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span><span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1.0,maximum-scale=1,user-scalable=no<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
            <span class="token selector">*</span><span class="token punctuation">{</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
                <span class="token property">padding</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
                <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;微软雅黑&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">#head, #foot, #main</span>
            <span class="token punctuation">{</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
                <span class="token comment">/*width: 85%;*/</span>
                <span class="token property">background-color</span><span class="token punctuation">:</span> goldenrod<span class="token punctuation">;</span>
                <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
                <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">#head div</span><span class="token punctuation">{</span>
                <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
                <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
                <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
                <span class="token property">margin-top</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">#head ul</span><span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">#head ul li</span><span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
                <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
                <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
                <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">#main</span><span class="token punctuation">{</span>
                <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> 10px auto<span class="token punctuation">;</span>
                <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.left, .center, .right</span><span class="token punctuation">{</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
                <span class="token property">line-height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
                <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
                <span class="token property">background-color</span><span class="token punctuation">:</span> red
            <span class="token punctuation">}</span>
            <span class="token selector">.center</span><span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 60%<span class="token punctuation">;</span>
                <span class="token property">border-left</span><span class="token punctuation">:</span> 10px solid #FFF<span class="token punctuation">;</span>
                <span class="token property">border-right</span><span class="token punctuation">:</span> 10px solid #FFF<span class="token punctuation">;</span>
                <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
                <span class="token selector">#head, #foot, #main</span><span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 980px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
                <span class="token selector">.right</span><span class="token punctuation">{</span>
                    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.left</span><span class="token punctuation">{</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.center</span><span class="token punctuation">{</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 70%<span class="token punctuation">;</span>
                    <span class="token property">border-right</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
                <span class="token selector">.left, .center, .right</span><span class="token punctuation">{</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
                    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
                    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                    <span class="token property">line-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.center</span><span class="token punctuation">{</span>
                    <span class="token property">border</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
                    <span class="token property">border-top</span><span class="token punctuation">:</span> 10px  solid #FFFFFF<span class="token punctuation">;</span>
                    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 10px solid #FFFFFF<span class="token punctuation">;</span>
                    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
                    <span class="token property">line-height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">#head ul</span><span class="token punctuation">{</span>
                    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">#head div</span><span class="token punctuation">{</span>
                    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>   
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>head<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>header1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>header2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>header2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>header2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>header2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>icon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                    left
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                    center
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                    right
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                footer
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br></div></div><p>当浏览器窗口小于 1200 像素大于 980 像素时：适配pc 当浏览器窗口大于 640 像素小于 980 像素时：适配平板 当浏览器窗口小于 640 像素时：适配手机</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/web/css_bootstrap.html.vue?vue&type=template&id=4d3685fc

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/web/css_bootstrap.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\web\\css_bootstrap.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const css_bootstrap_html = (script);

/***/ })

};
;
//# sourceMappingURL=9336.app.js.map