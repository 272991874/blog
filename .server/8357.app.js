"use strict";
exports.id = 8357;
exports.ids = [8357];
exports.modules = {

/***/ 7083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0616f326",
  "path": "/java/java_jvm_structure.html",
  "title": "JVM内存结构",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "java/java_jvm_structure.md",
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

/***/ 1670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ java_jvm_structure_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/java/java_jvm_structure.html.vue?vue&type=template&id=3460560a

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="jvm内存结构" tabindex="-1"><a class="header-anchor" href="#jvm内存结构" aria-hidden="true">#</a> JVM内存结构</h1><nav class="table-of-contents"><ul></ul></nav><h1 id="_1-程序计数寄存器" tabindex="-1"><a class="header-anchor" href="#_1-程序计数寄存器" aria-hidden="true">#</a> 1.程序计数寄存器</h1><p>虚拟机是多线程的，每个线程都有自己的计数寄存器，线程的当前方法如果是不是本地（native）方法，计数寄存器记录 的是jvm正在执行指令的地址；</p><p>程序计数器（Program Counter Register）是一块较小的内存空间，可以看作是当前线程所执行字节码的行号指示器，指向下一个将要执行的指令代码，由执行引擎来读取下一条指令。更确切的说，一个线程的执行，是通过字节码解释器改变当前线程的计数器的值，来获取下一条需要执行的字节码指令，从而确保线程的正确执行。</p><p>为了确保线程切换后（上下文切换）能恢复到正确的执行位置，每个线程都有一个独立的程序计数器，各个线程的计数器互不影响，独立存储。也就是说程序计数器是线程私有的内存。</p><p>如果线程执行 Java 方法，这个计数器记录的是正在执行的虚拟机字节码指令的地址；如果执行的是 Native 方法，计数器值为Undefined。</p><p>程序计数器不会发生内存溢出（OutOfMemoryError即OOM）问题。</p><h1 id="_2-本地方法栈-native-method-stack" tabindex="-1"><a class="header-anchor" href="#_2-本地方法栈-native-method-stack" aria-hidden="true">#</a> 2.本地方法栈 Native Method Stack</h1><p>Native Method Stack中登记native方法，在Execution Engine执行时加载native libraies</p><p>本地方法栈与虚拟机栈基本类似，区别在于虚拟机栈为虚拟机执行的java方法服务，而本地方法栈则是为Native方法服务</p><h1 id="_3-栈-jvm-stack" tabindex="-1"><a class="header-anchor" href="#_3-栈-jvm-stack" aria-hidden="true">#</a> 3.栈 JVM Stack</h1><p>编译器可知的各种基本数据类型(boolean、byte、char、short、int、float、long、double)、对象引用(引用指针，并非对象本身)</p><p>栈是java 方法执行的内存模型：</p><p>每个方法被执行的时候 都会创建一个“栈帧”用于存储局部变量表(包括参数)、操作栈、方法出口等信息。</p><p>每个方法被调用到执行完的过程，就对应着一个栈帧在虚拟机栈中从入栈到出栈的过程。</p><p>栈的生命期是跟随线程的生命期，线程创建时创建，线程结束栈内存也就释放，是线程私有的。</p><h1 id="_4-方法区-method-area" tabindex="-1"><a class="header-anchor" href="#_4-方法区-method-area" aria-hidden="true">#</a> 4.方法区 Method Area</h1><p>用于存储虚拟机加载的：静态变量+常量+类信息+运行时常量池 （类信息：类的版本、字段、方法、接口、构造函数等描述信息 ）</p><p>默认最小值为16MB，最大值为64MB，可以通过-XX:PermSize 和 -XX:MaxPermSize 参数限制方法区的大小</p><p>对于习惯在HotSpot 虚拟机上开发和部署程序的开发者来说，很多人愿意把方法区称为“永久代”（Permanent Generation）， 本质上两者并不等价，仅仅是因为HotSpot 虚拟机的设计团队选择把GC 分代收集扩展至方法区，或者说使用永久代来 实现方法区而已。对于其他虚拟机（如BEA JRockit、IBM J9 等）来说是不存在永久代的概念的。即使是HotSpot 虚拟机本身，根据官方发布的路线图信息，现在也有放弃永久代并“搬家”至Native Memory 来实现方法区的规划了。 Java 虚拟机规范对这个区域的限制非常宽松，除了和Java 堆一样不需要连续的内存和可以选择固定大小或者可扩展外， 还可以选择不实现垃圾收集。相对而言，垃圾收集行为在这个区域是比较少出现的，但并非数据进入了方法区就如永久代的 名字一样“永久”存在了。这个区域的内存回收目标主要是针对常量池的回收和对类型的卸载，一般来说这个区域的回收“成绩” 比较难以令人满意，尤其是类型的卸载，条件相当苛刻，但是这部分区域的回收确实是有必要的。在Sun 公司的BUG 列表中， 曾出现过的若干个严重的BUG 就是由于低版本的HotSpot 虚拟机对此区域未完全回收而导致内存泄漏。根据Java 虚拟机 规范的规定，当方法区无法满足内存分配需求时，将抛出OutOfMemoryError 异常。</p><h1 id="_5-堆-java-heap" tabindex="-1"><a class="header-anchor" href="#_5-堆-java-heap" aria-hidden="true">#</a> 5.堆 Java Heap</h1><p>所有的对象实例以及数组都要在堆上分配，此内存区域的唯一目的就是存放对象实例</p><p>堆是Java 虚拟机所管理的内存中最大的一块。Java 堆是被所有线程共享的一块内存区域，在虚拟机启动时创建</p><p>堆是理解Java GC机制最重要的区域，没有之一</p><p>结构：新生代（Eden区+2个Survivor区） 老年代 永久代（HotSpot有）</p><p>新生代：新创建的对象——&gt;Eden区</p><p>GC之后，存活的对象由Eden区 Survivor区0进入Survivor区1</p><p>再次GC，存活的对象由Eden区 Survivor区1进入Survivor区0</p><p>老年代：对象如果在新生代存活了足够长的时间而没有被清理掉（即在几次Young GC后存活了下来），则会被复制到老年代</p><p>如果新创建对象比较大（比如长字符串或大数组），新生代空间不足，则大对象会直接分配到老年代上（大对象可能触发提前GC，应少用，更应避免使用短命的大对象）</p><p>老年代的空间一般比新生代大，能存放更多的对象，在老年代上发生的GC次数也比年轻代少</p><p>永久代：可以简单理解为方法区（本质上两者并不等价）</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_jvm_structure.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\java\\java_jvm_structure.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const java_jvm_structure_html = (script);

/***/ })

};
;
//# sourceMappingURL=8357.app.js.map