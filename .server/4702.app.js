"use strict";
exports.id = 4702;
exports.ids = [4702];
exports.modules = {

/***/ 9015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-6de5d8d1",
  "path": "/java/java_equals.html",
  "title": "equals和== 的区别是什么?",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "理论",
      "slug": "理论",
      "children": [
        {
          "level": 3,
          "title": "功能不同",
          "slug": "功能不同",
          "children": []
        },
        {
          "level": 3,
          "title": "定义不同",
          "slug": "定义不同",
          "children": []
        },
        {
          "level": 3,
          "title": "运行速度不同",
          "slug": "运行速度不同",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "示例",
      "slug": "示例",
      "children": []
    },
    {
      "level": 2,
      "title": "速度测试",
      "slug": "速度测试",
      "children": []
    },
    {
      "level": 2,
      "title": "同样计算100万次赋值",
      "slug": "同样计算100万次赋值",
      "children": [
        {
          "level": 3,
          "title": "Object的速度测试",
          "slug": "object的速度测试",
          "children": []
        },
        {
          "level": 3,
          "title": "String的速度测试",
          "slug": "string的速度测试",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "总结",
      "slug": "总结",
      "children": []
    }
  ],
  "filePathRelative": "java/java_equals.md",
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

/***/ 8711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ java_equals_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/java/java_equals.html.vue?vue&type=template&id=78778533

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="equals和-的区别是什么" tabindex="-1"><a class="header-anchor" href="#equals和-的区别是什么" aria-hidden="true">#</a> equals和== 的区别是什么?</h1><h2 id="理论" tabindex="-1"><a class="header-anchor" href="#理论" aria-hidden="true">#</a> 理论</h2><h3 id="功能不同" tabindex="-1"><a class="header-anchor" href="#功能不同" aria-hidden="true">#</a> 功能不同</h3><p>“＝＝”是判断两个变量或实例是不是指向同一个内存空间。 “equals”是判断两个变量或实例所指向的内存空间的值是不是相同。</p><h3 id="定义不同" tabindex="-1"><a class="header-anchor" href="#定义不同" aria-hidden="true">#</a> 定义不同</h3><p>“equals”在JAVA中是一个方法。 “＝＝”在JAVA中只是一个运算符。</p><h3 id="运行速度不同" tabindex="-1"><a class="header-anchor" href="#运行速度不同" aria-hidden="true">#</a> 运行速度不同</h3><p>“＝＝”比”equals”运行速度快，因为”＝＝”只是比较引用。 “equals”比”＝＝”运行速度要慢。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h2 id="速度测试" tabindex="-1"><a class="header-anchor" href="#速度测试" aria-hidden="true">#</a> 速度测试</h2><h2 id="同样计算100万次赋值" tabindex="-1"><a class="header-anchor" href="#同样计算100万次赋值" aria-hidden="true">#</a> 同样计算100万次赋值</h2><h3 id="object的速度测试" tabindex="-1"><a class="header-anchor" href="#object的速度测试" aria-hidden="true">#</a> Object的速度测试</h3><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>    public static void main(String[] args) {
        Object s1 = new Object();
        Object s2 = new Object();
        long l1 = System.nanoTime();
        for (int i = 0; i &lt; 1000000; i++) {
            boolean b = s1 == s2;
        }
        long l2 = System.nanoTime();
        System.out.println(l2-l1);
    }

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>＝＝的输出结果为1998300（纳秒）</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>    public static void main(String[] args) {
        Object s1 = new Object();
        Object s2 = new Object();
        long l1 = System.nanoTime();
        for (int i = 0; i &lt; 1000000; i++) {
            boolean b = s1.equals(s2);
        }
        long l2 = System.nanoTime();
        System.out.println(l2-l1);
    }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>equals的输出结果为3350200（纳秒）</p><h3 id="string的速度测试" tabindex="-1"><a class="header-anchor" href="#string的速度测试" aria-hidden="true">#</a> String的速度测试</h3><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>    public static void main(String[] args) {
        String s1 = &quot;abc&quot;;
        String s2 = &quot;def&quot;;
        long l1 = System.nanoTime();
        for (int i = 0; i &lt; 1000000; i++) {
            boolean b = s1 == s2;
        }
        long l2 = System.nanoTime();
        System.out.println(l2-l1);
    }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>＝＝的输出结果为2074099（纳秒）</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>    public static void main(String[] args) {
        String s1 = &quot;abc&quot;;
        String s2 = &quot;def&quot;;
        long l1 = System.nanoTime();
        for (int i = 0; i &lt; 1000000; i++) {
            boolean b = s1.equals(s2);
        }
        long l2 = System.nanoTime();
        System.out.println(l2-l1);
    }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>equals的输出结果为4089599（纳秒）</p><p>源码 Object的源码如下</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>    public boolean equals(Object obj) {
        return (this == obj);
    }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>而String的源码在Object的源码上添加了其他的判断逻辑</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>    private final char value[];

    public boolean equals(Object anObject) {
        if (this == anObject) {
            return true;
        }
        if (anObject instanceof String) {
            String anotherString = (String)anObject;
            int n = value.length;
            if (n == anotherString.value.length) {
                char v1[] = value;
                char v2[] = anotherString.value;
                int i = 0;
                while (n-- != 0) {
                    if (v1[i] != v2[i])
                        return false;
                    i++;
                }
                return true;
            }
        }
        return false;
    }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>由源码可以看到，其实equals本身就是用来判断相等与否，而＝＝判断的是内存中地址的哈希值是否相等</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>        String s1 = &quot;abc&quot;;
        String s2 = &quot;abc&quot;;

        TestString s3 = new TestString(&quot;abc&quot;);
        TestString s4 = new TestString(&quot;abc&quot;);

        boolean b1 = s1.equals(s2);
        boolean b2 = s3.equals(s4);
        int hash_s1 = s1.hashCode();
        int hash_s2 = s2.hashCode();
        int hash_s3 = s3.hashCode();
        int hash_s4 = s4.hashCode();

        boolean b3 = s1==s2;
        boolean b4 = s3==s4;

        System.out.println(&quot;s1.hashCode() = &quot; + hash_s1);
        System.out.println(&quot;s2.hashCode() = &quot; + hash_s2);
        System.out.println(&quot;s3.hashCode() = &quot; + hash_s3);
        System.out.println(&quot;s4.hashCode() = &quot; + hash_s4);
        System.out.println(&quot;s1.equals(s2)\\t (&quot;+ hash_s1 +&quot;=&quot;+ hash_s2 +&quot;)\\t &quot; + s1.equals(s2));
        System.out.println(&quot;s1.equals(s1)\\t (&quot;+ hash_s1 +&quot;=&quot;+ hash_s1 +&quot;)\\t &quot; + s1.equals(s1));
        System.out.println(&quot;s1==s2\\t\\t\\t (&quot;+ hash_s1 +&quot;=&quot;+ hash_s2 +&quot;)\\t &quot;+ b3);
        System.out.println(&quot;s3.equals(s4)\\t (&quot;+ hash_s3 +&quot;=&quot;+ hash_s4 +&quot;)\\t &quot; + s3.equals(s4));
        System.out.println(&quot;s3.equals(s3)\\t (&quot;+ hash_s3 +&quot;=&quot;+ hash_s3 +&quot;)\\t &quot; + s3.equals(s3));
        System.out.println(&quot;s3==s4\\t\\t\\t (&quot;+ hash_s3 +&quot;=&quot;+ hash_s4 +&quot;)\\t &quot;+ b4);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>输出如下</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>s1.hashCode() = 96354
s2.hashCode() = 96354
s3.hashCode() = 1163157884
s4.hashCode() = 1956725890

s1.equals(s2)     (96354=96354)     true
s1.equals(s1)     (96354=96354)     true
s1==s2             (96354=96354)     true

s3.equals(s4)     (1163157884=1956725890)     false
s3.equals(s3)     (1163157884=1163157884)     true
s3==s4             (1163157884=1956725890)     false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>如上，我们定义了两个TestString，但是哈希值各不相同，所以＝＝和equals也为false，但是假如我们要用自己的方法判断TestString是否相等的话，我们就要重写hashCode和equals函数</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TestString that = (TestString) o;
        return Objects.equals(string, that.string);
    }

    @Override
    public int hashCode() {
        return Objects.hash(string);
    }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>如此一来，输出就变成了</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>s1.hashCode() = 96354
s2.hashCode() = 96354
s3.hashCode() = 96385
s4.hashCode() = 96385
s1.equals(s2)     (96354=96354)     true
s1.equals(s1)     (96354=96354)     true
s1==s2             (96354=96354)     true
s3.equals(s4)     (96385=96385)     true
s3.equals(s3)     (96385=96385)     true
s3==s4             (96385=96385)     false

Process finished with exit code 0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>这里为什么s3＝＝s4依然为false呢，因为＝＝直接判断了地址，与hashCode函数无关。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>“＝＝”比”equals”运行速度快0.5倍，而在String中，差距拉开到了接近1倍。 “equals”是一个方法，其中用到了”＝＝”，而不同的函数可以通过重写”equals”在不同的类中添加比较方法</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/java/java_equals.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\java\\java_equals.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const java_equals_html = (script);

/***/ })

};
;
//# sourceMappingURL=4702.app.js.map