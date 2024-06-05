"use strict";(self.webpackChunkyaomin=self.webpackChunkyaomin||[]).push([[6857],{6401:(e,a,s)=>{s.r(a),s.d(a,{data:()=>l});const l={key:"v-06ee0042",path:"/soft/sql_injection.html",title:"SQL 注入",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"mybatis预编译不一定安全",slug:"mybatis预编译不一定安全",children:[{level:3,title:'like "%" #{name} "%"',slug:"like-name",children:[]},{level:3,title:"in 之后的多个参数",slug:"in-之后的多个参数",children:[]},{level:3,title:"order by 之后",slug:"order-by-之后",children:[]}]}],filePathRelative:"soft/sql_injection.md",git:{contributors:[{name:"Amin.Yao",email:"Amin.Yao@gaiaworks.cn",commits:2}]}}},3921:(e,a,s)=>{s.r(a),s.d(a,{default:()=>n});const l=(0,s(6252).uE)('<h1 id="sql-注入" tabindex="-1"><a class="header-anchor" href="#sql-注入" aria-hidden="true">#</a> SQL 注入</h1><h2 id="mybatis预编译不一定安全" tabindex="-1"><a class="header-anchor" href="#mybatis预编译不一定安全" aria-hidden="true">#</a> mybatis预编译不一定安全</h2><h3 id="like-name" tabindex="-1"><a class="header-anchor" href="#like-name" aria-hidden="true">#</a> like &quot;%&quot; #{name} &quot;%&quot;</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select * from user where name like &quot;%&quot;#{name}&quot;%&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这种情况预编译机制是正常通过的，但sql的执行结果不会返回包含%的用户，而是返回了所有用户。</p><ul><li><p>原因： %在mysql中是关键字，如果使用like &#39;%%%&#39;，该like条件会失效</p></li><li><p>解决： 需要对%进行转义：%</p></li></ul><p>转义后的sql变成：select * from user where name like &#39;%%%&#39;; 只会返回包含%的用户。</p><p>如果用户输入： %&#39; AND 1=1 AND &#39;%&#39;=&#39; ，会构成如下SQL:</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select * from user where name like  &#39;%&#39; &#39;%&#39; AND 1 = 1 AND &#39;%&#39;=&#39;&#39; &#39;%&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="in-之后的多个参数" tabindex="-1"><a class="header-anchor" href="#in-之后的多个参数" aria-hidden="true">#</a> in 之后的多个参数</h3><p>in之后多个id查询时使用#</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>Select * from news where id in (#{ids})\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>正确用法为使用foreach，而不是将#替换为$</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>id in\n&lt;foreach collection=&quot;ids&quot; item=&quot;item&quot; open=&quot;(&quot;separatosr=&quot;,&quot; close=&quot;)&quot;&gt;\n#{ids}\n&lt;/foreach&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="order-by-之后" tabindex="-1"><a class="header-anchor" href="#order-by-之后" aria-hidden="true">#</a> order by 之后</h3><p>这种场景应当在Java层面做映射，设置一个枚举，仅使用枚举对应的值，或者创建一个字段/表名数组，这样保证传入的字段或者表名都在白名单里面。 需要注意的是在mybatis-generator自动生成的SQL语句中，order by使用的也是$，而like和in没有问题。</p>',16),n={render:function(e,a){return l}}}}]);