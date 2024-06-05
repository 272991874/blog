"use strict";
exports.id = 2009;
exports.ids = [2009];
exports.modules = {

/***/ 2368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-34e99740",
  "path": "/java/java_spring_bean_dependent.html",
  "title": "spring base循环依赖",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一、依赖注入的类型",
      "slug": "一、依赖注入的类型",
      "children": []
    },
    {
      "level": 2,
      "title": "二、基于Setter的依赖注入",
      "slug": "二、基于setter的依赖注入",
      "children": []
    },
    {
      "level": 2,
      "title": "三、基于属性的依赖注入",
      "slug": "三、基于属性的依赖注入",
      "children": []
    },
    {
      "level": 2,
      "title": "四、基于字段的依赖注入缺陷",
      "slug": "四、基于字段的依赖注入缺陷",
      "children": []
    },
    {
      "level": 2,
      "title": "五、业务无法避免，如何解耦",
      "slug": "五、业务无法避免-如何解耦",
      "children": []
    },
    {
      "level": 2,
      "title": "六、总结",
      "slug": "六、总结",
      "children": []
    }
  ],
  "filePathRelative": "java/java_spring_bean_dependent.md",
  "git": {
    "contributors": [
      {
        "name": "Amin.Yao",
        "email": "Amin.Yao@gaiaworks.cn",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 4141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ java_spring_bean_dependent_html)
});

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/java/java_spring_bean_dependent.html.vue?vue&type=template&id=3e0749e6


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="spring-base循环依赖" tabindex="-1"><a class="header-anchor" href="#spring-base循环依赖" aria-hidden="true">#</a> spring base循环依赖</h1><p>最近在处理项目中Bean循环依赖导致的启动报错问题，发现一些service层的类像一个大胖子，依赖了大量不同模块的service，错综复杂的依赖关系，Spring 的 Bean 懒加载机制都无法解决好这个问题，随着时间的推移，问题越发严重，迭代发布时启动项目时而失败。接下来只能重新梳理业务逻辑，根据 6 大设计原则中的单一职责原则，对项目进行拆分、改造，从根源上解决问题。</p><p>spring 依赖注入官方文档，Spring官方已不推荐使用Autowired字段/属性注入Bean，改为推荐构造器注入和setter注入。</p><h2 id="一、依赖注入的类型" tabindex="-1"><a class="header-anchor" href="#一、依赖注入的类型" aria-hidden="true">#</a> 一、依赖注入的类型</h2><p>尽管针对spring framerwork 5.1.3的文档只定义了两种主要的依赖注入类型，但实际上有三种：</p><p>基于构造函数的依赖注入 基于setter的依赖注入 基于字段的依赖注入</p><p>其中基于字段的依赖注入被广泛使用，但是idea或者其他静态代码分析工具会给出提示信息，不推荐使用。</p><p>@Component public class FormPlatformServiceImpl {</p><p>private final RolesManageDao rolesManageDao;</p><p>@Autowired     public FormPlatformServiceImpl(RolesManageDao rolesManageDao) {         this.rolesManageDao = rolesManageDao;     } } 然后在spring官方文档中，@Autowired注解也是可以省去的。</p><p>public class SimpleMovieLister {</p><p>// the SimpleMovieLister has a dependency on a MovieFinder     private MovieFinder movieFinder;</p><p>// a constructor so that the Spring container can inject a MovieFinder     public SimpleMovieLister(MovieFinder movieFinder) {         this.movieFinder = movieFinder;     }</p><p>// business logic that actually uses the injected MovieFinder is omitted... } 基于构造函数注入的主要优点是可以将需要注入的字段声明为final， 使得它们会在类实例化期间被初始化，这对于所需的依赖项很方便。</p><h2 id="二、基于setter的依赖注入" tabindex="-1"><a class="header-anchor" href="#二、基于setter的依赖注入" aria-hidden="true">#</a> 二、基于Setter的依赖注入</h2><p>在基于setter的依赖注入中，setter方法被标注为@Autowired。</p><p>一旦使用无参数构造函数或无参数静态工厂方法实例化Bean，为了注入Bean的依赖项，Spring容器将调用这些setter方法。</p><p>@Component public class FormPlatformServiceImpl {</p><p>private RolesManageDao rolesManageDao;</p><p>@Autowired     public void setRolesManageDao(RolesManageDao rolesManageDao) {         this.rolesManageDao = rolesManageDao;     } } 和基于构造器的依赖注入一样，在官方文档中，基于Setter的依赖注入中的@Autowired也可以省去。</p><p>public class SimpleMovieLister {</p><p>// the SimpleMovieLister has a dependency on the MovieFinder     private MovieFinder movieFinder;</p><p>// a setter method so that the Spring container can inject a MovieFinder     public void setMovieFinder(MovieFinder movieFinder) {         this.movieFinder = movieFinder;     }</p><p>// business logic that actually uses the injected MovieFinder is omitted... }</p><h2 id="三、基于属性的依赖注入" tabindex="-1"><a class="header-anchor" href="#三、基于属性的依赖注入" aria-hidden="true">#</a> 三、基于属性的依赖注入</h2><p>在基于属性的依赖注入中，字段/属性被标注为@Autowired。一旦类被实例化，Spring容器将设置这些字段。</p><p>@Service public class FormPlatformServiceImpl {     @Autowired private MemberInfoDao memberInfoDao; } 正如所看到的，这是依赖注入最干净的方法，因为它避免了添加样板代码，并且不需要声明类的构造函数。</p><p>代码看起来很干净简洁，但是正如代码检查器已经向我们暗示的那样，这种方法有一些缺点。</p><h2 id="四、基于字段的依赖注入缺陷" tabindex="-1"><a class="header-anchor" href="#四、基于字段的依赖注入缺陷" aria-hidden="true">#</a> 四、基于字段的依赖注入缺陷</h2><p>1、不允许声明不可变域 基于字段的依赖注入在声明为final/immutable的字段上不起作用，因为这些字段必须在类实例化时实例化。</p><p>声明不可变依赖项的唯一方法是使用基于构造器的依赖注入。</p><p>2、容易违反单一职责设计原则 在面向对象的编程中，六大设计原则被广泛应用，用以提高代码的重用性，可读性，可靠性和可维护性；</p><p>单一职责原则，即一个类应该只负责一项职责，这个类提供的所有服务都应该只为它负责的职责服务。</p><p>使用基于字段的依赖注入，高频使用的类随着时间的推移，我们会在类中逐渐添加越来越多的依赖项，我们用着很爽，很容易忽略类中的依赖已经太多了。 但是如果使用基于构造函数的依赖注入，随着越来越多的依赖项被添加到类中，项目在启动中就能发现循环依赖问题。</p><p>有一个有超过6个参数的构造函数是一个明显的信号，表明类已经转变一个大而全的功能合集，需要将类分割成更小、更容易维护的块。</p><p>3、与依赖注入容器紧密耦合 使用基于字段的依赖注入的主要原因是为了避免getter和setter的样板代码或为类创建构造函数。最后，这意味着设置这些字段的唯一方法是通过Spring容器实例化类并使用反射注入它们，否则字段将保持null。</p><p>依赖注入设计模式将类依赖项的创建与类本身分离开来，并将此责任转移到类注入容器，从而允许程序设计解耦，并遵循单一职责和依赖项倒置原则。</p><p>因此，通过自动装配（autowiring）字段来实现的类的解耦，最终会因为再次与类注入容器(在本例中是Spring)耦合而丢失，从而使类在Spring容器之外变得无用。</p><p>这意味着，如果您想在应用程序容器之外使用您的类，例如用于单元测试，您将被迫使用Spring容器来实例化您的类，因为没有其他可能的方法(除了反射)来设置自动装配字段。</p><h2 id="五、业务无法避免-如何解耦" tabindex="-1"><a class="header-anchor" href="#五、业务无法避免-如何解耦" aria-hidden="true">#</a> 五、业务无法避免，如何解耦</h2><p>如果业务比较复杂，或者无法重构，来不及改造，两个bean循环依赖解决方法如下：</p><p>1.采用spring监听模式，进行解耦；</p><img${
    (0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/java/spring_bean_202304243.png'))
  } alt=""><h2 id="六、总结" tabindex="-1"><a class="header-anchor" href="#六、总结" aria-hidden="true">#</a> 六、总结</h2><p>基于字段的注入应该尽可能地避免，因为它有许多缺点，无论它看起来多么优雅。</p><p>推荐的方法是使用基于构造函数依赖注入。</p><p>1.使用@RequiredArgsConstructor注解，可以自动给final标识的字段生成构造函数，看起来更加简洁，如下图：</p><img${
    (0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/java/spring_bean_202304241.png'))
  } alt=""><p>2.当然也可以自己生成相应的构造函数，如下图：</p><img${
    (0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/java/spring_bean_2023042402.png'))
  } alt=""><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_spring_bean_dependent.html.vue?vue&type=template&id=3e0749e6

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_spring_bean_dependent.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\java\\java_spring_bean_dependent.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const java_spring_bean_dependent_html = (script);

/***/ })

};
;
//# sourceMappingURL=2009.app.js.map