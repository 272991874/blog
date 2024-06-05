"use strict";(self.webpackChunkyaomin=self.webpackChunkyaomin||[]).push([[2004],{1081:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-455cd237",path:"/java/java_ClassLoader.html",title:"ClassLoader类加载器",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Class类的加载过程",slug:"class类的加载过程",children:[]},{level:2,title:"双亲委派",slug:"双亲委派",children:[{level:3,title:"使用双亲委派主要是为了防止安全问题",slug:"使用双亲委派主要是为了防止安全问题",children:[]}]},{level:2,title:"自定义ClassLoader",slug:"自定义classloader",children:[]}],filePathRelative:"java/java_ClassLoader.md",git:{contributors:[{name:"yaomin",email:"272991874@qq.com",commits:1}]}}},7379:(n,s,a)=>{a.r(s),a.d(s,{default:()=>m});var p=a(6252);const t=(0,p._)("h1",{id:"classloader类加载器",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#classloader类加载器","aria-hidden":"true"},"#"),(0,p.Uk)(" ClassLoader类加载器")],-1),o={class:"table-of-contents"},e=(0,p.Uk)("Class类的加载过程"),c=(0,p.Uk)("双亲委派"),l=(0,p.Uk)("使用双亲委派主要是为了防止安全问题"),u=(0,p.Uk)("自定义ClassLoader"),i=(0,p.uE)('<p>ClassLoader 的唯一职责就是将Class文件加载到JVM中，通常开发者并不需要自己创建ClassLoader， 但在框架、中间件中自定义ClassLoader 非常常见，Tomcat便极具代表性，通过自定义的Tomcat Classloader体系 实现应用的相互隔离。</p><h2 id="class类的加载过程" tabindex="-1"><a class="header-anchor" href="#class类的加载过程" aria-hidden="true">#</a> Class类的加载过程</h2><ol><li><p>Loading（把class字节装到内存）</p></li><li><p>Linking</p><ul><li>Verification（校验是否符合class文件标准）</li><li>Preparation（*将class文件静态变量赋默认值）</li><li>Resolution（将符号引用转为直接引用）</li></ul></li><li><p>Initializing（*将class文件静态变量赋初始值，调用静态代码块）</p></li></ol>',3),k=["src"],r=(0,p.uE)('<p>在 Java 中默认提供了三个类加载器</p><ul><li>BootstarapClassLoader</li><li>ExtClassLoader</li><li>AppClassLoader</li></ul><blockquote><p>注：AppClassLoader 和 ExtClassLoader 由 Java 编写并且都是 java.lang.ClassLoader 的子类， 而 BootstarapClassLoader 并非由 Java 实现而是由C++ 实现</p></blockquote><h2 id="双亲委派" tabindex="-1"><a class="header-anchor" href="#双亲委派" aria-hidden="true">#</a> 双亲委派</h2><p>当一个类需要被加载时，首先去CustomClassLoader（用户自定义类加载器）检查其中缓存是否已经加载过这个类， 若没有，去上级AppClassLoader检查缓存，直到BootstrapClassLoader， 若都没有，则从BootstrapClassLoader向下进行加载。若直到用户自定义类加载器都没有找到加载的职责，就会抛出ClassNotFondException异常</p><h3 id="使用双亲委派主要是为了防止安全问题" tabindex="-1"><a class="header-anchor" href="#使用双亲委派主要是为了防止安全问题" aria-hidden="true">#</a> 使用双亲委派主要是为了防止安全问题</h3><p>如果任何一个class都可以把它load进内存的话，那我就可以把java.lang.String交给自定义ClassLoader，自定义ClassLoader可以将String加上后台程序。 当我们有了双亲委派模型的时候，当自定义ClassLoader加载java.lang.String的时候，BootStrapClassLoader会将其打断，最后String类还是由BootStrapClassLoader加载。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//如果父ClassLoader存在，则递归调用父ClassLoader的loadClass</span>\n        c <span class="token operator">=</span> parent<span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token comment">//否则调用Bootstrap</span>\n        c <span class="token operator">=</span> <span class="token function">findBootstrapClassOrNull</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//如果仍然为空，则执行findClass来寻找class</span>\n        <span class="token keyword">long</span> t1 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        c <span class="token operator">=</span> <span class="token function">findClass</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// this is the defining class loader; record the stats</span>\n        <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>PerfCounter</span><span class="token punctuation">.</span><span class="token function">getParentDelegationTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTime</span><span class="token punctuation">(</span>t1 <span class="token operator">-</span> t0<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>PerfCounter</span><span class="token punctuation">.</span><span class="token function">getFindClassTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addElapsedTimeFrom</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>PerfCounter</span><span class="token punctuation">.</span><span class="token function">getFindClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="自定义classloader" tabindex="-1"><a class="header-anchor" href="#自定义classloader" aria-hidden="true">#</a> 自定义ClassLoader</h2><p>ClassLoader的findClass的实现为直接抛出ClassNotFoundException</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">findClass</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>\n<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>实现该方法就可以实现自定义ClassLoader</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mashibing<span class="token punctuation">.</span>jvm<span class="token punctuation">.</span>c2_classloader</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>mashibing<span class="token punctuation">.</span>jvm<span class="token punctuation">.</span></span><span class="token class-name">Hello</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span><span class="token punctuation">;</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">T006_MSBClassLoader</span> <span class="token keyword">extends</span> <span class="token class-name">ClassLoader</span> <span class="token punctuation">{</span>\n<span class="token annotation punctuation">@Override</span>\n<span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">findClass</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>\n    <span class="token class-name">File</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;c:/test/&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&quot;.class&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">ByteArrayOutputStream</span> baos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b<span class="token operator">=</span>fis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            baos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> baos<span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        baos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token function">defineClass</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> bytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> bytes<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">findClass</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//throws ClassNotFoundException</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n    <span class="token class-name">ClassLoader</span> l <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">T006_MSBClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Class</span> clazz <span class="token operator">=</span> l<span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token string">&quot;com.mashibing.jvm.Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Class</span> clazz1 <span class="token operator">=</span> l<span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token string">&quot;com.mashibing.jvm.Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clazz <span class="token operator">==</span> clazz1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Hello</span> h <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Hello</span><span class="token punctuation">)</span>clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    h<span class="token punctuation">.</span><span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getSystemClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>',13),m={render:function(n,s){const a=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("nav",o,[(0,p._)("ul",null,[(0,p._)("li",null,[(0,p.Wm)(a,{to:"#class类的加载过程"},{default:(0,p.w5)((()=>[e])),_:1})]),(0,p._)("li",null,[(0,p.Wm)(a,{to:"#双亲委派"},{default:(0,p.w5)((()=>[c])),_:1}),(0,p._)("ul",null,[(0,p._)("li",null,[(0,p.Wm)(a,{to:"#使用双亲委派主要是为了防止安全问题"},{default:(0,p.w5)((()=>[l])),_:1})])])]),(0,p._)("li",null,[(0,p.Wm)(a,{to:"#自定义classloader"},{default:(0,p.w5)((()=>[u])),_:1})])])]),i,(0,p._)("img",{src:n.$withBase("/images/java/classLoader202109161.jpg"),alt:"classLoader202109161.jpg"},null,8,k),r],64)}}}}]);