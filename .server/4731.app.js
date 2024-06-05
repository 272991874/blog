"use strict";
exports.id = 4731;
exports.ids = [4731];
exports.modules = {

/***/ 716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-08bfa37a",
  "path": "/web/react_lifecycle.html",
  "title": "React生命周期",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Mounting（加载阶段：涉及4个钩子函数）",
      "slug": "mounting-加载阶段-涉及4个钩子函数",
      "children": []
    },
    {
      "level": 2,
      "title": "Updating（更新阶段：涉及5个钩子函数)",
      "slug": "updating-更新阶段-涉及5个钩子函数",
      "children": []
    },
    {
      "level": 2,
      "title": "Unmounting（卸载阶段：涉及1个钩子函数）",
      "slug": "unmounting-卸载阶段-涉及1个钩子函数",
      "children": []
    },
    {
      "level": 2,
      "title": "组件写法",
      "slug": "组件写法",
      "children": []
    },
    {
      "level": 2,
      "title": "旧：",
      "slug": "旧",
      "children": []
    },
    {
      "level": 2,
      "title": "Mounting（加载阶段：涉及6个钩子函数）",
      "slug": "mounting-加载阶段-涉及6个钩子函数",
      "children": []
    },
    {
      "level": 2,
      "title": "Updating（更新阶段：涉及5个钩子函数)",
      "slug": "updating-更新阶段-涉及5个钩子函数-1",
      "children": []
    },
    {
      "level": 2,
      "title": "Unmounting（卸载阶段：涉及1个钩子函数）",
      "slug": "unmounting-卸载阶段-涉及1个钩子函数-1",
      "children": []
    }
  ],
  "filePathRelative": "web/react_lifecycle.md",
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

/***/ 1029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ react_lifecycle_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/web/react_lifecycle.html.vue?vue&type=template&id=2d6a29e7



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="react生命周期" tabindex="-1"><a class="header-anchor" href="#react生命周期" aria-hidden="true">#</a> React生命周期</h1><p><a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" target="_blank" rel="noopener noreferrer">React生命周期查询地址`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>React16 <img${
    (0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/react/react202111090944.png'))
  } alt="react202111090944.png"></p><h2 id="mounting-加载阶段-涉及4个钩子函数" tabindex="-1"><a class="header-anchor" href="#mounting-加载阶段-涉及4个钩子函数" aria-hidden="true">#</a> Mounting（加载阶段：涉及4个钩子函数）</h2><ul><li>constructor()</li></ul><p>加载的时候调用一次，可以初始化state</p><ul><li>static getDerivedStateFromProps(props, state)</li></ul><p>组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后；每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state；配合componentDidUpdate，可以覆盖componentWillReceiveProps的所有用法</p><ul><li>render()</li></ul><p>react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行</p><ul><li>componentDidMount()</li></ul><p>组件渲染之后调用，只调用一次</p><h2 id="updating-更新阶段-涉及5个钩子函数" tabindex="-1"><a class="header-anchor" href="#updating-更新阶段-涉及5个钩子函数" aria-hidden="true">#</a> Updating（更新阶段：涉及5个钩子函数)</h2><ul><li>static getDerivedStateFromProps(props, state)</li></ul><p>组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后；每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state；配合componentDidUpdate，可以覆盖componentWillReceiveProps的所有用法</p><ul><li>shouldComponentUpdate(nextProps, nextState)</li></ul><p>组件接收到新的props或者state时调用，return true就会更新dom（使用diff算法更新），return false能阻止更新（不调用render）</p><ul><li>render()</li></ul><p>react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行</p><ul><li>getSnapshotBeforeUpdate(prevProps, prevState)</li></ul><p>触发时间: update发生的时候，在render之后，在组件dom渲染之前；返回一个值，作为componentDidUpdate的第三个参数；配合componentDidUpdate, 可以覆盖componentWillUpdate的所有用法</p><ul><li>componentDidUpdate()</li></ul><p>组件加载时不调用，组件更新完成后调用</p><h2 id="unmounting-卸载阶段-涉及1个钩子函数" tabindex="-1"><a class="header-anchor" href="#unmounting-卸载阶段-涉及1个钩子函数" aria-hidden="true">#</a> Unmounting（卸载阶段：涉及1个钩子函数）</h2><p>组件渲染之后调用，只调用一次</p><ul><li>Error Handling(错误处理) componentDidCatch(error，info)</li></ul><p>任何一处的javascript报错会触发</p><h2 id="组件写法" tabindex="-1"><a class="header-anchor" href="#组件写法" aria-hidden="true">#</a> 组件写法</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">OldReactComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
        <span class="token comment">// getDefaultProps：接收初始props</span>
        <span class="token comment">// getInitialState：初始化state</span>
    <span class="token punctuation">}</span>
    state <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    <span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 组件挂载前触发</span>

    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>Old React<span class="token punctuation">.</span>Component<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 组件挂载后触发</span>

    <span class="token punctuation">}</span>
    <span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 接收到新的props时触发</span>

    <span class="token punctuation">}</span>
    <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 组件Props或者state改变时触发，true：更新，false：不更新</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token function">componentWillUpdate</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 组件更新前触发</span>

    <span class="token punctuation">}</span>
    <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 组件更新后触发</span>

    <span class="token punctuation">}</span>
    <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 组件卸载时触发</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="旧" tabindex="-1"><a class="header-anchor" href="#旧" aria-hidden="true">#</a> 旧：</h2><img${
    (0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/react/react_lifecycle20211109.png'))
  } alt="react_lifecycle20211109.png"><p>组件的生命周期可分成三个状态：</p><ul><li>Mounting：已插入真实 DOM</li><li>Updating：正在被重新渲染</li><li>Unmounting：已移出真实 DOM</li></ul><h2 id="mounting-加载阶段-涉及6个钩子函数" tabindex="-1"><a class="header-anchor" href="#mounting-加载阶段-涉及6个钩子函数" aria-hidden="true">#</a> Mounting（加载阶段：涉及6个钩子函数）</h2><ul><li>constructor()</li></ul><p>加载的时候调用一次，可以初始化state</p><ul><li>getDefaultProps()</li></ul><p>设置默认的props，也可以用dufaultProps设置组件的默认属性。</p><ul><li>getInitialState()</li></ul><p>初始化state，可以直接在constructor中定义this.state</p><ul><li>componentWillMount()</li></ul><p>组件加载时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state</p><ul><li>render()</li></ul><p>react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行</p><ul><li>componentDidMount()</li></ul><p>组件渲染之后调用，只调用一次</p><h2 id="updating-更新阶段-涉及5个钩子函数-1" tabindex="-1"><a class="header-anchor" href="#updating-更新阶段-涉及5个钩子函数-1" aria-hidden="true">#</a> Updating（更新阶段：涉及5个钩子函数)</h2><ul><li>componentWillReceiveProps(nextProps)</li></ul><p>组件加载时不调用，组件接受新的props时调用</p><ul><li>shouldComponentUpdate(nextProps, nextState)</li></ul><p>组件接收到新的props或者state时调用，return true就会更新dom（使用diff算法更新），return false能阻止更新（不调用render）</p><ul><li>componentWillUpdata(nextProps, nextState)</li></ul><p>组件加载时不调用，只有在组件将要更新时才调用，此时可以修改state</p><ul><li>render()</li></ul><p>react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行</p><ul><li>componentDidUpdate()</li></ul><p>组件加载时不调用，组件更新完成后调用</p><h2 id="unmounting-卸载阶段-涉及1个钩子函数-1" tabindex="-1"><a class="header-anchor" href="#unmounting-卸载阶段-涉及1个钩子函数-1" aria-hidden="true">#</a> Unmounting（卸载阶段：涉及1个钩子函数）</h2><ul><li>componentWillUnmount()</li></ul><p>组件渲染之后调用，只调用一次</p><p>demo:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component <span class="token punctuation">{</span>
 
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>opacity<span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> opacity <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>opacity<span class="token punctuation">;</span>
      opacity <span class="token operator">-=</span> <span class="token number">.05</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>opacity <span class="token operator">&lt;</span> <span class="token number">0.1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        opacity <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        opacity<span class="token operator">:</span> opacity
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>opacity<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>opacity<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        Hello <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Hello name<span class="token operator">=</span><span class="token string">&quot;world&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span>body
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/web/react_lifecycle.html.vue?vue&type=template&id=2d6a29e7

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/web/react_lifecycle.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\web\\react_lifecycle.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const react_lifecycle_html = (script);

/***/ })

};
;
//# sourceMappingURL=4731.app.js.map