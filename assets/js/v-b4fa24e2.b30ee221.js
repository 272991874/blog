"use strict";(self.webpackChunkyaomin=self.webpackChunkyaomin||[]).push([[6117],{4760:(a,e,l)=>{l.r(e),l.d(e,{data:()=>t});const t={key:"v-b4fa24e2",path:"/java/java_btrace_arthas.html",title:"Btrace & Arthas",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"启动：java -jar arthas-boot.jar",slug:"启动-java-jar-arthas-boot-jar",children:[]},{level:2,title:"按名称监听某个进程",slug:"按名称监听某个进程",children:[]},{level:2,title:"查看线程对应的栈信息",slug:"查看线程对应的栈信息",children:[]},{level:2,title:"反编译 class文件",slug:"反编译-class文件",children:[]},{level:2,title:"使用monitor命令可以监控方法的成功和失败执行次数，非实时返回。 -c表达循环周期，这里指定的是5s",slug:"使用monitor命令可以监控方法的成功和失败执行次数-非实时返回。-c表达循环周期-这里指定的是5s",children:[]},{level:2,title:"trace命令",slug:"trace命令",children:[{level:3,title:"次数调用限制",slug:"次数调用限制",children:[]},{level:3,title:"执行时间调用限制",slug:"执行时间调用限制",children:[]}]},{level:2,title:"watch命令",slug:"watch命令",children:[{level:3,title:"查看方法返回值",slug:"查看方法返回值",children:[]},{level:3,title:"查看方法入参和返回值",slug:"查看方法入参和返回值",children:[]},{level:3,title:"查看异常时的方式信息",slug:"查看异常时的方式信息",children:[]}]},{level:2,title:"heapdump命令",slug:"heapdump命令",children:[]},{level:2,title:"异步任务",slug:"异步任务",children:[{level:3,title:"查看正在运行的任务",slug:"查看正在运行的任务",children:[]},{level:3,title:"将后台任务转为前台",slug:"将后台任务转为前台",children:[]},{level:3,title:"将前台任务转为后台",slug:"将前台任务转为后台",children:[]},{level:3,title:"后台执行任务，使用&",slug:"后台执行任务-使用",children:[]}]},{level:2,title:"webConsole",slug:"webconsole",children:[]},{level:2,title:"exit命令",slug:"exit命令",children:[]},{level:2,title:"jvm命令",slug:"jvm命令",children:[]},{level:2,title:"基础命令",slug:"基础命令",children:[]},{level:2,title:"jvm相关",slug:"jvm相关",children:[]},{level:2,title:"class/classloader相关",slug:"class-classloader相关",children:[]},{level:2,title:"monitor/watch/trace相关",slug:"monitor-watch-trace相关",children:[]},{level:2,title:"monitor——方法执行监控",slug:"monitor——方法执行监控",children:[]},{level:2,title:"profiler/火焰图",slug:"profiler-火焰图",children:[]},{level:2,title:"options",slug:"options",children:[]},{level:2,title:"管道",slug:"管道",children:[]},{level:2,title:"后台异步任务",slug:"后台异步任务",children:[]},{level:2,title:"Web Console",slug:"web-console",children:[]},{level:2,title:"调试步骤",slug:"调试步骤",children:[]},{level:2,title:"java自带工具信息获取",slug:"java自带工具信息获取",children:[]}],filePathRelative:"java/java_btrace_arthas.md",git:{contributors:[{name:"Amin.Yao",email:"Amin.Yao@gaiaworks.cn",commits:3},{name:"yaomin",email:"272991874@qq.com",commits:2}]}}},505:(a,e,l)=>{l.r(e),l.d(e,{default:()=>z});var t=l(6252);const i=(0,t._)("h1",{id:"btrace-arthas",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#btrace-arthas","aria-hidden":"true"},"#"),(0,t.Uk)(" Btrace & Arthas")],-1),r={class:"table-of-contents"},s=(0,t.Uk)("启动：java -jar arthas-boot.jar"),n=(0,t.Uk)("按名称监听某个进程"),h=(0,t.Uk)("查看线程对应的栈信息"),d=(0,t.Uk)("反编译 class文件"),o=(0,t.Uk)("使用monitor命令可以监控方法的成功和失败执行次数，非实时返回。 -c表达循环周期，这里指定的是5s"),c=(0,t.Uk)("trace命令"),u=(0,t.Uk)("次数调用限制"),p=(0,t.Uk)("执行时间调用限制"),m=(0,t.Uk)("watch命令"),b=(0,t.Uk)("查看方法返回值"),f=(0,t.Uk)("查看方法入参和返回值"),v=(0,t.Uk)("查看异常时的方式信息"),_=(0,t.Uk)("heapdump命令"),j=(0,t.Uk)("异步任务"),g=(0,t.Uk)("查看正在运行的任务"),w=(0,t.Uk)("将后台任务转为前台"),x=(0,t.Uk)("将前台任务转为后台"),k=(0,t.Uk)("后台执行任务，使用&"),W=(0,t.Uk)("webConsole"),U=(0,t.Uk)("exit命令"),A=(0,t.Uk)("jvm命令"),C=(0,t.Uk)("基础命令"),y=(0,t.Uk)("jvm相关"),J=(0,t.Uk)("class/classloader相关"),M=(0,t.Uk)("monitor/watch/trace相关"),q=(0,t.Uk)("monitor——方法执行监控"),V=(0,t.Uk)("profiler/火焰图"),P=(0,t.Uk)("options"),D=(0,t.Uk)("管道"),I=(0,t.Uk)("后台异步任务"),O=(0,t.Uk)("Web Console"),R=(0,t.Uk)("调试步骤"),Y=(0,t.Uk)("java自带工具信息获取"),B=(0,t._)("p",null,"线上诊断工具 https://arthas.aliyun.com/doc/",-1),E={href:"/file/arthas-boot.jar",target:"_blank",rel:"noopener noreferrer"},H=(0,t.Uk)("arthas-boot.jar"),L=(0,t.uE)('<p>curl -O https://alibaba.github.io/arthas/arthas-boot.jar</p><h2 id="启动-java-jar-arthas-boot-jar" tabindex="-1"><a class="header-anchor" href="#启动-java-jar-arthas-boot-jar" aria-hidden="true">#</a> 启动：java -jar arthas-boot.jar</h2><p>然后选择进程</p><p>java -jar arthas-boot.jar -h 打印更多参数信息。</p><h2 id="按名称监听某个进程" tabindex="-1"><a class="header-anchor" href="#按名称监听某个进程" aria-hidden="true">#</a> 按名称监听某个进程</h2><p>java -jar arthas-boot.jar --select 项目名称</p><h2 id="查看线程对应的栈信息" tabindex="-1"><a class="header-anchor" href="#查看线程对应的栈信息" aria-hidden="true">#</a> 查看线程对应的栈信息</h2><p>thread pid</p><h2 id="反编译-class文件" tabindex="-1"><a class="header-anchor" href="#反编译-class文件" aria-hidden="true">#</a> 反编译 class文件</h2><p>jad classname</p><h2 id="使用monitor命令可以监控方法的成功和失败执行次数-非实时返回。-c表达循环周期-这里指定的是5s" tabindex="-1"><a class="header-anchor" href="#使用monitor命令可以监控方法的成功和失败执行次数-非实时返回。-c表达循环周期-这里指定的是5s" aria-hidden="true">#</a> 使用monitor命令可以监控方法的成功和失败执行次数，非实时返回。 -c表达循环周期，这里指定的是5s</h2><p>monitor -c 5 class method</p><p>例：monitor -c 5 com.min.GoodsController.get</p><h2 id="trace命令" tabindex="-1"><a class="header-anchor" href="#trace命令" aria-hidden="true">#</a> trace命令</h2><ul><li>使用trace命令，可以查看方法内部的调用路径和方法耗时，消耗时间最长的方法会用红色标记。</li></ul><p>trace class method</p><h3 id="次数调用限制" tabindex="-1"><a class="header-anchor" href="#次数调用限制" aria-hidden="true">#</a> 次数调用限制</h3><p>trace class method run -n 1</p><h3 id="执行时间调用限制" tabindex="-1"><a class="header-anchor" href="#执行时间调用限制" aria-hidden="true">#</a> 执行时间调用限制</h3><p>trace class method run &#39;#cost &gt; 10&#39;</p><h2 id="watch命令" tabindex="-1"><a class="header-anchor" href="#watch命令" aria-hidden="true">#</a> watch命令</h2><p>watch命令可以查看方法执行时的入参，返回值，异常等信息，并且也可以选择监听的时机，如方法执行之前，方法执行之后。</p><h3 id="查看方法返回值" tabindex="-1"><a class="header-anchor" href="#查看方法返回值" aria-hidden="true">#</a> 查看方法返回值</h3><p>watch class method returnObj</p><h3 id="查看方法入参和返回值" tabindex="-1"><a class="header-anchor" href="#查看方法入参和返回值" aria-hidden="true">#</a> 查看方法入参和返回值</h3><p>watch class method &quot;{params,returnObj}&quot;</p><h3 id="查看异常时的方式信息" tabindex="-1"><a class="header-anchor" href="#查看异常时的方式信息" aria-hidden="true">#</a> 查看异常时的方式信息</h3><p>watch class method &quot;{params[0],throwExp}&quot; -e</p><h2 id="heapdump命令" tabindex="-1"><a class="header-anchor" href="#heapdump命令" aria-hidden="true">#</a> heapdump命令</h2><p>使用heapdump来导出java程序的堆dump信息，导出来的hprof可以使用jhat命令和jvisualvm工具查看。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>heapdump filename.hprof\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="异步任务" tabindex="-1"><a class="header-anchor" href="#异步任务" aria-hidden="true">#</a> 异步任务</h2><h3 id="查看正在运行的任务" tabindex="-1"><a class="header-anchor" href="#查看正在运行的任务" aria-hidden="true">#</a> 查看正在运行的任务</h3><p>jobs</p><h3 id="将后台任务转为前台" tabindex="-1"><a class="header-anchor" href="#将后台任务转为前台" aria-hidden="true">#</a> 将后台任务转为前台</h3><p>fg 序号</p><h3 id="将前台任务转为后台" tabindex="-1"><a class="header-anchor" href="#将前台任务转为后台" aria-hidden="true">#</a> 将前台任务转为后台</h3><p>bg 序号</p><h3 id="后台执行任务-使用" tabindex="-1"><a class="header-anchor" href="#后台执行任务-使用" aria-hidden="true">#</a> 后台执行任务，使用&amp;</h3><p>trace class method &amp;</p><h2 id="webconsole" tabindex="-1"><a class="header-anchor" href="#webconsole" aria-hidden="true">#</a> webConsole</h2><p>默认地址为：http://127.0.0.1:3658/</p><h2 id="exit命令" tabindex="-1"><a class="header-anchor" href="#exit命令" aria-hidden="true">#</a> exit命令</h2><p>使用exit命令，即可退出arthas。</p><h2 id="jvm命令" tabindex="-1"><a class="header-anchor" href="#jvm命令" aria-hidden="true">#</a> jvm命令</h2><p>使用jvm命令，查看当前 JVM 的信息</p><h2 id="基础命令" tabindex="-1"><a class="header-anchor" href="#基础命令" aria-hidden="true">#</a> 基础命令</h2><ul><li>help——查看命令帮助信息</li><li>cat——打印文件内容，和linux里的cat命令类似</li><li>echo–打印参数，和linux里的echo命令类似</li><li>grep——匹配查找，和linux里的grep命令类似</li><li>tee——复制标准输入到标准输出和指定的文件，和linux里的tee命令类似</li><li>pwd——返回当前的工作目录，和linux命令类似</li><li>cls——清空当前屏幕区域</li><li>session——查看当前会话的信息</li><li>reset——重置增强类，将被 Arthas 增强过的类全部还原，Arthas 服务端关闭时会重置所有增强过的类</li><li>version——输出当前目标 Java 进程所加载的 Arthas 版本号</li><li>history——打印命令历史</li><li>quit——退出当前 Arthas 客户端，其他 Arthas 客户端不受影响</li><li>stop——关闭 Arthas 服务端，所有 Arthas 客户端全部退出</li><li>keymap——Arthas快捷键列表及自定义快捷键</li></ul><h2 id="jvm相关" tabindex="-1"><a class="header-anchor" href="#jvm相关" aria-hidden="true">#</a> jvm相关</h2><ul><li>dashboard——当前系统的实时数据面板</li><li>thread——查看当前 JVM 的线程堆栈信息</li><li>jvm——查看当前 JVM 的信息</li><li>sysprop——查看和修改JVM的系统属性</li><li>sysenv——查看JVM的环境变量</li><li>vmoption——查看和修改JVM里诊断相关的option</li><li>perfcounter——查看当前 JVM 的Perf Counter信息</li><li>logger——查看和修改logger</li><li>getstatic——查看类的静态属性</li><li>ognl——执行ognl表达式</li><li>mbean——查看 Mbean 的信息</li><li>heapdump——dump java heap, 类似jmap命令的heap dump功能</li></ul><h2 id="class-classloader相关" tabindex="-1"><a class="header-anchor" href="#class-classloader相关" aria-hidden="true">#</a> class/classloader相关</h2><ul><li>sc——查看JVM已加载的类信息</li><li>sm——查看已加载类的方法信息</li><li>jad——反编译指定已加载类的源码</li><li>mc——内存编译器，内存编译.java文件为.class文件</li><li>redefine——加载外部的.class文件，redefine到JVM里</li><li>dump——dump 已加载类的 byte code 到特定目录</li><li>classloader——查看classloader的继承树，urls，类加载信息，使用classloader去getResource</li></ul><h2 id="monitor-watch-trace相关" tabindex="-1"><a class="header-anchor" href="#monitor-watch-trace相关" aria-hidden="true">#</a> monitor/watch/trace相关</h2><div class="custom-container tip"><p class="custom-container-title">重要</p><p>请注意，这些命令，都通过字节码增强技术来实现的，会在指定类的方法中插入一些切面来实现数据统计和观测， 因此在线上、预发使用时，请尽量明确需要观测的类、方法以及条件，诊断结束要执行 stop 或将增强过的类执行 reset 命令。</p></div><h2 id="monitor——方法执行监控" tabindex="-1"><a class="header-anchor" href="#monitor——方法执行监控" aria-hidden="true">#</a> monitor——方法执行监控</h2><ul><li>watch——方法执行数据观测</li><li>trace——方法内部调用路径，并输出方法路径上的每个节点上耗时</li><li>stack——输出当前方法被调用的调用路径</li><li>tt——方法执行数据的时空隧道，记录下指定方法每次调用的入参和返回信息，并能对这些不同的时间下调用进行观测</li></ul><h2 id="profiler-火焰图" tabindex="-1"><a class="header-anchor" href="#profiler-火焰图" aria-hidden="true">#</a> profiler/火焰图</h2><p>profiler–使用async-profiler对应用采样，生成火焰图</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h2><p>options——查看或设置Arthas全局开关</p><h2 id="管道" tabindex="-1"><a class="header-anchor" href="#管道" aria-hidden="true">#</a> 管道</h2><p>Arthas支持使用管道对上述命令的结果进行进一步的处理，如sm java.lang.String * | grep ‘index’ grep——搜索满足条件的结果 plaintext——将命令的结果去除ANSI颜色 wc——按行统计输出结果</p><h2 id="后台异步任务" tabindex="-1"><a class="header-anchor" href="#后台异步任务" aria-hidden="true">#</a> 后台异步任务</h2><p>当线上出现偶发的问题，比如需要watch某个条件，而这个条件一天可能才会出现一次时，异步后台任务就派上用场了，详情请参考这里</p><p>使用 &gt; 将结果重写向到日志文件，使用 &amp; 指定命令是后台运行，session断开不影响任务执行（生命周期默认为1天）</p><p>jobs——列出所有job kill——强制终止任务 fg——将暂停的任务拉到前台执行 bg——将暂停的任务放到后台执行</p><h2 id="web-console" tabindex="-1"><a class="header-anchor" href="#web-console" aria-hidden="true">#</a> Web Console</h2><p>通过websocket连接Arthas。</p><p>Web Console 以java agent方式启动 以java agent方式启动 as.sh 和 arthas-boot 技巧 通过select功能选择attach的进程。</p><p>正常情况下，每次执行as.sh/arthas-boot.jar需要选择，或者指定PID。这样会比较麻烦，因为每次启动应用，它的PID会变化。</p><p>比如，已经启动了arthas-demo.jar，使用jps命令查看：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ jps\n58883 arthas-demo.jar\n58884 Jps\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>通过select参数可以指定进程名字，非常方便。</p><h2 id="调试步骤" tabindex="-1"><a class="header-anchor" href="#调试步骤" aria-hidden="true">#</a> 调试步骤</h2><ol><li>top基本使用 top -p pid -H 查看pid的进程中线程的具体情况</li></ol><h2 id="java自带工具信息获取" tabindex="-1"><a class="header-anchor" href="#java自带工具信息获取" aria-hidden="true">#</a> java自带工具信息获取</h2><p>得到异常的线程id号，那么我们可以用jstack将堆栈信息输出出来 jstack pid &gt; loop.txt 以PID的线程为例，到loop.txt中查找该线程的信息，因为jstack中PID用的是16进制，所以需要将10进制的PID转换为16进制的数值到文件中查找。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>printf &quot;%x&quot; pid\n#输出5662\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这样我们一般就能由此分析代码，当然我们也可以通过上面提供的调试工具分析。</p>',79),N={href:"https://blog.csdn.net/u013257767/article/details/107310186/",target:"_blank",rel:"noopener noreferrer"},S=(0,t.Uk)("具体教程"),z={render:function(a,e){const l=(0,t.up)("RouterLink"),z=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[i,(0,t._)("nav",r,[(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(l,{to:"#启动-java-jar-arthas-boot-jar"},{default:(0,t.w5)((()=>[s])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#按名称监听某个进程"},{default:(0,t.w5)((()=>[n])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#查看线程对应的栈信息"},{default:(0,t.w5)((()=>[h])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#反编译-class文件"},{default:(0,t.w5)((()=>[d])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#使用monitor命令可以监控方法的成功和失败执行次数-非实时返回。-c表达循环周期-这里指定的是5s"},{default:(0,t.w5)((()=>[o])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#trace命令"},{default:(0,t.w5)((()=>[c])),_:1}),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(l,{to:"#次数调用限制"},{default:(0,t.w5)((()=>[u])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#执行时间调用限制"},{default:(0,t.w5)((()=>[p])),_:1})])])]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#watch命令"},{default:(0,t.w5)((()=>[m])),_:1}),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(l,{to:"#查看方法返回值"},{default:(0,t.w5)((()=>[b])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#查看方法入参和返回值"},{default:(0,t.w5)((()=>[f])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#查看异常时的方式信息"},{default:(0,t.w5)((()=>[v])),_:1})])])]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#heapdump命令"},{default:(0,t.w5)((()=>[_])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#异步任务"},{default:(0,t.w5)((()=>[j])),_:1}),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(l,{to:"#查看正在运行的任务"},{default:(0,t.w5)((()=>[g])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#将后台任务转为前台"},{default:(0,t.w5)((()=>[w])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#将前台任务转为后台"},{default:(0,t.w5)((()=>[x])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#后台执行任务-使用"},{default:(0,t.w5)((()=>[k])),_:1})])])]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#webconsole"},{default:(0,t.w5)((()=>[W])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#exit命令"},{default:(0,t.w5)((()=>[U])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#jvm命令"},{default:(0,t.w5)((()=>[A])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#基础命令"},{default:(0,t.w5)((()=>[C])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#jvm相关"},{default:(0,t.w5)((()=>[y])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#class-classloader相关"},{default:(0,t.w5)((()=>[J])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#monitor-watch-trace相关"},{default:(0,t.w5)((()=>[M])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#monitor——方法执行监控"},{default:(0,t.w5)((()=>[q])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#profiler-火焰图"},{default:(0,t.w5)((()=>[V])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#options"},{default:(0,t.w5)((()=>[P])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#管道"},{default:(0,t.w5)((()=>[D])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#后台异步任务"},{default:(0,t.w5)((()=>[I])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#web-console"},{default:(0,t.w5)((()=>[O])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#调试步骤"},{default:(0,t.w5)((()=>[R])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(l,{to:"#java自带工具信息获取"},{default:(0,t.w5)((()=>[Y])),_:1})])])]),B,(0,t._)("p",null,[(0,t._)("a",E,[H,(0,t.Wm)(z)])]),L,(0,t._)("p",null,[(0,t._)("a",N,[S,(0,t.Wm)(z)])])],64)}}}}]);