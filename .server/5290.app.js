"use strict";
exports.id = 5290;
exports.ids = [5290];
exports.modules = {

/***/ 3061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-15760ac5",
  "path": "/java/java_reflect.html",
  "title": "反射机制",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "什么是反射?",
      "slug": "什么是反射",
      "children": []
    },
    {
      "level": 2,
      "title": "优点",
      "slug": "优点",
      "children": []
    },
    {
      "level": 2,
      "title": "缺点",
      "slug": "缺点",
      "children": []
    },
    {
      "level": 2,
      "title": "用途",
      "slug": "用途",
      "children": []
    },
    {
      "level": 2,
      "title": "反射常用类",
      "slug": "反射常用类",
      "children": []
    }
  ],
  "filePathRelative": "java/java_reflect.md",
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

/***/ 1117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ java_reflect_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/java/java_reflect.html.vue?vue&type=template&id=6bee4b7f

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="反射机制" tabindex="-1"><a class="header-anchor" href="#反射机制" aria-hidden="true">#</a> 反射机制</h1><h2 id="什么是反射" tabindex="-1"><a class="header-anchor" href="#什么是反射" aria-hidden="true">#</a> 什么是反射?</h2><ol><li><p>Java反射机制的核心是在程序运行时动态加载类并获取类的详细信息，从而操作类或对象的属性和方法。本质是JVM得到class对象之后，再通过class对象进行反编译，从而获取对象的各种信息。</p></li><li><p>Java属于先编译再运行的语言，程序中对象的类型在编译期就确定下来了，而当程序在运行时可能需要动态加载某些类，这些类因为之前用不到，所以没有被加载到JVM。通过反射，可以在运行时动态地创建对象并调用其属性，不需要提前在编译期知道运行的对象是谁。</p></li></ol><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2><blockquote><p>在运行时获得类的各种内容，进行反编译，对于Java这种先编译再运行的语言，能够让我们很方便的创建灵活的代码，这些代码可以在运行时装配，无需在组件之间进行源代码的链接，更加容易实现面向对象。</p></blockquote><h2 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h2><blockquote><p>反射会消耗一定的系统资源，因此，如果不需要动态地创建一个对象，那么就不需要用反射；</p></blockquote><blockquote><p>反射调用方法时可以忽略权限检查，因此可能会破坏封装性而导致安全问题。</p></blockquote><h2 id="用途" tabindex="-1"><a class="header-anchor" href="#用途" aria-hidden="true">#</a> 用途</h2><ol><li><p>反编译：.class--&gt;.java</p></li><li><p>通过反射机制访问java对象的属性，方法，构造方法等</p></li><li><p>当我们在使用IDE,比如Ecplise时，当我们输入一个对象或者类，并想调用他的属性和方法是，一按点号，编译器就会自动列出他的属性或者方法，这里就是用到反射。</p></li><li><p>反射最重要的用途就是开发各种通用框架。比如很多框架（Spring）都是配置化的（比如通过XML文件配置Bean），为了保证框架的通用性，他们可能需要根据配置文件加载不同的类或者对象，调用不同的方法，这个时候就必须使用到反射了，运行时动态加载需要的加载的对象。</p></li></ol><h2 id="反射常用类" tabindex="-1"><a class="header-anchor" href="#反射常用类" aria-hidden="true">#</a> 反射常用类</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Java</span><span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Class<span class="token punctuation">;</span>
<span class="token class-name">Java</span><span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span>Constructor<span class="token punctuation">;</span>
<span class="token class-name">Java</span><span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span>Field<span class="token punctuation">;</span>
<span class="token class-name">Java</span><span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span>Method<span class="token punctuation">;</span>
<span class="token class-name">Java</span><span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span>Modifier<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_reflect.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\java\\java_reflect.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const java_reflect_html = (script);

/***/ })

};
;
//# sourceMappingURL=5290.app.js.map