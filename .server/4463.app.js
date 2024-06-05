"use strict";
exports.id = 4463;
exports.ids = [4463];
exports.modules = {

/***/ 1749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5443dfbd",
  "path": "/java/java_jvm_option.html",
  "title": "JVM调优常用参数",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "GC常用参数",
      "slug": "gc常用参数",
      "children": []
    },
    {
      "level": 2,
      "title": "Parallel常用参数",
      "slug": "parallel常用参数",
      "children": []
    },
    {
      "level": 2,
      "title": "CMS常用参数",
      "slug": "cms常用参数",
      "children": []
    },
    {
      "level": 2,
      "title": "G1常用参数",
      "slug": "g1常用参数",
      "children": []
    }
  ],
  "filePathRelative": "java/java_jvm_option.md",
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

/***/ 6858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ java_jvm_option_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/java/java_jvm_option.html.vue?vue&type=template&id=2e3dedb8



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="jvm调优常用参数" tabindex="-1"><a class="header-anchor" href="#jvm调优常用参数" aria-hidden="true">#</a> JVM调优常用参数</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#gc常用参数" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`GC常用参数`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("GC常用参数")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#parallel常用参数" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Parallel常用参数`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Parallel常用参数")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#cms常用参数" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`CMS常用参数`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("CMS常用参数")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#g1常用参数" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`G1常用参数`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("G1常用参数")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></nav><h2 id="gc常用参数" tabindex="-1"><a class="header-anchor" href="#gc常用参数" aria-hidden="true">#</a> GC常用参数</h2><p>-Xmn -Xms -Xmx -Xss<br> 年轻代 最小堆 最大堆 栈空间<br> -XX:+UseTLAB<br> 使用TLAB，默认打开<br> -XX:+PrintTLAB<br> 打印TLAB的使用情况<br> -XX:TLABSize<br> 设置TLAB大小<br> -XX:+DisableExplictGC<br> System.gc()不管用 ，FGC<br> -XX:+PrintGC<br> -XX:+PrintGCDetails<br> -XX:+PrintHeapAtGC<br> -XX:+PrintGCTimeStamps<br> -XX:+PrintGCApplicationConcurrentTime (低)<br> 打印应用程序时间<br> -XX:+PrintGCApplicationStoppedTime （低）<br> 打印暂停时长<br> -XX:+PrintReferenceGC （重要性低）<br> 记录回收了多少种不同引用类型的引用<br> -verbose:class<br> 类加载详细过程<br> -XX:+PrintVMOptions<br> -XX:+PrintFlagsFinal -XX:+PrintFlagsInitial</p><blockquote><ul><li>必须会用</li></ul></blockquote><p>-Xloggc:opt/log/gc.log<br> -XX:MaxTenuringThreshold<br> 升代年龄，最大值15<br> 锁自旋次数 -XX:PreBlockSpin 热点代码检测参数-XX:CompileThreshold 逃逸分析 标量替换 …<br> 这些不建议设置</p><h2 id="parallel常用参数" tabindex="-1"><a class="header-anchor" href="#parallel常用参数" aria-hidden="true">#</a> Parallel常用参数</h2><p>-XX:SurvivorRatio<br> -XX:PreTenureSizeThreshold<br> 大对象到底多大<br> -XX:MaxTenuringThreshold<br> -XX:+ParallelGCThreads<br> 并行收集器的线程数，同样适用于CMS，一般设为和CPU核数相同<br> -XX:+UseAdaptiveSizePolicy<br> 自动选择各区大小比例</p><h2 id="cms常用参数" tabindex="-1"><a class="header-anchor" href="#cms常用参数" aria-hidden="true">#</a> CMS常用参数</h2><p>-XX:+UseConcMarkSweepGC<br> -XX:ParallelCMSThreads<br> CMS线程数量<br> -XX:CMSInitiatingOccupancyFraction<br> 使用多少比例的老年代后开始CMS收集，默认是68%(近似值)，如果频繁发生SerialOld卡顿，应该调小，（频繁CMS回收）<br> -XX:+UseCMSCompactAtFullCollection<br> 在FGC时进行压缩<br> -XX:CMSFullGCsBeforeCompaction<br> 多少次FGC之后进行压缩<br> -XX:+CMSClassUnloadingEnabled<br> -XX:CMSInitiatingPermOccupancyFraction<br> 达到什么比例时进行Perm回收<br> GCTimeRatio<br> 设置GC时间占用程序运行时间的百分比<br> -XX:MaxGCPauseMillis<br> 停顿时间，是一个建议时间，GC会尝试用各种手段达到这个时间，比如减小年轻代</p><h2 id="g1常用参数" tabindex="-1"><a class="header-anchor" href="#g1常用参数" aria-hidden="true">#</a> G1常用参数</h2><p>-XX:+UseG1GC<br> -XX:MaxGCPauseMillis<br> 建议值，G1会尝试调整Young区的块数来达到这个值<br> -XX:GCPauseIntervalMillis<br> ？GC的间隔时间<br> -XX:+G1HeapRegionSize<br> 分区大小，建议逐渐增大该值，1 2 4 8 16 32。<br> 随着size增加，垃圾的存活时间更长，GC间隔更长，但每次GC的时间也会更长<br> ZGC做了改进（动态区块大小）<br> G1NewSizePercent<br> 新生代最小比例，默认为5%<br> G1MaxNewSizePercent<br> 新生代最大比例，默认为60%<br> GCTimeRatio<br> GC时间建议比例，G1会根据这个值调整堆空间<br> ConcGCThreads<br> 线程数量<br> InitiatingHeapOccupancyPercent<br> 启动G1的堆空间占用比例</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_jvm_option.html.vue?vue&type=template&id=2e3dedb8

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_jvm_option.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\java\\java_jvm_option.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const java_jvm_option_html = (script);

/***/ })

};
;
//# sourceMappingURL=4463.app.js.map