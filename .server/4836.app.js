"use strict";
exports.id = 4836;
exports.ids = [4836];
exports.modules = {

/***/ 4761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-d83a53e0",
  "path": "/soft/vuepress.html",
  "title": "如何使用 VuePress 搭建个人博客",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "如何使用 VuePress 搭建个人博客",
    "sidebar": "auto",
    "sidebarDepth": 2
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一、为什么你需要一个博客？",
      "slug": "一、为什么你需要一个博客",
      "children": []
    },
    {
      "level": 2,
      "title": "二、什么是 VuePress，为什么要使用 VuePress ？",
      "slug": "二、什么是-vuepress-为什么要使用-vuepress",
      "children": []
    },
    {
      "level": 2,
      "title": "三、开始搭建",
      "slug": "三、开始搭建",
      "children": [
        {
          "level": 3,
          "title": "创建项目文件夹",
          "slug": "创建项目文件夹",
          "children": []
        },
        {
          "level": 3,
          "title": "全局安装 VuePress",
          "slug": "全局安装-vuepress",
          "children": []
        },
        {
          "level": 3,
          "title": "进入 vuepressBlogDemo 文件夹，初始化项目",
          "slug": "进入-vuepressblogdemo-文件夹-初始化项目",
          "children": []
        },
        {
          "level": 3,
          "title": "创建文件夹和文件",
          "slug": "创建文件夹和文件",
          "children": []
        },
        {
          "level": 3,
          "title": "在 config.ts 文件中配置网站标题、描述、主题等信息",
          "slug": "在-config-ts-文件中配置网站标题、描述、主题等信息",
          "children": []
        },
        {
          "level": 3,
          "title": "在 package.json 文件里添加两个启动命令",
          "slug": "在-package-json-文件里添加两个启动命令",
          "children": []
        },
        {
          "level": 3,
          "title": "一切就绪 🎉 跑起来看看吧",
          "slug": "一切就绪-跑起来看看吧",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "四、一些小亮点",
      "slug": "四、一些小亮点",
      "children": [
        {
          "level": 3,
          "title": "代码块高亮",
          "slug": "代码块高亮",
          "children": []
        },
        {
          "level": 3,
          "title": "自定义容器",
          "slug": "自定义容器",
          "children": []
        },
        {
          "level": 3,
          "title": "支持 Emoji",
          "slug": "支持-emoji",
          "children": []
        },
        {
          "level": 3,
          "title": "支持 PWA",
          "slug": "支持-pwa",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "soft/vuepress.md",
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

/***/ 895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ vuepress_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/soft/vuepress.html.vue?vue&type=template&id=4dc994c6



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="如何使用-vuepress-搭建个人博客" tabindex="-1"><a class="header-anchor" href="#如何使用-vuepress-搭建个人博客" aria-hidden="true">#</a> 如何使用 VuePress 搭建个人博客</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>博客源码地址(https://gitee.com/yaomin_java/yaomin.git):</p></div><h2 id="一、为什么你需要一个博客" tabindex="-1"><a class="header-anchor" href="#一、为什么你需要一个博客" aria-hidden="true">#</a> 一、为什么你需要一个博客？</h2><p>优秀的程序员都在写博客，写博客有很多好处：</p><ul><li>帮助自己梳理、总结、理解知识点（个人提升）</li><li>帮助别人理解知识点（好人一生平安）</li><li>简历更好看，更多面试机会（升职加薪）</li></ul><h2 id="二、什么是-vuepress-为什么要使用-vuepress" tabindex="-1"><a class="header-anchor" href="#二、什么是-vuepress-为什么要使用-vuepress" aria-hidden="true">#</a> 二、什么是 VuePress，为什么要使用 VuePress ？</h2><p><strong>VuePress</strong> 是尤雨溪（vue.js 框架作者）4月12日发布的一个全新的基于 vue 的静态网站生成器，实际上就是一个 vue 的 spa 应用，内置 webpack，可以用来写文档。详见 <a href="https://vuepress.docschina.org/" target="_blank" rel="noopener noreferrer">VuePress中文网`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>其实类似的建站工具有很多，比如 WordPress、Jekyll、Hexo 等，其中 WordPress 需要自己购买虚拟主机，不考虑；Jekyll 是 gitee-Page 默认支持的，听说操作比较复杂，没有用过不做过多评价了；Hexo 之前一直在用，但一直觉得主题不好看，风格不够简洁优雅。自从遇见 VuePress，嗯，就是它了~</p><p>VuePress 有很多优点：</p><ul><li>界面简洁优雅（个人感觉比 HEXO 好看）</li><li>容易上手（半小时能搭好整个项目）</li><li>更好的兼容、扩展 Markdown 语法</li><li>响应式布局，PC端、手机端</li><li>Google Analytics 集成</li><li>支持 PWA</li></ul><h2 id="三、开始搭建" tabindex="-1"><a class="header-anchor" href="#三、开始搭建" aria-hidden="true">#</a> 三、开始搭建</h2><h3 id="创建项目文件夹" tabindex="-1"><a class="header-anchor" href="#创建项目文件夹" aria-hidden="true">#</a> 创建项目文件夹</h3><p>可以右键手动新建，也可以使用 mkdir 命令新建：</p><pre><code>mkdir vuepressBlogDemo
</code></pre><h3 id="全局安装-vuepress" tabindex="-1"><a class="header-anchor" href="#全局安装-vuepress" aria-hidden="true">#</a> 全局安装 VuePress</h3><pre><code>npm install -g vuepress
</code></pre><h3 id="进入-vuepressblogdemo-文件夹-初始化项目" tabindex="-1"><a class="header-anchor" href="#进入-vuepressblogdemo-文件夹-初始化项目" aria-hidden="true">#</a> 进入 vuepressBlogDemo 文件夹，初始化项目</h3><p>使用 <code>npm init</code> 或 <code>npm init -y</code>（默认yes）</p><pre><code>npm init -y
</code></pre><h3 id="创建文件夹和文件" tabindex="-1"><a class="header-anchor" href="#创建文件夹和文件" aria-hidden="true">#</a> 创建文件夹和文件</h3><p>在 vuepressBlogDemo 文件夹中创建 docs 文件夹，在 docs 中创建 .vuepress 文件夹，在.vuepress中创建 public 文件夹和 config.ts 文件，最终项目结构如下所示：</p><pre><code>vuepressBlogDemo
├─── docs
│   ├── README.md
│   └── .vuepress
│       ├── public
│       └── config.ts
└── package.json
</code></pre><h3 id="在-config-ts-文件中配置网站标题、描述、主题等信息" tabindex="-1"><a class="header-anchor" href="#在-config-ts-文件中配置网站标题、描述、主题等信息" aria-hidden="true">#</a> 在 config.ts 文件中配置网站标题、描述、主题等信息</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Chen\\&#39;s blog&#39;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&#39;我的个人网站&#39;</span><span class="token punctuation">,</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 注入到当前页面的 HTML &lt;head&gt; 中的标签</span>
    <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&#39;/logo.jpg&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 增加一个自定义的 favicon(网页标签的图标)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  base<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 这是部署到gitee相关的配置</span>
  markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
    lineNumbers<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 代码块显示行号</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    nav<span class="token operator">:</span><span class="token punctuation">[</span> <span class="token comment">// 导航栏配置</span>
      <span class="token punctuation">{</span>text<span class="token operator">:</span> <span class="token string">&#39;前端基础&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/accumulate/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>text<span class="token operator">:</span> <span class="token string">&#39;算法题库&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/algorithm/&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>text<span class="token operator">:</span> <span class="token string">&#39;google&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;https://google.com&#39;</span><span class="token punctuation">}</span>      
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    sidebar<span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 侧边栏配置</span>
    sidebarDepth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 侧边栏显示2级</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="在-package-json-文件里添加两个启动命令" tabindex="-1"><a class="header-anchor" href="#在-package-json-文件里添加两个启动命令" aria-hidden="true">#</a> 在 package.json 文件里添加两个启动命令</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="一切就绪-跑起来看看吧" tabindex="-1"><a class="header-anchor" href="#一切就绪-跑起来看看吧" aria-hidden="true">#</a> 一切就绪 🎉 跑起来看看吧</h3><pre><code>npm run dev
</code></pre><h2 id="四、一些小亮点" tabindex="-1"><a class="header-anchor" href="#四、一些小亮点" aria-hidden="true">#</a> 四、一些小亮点</h2><p>完成了基础搭建后，就可以在docs目录下新建 <code>.md</code> 文件写文章了（.md 是 Markdown 语法文件，你需要知道 Markdown 的一些基本写法，很简单，这里给大家一份 <a href="https://www.jianshu.com/p/b03a8d7b1719" target="_blank" rel="noopener noreferrer">Markdown 语法整理大集合`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>）</p><p>下面给大家安利一些实用的方法。</p><h3 id="代码块高亮" tabindex="-1"><a class="header-anchor" href="#代码块高亮" aria-hidden="true">#</a> 代码块高亮</h3><p>在 .md 文件中书写代码时，可在 \`\`\` 后增加 js、html、json等格式类型，代码块即可按照指定类型高亮</p><p>代码：</p><pre class="language-text"><code>\`\`\` js
export default {
  data () {
    return {
      msg: &#39;Highlighted!&#39;
    }
  }
}
\`\`\`</code></pre><p>效果：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      msg<span class="token operator">:</span> <span class="token string">&#39;Highlighted!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h3><p>代码：</p><pre><code>::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
:::
</code></pre><p>效果：</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>this is a tip</p></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>this is a tip</p></div><div class="custom-container danger"><p class="custom-container-title">警告</p><p>this is a tip</p></div><h3 id="支持-emoji" tabindex="-1"><a class="header-anchor" href="#支持-emoji" aria-hidden="true">#</a> 支持 Emoji</h3><p>代码：</p><pre><code>:tada: :100: :bamboo: :gift_heart: :fire:
</code></pre><p>效果： 🎉 💯 🎍 💝 🔥</p><p>👉 这里有一份 <a href="https://www.webpagefx.com/tools/emoji-cheat-sheet/" target="_blank" rel="noopener noreferrer">Emoji 大全`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h3 id="支持-pwa" tabindex="-1"><a class="header-anchor" href="#支持-pwa" aria-hidden="true">#</a> 支持 PWA</h3><p>VuePress 默认支持 <a href="https://segmentfault.com/a/1190000012353473" target="_blank" rel="noopener noreferrer">PWA`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>，配置方法如下：</p><p>config.ts 文件中增加</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>head<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 注入到当前页面的 HTML &lt;head&gt; 中的标签</span>
  <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&#39;manifest&#39;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&#39;/photo.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&#39;apple-touch-icon&#39;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&#39;/photo.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
serviceWorker<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 是否开启 PWA</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>public 文件夹下新建 manifest.json 文件，添加</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;short_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;start_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.html&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;standalone&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;background_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#2196f3&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三的个人主页&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;theme_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;icons&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./photo.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;144x144&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;related_applications&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;web&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;play&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://play.google.com/store/apps/details?id=cheeaun.hackerweb&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>最后在浏览器中打开本网站，点击 <code>+添加到主屏幕</code> 就能在桌面看到一个像原生 App 一样的图标</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/vuepress.html.vue?vue&type=template&id=4dc994c6

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/vuepress.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\soft\\vuepress.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const vuepress_html = (script);

/***/ })

};
;
//# sourceMappingURL=4836.app.js.map