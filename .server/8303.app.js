"use strict";
exports.id = 8303;
exports.ids = [8303];
exports.modules = {

/***/ 4381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-09052b84",
  "path": "/framework/SOA.html",
  "title": "SOA",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "framework/SOA.md",
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

/***/ 6534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SOA_html)
});

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/framework/SOA.html.vue?vue&type=template&id=0435c476


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="soa" tabindex="-1"><a class="header-anchor" href="#soa" aria-hidden="true">#</a> SOA</h1><p>SOA 是面向服务的架构，即企业的 IT 系统是由服务组成的，也即企业的各个应用系统是由许多标准的服务件“组装”起来的，组成应用系统中的各个服务之间是一种非常松耦合的关系。</p><p>服务基于简单的“问/答”模型——我问你问题，你给我答案，那么对于“我”来说，“你”就是“服务”。但是答案反馈有同步和异步之分，同步就是我问你问题并在线等待你答复，而异步就是我问完你问题就去忙其他事情了，你有了答案之后再通知我。</p><p>在软件行业，基于这种服务的编程思想最早表现为函数，即把经常用到的代码块定义成一个函数并取一个函数名，再用函数名替换程序中原先的代码块（称为函数调用）。</p><p>比如通过三条边计算三角形的面积，这个任务包含复杂的数学公式，涉及很多条指令，我们可以把它定义为函数 sane（x，y，z），然后在程序需要计算三角形面积时直接调用这个函数即可。比如 sane（10，20，25），就会返回边长为 10、20、25 的三角形的面积。</p><p>后来人们觉得函数还不够灵活，就提出了模块，模块比函数功能更强，程序就是由模块组装起来的。当然，编写具体的模块时会继续采用函数。模块本质上就是一组类库（一个类库文件包含若干定义好了的功能较为强大的函数），允许软件开发人员调用类库中的函数。</p><p>一些好的面向特定应用领域的模块以开源或者商业模式对外发布，世界各地的其他开发人员可以直接利用这些模块来开发自己的应用程序，从而减少大量重复性的代码编写工作，这样的模块人们习惯称之为框架。例如，利用 Python 语言开发网站的框架 Django，它就是一组类库，编程人员必须掌握需要用到的每个类库函数的定义，才能快速开发网站。</p><p>无论是函数还是模块，都要求在程序运行前“组装”好。一旦“组装”完成，函数或模块就静态地捆绑在一起了，所以人们还是觉得不够灵活，于是又提出了运行库的概念（关于运行库的介绍可参见《IT系统组成》教程）。</p><p>Gartner 公司在 1996 年进一步提出了 SOA 的概念，意为面向服务的架构，本质上是面向服务的思想在企业 IT 架构方面的应用。面向服务的思想，是面向对象思想之后的一种新的思想模式，其核心特征就是以松耦合、粗粒度的服务单元来构建软件。作为一种思想，SOA 不涉及任何具体的实现技术细节，但是思想终归要落地才会带来社会效益。</p><p>人们发现，企业服务总线（简称为 ESB）是实现 SOA 的主要技术之一，于是 ESB 也就成为 SOA 的核心技术基础。当然，不用 ESB 也不能说你的系统就不是 SOA，比如现在流行的微服务就是 SOA 的一种具体实现，它采用容器对服务打包。SOA 所实现产品的核心任务是管理企业中的服务单元，具体的任务可分解为：服务单元的登记、服务单元的调用、服务单元的运行、服务单元的部署、用户管理界面，以及安全控制等。</p><p>服务与模块的主要区别在于：模块相当于汽车发动机的零配件，而服务就相当于发动机本身，发动机可以独立运转，而零件就不行。</p><p>函数一般由开发语言编译器的公司提供，如 C 语言编译器有微软的 Visual C++、Borland 公司的 Borland C、开源组织提供的 GCC 等，框架一般由软件开发厂商或开源组织提供，如 Django、Drupal、JSON、Spring、jQuery 等，而服务一般由运营商提供。</p><p>企业的软件应用系统和服务的关系像极了人类社会中的项目和人的关系，企业要实施一个项目，先去人才网站招聘各种人员组建团队，然后团队成员各司其职，共同完成项目。</p><p>求职者事先要在人才招聘网站注册并发布简历，然后等待招聘电话。那么在 SOA 中，也有一个类似人才网站的机构，服务必须先在这个机构里注册，当有需求的时候，其他服务或者应用系统就会在这个机构里搜索能满足需求的服务，并且调用这些服务来完成某个任务。服务像孙悟空一样具备分身术，即同一个服务能分身出很多个体，这些个体分别被其他服务调用，这一点又与现实生活中的求职者不同。</p><p>服务是无状态的，即服务在被调用前后本身没有变化，且同一个服务允许同时在多台计算机上运行，这样就能轻松实现高可用性计算及负载均衡集群，示意图如图 1 所示。</p><img${
    (0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/framework/soa202108261.jpg'))
  } alt="SOA"><p>最终我们可以想象一下，企业的很多台服务器上运行着各种各样的标准服务，众多的应用系统对应各自的服务调用关系描述表，“组装”一个应用软件由公司文员即可快速轻松地完成。</p><p>在云端，由于应用繁多且由一家公司运营，所以云运营公司是采用 SOA 的最佳场所。可以预计，在云计算时代，SOA 将得到广泛应用。在业界，也有人认为云计算将是 SOA 的终结者，这个观点把不同层次的东西混为一谈，云计算不是新的技术和思想，它只是人们使用计算资源的一种模式，而 SOA 是一种全新的软件构架思想。</p><p>ESB 是实现 SOA 的主要技术之一，SOA 是组建大型云端的重要思想之一。SOA 的概念已经提出了十几年，之前在传统的企业很难落地生根，根本原因就是一家企业的各种软件系统往往是由不同的软件公司开发的，而这些软件公司具备竞争关系，各自为政，很难协调一致地推出符合 SOA 标准的通用解决方案。</p><p>SOA 的实施就是以程序员的视角把公司的业务拆分成一个个服务标准件，然后再选择合适的标准件“组装”成各种应用软件系统。有了一定规模的服务标准件库后，“组装”应用系统就显得异常简单快捷了。在一个高度智能化的 SOA 环境中，“组装”本身也是自动化的。</p><p>一个公司的软件应用系统越多、越复杂，实施 SOA 就越有价值，因为每个服务标准件得到重复使用的概率就越高；相反，如果一个公司只有一个软件系统，而且以后也不会使用更多的应用系统，那么根本没必要采用 SOA。</p><p>“拆分”工作是实施 SOA 成功与否的关键，拆分视角、拆分原则和拆分粒度（服务标准件的大小）必须事先科学规划。最小的拆分粒度就是一个服务对应某种编程语言的一条语句，这时“组装”软件系统就是传统的软件开发，由软件开发工程师来完成；最大的拆分粒度就是一个应用系统对应一个服务，这时“组装”软件系统就是安装一个应用软件系统，由系统管理员来完成。</p><p>科学的拆分粒度介于这两种拆分粒度之间，拆分出来的服务标准件既具备一定的可重用性，又能大大简化“组装”程序的复杂性。通行的做法是，先在软件系统的传统“三层”分层结构的基础上，纵向划分出更多的层次，然后对每一层结合企业的业务特点横向划分出多个“块”，每个“块”完成少量的业务逻辑，这样的“块”就是一个服务标准件。拆分的过程是一个不断进化的动态过程，也是一个由粗粒度到细粒度不断演化的过程。</p><p>软件的传统“三层”分层结构是指展现层、业务逻辑层和数据层。为了理解它们，请看下面的例子。</p><p>王老师打开学校的考试网站，然后查看张宇法同学的“云计算”课程综合考评分数，屏幕上显示 89 分，如图 2 所示。</p><img${
    (0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/framework/soa202108262.jpg'))
  } alt="软件的传统“三层”分层结构"><p>数据层里保存着原始的数据（比如平时成绩和期末成绩），业务逻辑层根据具体的业务要求对数据层里的数据进行加工处理（比如平时成绩按 30%、期末成绩按 70% 计算总评分数；学工处分配助学金时只看期末成绩，即平时成绩按 0%、期末成绩按 100% 计算），展现层决定以什么样式来显示业务逻辑层加工处理的结果（比如以白底黑字宋体 30 字号显示“89”）。</p><p>在设计数据层时，重点考虑库表结构；在设计业务逻辑层时，根据具体的业务要求编写加工处理算法；而在设计展现层时，重点考虑屏幕上的内容布局和显示样式。业务逻辑层本质上就是把数据层中的数据映射到展现层上，到底如何映射，与具体的业务有关。</p><p>在现实中，有的程序员喜欢使用存储过程把部分或全部的业务逻辑算法放入数据层，这样做有一个明显的缺点，即难以对系统做横向扩容来满足日益增长的用户访问量。因为数据层本身带有状态，对带有状态的系统扩容最常用的办法是纵向扩容，而纵向扩容比横向扩容成本更高、难度更大，因为纵向扩容目前的方法就是给单独的服务器增加更多的 CPU、内存等计算资源。</p><p>目前部署 SOA 的应用环境有开源产品和商业产品，开源产品有 WSO2、Dubbo 和 Mule ESB，后者侧重于企业服务总线，不是一个完整的 SOA 套件，这三个开源产品是用 Java 语言开发的，另外一个 ZATO 开源项目是采用 Python 语言开发的；商业产品有 Oracle SOA 套件和 IBM SOA 基础栈等。</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/framework/SOA.html.vue?vue&type=template&id=0435c476

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/framework/SOA.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\framework\\SOA.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const SOA_html = (script);

/***/ })

};
;
//# sourceMappingURL=8303.app.js.map