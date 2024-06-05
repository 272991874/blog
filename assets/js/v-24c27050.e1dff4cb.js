"use strict";(self.webpackChunkyaomin=self.webpackChunkyaomin||[]).push([[2720],{7129:(a,e,s)=>{s.r(e),s.d(e,{data:()=>h});const h={key:"v-24c27050",path:"/algorithm/hash_base.html",title:"Hash 算法",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"定义",slug:"定义",children:[]},{level:2,title:"流行的算法",slug:"流行的算法",children:[]},{level:2,title:"性能",slug:"性能",children:[]},{level:2,title:"数字摘要",slug:"数字摘要",children:[]}],filePathRelative:"algorithm/hash_base.md",git:{contributors:[{name:"yaomin",email:"272991874@qq.com",commits:1}]}}},5310:(a,e,s)=>{s.r(e),s.d(e,{default:()=>o});var h=s(6252);const l=(0,h._)("h1",{id:"hash-算法",tabindex:"-1"},[(0,h._)("a",{class:"header-anchor",href:"#hash-算法","aria-hidden":"true"},"#"),(0,h.Uk)(" Hash 算法")],-1),i={class:"table-of-contents"},t=(0,h.Uk)("定义"),n=(0,h.Uk)("流行的算法"),r=(0,h.Uk)("性能"),c=(0,h.Uk)("数字摘要"),d=(0,h.uE)('<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>Hash （哈希或散列）算法是信息技术领域非常基础也非常重要的技术。它能任意长度的二进 制值（明文）映射为较短的固定长度的二进制值（Hash 值），并且不同的明文很难映射为相 同的 Hash 值。</p><p>例如计算一段话“hello blockchain world, this is yeasy@github”的 MD5 hash 值为 89242549883a2ef85dc81b90fb606046 。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello blockchain world, this is yeasy@github&quot;</span><span class="token operator">|</span>md5 89242549883a2ef85dc81b90fb606046\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这意味着我们只要对某文件进行 MD5 Hash 计算，得到结果为 89242549883a2ef85dc81b90fb606046 ，这就说明文件内容极大概率上就是 “hello blockchain world, this is yeasy@github”。</p><p>可见，Hash 的核心思想十分类似于基于内容的编址或命名。</p><div class="custom-container tip"><p class="custom-container-title">注：hash 值在应用中又被称为指纹（fingerprint）、摘要（digest）。</p><p>注：MD5 是一个经典的 hash 算法，其和 SHA-1 算法都已被 证明 安全性不足应用于商业场 景。</p></div><p>一个优秀的 hash 算法，将能实现：</p><ul><li>正向快速：给定明文和 hash 算法，在有限时间和有限资源内能计算出 hash 值。</li><li>逆向困难：给定（若干） hash 值，在有限时间内很难（基本不可能）逆推出明文。</li><li>输入敏感：原始输入信息修改一点信息，产生的 hash 值看起来应该都有很大不同。</li><li>冲突避免：很难找到两段内容不同的明文，使得它们的 hash 值一致（发生冲突）。</li></ul><p>冲突避免有时候又被称为“抗碰撞性”。如果给定一个明文前提下，难以找到碰撞的另一个明 文，称为“弱抗碰撞性”；如果难以找到任意两个明文，发生碰撞，则称算法具有“强抗碰撞 性”。</p><h2 id="流行的算法" tabindex="-1"><a class="header-anchor" href="#流行的算法" aria-hidden="true">#</a> 流行的算法</h2><p>目前流行的 Hash 算法包括 MD5、SHA-1 和 SHA-2。</p><p>MD4（RFC 1320）是 MIT 的 Ronald L. Rivest 在 1990 年设计的，MD 是 Message Digest 的缩写。其输出为 128 位。MD4 已证明不够安全。</p><p>MD5（RFC 1321）是 Rivest 于1991年对 MD4 的改进版本。它对输入仍以 512 位分组，其 输出是 128 位。MD5 比 MD4 复杂，并且计算速度要慢一点，更安全一些。MD5 已被证明不 具备“强抗碰撞性”。</p><p>SHA （Secure Hash Algorithm）是一个 Hash 函数族，由 NIST（National Institute of Standards and Technology）于 1993 年发布第一个算法。目前知名的 SHA-1 在 1995 年面 世，它的输出为长度 160 位的 hash 值，因此抗穷举性更好。SHA-1 设计时基于和 MD4 相同 原理，并且模仿了该算法。SHA-1 已被证明不具备“强抗碰撞性”。</p><div class="custom-container tip"><p class="custom-container-title">为了提高安全性，NIST 还设计出了 SHA-224、SHA-256、SHA-384，和 SHA-512 算法（统 称为 SHA-2），跟 SHA-1 算法原理类似。SHA-3 相关算法也已被提出。</p></div><p>目前，一般认为 MD5 和 SHA1 已经不够安全，推荐至少使用 SHA2-256 算法。</p><h2 id="性能" tabindex="-1"><a class="header-anchor" href="#性能" aria-hidden="true">#</a> 性能</h2><p>一般的，Hash 算法都是算力敏感型，意味着计算资源是瓶颈，主频越高的 CPU 进行 Hash 的速度也越快。</p><p>也有一些 Hash 算法不是算力敏感的，例如 scrypt，需要大量的内存资源，节点不能通过简单 的增加更多 CPU 来获得 hash 性能的提升。</p><h2 id="数字摘要" tabindex="-1"><a class="header-anchor" href="#数字摘要" aria-hidden="true">#</a> 数字摘要</h2><p>顾名思义，数字摘要是对数字内容进行 Hash 运算，获取唯一的摘要值来指代原始数字内容。</p><p>数字摘要是解决确保内容没被篡改过的问题（利用 Hash 函数的抗碰撞性特点）。</p><p>数字摘要是 Hash 算法最重要的一个用途。在网络上下载软件或文件时，往往同时会提供一个 数字摘要值，用户下载下来原始文件可以自行进行计算，并同提供的摘要值进行比对，以确 保内容没有被修改过。</p>',24),o={render:function(a,e){const s=(0,h.up)("RouterLink");return(0,h.wg)(),(0,h.iD)(h.HY,null,[l,(0,h._)("nav",i,[(0,h._)("ul",null,[(0,h._)("li",null,[(0,h.Wm)(s,{to:"#定义"},{default:(0,h.w5)((()=>[t])),_:1})]),(0,h._)("li",null,[(0,h.Wm)(s,{to:"#流行的算法"},{default:(0,h.w5)((()=>[n])),_:1})]),(0,h._)("li",null,[(0,h.Wm)(s,{to:"#性能"},{default:(0,h.w5)((()=>[r])),_:1})]),(0,h._)("li",null,[(0,h.Wm)(s,{to:"#数字摘要"},{default:(0,h.w5)((()=>[c])),_:1})])])]),d],64)}}}}]);