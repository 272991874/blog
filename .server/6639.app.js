"use strict";
exports.id = 6639;
exports.ids = [6639];
exports.modules = {

/***/ 8078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-54adab2a",
  "path": "/soft/redis.html",
  "title": "Redis数据备份和恢复",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "备份",
      "slug": "备份",
      "children": []
    },
    {
      "level": 2,
      "title": "数据恢复",
      "slug": "数据恢复",
      "children": [
        {
          "level": 3,
          "title": "备份的RDB文件：",
          "slug": "备份的rdb文件",
          "children": []
        },
        {
          "level": 3,
          "title": "指定目录：",
          "slug": "指定目录",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "问题？重启，发现数据没有恢复",
      "slug": "问题-重启-发现数据没有恢复",
      "children": []
    }
  ],
  "filePathRelative": "soft/redis.md",
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

/***/ 6314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ redis_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/soft/redis.html.vue?vue&type=template&id=1631ff2e

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="redis数据备份和恢复" tabindex="-1"><a class="header-anchor" href="#redis数据备份和恢复" aria-hidden="true">#</a> Redis数据备份和恢复</h1><h2 id="备份" tabindex="-1"><a class="header-anchor" href="#备份" aria-hidden="true">#</a> 备份</h2><p>可以使用SAVE或者BGSAVE命令</p><p>SAVE用于创建数据库的备份。（阻塞主进程）</p><p>BGSAVE用于在后台创建数据库的备份。（fock了一个专门save的子进程，不会影响主进程）</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> SAVE 
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> BGSAVE
Background saving started

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="数据恢复" tabindex="-1"><a class="header-anchor" href="#数据恢复" aria-hidden="true">#</a> 数据恢复</h2><p>想要恢复数据的话，需要将备份文件（dump.rdb）移动到redis安装目录并启动服务即可。</p><p>获取redis目录可以使用config命令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get <span class="token function">dir</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;dir&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> &quot;/data/redis_data”

<span class="token comment"># 找到目录后，进行查看</span>
<span class="token punctuation">[</span>root /<span class="token punctuation">]</span><span class="token comment"># cd data/redis_data/</span>
<span class="token punctuation">[</span>root redis_data<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">8</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">709</span> Jul <span class="token number">15</span> <span class="token number">12</span>:00 appendonly.aof
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">709</span> Jul <span class="token number">15</span> 09:03 dump.rdb

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="备份的rdb文件" tabindex="-1"><a class="header-anchor" href="#备份的rdb文件" aria-hidden="true">#</a> 备份的RDB文件：</h3><p>通过命令127.0.0.1:6379&gt; CONFIG GET dir查看执行SAVE命令之后，redis默认存放备份文件的目录； 通过命令127.0.0.1:6379&gt; CONFIG GET dbfilename查看备份RDB文件的文件名称.</p><h3 id="指定目录" tabindex="-1"><a class="header-anchor" href="#指定目录" aria-hidden="true">#</a> 指定目录：</h3><p>通过命令redis 127.0.0.1:6379&gt; CONFIG GET dir，得出redis从哪个目录读取备份文件（一般只要直接重启Redis就能恢复数据，因为备份的默认目录和启动读取的目录是同一个）</p><h2 id="问题-重启-发现数据没有恢复" tabindex="-1"><a class="header-anchor" href="#问题-重启-发现数据没有恢复" aria-hidden="true">#</a> 问题？重启，发现数据没有恢复</h2><p>这是因为Redis有自动备份。可以通过config get save进行查看。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get save
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;save&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;3600 1 300 100 60 10000&quot;</span>
<span class="token comment"># save 900 1 代表900秒内有1个key发生改变就触发save</span>
<span class="token comment"># save 300 10 代表300秒内有10个key发生改变就触发save</span>
<span class="token comment"># save 60 10000 代表300秒内有10个key发生改变就触发save</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在执行第三步操作时，改变了1个以上的key的值，并且这个时间正好是Redis自动备份900秒的最后一秒， 所以此时Redis又自动备份了一次，dump.rdb覆盖了旧的rdb文件，还原回去，就是del之后的数据了。 想要自己备份的话就要关闭自动备份的功能。</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/redis.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\soft\\redis.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const redis_html = (script);

/***/ })

};
;
//# sourceMappingURL=6639.app.js.map