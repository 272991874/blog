"use strict";
exports.id = 6818;
exports.ids = [6818];
exports.modules = {

/***/ 3976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-f3cbef94",
  "path": "/java/java_jvm_gc.html",
  "title": "GC（Garbage Collector）",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1.1 GC垃圾寻找策略",
      "slug": "_1-1-gc垃圾寻找策略",
      "children": [
        {
          "level": 3,
          "title": "1.1.1 Reference Count(引用计数)",
          "slug": "_1-1-1-reference-count-引用计数",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "引用计数算法",
      "slug": "引用计数算法",
      "children": []
    },
    {
      "level": 2,
      "title": "可达性分析算法",
      "slug": "可达性分析算法",
      "children": []
    },
    {
      "level": 2,
      "title": "哪些对象可作为GC Roots？",
      "slug": "哪些对象可作为gc-roots",
      "children": []
    },
    {
      "level": 2,
      "title": "标记-清理算法（Mark-Sweep）",
      "slug": "标记-清理算法-mark-sweep",
      "children": []
    },
    {
      "level": 2,
      "title": "复制算法（Copy）",
      "slug": "复制算法-copy",
      "children": []
    },
    {
      "level": 2,
      "title": "标记-整理算法（Mark-compact）",
      "slug": "标记-整理算法-mark-compact",
      "children": []
    },
    {
      "level": 2,
      "title": "年轻代（复制算法为主）",
      "slug": "年轻代-复制算法为主",
      "children": []
    },
    {
      "level": 2,
      "title": "老年代（标记-整理算法为主）",
      "slug": "老年代-标记-整理算法为主",
      "children": []
    },
    {
      "level": 2,
      "title": "Minor GC和Full GC",
      "slug": "minor-gc和full-gc",
      "children": [
        {
          "level": 3,
          "title": "Minor GC发生条件：",
          "slug": "minor-gc发生条件",
          "children": []
        },
        {
          "level": 3,
          "title": "Full GC发生条件：",
          "slug": "full-gc发生条件",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "java/java_jvm_gc.md",
  "git": {
    "contributors": [
      {
        "name": "yaomin",
        "email": "272991874@qq.com",
        "commits": 3
      }
    ]
  }
}


/***/ }),

/***/ 8826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ java_jvm_gc_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/java/java_jvm_gc.html.vue?vue&type=template&id=e3786ab0



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="gc-garbage-collector" tabindex="-1"><a class="header-anchor" href="#gc-garbage-collector" aria-hidden="true">#</a> GC（Garbage Collector）</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_1-1-gc垃圾寻找策略" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`1.1 GC垃圾寻找策略`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("1.1 GC垃圾寻找策略")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_1-1-1-reference-count-引用计数" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`1.1.1 Reference Count(引用计数)`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("1.1.1 Reference Count(引用计数)")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#引用计数算法" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`引用计数算法`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("引用计数算法")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#可达性分析算法" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`可达性分析算法`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("可达性分析算法")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#哪些对象可作为gc-roots" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`哪些对象可作为GC Roots？`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("哪些对象可作为GC Roots？")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#标记-清理算法-mark-sweep" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`标记-清理算法（Mark-Sweep）`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("标记-清理算法（Mark-Sweep）")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#复制算法-copy" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`复制算法（Copy）`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("复制算法（Copy）")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#标记-整理算法-mark-compact" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`标记-整理算法（Mark-compact）`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("标记-整理算法（Mark-compact）")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#年轻代-复制算法为主" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`年轻代（复制算法为主）`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("年轻代（复制算法为主）")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#老年代-标记-整理算法为主" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`老年代（标记-整理算法为主）`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("老年代（标记-整理算法为主）")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#minor-gc和full-gc" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Minor GC和Full GC`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Minor GC和Full GC")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#minor-gc发生条件" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Minor GC发生条件：`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Minor GC发生条件：")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#full-gc发生条件" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Full GC发生条件：`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Full GC发生条件：")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul></nav><p>Java与C++对垃圾的处理有很大区别</p><p>java:</p><ul><li><p>GC处理垃圾</p></li><li><p>开发效率高，执行效率低 C++:</p></li><li><p>手工回收垃圾，容易产生以下问题</p></li></ul><ol><li>忘记回收，内存泄漏</li><li>回收多次</li><li>非法访问</li><li>开发效率低，执行效率高</li></ol><h2 id="_1-1-gc垃圾寻找策略" tabindex="-1"><a class="header-anchor" href="#_1-1-gc垃圾寻找策略" aria-hidden="true">#</a> 1.1 GC垃圾寻找策略</h2><h3 id="_1-1-1-reference-count-引用计数" tabindex="-1"><a class="header-anchor" href="#_1-1-1-reference-count-引用计数" aria-hidden="true">#</a> 1.1.1 Reference Count(引用计数)</h3><blockquote><p>当有一个引用指向一个对象时，就在对象头上写1，有几条引用就在头上写几，当这个数字变成0的时候，就代表这个对象是垃圾</p></blockquote><h2 id="引用计数算法" tabindex="-1"><a class="header-anchor" href="#引用计数算法" aria-hidden="true">#</a> 引用计数算法</h2><p>引用计数算法是判断对象是否存活的算法之一：它给每一个对象加一个引用计数器，每当有一个地方引用它时，计数器值就加1；当引用失效时，计数器值就减1；任何时刻计数器为0的对象就是不可能被使用的，即将被垃圾回收器回收。</p><p>缺点：无法解决对象减互相循环引用的问题。即当两个对象循环引用时，引用计数器都为1，当对象周期结束后应该被回收却无法回收，造成内存泄漏。</p><h2 id="可达性分析算法" tabindex="-1"><a class="header-anchor" href="#可达性分析算法" aria-hidden="true">#</a> 可达性分析算法</h2><p>目前主流使用的都是可达性分析算法来判断对象是否存活。</p><p>算法基本思路：以“GC Roots”作为对象的起点,从此节点开始向下搜索，搜索所走过的路径成为引用链（Reference Chain），当一个对象到GC Roots没有任何引用链相连时，则证明此对象是不可用的。</p><h2 id="哪些对象可作为gc-roots" tabindex="-1"><a class="header-anchor" href="#哪些对象可作为gc-roots" aria-hidden="true">#</a> 哪些对象可作为GC Roots？</h2><p>虚拟机栈（栈帧中的本地变量表）中引用的对象；</p><p>方法区中类静态属性引用的对象；</p><p>方法区中常量引用的对象；</p><p>本地方法栈中JNI（Native方法）引用的对象；</p><p>活跃线程的引用对象。</p><h2 id="标记-清理算法-mark-sweep" tabindex="-1"><a class="header-anchor" href="#标记-清理算法-mark-sweep" aria-hidden="true">#</a> 标记-清理算法（Mark-Sweep）</h2><p>算法思路：算法分为“标记”和“清理”两个步骤，首先标记处所有需要回收的对象，在标记完成后再统一回收所有被标记的对象。</p><p>缺陷：</p><ul><li><p>标记和清理的两个过程效率都不高；</p></li><li><p>容易产生内存碎片，碎片空间太多可能导致无法存放大对象。</p></li></ul><p>适用于存活对象占多数的情况。</p><h2 id="复制算法-copy" tabindex="-1"><a class="header-anchor" href="#复制算法-copy" aria-hidden="true">#</a> 复制算法（Copy）</h2><p>算法思路：将可用内存划分为大小相等的两块，每次只使用其中的一块。当这一块内存用完后，就将还存活的对象复制到另一块去，然后再把已使用过的内存空间一次清理掉。</p><p>缺陷：</p><ul><li>可用内存缩小为了原来的一半</li></ul><p>算法执行效率高，适用于存活对象占少数的情况。</p><h2 id="标记-整理算法-mark-compact" tabindex="-1"><a class="header-anchor" href="#标记-整理算法-mark-compact" aria-hidden="true">#</a> 标记-整理算法（Mark-compact）</h2><p>算法思路：标记过程和标记-清理算法一样，而后面的不一样，它是让所有存活的对象都向一端移动，然后直接清理掉端边界以外的内存</p><p>有效地避免了内存碎片的产生。</p><h2 id="年轻代-复制算法为主" tabindex="-1"><a class="header-anchor" href="#年轻代-复制算法为主" aria-hidden="true">#</a> 年轻代（复制算法为主）</h2><p>尽可能快的收集掉声明周期短的对象。整个年轻代占1/3的堆空间，年轻代分为三个区，Eden、Survivor-from、Survivor-to，其内存大小默认比例为8:1:1（可调整），大部分新创建的对象都是在Eden区创建。当回收时，先将Eden区存活对象复制到一个Survivor-from区，然后清空Eden区，存活的对象年龄+1；当这个Survivor-from区也存放满了时，则将Eden区和Survivor-from区存活对象复制到另一个Survivor-to区，然后清空Eden和这个Survivor-from区，存活的对象年龄+1；此时Survivor-from区是空的，然后将Survivor-from区和Survivor-to区交换，即保持Survivor-from区为空（此时的Survivor-from是原来的Survivor-to区）， 如此往复。年轻代执行的GC是Minor GC。</p><p>年轻代的迭代更新很快，大多数对象的存活时间都比较短，所以对GC的效率和性能要求较高，因此使用复制算法，同时这样划分为三个区域，保证了每次GC仅浪费10%的内存，内存利用率也有所提高。</p><h2 id="老年代-标记-整理算法为主" tabindex="-1"><a class="header-anchor" href="#老年代-标记-整理算法为主" aria-hidden="true">#</a> 老年代（标记-整理算法为主）</h2><p>在年轻代经过很多次垃圾回收之后仍然存活的对象（默认15岁），就会被放入老年代中，因为老年代中的对象大多数是存活的，所以使用算法是标记-整理算法。老年代执行的GC是Full GC。</p><h2 id="minor-gc和full-gc" tabindex="-1"><a class="header-anchor" href="#minor-gc和full-gc" aria-hidden="true">#</a> Minor GC和Full GC</h2><ul><li><p>Minor GC即新生代GC：发生在新生代的垃圾收集动作，因为Java有朝生夕灭的特性，所以Minor GC非常频繁，一般回收速度也比较快。</p></li><li><p>Major GC / Full GC：发生在老年代，经常会伴随至少一次Minor GC。Major GC的速度一般会比Minor GC慢倍以上。</p></li></ul><h3 id="minor-gc发生条件" tabindex="-1"><a class="header-anchor" href="#minor-gc发生条件" aria-hidden="true">#</a> Minor GC发生条件：</h3><p>当新对象生成，并且在Eden申请空间失败时；</p><h3 id="full-gc发生条件" tabindex="-1"><a class="header-anchor" href="#full-gc发生条件" aria-hidden="true">#</a> Full GC发生条件：</h3><ul><li><p>老年代空间不足</p></li><li><p>永久带空间不足（jdk8以前）</p></li><li><p>System.gc()被显示调用</p></li><li><p>Minor GC晋升到老年代的平均大小大于老年代的剩余空间</p></li><li><p>使用RMI来进行RPC或管理的JDK应用，每小时执行1次Full GC</p></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_jvm_gc.html.vue?vue&type=template&id=e3786ab0

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_jvm_gc.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\java\\java_jvm_gc.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const java_jvm_gc_html = (script);

/***/ })

};
;
//# sourceMappingURL=6818.app.js.map