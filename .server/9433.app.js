"use strict";
exports.id = 9433;
exports.ids = [9433];
exports.modules = {

/***/ 3383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-52b1e9fc",
  "path": "/algorithm/time_complexity.html",
  "title": "时间与空间复杂度",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一、时间复杂度",
      "slug": "一、时间复杂度",
      "children": [
        {
          "level": 3,
          "title": "常见的时间复杂度量级有：",
          "slug": "常见的时间复杂度量级有",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "二、空间复杂度",
      "slug": "二、空间复杂度",
      "children": []
    }
  ],
  "filePathRelative": "algorithm/time_complexity.md",
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

/***/ 4328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ time_complexity_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/algorithm/time_complexity.html.vue?vue&type=template&id=a71b5034



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="时间与空间复杂度" tabindex="-1"><a class="header-anchor" href="#时间与空间复杂度" aria-hidden="true">#</a> 时间与空间复杂度</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#一、时间复杂度" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`一、时间复杂度`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("一、时间复杂度")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#常见的时间复杂度量级有" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`常见的时间复杂度量级有：`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("常见的时间复杂度量级有：")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#二、空间复杂度" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`二、空间复杂度`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("二、空间复杂度")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></nav><table><thead><tr><th>类型</th><th>意义</th><th>举例</th></tr></thead><tbody><tr><td>O(1)</td><td>最低复杂度，常量值，也就是耗时、耗空间与输入数据大小无关</td><td>hash算法</td></tr><tr><td>O(n)</td><td>数据量增加n倍，耗时增加n倍</td><td>遍历算法</td></tr><tr><td>O(n\`2)</td><td>对n个数排序，需要扫描n*n次</td><td>冒泡排序</td></tr><tr><td>O(logn)</td><td>当数据增大n倍时，耗时增大logn倍（比如当数据增大256倍时，耗时只增大8倍，底数可以忽略）</td><td>二分查找， 三分查找，底数可以忽略</td></tr><tr><td>O(nlogn)</td><td>n<em>logn，当数据增大256倍时，耗时增大256</em>8=2048倍，复杂度高于线性，低于平方</td><td>归并排序</td></tr></tbody></table><table><thead><tr><th>数据结构</th><th>查找</th><th>查找</th><th>插入</th><th>插入</th><th>删除</th><th>删除</th><th>遍历</th></tr></thead><tbody><tr><td>-</td><td>平均</td><td>最坏</td><td>平均</td><td>最坏</td><td>平均</td><td>最坏</td><td>-</td></tr><tr><td>数组</td><td>o(N)</td><td>o(N)</td><td>o(N)</td><td>o(N)</td><td>o(N)</td><td>o(N)</td><td>-</td></tr><tr><td>有序数组</td><td>o(logN)</td><td>o(N)</td><td>o(N)</td><td>o(N)</td><td>o(N)</td><td>o(N)</td><td>o(N)</td></tr><tr><td>链表</td><td>o(N)</td><td>o(N)</td><td>o(1)</td><td>o(1)</td><td>o(1)</td><td>o(1)</td><td>-</td></tr><tr><td>有序链表</td><td>o(N)</td><td>o(N)</td><td>o(N)</td><td>o(N)</td><td>o(1)</td><td>o(1)</td><td>o(N)</td></tr><tr><td>二叉查找树</td><td>o(logN)</td><td>o(N)</td><td>o(logN)</td><td>o(N)</td><td>o(logN)</td><td>o(N)</td><td>o(N)</td></tr><tr><td>红黑树</td><td>o(logN)</td><td>o(logN)</td><td>o(logN)</td><td>o(logN)</td><td>o(logN)</td><td>o(logN)</td><td>o(N)</td></tr><tr><td>平衡树</td><td>o(logN)</td><td>o(logN)</td><td>o(logN)</td><td>o(logN)</td><td>o(logN)</td><td>o(logN)</td><td>o(N)</td></tr><tr><td>二叉堆 / 优先队列</td><td>o(1)</td><td>o(1)</td><td>o(logN)</td><td>o(logN)</td><td>o(logN)</td><td>o(logN)</td><td>o(N)</td></tr><tr><td>哈希表</td><td>o(1)</td><td>o(1)</td><td>o(1)</td><td>o(1)</td><td>o(1)</td><td>o(1)</td><td>o(N)</td></tr></tbody></table><p>算法（Algorithm）是指用来操作数据、解决程序问题的一组方法。对于同一个问题，使用不同的算法，也许最终得到的结果是一样的，但在过程中消耗的资源和时间却会有很大的区别。</p><p>那么我们应该如何去衡量不同算法之间的优劣呢？</p><p>主要还是从算法所占用的「时间」和「空间」两个维度去考量。</p><ul><li>时间维度：是指执行当前算法所消耗的时间，我们通常用「时间复杂度」来描述。</li><li>空间维度：是指执行当前算法需要占用多少内存空间，我们通常用「空间复杂度」来描述。</li></ul><h2 id="一、时间复杂度" tabindex="-1"><a class="header-anchor" href="#一、时间复杂度" aria-hidden="true">#</a> 一、时间复杂度</h2><p>我们想要知道一个算法的「时间复杂度」，很多人首先想到的的方法就是把这个算法程序运行一遍，那么它所消耗的时间就自然而然知道了。</p><p>这种方式可以吗？当然可以，不过它也有很多弊端。 这种方式非常容易受运行环境的影响，在性能高的机器上跑出来的结果与在性能低的机器上跑的结果相差会很大。而且对测试时使用的数据规模也有很大关系。再者，并我们在写算法的时候，还没有办法完整的去运行呢。</p><blockquote><p>因此，另一种更为通用的方法就出来了：「 大O符号表示法 」，即 T(n) = O(f(n))</p></blockquote><p>我们先来看个例子：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(i=1; i&lt;=n; ++i)
{
   j = i;
   j++;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>通过「 大O符号表示法 」，这段代码的时间复杂度为：O(n) ，为什么呢?</p><p>在 大O符号表示法中，时间复杂度的公式是： T(n) = O( f(n) )，其中f(n) 表示每行代码执行次数之和，而 O 表示正比例关系，这个公式的全称是：算法的渐进时间复杂度。</p><p>我们继续看上面的例子，假设每行代码的执行时间都是一样的，我们用 1颗粒时间 来表示，那么这个例子的第一行耗时是1个颗粒时间，第三行的执行时间是 n个颗粒时间，第四行的执行时间也是 n个颗粒时间（第二行和第五行是符号，暂时忽略），那么总时间就是 1颗粒时间 + n颗粒时间 + n颗粒时间 ，即 (1+2n)个颗粒时间，即： T(n) = (1+2n)*颗粒时间，从这个结果可以看出，这个算法的耗时是随着n的变化而变化，因此，我们可以简化的将这个算法的时间复杂度表示为：T(n) = O(n)</p><p>为什么可以这么去简化呢，因为大O符号表示法并不是用于来真实代表算法的执行时间的，它是用来表示代码执行时间的增长变化趋势的。</p><p>所以上面的例子中，如果n无限大的时候，T(n) = time(1+2n)中的常量1就没有意义了，倍数2也意义不大。因此直接简化为T(n) = O(n) 就可以了。</p><h3 id="常见的时间复杂度量级有" tabindex="-1"><a class="header-anchor" href="#常见的时间复杂度量级有" aria-hidden="true">#</a> 常见的时间复杂度量级有：</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>常数阶O(1)</li><li>对数阶O(logN)</li><li>线性阶O(n)</li><li>线性对数阶O(nlogN)</li><li>平方阶O(n²)</li><li>立方阶O(n³)</li><li>K次方阶O(n^k)</li><li>指数阶(2^n)</li></ul></div><p>上面从上至下依次的时间复杂度越来越大，执行的效率越来越低。</p><p>下面选取一些较为常用的来讲解一下（没有严格按照顺序）：</p><ul><li>常数阶O(1)</li></ul><p>无论代码执行了多少行，只要是没有循环等复杂结构，那这个代码的时间复杂度就都是O(1)，如：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int i = 1;
int j = 2;
++i;
j++;
int m = i + j;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上述代码在执行的时候，它消耗的时候并不随着某个变量的增长而增长，那么无论这类代码有多长，即使有几万几十万行，都可以用O(1)来表示它的时间复杂度。</p><ul><li>线性阶O(n)</li></ul><p>这个在最开始的代码示例中就讲解过了，如：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(i=1; i&lt;=n; ++i)
{
   j = i;
   j++;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这段代码，for循环里面的代码会执行n遍，因此它消耗的时间是随着n的变化而变化的，因此这类代码都可以用O(n)来表示它的时间复杂度。</p><ul><li>对数阶O(logN)</li></ul><p>还是先来看代码：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int i = 1;
while(i&lt;n)
{
    i = i * 2;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>从上面代码可以看到，在while循环里面，每次都将 i 乘以 2，乘完之后，i 距离 n 就越来越近了。我们试着求解一下，假设循环x次之后，i 就大于 2 了，此时这个循环就退出了，也就是说 2 的 x 次方等于 n，那么 x = log2^n 也就是说当循环 log2^n 次以后，这个代码就结束了。因此这个代码的时间复杂度为：O(logn)</p><ul><li>线性对数阶O(nlogN)</li></ul><p>线性对数阶O(nlogN) 其实非常容易理解，将时间复杂度为O(logn)的代码循环N遍的话，那么它的时间复杂度就是 n * O(logN)，也就是了O(nlogN)。</p><p>就拿上面的代码加一点修改来举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(m=1; m&lt;n; m++)
{
    i = 1;
    while(i&lt;n)
    {
        i = i * 2;
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>平方阶O(n²)</li></ul><p>平方阶O(n²) 就更容易理解了，如果把 O(n) 的代码再嵌套循环一遍，它的时间复杂度就是 O(n²) 了。 举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(x=1; i&lt;=n; x++)
{
   for(i=1; i&lt;=n; i++)
    {
       j = i;
       j++;
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这段代码其实就是嵌套了2层n循环，它的时间复杂度就是 O(n*n)，即 O(n²) 如果将其中一层循环的n改成m，即：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(x=1; i&lt;=m; x++)
{
   for(i=1; i&lt;=n; i++)
    {
       j = i;
       j++;
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>那它的时间复杂度就变成了 O(m*n)</p><ul><li><p>立方阶O(n³)</p></li><li><p>K次方阶O(n^k)</p></li></ul><p>参考上面的O(n²) 去理解就好了，O(n³)相当于三层n循环，其它的类似。</p><p>除此之外，其实还有 平均时间复杂度、均摊时间复杂度、最坏时间复杂度、最好时间复杂度 的分析方法，有点复杂，这里就不展开了。</p><h2 id="二、空间复杂度" tabindex="-1"><a class="header-anchor" href="#二、空间复杂度" aria-hidden="true">#</a> 二、空间复杂度</h2><p>既然时间复杂度不是用来计算程序具体耗时的，那么我们也应该明白，空间复杂度也不是用来计算程序实际占用的空间的。</p><p>空间复杂度是对一个算法在运行过程中临时占用存储空间大小的一个量度，同样反映的是一个趋势，我们用 S(n) 来定义。</p><p>空间复杂度比较常用的有：O(1)、O(n)、O(n²)，我们下面来看看：</p><p>空间复杂度 O(1) 如果算法执行所需要的临时空间不随着某个变量n的大小而变化，即此算法空间复杂度为一个常量，可表示为 O(1) 举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int i = 1;
int j = 2;
++i;
j++;
int m = i + j;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>代码中的 i、j、m 所分配的空间都不随着处理数据量变化，因此它的空间复杂度 S(n) = O(1)</p><p>空间复杂度 O(n) 我们先看一个代码：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int[] m = new int[n]
for(i=1; i&lt;=n; ++i)
{
   j = i;
   j++;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>这段代码中，第一行new了一个数组出来，这个数据占用的大小为n，这段代码的2-6行，虽然有循环，但没有再分配新的空间，因此，这段代码的空间复杂度主要看第一行即可，即 S(n) = O(n)</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/algorithm/time_complexity.html.vue?vue&type=template&id=a71b5034

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/algorithm/time_complexity.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\algorithm\\time_complexity.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const time_complexity_html = (script);

/***/ })

};
;
//# sourceMappingURL=9433.app.js.map