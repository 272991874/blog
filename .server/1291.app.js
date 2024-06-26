"use strict";
exports.id = 1291;
exports.ids = [1291];
exports.modules = {

/***/ 3834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-53ae0193",
  "path": "/framework/uml_base.html",
  "title": "UML",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "基本概念",
      "slug": "基本概念",
      "children": [
        {
          "level": 3,
          "title": "聚合和组合的区别",
          "slug": "聚合和组合的区别",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "framework/uml_base.md",
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

/***/ 2873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ uml_base_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/framework/uml_base.html.vue?vue&type=template&id=226a5676



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="uml" tabindex="-1"><a class="header-anchor" href="#uml" aria-hidden="true">#</a> UML</h1><p><a href="https://pan.baidu.com/s/1Fs3BnGXs5lmyRpFy7pQqDA" target="_blank" rel="noopener noreferrer">Enterprise Architect`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>(提取码：3tm2)</p><p>从需求分析到概要设计、详细设计、数据库设计到测试、发布、部署等一系列软件设计必须的操作都可以在EA中完成</p><ul><li><p>虚线箭头指向依赖；</p></li><li><p>实线箭头指向关联；</p></li><li><p>虚线三角指向接口；</p></li><li><p>实线三角指向父类；</p></li><li><p>空心菱形能分离而独立存在，是聚合；</p></li><li><p>实心菱形精密关联不可分，是组合；</p></li></ul><img${(0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/uml/uml20220314.png'))} alt="uml"><p>在画类图的时候，理清类和类之间的关系是重点。类的关系有泛化(Generalization)、实现（Realization）、 依赖(Dependency)和关联(Association)。其中关联又分为一般关联关系和聚合关系(Aggregation)， 合成关系(Composition)。</p><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>类图（Class Diagram）: 类图是面向对象系统建模中最常用和最重要的图，是定义其它图的基础。 类图主要是用来显示系统中的类、接口以及它们之间的静态结构和关系的一种静态模型。</p><p><strong>类图的3个基本组件：类名、属性、方法</strong></p><ul><li><p>泛化(generalization)： 表示is-a的关系，是对象之间耦合度最大的一种关系，子类继承父类的所有细节。 直接使用语言中的继承表达。在类图中使用带三角箭头的实线表示，箭头从子类指向父类。</p></li><li><p>实现（Realization）: 在类图中就是接口和实现的关系。 这个没什么好讲的。在类图中使用带三角箭头的虚线表示，箭头从实现类指向接口。</p></li><li><p>依赖(Dependency)： 对象之间最弱的一种关联方式，是临时性的关联。代码中一般指由局部变量、函数参数、返回值建立的对于其他对象的调用关系。一个类调用被依赖类中的某些方法而得以完成这个类的一些职责。 在类图使用带箭头的虚线表示，箭头从使用类指向被依赖的类。</p></li><li><p>关联(Association) : 对象之间一种引用关系，比如客户类与订单类之间的关系。这种关系通常使用类的属性表达。关联又分为一般关联、聚合关联与组合关联。后两种在后面分析。 在类图使用带箭头的实线表示，箭头从使用类指向被关联的类。可以是单向和双向。</p></li><li><p>聚合(Aggregation) : 表示has-a的关系，是一种不稳定的包含关系。较强于一般关联,有整体与局部的关系,并且没有了整体,局部也可单独存在。如公司和员工的关系，公司包含员工，但如果公司倒闭，员工依然可以换公司。 在类图使用空心的菱形表示，菱形从局部指向整体。</p></li><li><p>组合(Composition) : 表示contains-a的关系，是一种强烈的包含关系。组合类负责被组合类的生命周期。是一种更强的聚合关系。部分不能脱离整体存在。如公司和部门的关系，没有了公司，部门也不能存在了；调查问卷中问题和选项的关系； 订单和订单选项的关系。在类图使用实心的菱形表示，菱形从局部指向整体。</p></li><li><p>多重性(Multiplicity) : 通常在关联、聚合、组合中使用。就是代表有多少个关联对象存在。使用数字..星号（数字）表示。 一个割接通知可以关联0个到N个故障单。</p></li></ul><h3 id="聚合和组合的区别" tabindex="-1"><a class="header-anchor" href="#聚合和组合的区别" aria-hidden="true">#</a> 聚合和组合的区别</h3><p>这两个比较难理解，重点说一下。 聚合和组合的区别在于：聚合关系是“has-a”关系，组合关系是“contains-a”关系； 聚合关系表示整体与部分的关系比较弱，而组合比较强；聚合关系中代表部分事物的对象与代表聚合事物的对象的 生存期无关，一旦删除了聚合对象不一定就删除了代表部分事物的对象。组合中一旦删除了组合对象， 同时也就删除了代表部分事物的对象。</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/framework/uml_base.html.vue?vue&type=template&id=226a5676

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/framework/uml_base.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\framework\\uml_base.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const uml_base_html = (script);

/***/ })

};
;
//# sourceMappingURL=1291.app.js.map