"use strict";
exports.id = 2749;
exports.ids = [2749];
exports.modules = {

/***/ 7272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-47b7d17d",
  "path": "/java/java_jvm_tuning.html",
  "title": "jvm调优",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "jvm调优",
    "sidebar": "auto",
    "sidebarDepth": 2
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1 调优前的基础概念",
      "slug": "_1-调优前的基础概念",
      "children": []
    },
    {
      "level": 2,
      "title": "2 什么是调优？",
      "slug": "_2-什么是调优",
      "children": []
    },
    {
      "level": 2,
      "title": "3 调优，从规划开始",
      "slug": "_3-调优-从规划开始",
      "children": [
        {
          "level": 3,
          "title": "规划步骤：",
          "slug": "规划步骤",
          "children": []
        },
        {
          "level": 3,
          "title": "优化环境：",
          "slug": "优化环境",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3.1 日志详解",
      "slug": "_3-1-日志详解",
      "children": []
    },
    {
      "level": 2,
      "title": "3.2 CMS日志分析",
      "slug": "_3-2-cms日志分析",
      "children": []
    },
    {
      "level": 2,
      "title": "3.3 G1日志详解",
      "slug": "_3-3-g1日志详解",
      "children": [
        {
          "level": 3,
          "title": "OOM产生的问题汇总",
          "slug": "oom产生的问题汇总",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "java/java_jvm_tuning.md",
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

/***/ 8234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ java_jvm_tuning_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/java/java_jvm_tuning.html.vue?vue&type=template&id=2876c742



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="jvm调优" tabindex="-1"><a class="header-anchor" href="#jvm调优" aria-hidden="true">#</a> jvm调优</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_1-调优前的基础概念" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`1 调优前的基础概念`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("1 调优前的基础概念")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_2-什么是调优" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`2 什么是调优？`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("2 什么是调优？")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_3-调优-从规划开始" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`3 调优，从规划开始`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("3 调优，从规划开始")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#规划步骤" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`规划步骤：`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("规划步骤：")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#优化环境" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`优化环境：`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("优化环境：")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_3-1-日志详解" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`3.1 日志详解`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("3.1 日志详解")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_3-2-cms日志分析" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`3.2 CMS日志分析`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("3.2 CMS日志分析")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_3-3-g1日志详解" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`3.3 G1日志详解`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("3.3 G1日志详解")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#oom产生的问题汇总" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`OOM产生的问题汇总`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("OOM产生的问题汇总")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul></nav><h2 id="_1-调优前的基础概念" tabindex="-1"><a class="header-anchor" href="#_1-调优前的基础概念" aria-hidden="true">#</a> 1 调优前的基础概念</h2><p>吞吐量：用户代码执行时间 / (垃圾回收时间 + 用户代码执行时间)<br> 响应时间：STW时间越短，响应时间越好<br> 所谓调优，首先确定，追求啥？吞吐量优先，还是响应时间优先？还是在满足一定的响应时间的情况下，要求达到多大的吞吐量…<br> 吞吐量优先：科学计算，吞吐量。数据挖掘，thrput。（PS + PO）<br> 响应时间优先：网站 GUI API （1.8 G1）</p><h2 id="_2-什么是调优" tabindex="-1"><a class="header-anchor" href="#_2-什么是调优" aria-hidden="true">#</a> 2 什么是调优？</h2><p>根据需求进行JVM规划和预调优<br> 优化运行JVM运行环境（慢，卡顿）<br> 解决JVM运行过程中出现的各种问题(OOM)</p><h2 id="_3-调优-从规划开始" tabindex="-1"><a class="header-anchor" href="#_3-调优-从规划开始" aria-hidden="true">#</a> 3 调优，从规划开始</h2><p>调优，从业务场景开始，没有业务场景的调优都是耍流氓<br> 无监控（压力测试，能看到结果），不调优</p><h3 id="规划步骤" tabindex="-1"><a class="header-anchor" href="#规划步骤" aria-hidden="true">#</a> 规划步骤：</h3><p>熟悉业务场景（没有最好的垃圾回收器，只有最合适的垃圾回收器）<br> 响应时间、停顿时间 [CMS G1 ZGC] （需要给用户作响应）<br> 吞吐量 = 用户时间 /( 用户时间 + GC时间) [PS]<br> 选择回收器组合<br> 计算内存需求（经验值 1.5G 16G）<br> 选定CPU（越高越好）<br> 设定年代大小、升级年龄<br> 设定日志参数或者每天产生一个日志文件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-Xloggc:/opt/xxx/logs/xxx-xxx-gc-%t.log <span class="token punctuation">\\</span>
-XX:+UseGCLogFileRotation <span class="token punctuation">\\</span>
-XX:NumberOfGCLogFiles<span class="token operator">=</span><span class="token number">5</span> <span class="token punctuation">\\</span>
-XX:GCLogFileSize<span class="token operator">=</span>20M <span class="token punctuation">\\</span>
-XX:+PrintGCDetails <span class="token punctuation">\\</span>
-XX:+PrintGCDateStamps <span class="token punctuation">\\</span>
-XX:+PrintGCCause
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>观察日志情况</p><h3 id="优化环境" tabindex="-1"><a class="header-anchor" href="#优化环境" aria-hidden="true">#</a> 优化环境：</h3><p>1.有一个50万PV的资料类网站（从磁盘提取文档到内存）原服务器32位，1.5G 的堆，用户反馈网站比较缓慢，因此公司决定升级，新的服务器为64位，16G 的堆内存，结果用户反馈卡顿十分严重，反而比以前效率更低了 为什么原网站慢? 很多用户浏览数据，很多数据load到内存，内存不足，频繁GC，STW长，响应时间变慢 为什么会更卡顿？ 内存越大，FGC时间越长<br> 咋办？ PS -&gt; PN + CMS 或者 G1<br> 2.系统CPU经常100%，如何调优？(面试高频) CPU100%那么一定有线程在占用系统资源， 找出哪个进程cpu高（top）<br> 该进程中的哪个线程cpu高（top -Hp）<br> 导出该线程的堆栈 (jstack)<br> 查找哪个方法（栈帧）消耗时间 (jstack)<br> 工作线程占比高 | 垃圾回收线程占比高<br> 3.系统内存飙高，如何查找问题？（面试高频）<br> 导出堆内存 (jmap) 分析 (jhat jvisualvm mat jprofiler … )<br> 4.如何监控JVM jstat jvisualvm jprofiler arthas top…</p><h2 id="_3-1-日志详解" tabindex="-1"><a class="header-anchor" href="#_3-1-日志详解" aria-hidden="true">#</a> 3.1 日志详解</h2><img${
    (0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/gc-log.jpg'))
  } alt="hashcode"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>eden space 5632K, <span class="token number">94</span>% used
<span class="token punctuation">[</span>0x00000000ff980000 , 0x00000000ffeb3e28 , 0x00000000fff00000<span class="token punctuation">)</span>
<span class="token comment">#起始地址 ，使用空间结束地址 ，整体空间结束地址</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><img${
    (0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/gc-log-heap.jpg'))
  } alt="hashcode"><h2 id="_3-2-cms日志分析" tabindex="-1"><a class="header-anchor" href="#_3-2-cms日志分析" aria-hidden="true">#</a> 3.2 CMS日志分析</h2><p>执行命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java <span class="token punctuation">\\</span>
-Xms20M <span class="token punctuation">\\</span>
-Xmx20M <span class="token punctuation">\\</span>
-XX:+PrintGCDetails <span class="token punctuation">\\</span>
-XX:+UseConcMarkSweepGC <span class="token punctuation">\\</span>
com.jvm.gc.Problem01

<span class="token punctuation">[</span>GC <span class="token punctuation">(</span>Allocation Failure<span class="token punctuation">)</span> <span class="token punctuation">[</span>ParNew: 6144K-<span class="token operator">&gt;</span>640K<span class="token punctuation">(</span>6144K<span class="token punctuation">)</span>, <span class="token number">0.0265885</span> secs<span class="token punctuation">]</span> 6585K-<span class="token operator">&gt;</span>2770K<span class="token punctuation">(</span>19840K<span class="token punctuation">)</span>, <span class="token number">0.0268035</span> secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.02</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.02</span> secs<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>ParNew：年轻代收集器<br> 6144-&gt;640：收集前后的对比<br> （6144）：整个年轻代容量<br> 6585 -&gt; 2770：整个堆的情况<br> （19840）：整个堆大小</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>GC <span class="token punctuation">(</span>CMS Initial Mark<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token number">1</span> CMS-initial-mark: 8511K<span class="token punctuation">(</span>13696K<span class="token punctuation">)</span><span class="token punctuation">]</span> 9866K<span class="token punctuation">(</span>19840K<span class="token punctuation">)</span>, <span class="token number">0.0040321</span> secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.01</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.00</span> secs<span class="token punctuation">]</span> 
    <span class="token comment">#8511 (13696) : 老年代使用（最大）</span>
    <span class="token comment">#9866 (19840) : 整个堆使用（最大）</span>
<span class="token punctuation">[</span>CMS-concurrent-mark-start<span class="token punctuation">]</span>
<span class="token punctuation">[</span>CMS-concurrent-mark: <span class="token number">0.018</span>/0.018 secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.01</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.02</span> secs<span class="token punctuation">]</span> 
    <span class="token comment">#这里的时间意义不大，因为是并发执行</span>
<span class="token punctuation">[</span>CMS-concurrent-preclean-start<span class="token punctuation">]</span>
<span class="token punctuation">[</span>CMS-concurrent-preclean: <span class="token number">0.000</span>/0.000 secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.00</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.00</span> secs<span class="token punctuation">]</span> 
    <span class="token comment">#标记Card为Dirty，也称为Card Marking</span>
<span class="token punctuation">[</span>GC <span class="token punctuation">(</span>CMS Final Remark<span class="token punctuation">)</span> <span class="token punctuation">[</span>YG occupancy: <span class="token number">1597</span> K <span class="token punctuation">(</span><span class="token number">6144</span> K<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">[</span>Rescan <span class="token punctuation">(</span>parallel<span class="token punctuation">)</span> , <span class="token number">0.0008396</span> secs<span class="token punctuation">]</span><span class="token punctuation">[</span>weak refs processing, <span class="token number">0.0000138</span> secs<span class="token punctuation">]</span><span class="token punctuation">[</span>class unloading, <span class="token number">0.0005404</span> secs<span class="token punctuation">]</span><span class="token punctuation">[</span>scrub symbol table, <span class="token number">0.0006169</span> secs<span class="token punctuation">]</span><span class="token punctuation">[</span>scrub string table, <span class="token number">0.0004903</span> secs<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span> CMS-remark: 8511K<span class="token punctuation">(</span>13696K<span class="token punctuation">)</span><span class="token punctuation">]</span> 10108K<span class="token punctuation">(</span>19840K<span class="token punctuation">)</span>, <span class="token number">0.0039567</span> secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.00</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.00</span> secs<span class="token punctuation">]</span> 
    <span class="token comment">#STW阶段，YG occupancy:年轻代占用及容量</span>
    <span class="token comment">#[Rescan (parallel)：STW下的存活对象标记</span>
    <span class="token comment">#weak refs processing: 弱引用处理</span>
    <span class="token comment">#class unloading: 卸载用不到的class</span>
    <span class="token comment">#scrub symbol(string) table: </span>
        <span class="token comment">#cleaning up symbol and string tables which hold class-level metadata and </span>
        <span class="token comment">#internalized string respectively</span>
    <span class="token comment">#CMS-remark: 8511K(13696K): 阶段过后的老年代占用及容量</span>
    <span class="token comment">#10108K(19840K): 阶段过后的堆占用及容量</span>

<span class="token punctuation">[</span>CMS-concurrent-sweep-start<span class="token punctuation">]</span>
<span class="token punctuation">[</span>CMS-concurrent-sweep: <span class="token number">0.005</span>/0.005 secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.00</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.01</span> secs<span class="token punctuation">]</span> 
    <span class="token comment">#标记已经完成，进行并发清理</span>
<span class="token punctuation">[</span>CMS-concurrent-reset-start<span class="token punctuation">]</span>
<span class="token punctuation">[</span>CMS-concurrent-reset: <span class="token number">0.000</span>/0.000 secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.00</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.00</span> secs<span class="token punctuation">]</span>
    <span class="token comment">#重置内部结构，为下次GC做准备</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="_3-3-g1日志详解" tabindex="-1"><a class="header-anchor" href="#_3-3-g1日志详解" aria-hidden="true">#</a> 3.3 G1日志详解</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>GC pause <span class="token punctuation">(</span>G1 Evacuation Pause<span class="token punctuation">)</span> <span class="token punctuation">(</span>young<span class="token punctuation">)</span> <span class="token punctuation">(</span>initial-mark<span class="token punctuation">)</span>, <span class="token number">0.0015790</span> secs<span class="token punctuation">]</span>
<span class="token comment">#young -&gt; 年轻代 Evacuation-&gt; 复制存活对象 </span>
<span class="token comment">#initial-mark 混合回收的阶段，这里是YGC混合老年代回收</span>
   <span class="token punctuation">[</span>Parallel Time: <span class="token number">1.5</span> ms, GC Workers: <span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">#一个GC线程</span>
      <span class="token punctuation">[</span>GC Worker Start <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>:  <span class="token number">92635.7</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Ext Root Scanning <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>:  <span class="token number">1.1</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Update RS <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>:  <span class="token number">0.0</span><span class="token punctuation">]</span>
         <span class="token punctuation">[</span>Processed Buffers:  <span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Scan RS <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>:  <span class="token number">0.0</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Code Root Scanning <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>:  <span class="token number">0.0</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Object Copy <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>:  <span class="token number">0.1</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Termination <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>:  <span class="token number">0.0</span><span class="token punctuation">]</span>
         <span class="token punctuation">[</span>Termination Attempts:  <span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>GC Worker Other <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>:  <span class="token number">0.0</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>GC Worker Total <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>:  <span class="token number">1.2</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>GC Worker End <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>:  <span class="token number">92636.9</span><span class="token punctuation">]</span>
   <span class="token punctuation">[</span>Code Root Fixup: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
   <span class="token punctuation">[</span>Code Root Purge: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
   <span class="token punctuation">[</span>Clear CT: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
   <span class="token punctuation">[</span>Other: <span class="token number">0.1</span> ms<span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Choose CSet: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Ref Proc: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Ref Enq: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Redirty Cards: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Humongous Register: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Humongous Reclaim: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Free CSet: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
   <span class="token punctuation">[</span>Eden: <span class="token number">0</span>.0B<span class="token punctuation">(</span><span class="token number">1024</span>.0K<span class="token punctuation">)</span>-<span class="token operator">&gt;</span><span class="token number">0</span>.0B<span class="token punctuation">(</span><span class="token number">1024</span>.0K<span class="token punctuation">)</span> Survivors: <span class="token number">0</span>.0B-<span class="token operator">&gt;</span><span class="token number">0</span>.0B Heap: <span class="token number">18</span>.8M<span class="token punctuation">(</span><span class="token number">20</span>.0M<span class="token punctuation">)</span>-<span class="token operator">&gt;</span><span class="token number">18</span>.8M<span class="token punctuation">(</span><span class="token number">20</span>.0M<span class="token punctuation">)</span><span class="token punctuation">]</span>
 <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.00</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.00</span> secs<span class="token punctuation">]</span> 
<span class="token comment">#以下是混合回收其他阶段</span>
<span class="token punctuation">[</span>GC concurrent-root-region-scan-start<span class="token punctuation">]</span>
<span class="token punctuation">[</span>GC concurrent-root-region-scan-end, <span class="token number">0.0000078</span> secs<span class="token punctuation">]</span>
<span class="token punctuation">[</span>GC concurrent-mark-start<span class="token punctuation">]</span>
<span class="token comment">#无法evacuation，进行FGC</span>
<span class="token punctuation">[</span>Full GC <span class="token punctuation">(</span>Allocation Failure<span class="token punctuation">)</span>  18M-<span class="token operator">&gt;</span>18M<span class="token punctuation">(</span>20M<span class="token punctuation">)</span>, <span class="token number">0.0719656</span> secs<span class="token punctuation">]</span>
   <span class="token punctuation">[</span>Eden: <span class="token number">0</span>.0B<span class="token punctuation">(</span><span class="token number">1024</span>.0K<span class="token punctuation">)</span>-<span class="token operator">&gt;</span><span class="token number">0</span>.0B<span class="token punctuation">(</span><span class="token number">1024</span>.0K<span class="token punctuation">)</span> Survivors: <span class="token number">0</span>.0B-<span class="token operator">&gt;</span><span class="token number">0</span>.0B Heap: <span class="token number">18</span>.8M<span class="token punctuation">(</span><span class="token number">20</span>.0M<span class="token punctuation">)</span>-<span class="token operator">&gt;</span><span class="token number">18</span>.8M<span class="token punctuation">(</span><span class="token number">20</span>.0M<span class="token punctuation">)</span><span class="token punctuation">]</span>, <span class="token punctuation">[</span>Metaspace: <span class="token number">38</span>
76K-<span class="token operator">&gt;</span>3876K<span class="token punctuation">(</span>1056768K<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.07</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.07</span> secs<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h1 id="_4-案例理解常用工具" tabindex="-1"><a class="header-anchor" href="#_4-案例理解常用工具" aria-hidden="true">#</a> 4 案例理解常用工具</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jvm<span class="token punctuation">.</span>gc</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ScheduledThreadPoolExecutor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 从数据库中读取信用数据，套用模型，并把结果进行记录和传输
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Problem01</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">CardInfo</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> price <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token class-name">Date</span> birthdate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ScheduledThreadPoolExecutor</span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ScheduledThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor<span class="token punctuation">.</span>DiscardOldestPolicy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        executor<span class="token punctuation">.</span><span class="token function">setMaximumPoolSize</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">modelFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">modelFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CardInfo</span><span class="token punctuation">&gt;</span></span> taskList <span class="token operator">=</span> <span class="token function">getAllCardInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        taskList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>info <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// do something</span>
            executor<span class="token punctuation">.</span><span class="token function">scheduleWithFixedDelay</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">//do sth with info</span>
                info<span class="token punctuation">.</span><span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CardInfo</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAllCardInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CardInfo</span><span class="token punctuation">&gt;</span></span> taskList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">CardInfo</span> ci <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CardInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            taskList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>ci<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> taskList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java <span class="token punctuation">\\</span>
-Xms200M <span class="token punctuation">\\</span>
-Xmx200M <span class="token punctuation">\\</span>
-XX:+PrintGC <span class="token punctuation">\\</span>
com.jvm.gc.Problem01
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>一般是运维团队首先受到报警信息（CPU Memory）<br> top <strong>命令观察到问题：内存不断增长 CPU占用率居高不下</strong><br> top -Hp [pid] 观察进程中的线程，哪个线程CPU和内存占比高<br> **jps 定位具体java进程 **<br> jstack [pid] 定位线程状况，重点关注：WAITING BLOCKED eg. waiting on &lt;0x0000000088ca3310&gt; (a java.lang.Object) 假如有一个进程中100个线程，很多线程都在waiting on ，一定要找到是哪个线程持有这把锁 怎么找？搜索jstack dump的信息，找 ，看哪个线程持有这把锁RUNNABLE 阿里规范里规定，线程的名称（尤其是线程池）都要写有意义的名称 怎么样自定义线程池里的线程名称？（自定义ThreadFactory）<br> jinfo [pid]列出详细信息如启动参数<br> jstat -gc [pid][time] 打印GC信息,动态观察GC情况<br> 定位OOM问题</p><p>jconsole 链接<br> 程序启动加入参数：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java -Djava.rmi.server.hostname<span class="token operator">=</span><span class="token number">192.168</span>.17.11 <span class="token punctuation">\\</span>
-Dcom.sun.management.jmxremote <span class="token punctuation">\\</span>
-Dcom.sun.management.jmxremote.port<span class="token operator">=</span><span class="token number">11111</span> <span class="token punctuation">\\</span>
-Dcom.sun.management.jmxremote.authenticate<span class="token operator">=</span>false <span class="token punctuation">\\</span>
-Dcom.sun.management.jmxremote.ssl<span class="token operator">=</span>false <span class="token punctuation">\\</span>
xxxxxx.jar
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果遭遇 Local host name unknown：XXX的错误，修改/etc/hosts文件，把XXX加入进去</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">192.168</span>.17.11 basic localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>关闭linux防火墙（生产环境中应该打开对应端口）</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> iptables stop
<span class="token function">chkconfig</span> iptables off <span class="token comment">#永久关闭</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>jvisualVM : jvisualVM用法<br> Jprofiler 收费<br> arthas – 阿里巴巴开源的 Java 诊断工具<br> 为什么需要在线排查？ 在生产上我们经常会碰到一些不好排查的问题，例如线程安全问题，用最简单的threaddump或者heapdump不好查到问题原因。为了排查这些问题，有时我们会临时加一些日志，比如在一些关键的函数里打印出入参，然后重新打包发布，如果打了日志还是没找到问题，继续加日志，重新打包发布。对于上线流程复杂而且审核比较严的公司，从改代码到上线需要层层的流转，会大大影响问题排查的进度。<br> jvm观察jvm信息<br> thread定位线程问题<br> dashboard 观察系统情况<br> heapdump + jhat分析<br> jad反编译 动态代理生成类的问题定位 第三方的类（观察代码） 版本问题（确定自己最新提交的版本是不是被使用）<br> redefine 热替换 目前有些限制条件：只能改方法实现（方法已经运行完成），不能改方法名， 不能改属性 m() -&gt; mm()<br> sc – search class<br> watch – watch method<br> 没有包含的功能：jmap<br> 已经上线的系统不用图形界面用什么？（cmdline arthas）<br> 图形界面到底用在什么地方？测试的时候进行监控（压测观察）</p><p>jmap – 输出所有内存中对象的工具，甚至可以将VM 中的heap，以二进制输出成文本 <img${
    (0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/jvm-jmap.jpg'))
  } alt="hashcode"></p><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数：</h4><p>option： 选项参数。<br> pid： 需要打印配置信息的进程ID。<br> executable： 产生核心dump的Java可执行文件。<br> core： 需要打印配置信息的核心文件。<br> server-id 可选的唯一id，如果相同的远程主机上运行了多台调试服务器，用此选项参数标识服务器。<br> remote server IP or hostname 远程调试服务器的IP地址或主机名。</p><h4 id="option" tabindex="-1"><a class="header-anchor" href="#option" aria-hidden="true">#</a> option</h4><p>no option： 查看进程的内存映像信息,类似 Solaris pmap 命令。<br> heap： 显示Java堆详细信息<br> histo[:live]： 显示堆中对象的统计信息<br> clstats：打印类加载器信息<br> finalizerinfo： 显示在F-Queue队列等待Finalizer线程执行finalizer方法的对象<br> dump:：生成堆转储快照<br> F： 当-dump没有响应时，使用-dump或者-histo参数. 在这个模式下,live子参数无效.<br> help：打印帮助信息<br> J：指定传递给运行jmap的JVM的参数</p><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><p>jmap histo [pid] ，显示堆中对象的统计信息<br> jmap -dump:format=b,file=xxx pid ：<br> 线上系统，内存特别大，jmap执行期间会对进程产生很大影响，甚至卡顿（电商不适合）</p><p>设定了参数HeapDump，OOM的时候会自动产生堆转储文件<br> 很多服务器备份（高可用），停掉这台服务器对其他服务器不影响<br> 在线定位(一般小点儿公司用不到)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java 
-Xms20M 
-Xmx20M 
-XX:+UseParallelGC 
-XX:+HeapDumpOnOutOfMemoryError 
com.jvm.gc.Problem01
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>使用MAT / jhat /jvisualvm 进行dump文件分析<br> https://www.cnblogs.com/baihuitestsoftware/articles/6406271.html<br> jhat -J-mx512M xxx.dump http://192.168.17.11:7000<br> 拉到最后：找到对应链接 可以使用OQL查找特定问题对象<br> 找到代码的问题</p><h3 id="oom产生的问题汇总" tabindex="-1"><a class="header-anchor" href="#oom产生的问题汇总" aria-hidden="true">#</a> OOM产生的问题汇总</h3><p>OOM产生的原因多种多样，有些程序未必产生OOM，不断FGC(CPU飙高，但内存回收特别少) （上面案例）</p><p>硬件升级系统反而卡顿的问题<br> 线程池不当运用产生OOM问题<br> tomcat http-header-size过大问题<br> lambda表达式导致方法区溢出问题(MethodArea / Perm Metaspace) LambdaGC.java -XX:MaxMetaspaceSize=9M -XX:+PrintGCDetails</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&quot;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>bin<span class="token entity" title="\\\\">\\\\</span>java.exe&quot;</span> -XX:MaxMetaspaceSize<span class="token operator">=</span>9M -XX:+PrintGCDetails <span class="token string">&quot;-javaagent:C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>JetBrains<span class="token entity" title="\\\\">\\\\</span>IntelliJ IDEA Community Edition 2019.1<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>idea_rt.jar=49316:C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>JetBrains<span class="token entity" title="\\\\">\\\\</span>IntelliJ IDEA Community Edition 2019.1<span class="token entity" title="\\\\">\\\\</span>bin&quot;</span> -Dfile.encoding<span class="token operator">=</span>UTF-8 -classpath <span class="token string">&quot;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>charsets.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>deploy.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>ext<span class="token entity" title="\\\\">\\\\</span>access-bridge-64.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>ext<span class="token entity" title="\\\\">\\\\</span>cldrdata.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>ext<span class="token entity" title="\\\\">\\\\</span>dnsns.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>ext<span class="token entity" title="\\\\">\\\\</span>jaccess.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>ext<span class="token entity" title="\\\\">\\\\</span>jfxrt.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>ext<span class="token entity" title="\\\\">\\\\</span>localedata.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>ext<span class="token entity" title="\\\\">\\\\</span>nashorn.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>ext<span class="token entity" title="\\\\">\\\\</span>sunec.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>ext<span class="token entity" title="\\\\">\\\\</span>sunjce_provider.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>ext<span class="token entity" title="\\\\">\\\\</span>sunmscapi.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>ext<span class="token entity" title="\\\\">\\\\</span>sunpkcs11.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>ext<span class="token entity" title="\\\\">\\\\</span>zipfs.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>javaws.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>jce.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>jfr.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>jfxswt.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>jsse.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>management-agent.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>plugin.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>resources.jar;C:<span class="token entity" title="\\\\">\\\\</span>Program Files<span class="token entity" title="\\\\">\\\\</span>Java<span class="token entity" title="\\\\">\\\\</span>jdk1.8.0_181<span class="token entity" title="\\\\">\\\\</span>jre<span class="token entity" title="\\\\">\\\\</span>lib<span class="token entity" title="\\\\">\\\\</span>rt.jar;C:<span class="token entity" title="\\\\">\\\\</span>work<span class="token entity" title="\\\\">\\\\</span>ijprojects<span class="token entity" title="\\\\">\\\\</span>JVM<span class="token entity" title="\\\\">\\\\</span>out<span class="token entity" title="\\\\">\\\\</span>production<span class="token entity" title="\\\\">\\\\</span>JVM;C:<span class="token entity" title="\\\\">\\\\</span>work<span class="token entity" title="\\\\">\\\\</span>ijprojects<span class="token entity" title="\\\\">\\\\</span>ObjectSize<span class="token entity" title="\\\\">\\\\</span>out<span class="token entity" title="\\\\">\\\\</span>artifacts<span class="token entity" title="\\\\">\\\\</span>ObjectSize_jar<span class="token entity" title="\\\\">\\\\</span>ObjectSize.jar&quot;</span> com.mashibing.jvm.gc.LambdaGC
<span class="token punctuation">[</span>GC <span class="token punctuation">(</span>Metadata GC Threshold<span class="token punctuation">)</span> <span class="token punctuation">[</span>PSYoungGen: 11341K-<span class="token operator">&gt;</span>1880K<span class="token punctuation">(</span>38400K<span class="token punctuation">)</span><span class="token punctuation">]</span> 11341K-<span class="token operator">&gt;</span>1888K<span class="token punctuation">(</span>125952K<span class="token punctuation">)</span>, <span class="token number">0.0022190</span> secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.00</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.00</span> secs<span class="token punctuation">]</span> 
<span class="token punctuation">[</span>Full GC <span class="token punctuation">(</span>Metadata GC Threshold<span class="token punctuation">)</span> <span class="token punctuation">[</span>PSYoungGen: 1880K-<span class="token operator">&gt;</span>0K<span class="token punctuation">(</span>38400K<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>ParOldGen: 8K-<span class="token operator">&gt;</span>1777K<span class="token punctuation">(</span>35328K<span class="token punctuation">)</span><span class="token punctuation">]</span> 1888K-<span class="token operator">&gt;</span>1777K<span class="token punctuation">(</span>73728K<span class="token punctuation">)</span>, <span class="token punctuation">[</span>Metaspace: 8164K-<span class="token operator">&gt;</span>8164K<span class="token punctuation">(</span>1056768K<span class="token punctuation">)</span><span class="token punctuation">]</span>, <span class="token number">0.0100681</span> secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.02</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.01</span> secs<span class="token punctuation">]</span> 
<span class="token punctuation">[</span>GC <span class="token punctuation">(</span>Last ditch collection<span class="token punctuation">)</span> <span class="token punctuation">[</span>PSYoungGen: 0K-<span class="token operator">&gt;</span>0K<span class="token punctuation">(</span>38400K<span class="token punctuation">)</span><span class="token punctuation">]</span> 1777K-<span class="token operator">&gt;</span>1777K<span class="token punctuation">(</span>73728K<span class="token punctuation">)</span>, <span class="token number">0.0005698</span> secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.00</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.00</span> secs<span class="token punctuation">]</span> 
<span class="token punctuation">[</span>Full GC <span class="token punctuation">(</span>Last ditch collection<span class="token punctuation">)</span> <span class="token punctuation">[</span>PSYoungGen: 0K-<span class="token operator">&gt;</span>0K<span class="token punctuation">(</span>38400K<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>ParOldGen: 1777K-<span class="token operator">&gt;</span>1629K<span class="token punctuation">(</span>67584K<span class="token punctuation">)</span><span class="token punctuation">]</span> 1777K-<span class="token operator">&gt;</span>1629K<span class="token punctuation">(</span>105984K<span class="token punctuation">)</span>, <span class="token punctuation">[</span>Metaspace: 8164K-<span class="token operator">&gt;</span>8156K<span class="token punctuation">(</span>1056768K<span class="token punctuation">)</span><span class="token punctuation">]</span>, <span class="token number">0.0124299</span> secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.06</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.01</span> secs<span class="token punctuation">]</span> 
java.lang.reflect.InvocationTargetException
    at sun.reflect.NativeMethodAccessorImpl.invoke0<span class="token punctuation">(</span>Native Method<span class="token punctuation">)</span>
    at sun.reflect.NativeMethodAccessorImpl.invoke<span class="token punctuation">(</span>NativeMethodAccessorImpl.java:62<span class="token punctuation">)</span>
    at sun.reflect.DelegatingMethodAccessorImpl.invoke<span class="token punctuation">(</span>DelegatingMethodAccessorImpl.java:43<span class="token punctuation">)</span>
    at java.lang.reflect.Method.invoke<span class="token punctuation">(</span>Method.java:498<span class="token punctuation">)</span>
    at sun.instrument.InstrumentationImpl.loadClassAndStartAgent<span class="token punctuation">(</span>InstrumentationImpl.java:388<span class="token punctuation">)</span>
    at sun.instrument.InstrumentationImpl.loadClassAndCallAgentmain<span class="token punctuation">(</span>InstrumentationImpl.java:411<span class="token punctuation">)</span>
Caused by: java.lang.OutOfMemoryError: Compressed class space
    at sun.misc.Unsafe.defineClass<span class="token punctuation">(</span>Native Method<span class="token punctuation">)</span>
    at sun.reflect.ClassDefiner.defineClass<span class="token punctuation">(</span>ClassDefiner.java:63<span class="token punctuation">)</span>
    at sun.reflect.MethodAccessorGenerator1.run<span class="token punctuation">(</span>MethodAccessorGenerator.java:399<span class="token punctuation">)</span>
    at sun.reflect.MethodAccessorGenerator1.run<span class="token punctuation">(</span>MethodAccessorGenerator.java:394<span class="token punctuation">)</span>
    at java.security.AccessController.doPrivileged<span class="token punctuation">(</span>Native Method<span class="token punctuation">)</span>
    at sun.reflect.MethodAccessorGenerator.generate<span class="token punctuation">(</span>MethodAccessorGenerator.java:393<span class="token punctuation">)</span>
    at sun.reflect.MethodAccessorGenerator.generateSerializationConstructor<span class="token punctuation">(</span>MethodAccessorGenerator.java:112<span class="token punctuation">)</span>
    at sun.reflect.ReflectionFactory.generateConstructor<span class="token punctuation">(</span>ReflectionFactory.java:398<span class="token punctuation">)</span>
    at sun.reflect.ReflectionFactory.newConstructorForSerialization<span class="token punctuation">(</span>ReflectionFactory.java:360<span class="token punctuation">)</span>
    at java.io.ObjectStreamClass.getSerializableConstructor<span class="token punctuation">(</span>ObjectStreamClass.java:1574<span class="token punctuation">)</span>
    at java.io.ObjectStreamClass.access1500<span class="token punctuation">(</span>ObjectStreamClass.java:79<span class="token punctuation">)</span>
    at java.io.ObjectStreamClass3.run<span class="token punctuation">(</span>ObjectStreamClass.java:519<span class="token punctuation">)</span>
    at java.io.ObjectStreamClass<span class="token variable">\$3</span>.run<span class="token punctuation">(</span>ObjectStreamClass.java:494<span class="token punctuation">)</span>
    at java.security.AccessController.doPrivileged<span class="token punctuation">(</span>Native Method<span class="token punctuation">)</span>
    at java.io.ObjectStreamClass.<span class="token operator">&lt;</span>init<span class="token operator">&gt;</span><span class="token punctuation">(</span>ObjectStreamClass.java:494<span class="token punctuation">)</span>
    at java.io.ObjectStreamClass.lookup<span class="token punctuation">(</span>ObjectStreamClass.java:391<span class="token punctuation">)</span>
    at java.io.ObjectOutputStream.writeObject0<span class="token punctuation">(</span>ObjectOutputStream.java:1134<span class="token punctuation">)</span>
    at java.io.ObjectOutputStream.defaultWriteFields<span class="token punctuation">(</span>ObjectOutputStream.java:1548<span class="token punctuation">)</span>
    at java.io.ObjectOutputStream.writeSerialData<span class="token punctuation">(</span>ObjectOutputStream.java:1509<span class="token punctuation">)</span>
    at java.io.ObjectOutputStream.writeOrdinaryObject<span class="token punctuation">(</span>ObjectOutputStream.java:1432<span class="token punctuation">)</span>
    at java.io.ObjectOutputStream.writeObject0<span class="token punctuation">(</span>ObjectOutputStream.java:1178<span class="token punctuation">)</span>
    at java.io.ObjectOutputStream.writeObject<span class="token punctuation">(</span>ObjectOutputStream.java:348<span class="token punctuation">)</span>
    at javax.management.remote.rmi.RMIConnectorServer.encodeJRMPStub<span class="token punctuation">(</span>RMIConnectorServer.java:727<span class="token punctuation">)</span>
    at javax.management.remote.rmi.RMIConnectorServer.encodeStub<span class="token punctuation">(</span>RMIConnectorServer.java:719<span class="token punctuation">)</span>
    at javax.management.remote.rmi.RMIConnectorServer.encodeStubInAddress<span class="token punctuation">(</span>RMIConnectorServer.java:690<span class="token punctuation">)</span>
    at javax.management.remote.rmi.RMIConnectorServer.start<span class="token punctuation">(</span>RMIConnectorServer.java:439<span class="token punctuation">)</span>
    at sun.management.jmxremote.ConnectorBootstrap.startLocalConnectorServer<span class="token punctuation">(</span>ConnectorBootstrap.java:550<span class="token punctuation">)</span>
    at sun.management.Agent.startLocalManagementAgent<span class="token punctuation">(</span>Agent.java:137<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>直接内存溢出问题（少见）<br> 《深入理解Java虚拟机》P59，使用Unsafe分配直接内存，或者使用NIO的问题<br> 栈溢出问题<br> -Xss设定太小<br> 比较一下这两段程序的异同，分析哪一个是更优的写法：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Object</span> o <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">//业务处理</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token class-name">Object</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>重写finalize引发频繁GC<br> C++程序员重写finalize引发频繁GC问题 为什么C++程序员会重写finalize？（new delete） finalize耗时比较长（200ms）<br> 如果有一个系统，内存一直消耗不超过10%，但是观察GC日志，发现FGC总是频繁产生，会是什么引起的？<br> System.gc() (这个比较Low)<br> Distuptor有个可以设置链的长度，如果过大，然后对象大，消费完不主动释放，会溢出<br> 用jvm都会溢出，mycat用崩过，1.6.5某个临时版本解析sql子查询算法有问题，9个exists的联合sql就导致生成几百万的对象<br> new 大量线程，会产生 native thread OOM<br> 应该用线程池， 解决方案：减少堆空间,预留更多内存产生native thread JVM内存占物理内存比例 50% – 80%<br> 常见垃圾回收器组合参数设定：(1.8)<br> -XX:+UseSerialGC = Serial New (DefNew) + Serial Old<br> 小型程序。默认情况下不会是这种选项，HotSpot会根据计算及配置和JDK版本自动选择收集器<br> -XX:+UseParNewGC = ParNew + SerialOld<br> 这个组合已经很少用（在某些版本中已经废弃）<br> https://stackoverflow.com/questions/34962257/why-remove-support-for-parnewserialold-anddefnewcms-in-the-future<br> -XX:+UseConc(urrent)MarkSweepGC = ParNew + CMS + Serial Old<br> -XX:+UseParallelGC = Parallel Scavenge + Parallel Old (1.8默认) 【PS + SerialOld】<br> -XX:+UseParallelOldGC = Parallel Scavenge + Parallel Old<br> -XX:+UseG1GC = G1<br> Linux中没找到默认GC的查看方法，而windows中会打印UseParallelGC<br> java +XX:+PrintCommandLineFlags -version<br> 通过GC的日志来分辨<br> Linux下1.8版本默认的垃圾回收器到底是什么？<br> 1.8.0_181 默认（看不出来）Copy MarkCompact<br> 1.8.0_222 默认 PS + PO</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_jvm_tuning.html.vue?vue&type=template&id=2876c742

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_jvm_tuning.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\java\\java_jvm_tuning.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const java_jvm_tuning_html = (script);

/***/ })

};
;
//# sourceMappingURL=2749.app.js.map