"use strict";
exports.id = 6844;
exports.ids = [6844];
exports.modules = {

/***/ 1827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-6be2f84b",
  "path": "/framework/SPI_base.html",
  "title": "SPI机制",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "什么是 SPI",
      "slug": "什么是-spi",
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
    }
  ],
  "filePathRelative": "framework/SPI_base.md",
  "git": {
    "contributors": [
      {
        "name": "yaomin_java",
        "email": "272991874@qq.com",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 2192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SPI_base_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/framework/SPI_base.html.vue?vue&type=template&id=bfcb49b2

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="spi机制" tabindex="-1"><a class="header-anchor" href="#spi机制" aria-hidden="true">#</a> SPI机制</h1><h2 id="什么是-spi" tabindex="-1"><a class="header-anchor" href="#什么是-spi" aria-hidden="true">#</a> 什么是 SPI</h2><p>SPI (Service Provider Interface)，主要是用来在框架中使用的，最常见和莫过于我们在访问数据库时候用到的java.sql.Driver接口了。</p><p>你想一下首先市面上的数据库五花八门，不同的数据库底层协议的大不相同，所以首先需要定制一个接口，来约束一下这些数据库，使得 Java 语言的使用者在调用数据库的时候可以方便、统一的面向接口编程。</p><p>数据库厂商们需要根据接口来开发他们对应的实现，那么问题来了，真正使用的时候到底用哪个实现呢？从哪里找到实现类呢？</p><p>这时候 Java SPI 机制就派上用场了，不知道到底用哪个实现类和找不到实现类，我们告诉它不就完事了呗。</p><p>大家都约定好将实现类的配置写在一个地方，然后到时候都去哪个地方查一下不就知道了吗？</p><p>Java SPI 就是这样做的，约定在 Classpath 下的 META-INF/services/ 目录里创建一个以服务接口命名的文件，然后文件里面记录的是此 jar 包提供的具体实现类的全限定名。</p><p>这样当我们引用了某个 jar 包的时候就可以去找这个 jar 包的 META-INF/services/ 目录，再根据接口名找到文件，然后读取文件里面的内容去进行实现类的加载与实例化。</p><blockquote><p>我们常用的访问数据库时候用到的java.sql.Driver接口，Dubbo 都采用了 SPI 机制。</p></blockquote><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2><ul><li>实现解耦，使得接口的定义与具体业务实现分离，应用程序可以根据实际业务情况启用或替换具体组件。</li></ul><h2 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h2><ul><li>Java SPI 无法按需加载实现类。</li><li>多个并发多线程使用 ServiceLoader 类的实例是不安全的。</li><li>加载不到实现类时抛出并不是真正原因的异常，错误很难定位。</li></ul><blockquote><p>Java SPI 在查找扩展实现类的时候遍历 SPI 的配置文件并且将实现类全部实例化， 假设一个实现类初始化过程比较消耗资源且耗时，但是你的代码里面又用不上它，这就产生了资源的浪费。</p></blockquote><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/framework/SPI_base.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\framework\\SPI_base.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const SPI_base_html = (script);

/***/ })

};
;
//# sourceMappingURL=6844.app.js.map