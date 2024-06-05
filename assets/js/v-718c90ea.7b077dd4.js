"use strict";(self.webpackChunkyaomin=self.webpackChunkyaomin||[]).push([[4243],{3560:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-718c90ea",path:"/shell/shell_deploy.html",title:"自动化部署脚本-Jenkins",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"shell 启动脚本 start.sh",slug:"shell-启动脚本-start-sh",children:[]},{level:2,title:"停止脚本 stop.sh",slug:"停止脚本-stop-sh",children:[]},{level:2,title:"Jenkins部署脚本",slug:"jenkins部署脚本",children:[]}],filePathRelative:"shell/shell_deploy.md",git:{contributors:[{name:"Amin.Yao",email:"Amin.Yao@gaiaworks.cn",commits:1}]}}},3900:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="自动化部署脚本-jenkins" tabindex="-1"><a class="header-anchor" href="#自动化部署脚本-jenkins" aria-hidden="true">#</a> 自动化部署脚本-Jenkins</h1><h2 id="shell-启动脚本-start-sh" tabindex="-1"><a class="header-anchor" href="#shell-启动脚本-start-sh" aria-hidden="true">#</a> shell 启动脚本 start.sh</h2><p>修改脚本中的XXX-1.0.0.jar为你自己的jar名称即可，jvm参数可自行修改，保存脚本内容为start.sh。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">basepath</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> `dirname $0`<span class="token punctuation">;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>\n\n<span class="token function">nohup</span> java -Xmx2g -Xms2g -Xmn1024m  -XX:PermSize<span class="token operator">=</span>128m -Xss256k -XX:+DisableExplicitGC -XX:+UseParNewGC -XX:-UseAdaptiveSizePolicy -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled -XX:+UseCMSCompactAtFullCollection -XX:LargePageSizeInBytes<span class="token operator">=</span>128m -XX:+UseFastAccessorMethods -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction<span class="token operator">=</span><span class="token number">70</span> -XX:+HeapDumpOnOutOfMemoryError -XX:+PrintGCDetails -Xloggc:logs/gc.log -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps -XX:HeapDumpPath<span class="token operator">=</span>logs/dump.hprof -XX:ParallelGCThreads<span class="token operator">=</span><span class="token number">4</span> -jar <span class="token variable">$basepath</span>/XXX-1.0.0.jar <span class="token operator">&amp;&gt;</span>nohup.log <span class="token operator">&amp;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="停止脚本-stop-sh" tabindex="-1"><a class="header-anchor" href="#停止脚本-stop-sh" aria-hidden="true">#</a> 停止脚本 stop.sh</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n<span class="token comment"># 主类</span>\n<span class="token assign-left variable">APP_MAINCLASS</span><span class="token operator">=</span><span class="token string">&quot;XXX-1.0.0.jar&quot;</span>\n<span class="token comment"># 进程ID</span>\n<span class="token assign-left variable">psid</span><span class="token operator">=</span><span class="token number">0</span>\n<span class="token comment"># 记录尝试次数</span>\n<span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">0</span>\n<span class="token comment"># 获取进程ID，如果进程不存在则返回0，</span>\n<span class="token comment"># 当然你也可以在启动进程的时候将进程ID写到一个文件中，</span>\n<span class="token comment"># 然后使用的使用读取这个文件即可获取到进程ID</span>\n<span class="token function-name function">getpid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token assign-left variable">javaps</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span>jps -l <span class="token operator">|</span> <span class="token function">grep</span> $APP_MAINCLASS<span class="token variable">`</span></span>\n   <span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">$javaps</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n      <span class="token assign-left variable">psid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">echo</span> $javaps <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">`</span></span>\n   <span class="token keyword">else</span>\n      <span class="token assign-left variable">psid</span><span class="token operator">=</span><span class="token number">0</span>\n   <span class="token keyword">fi</span>\n<span class="token punctuation">}</span>\n<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   getpid\n   <span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">expr</span> $num + <span class="token number">1</span><span class="token variable">`</span></span>  \n   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$psid</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token comment"># 重试次数小于3次则继续尝试停止服务</span>\n    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$num</span>&quot;</span> -le <span class="token number">3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>\n    <span class="token builtin class-name">echo</span> <span class="token string">&quot;attempt to kill... num:<span class="token variable">$num</span>&quot;</span>\n      <span class="token function">kill</span> <span class="token variable">$psid</span>\n      <span class="token function">sleep</span> <span class="token number">5</span>\n    <span class="token keyword">else</span>\n    <span class="token comment"># 重试次数大于3次，则强制停止</span>\n      <span class="token builtin class-name">echo</span> <span class="token string">&quot;force kill...&quot;</span>\n      <span class="token function">kill</span> -9 <span class="token variable">$psid</span>      \n    <span class="token keyword">fi</span>\n  <span class="token comment"># 检查上述命令执行是否成功</span>\n    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n       <span class="token builtin class-name">echo</span> <span class="token string">&quot;Shutdown success...&quot;</span>\n    <span class="token keyword">else</span>\n       <span class="token builtin class-name">echo</span> <span class="token string">&quot;Shutdown failed...&quot;</span>\n    <span class="token keyword">fi</span>\n    <span class="token comment"># 重新获取进程ID，如果还存在则重试停止</span>\n    getpid\n    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$psid</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n       <span class="token builtin class-name">echo</span> <span class="token string">&quot;getpid... num:<span class="token variable">$psid</span>&quot;</span>\n       stop\n    <span class="token keyword">fi</span>\n   <span class="token keyword">else</span>\n      <span class="token builtin class-name">echo</span> <span class="token string">&quot;App is not running&quot;</span>\n   <span class="token keyword">fi</span>\n<span class="token punctuation">}</span>\nstop\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h2 id="jenkins部署脚本" tabindex="-1"><a class="header-anchor" href="#jenkins部署脚本" aria-hidden="true">#</a> Jenkins部署脚本</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> -Tq <span class="token variable">$IP</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF \nsource /etc/profile\n#进入应用部署目录\ncd /data/app/test\n##备份时间戳\nDATE=<span class="token variable"><span class="token variable">`</span><span class="token function">date</span> +%Y-%m-%d_%H-%M-%S<span class="token variable">`</span></span>\n#删除备份jar包\nrm -rf /data/app/test/xxx-1.0.0.jar.bak*\n#备份历史jar包\nmv /data/app/test/xxx-1.0.0.jar /data/app/test/xxx-1.0.0.jar.bak<span class="token variable">$DATE</span>\n#从jenkins上拉取最新jar包\nscp root@<span class="token variable">$jenkisIP</span>:/data/jenkins/workspace/test/target/XXX-1.0.0.jar /data/app/test\n# 执行停止应用脚本\nsh /data/app/test/stop.sh\n#执行重启脚本\nsh /data/app/test/start.sh\nexit\nEOF</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>以上脚本主要作用如下：</p><ul><li>备份正在运行的jar包；（万一有啥情况，还可以快速回滚）</li><li>把jenkins上打好的包，复制到目标服务上</li><li>执行停服脚本</li><li>执行启动服务脚本</li></ul><p>注意：</p><ul><li>$IP 是部署服务器ip,$jenkisIP 是jenkins所在的服务器ip。 在部署前请设置jenkins服务器和部署服务器之间ssh免密登录</li><li>/data/app/test 是部署jar包存放路径</li><li>stop.sh 是上文的停止脚本</li><li>start.sh 是上文的启动脚本</li></ul>',12),p={render:function(s,n){return e}}}}]);