"use strict";
exports.id = 3301;
exports.ids = [3301];
exports.modules = {

/***/ 4128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-61892a34",
  "path": "/soft/intellij_idea.html",
  "title": "IDEA 必备插件",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "前端组件CDN",
      "slug": "前端组件cdn",
      "children": []
    },
    {
      "level": 2,
      "title": "编码规范",
      "slug": "编码规范",
      "children": []
    },
    {
      "level": 2,
      "title": "源码文档翻译",
      "slug": "源码文档翻译",
      "children": []
    },
    {
      "level": 2,
      "title": "代码地图",
      "slug": "代码地图",
      "children": []
    },
    {
      "level": 2,
      "title": "接口查找工具",
      "slug": "接口查找工具",
      "children": []
    },
    {
      "level": 2,
      "title": "持久层",
      "slug": "持久层",
      "children": []
    },
    {
      "level": 2,
      "title": "格式转换",
      "slug": "格式转换",
      "children": []
    },
    {
      "level": 2,
      "title": "彩虹括号",
      "slug": "彩虹括号",
      "children": []
    },
    {
      "level": 2,
      "title": "快捷键提示",
      "slug": "快捷键提示",
      "children": []
    },
    {
      "level": 2,
      "title": "数据库插件",
      "slug": "数据库插件",
      "children": []
    }
  ],
  "filePathRelative": "soft/intellij_idea.md",
  "git": {
    "contributors": [
      {
        "name": "yaomin_java",
        "email": "272991874@qq.com",
        "commits": 2
      },
      {
        "name": "Amin.Yao",
        "email": "Amin.Yao@gaiaworks.cn",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 3517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ intellij_idea_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/soft/intellij_idea.html.vue?vue&type=template&id=1c3b55de

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="idea-必备插件" tabindex="-1"><a class="header-anchor" href="#idea-必备插件" aria-hidden="true">#</a> IDEA 必备插件</h1><h2 id="前端组件cdn" tabindex="-1"><a class="header-anchor" href="#前端组件cdn" aria-hidden="true">#</a> 前端组件CDN</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
https://layui.dev/

mybatis-plus, mybatisX
https://www.baomidou.com/

<span class="token operator">&lt;</span>dependency<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>groupId<span class="token operator">&gt;</span>com.baomidou<span class="token operator">&lt;</span>/groupId<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>artifactId<span class="token operator">&gt;</span>mybatis-plus-boot-starter<span class="token operator">&lt;</span>/artifactId<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span><span class="token number">3.5</span>.<span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>/version<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/dependency<span class="token operator">&gt;</span>

https://gitee.com/y_project/RuoYi.git


<span class="token operator">&lt;</span>html <span class="token assign-left variable">lang</span><span class="token operator">=</span><span class="token string">&quot;zh&quot;</span> xmlns:th<span class="token operator">=</span><span class="token string">&quot;http://www.thymeleaf.org&quot;</span><span class="token operator">&gt;</span>

https://gitee.com/yaomin_java/amin.git

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="编码规范" tabindex="-1"><a class="header-anchor" href="#编码规范" aria-hidden="true">#</a> 编码规范</h2><p>-- Alibaba Code Guidelines</p><p>1、Blocker：最严重的问题，要求是必须修复，不允许带着Blocker问题的代码上线，跟绩效挂钩。</p><p>2、Critical：是比较严重的问题，要求是必须修复，不允许带着Critical问题的代码上线，跟绩效挂钩</p><p>3、Major：问题，可以不修复，也可以修复。主要是看项目的排期和进度，如果说进度不是特别紧张的话，建议全部修复。如果说项目进度很紧张的话，Major问题可以先放着，下次有时间了再修复。</p><h2 id="源码文档翻译" tabindex="-1"><a class="header-anchor" href="#源码文档翻译" aria-hidden="true">#</a> 源码文档翻译</h2><p>-- Translation</p><p>在看源码的过程中，看不懂的英文文档可翻译成中文</p><h2 id="代码地图" tabindex="-1"><a class="header-anchor" href="#代码地图" aria-hidden="true">#</a> 代码地图</h2><p>-- CodeGlance</p><p>可以在代码编辑区的右侧生成一个竖向可拖动的代码缩略区，可以快速定位代码的同时，并且提供放大镜功能。</p><h2 id="接口查找工具" tabindex="-1"><a class="header-anchor" href="#接口查找工具" aria-hidden="true">#</a> 接口查找工具</h2><p>-- RestfulToolkit</p><p>搜索快捷键：Ctrl + \\</p><h2 id="持久层" tabindex="-1"><a class="header-anchor" href="#持久层" aria-hidden="true">#</a> 持久层</h2><p>-- MybatisX 1.添加插件后在dao层会多一只戴红色头巾的小鸟，同样在对应xml文件方法前 也会对应一直戴蓝色头巾的小鸟，点击即可在dao和xml文件之间跳转</p><p>2.在开发中在到中写好接口后，还要到xml中写对应的xml方法，有了MybatisX后只用在dao中 写好对应方法后，按Alt+Enter选择自动生成就能自动在xml中生成对应的映射方法</p><p>-- 也可以直接根据idea连接的数据库生成对应的实体、dao、xml</p><h2 id="格式转换" tabindex="-1"><a class="header-anchor" href="#格式转换" aria-hidden="true">#</a> 格式转换</h2><p>-- CamelCase</p><p>包含 下划线,驼峰 等6种格式 一键切换</p><ol><li>快捷键： Shift + Alt + u 进行格式切换</li></ol><h2 id="彩虹括号" tabindex="-1"><a class="header-anchor" href="#彩虹括号" aria-hidden="true">#</a> 彩虹括号</h2><p>-- Rainbow Brackets</p><p>彩虹括号，各种鲜明颜色的括号</p><h2 id="快捷键提示" tabindex="-1"><a class="header-anchor" href="#快捷键提示" aria-hidden="true">#</a> 快捷键提示</h2><p>-- Key Promoter X</p><p>一个提示插件，当你在IDEA里面使用鼠标的时候，如果这个鼠标操作是能够用快捷键替代的，那么Key Promoter X会弹出 一个提示框，告知你这个鼠标操作可以用什么快捷键替代。</p><h2 id="数据库插件" tabindex="-1"><a class="header-anchor" href="#数据库插件" aria-hidden="true">#</a> 数据库插件</h2><p>-- Database Navigator</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/intellij_idea.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\soft\\intellij_idea.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const intellij_idea_html = (script);

/***/ })

};
;
//# sourceMappingURL=3301.app.js.map