"use strict";
exports.id = 1102;
exports.ids = [1102];
exports.modules = {

/***/ 8644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-6a8a1966",
  "path": "/java/java_extend_implements.html",
  "title": "继承 和 实现",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "面向对象三个特征：封装、继承、多态。",
      "slug": "面向对象三个特征-封装、继承、多态。",
      "children": []
    },
    {
      "level": 2,
      "title": "第一、联系",
      "slug": "第一、联系",
      "children": []
    },
    {
      "level": 2,
      "title": "第二、区别",
      "slug": "第二、区别",
      "children": []
    },
    {
      "level": 2,
      "title": "总结：",
      "slug": "总结",
      "children": []
    }
  ],
  "filePathRelative": "java/java_extend_implements.md",
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

/***/ 1105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ java_extend_implements_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/java/java_extend_implements.html.vue?vue&type=template&id=5955f9bc

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="继承-和-实现" tabindex="-1"><a class="header-anchor" href="#继承-和-实现" aria-hidden="true">#</a> 继承 和 实现</h1><h2 id="面向对象三个特征-封装、继承、多态。" tabindex="-1"><a class="header-anchor" href="#面向对象三个特征-封装、继承、多态。" aria-hidden="true">#</a> 面向对象三个特征：封装、继承、多态。</h2><ul><li><p>继承：如果多个类的某个部分的功能相同，那么可以抽象出一个类出来，把他们的相同部分都放到父类里，让他们都继承这个类。</p></li><li><p>实现：如果多个类处理的目标是一样的，但是处理的方法方式不同，那么就定义一个接口，也就是一个标准，让他们的实现这个接口，各自实现自己具体的处理方法来处理那个目标</p></li></ul><h2 id="第一、联系" tabindex="-1"><a class="header-anchor" href="#第一、联系" aria-hidden="true">#</a> 第一、联系</h2><p>继承父类和实现接口都能实现代码重用，提高开发效率。提现了实物的传递性，继承关系达到复用的目的。</p><h2 id="第二、区别" tabindex="-1"><a class="header-anchor" href="#第二、区别" aria-hidden="true">#</a> 第二、区别</h2><ol><li>修饰不同</li></ol><p>不同的修饰符修饰；实现：implements，继承：extends；</p><ol start="2"><li>数量不同</li></ol><p>Java只支持“接口”的多继承,不支持“类“”的多继承；而继承在java中具有单根性,子类只能继承一个父类。</p><p>总结为：单继承，多实现。</p><ol start="3"><li>属性不同</li></ol><p>在接口中只能定义全局常量（static final）,和无实现的方法；而在继承中可以定义属性方法,变量,常量等...</p><ol start="4"><li>调用不同</li></ol><p>某个接口被类实现时,在类中一定要实现接口中的抽象方法；而继承想调用那个方法就调用那个方法,毫无压力</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结：</h2><p>接口是：对功能的描述（方法/行为），接口传达的意思是：拥有某种功能，能干嘛，比如：Serializable代表可序列化的。</p><p>继承是：什么是一种什么，继承传达的意思是：is-a，比如：猫 是一个 动物，猫就是动物的子类。</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_extend_implements.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\java\\java_extend_implements.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const java_extend_implements_html = (script);

/***/ })

};
;
//# sourceMappingURL=1102.app.js.map