"use strict";
exports.id = 6247;
exports.ids = [6247];
exports.modules = {

/***/ 7816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7486f642",
  "path": "/shell/database_transfer.html",
  "title": "数据库迁移脚本",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "shell/database_transfer.md",
  "git": {
    "contributors": [
      {
        "name": "Amin.Yao",
        "email": "Amin.Yao@gaiaworks.cn",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 8451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ database_transfer_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/shell/database_transfer.html.vue?vue&type=template&id=eaef2abe

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="数据库迁移脚本" tabindex="-1"><a class="header-anchor" href="#数据库迁移脚本" aria-hidden="true">#</a> 数据库迁移脚本</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token function-name function">check_status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> \$?<span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\$status</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;运行异常，退出&quot;</span>
<span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
<span class="token punctuation">}</span>
<span class="token function-name function">check_connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;quit&quot;</span><span class="token operator">|</span> <span class="token function">timeout</span> 5s telnet <span class="token variable">\$1</span> <span class="token variable">\$2</span><span class="token operator">|</span><span class="token function">grep</span> -q Escape
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\$?</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;数据库端口连接正常&quot;</span>
<span class="token keyword">else</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;数据库连接异常，退出！&quot;</span>
<span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\$#</span> -eq <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;开始创建&quot;</span><span class="token variable">\$5</span><span class="token string">&quot;排班数据库&quot;</span>
mysql -h<span class="token variable">\$1</span> -P<span class="token variable">\$2</span> -u<span class="token variable">\$3</span> -p<span class="token variable">\$4</span> -e <span class="token string">&quot;create database <span class="token variable">\$5</span> CHARACTER SET utf8 COLLATE utf8_general_ci;&quot;</span>
check_status
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${5}</span>排班数据库创建完成&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">\$#</span> -eq <span class="token number">11</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;开始备份并导入数据库&quot;</span>
check_connect <span class="token variable">\$6</span> <span class="token variable">\$7</span>
mysqldump -h<span class="token variable">\$6</span> -P<span class="token variable">\$7</span> -u<span class="token variable">\$8</span> -p<span class="token variable">\$9</span> --set-gtid-purged<span class="token operator">=</span>off --single-transaction <span class="token variable">\${10}</span>  -q -R  -E <span class="token operator">|</span> <span class="token function">sed</span>   -e <span class="token string">&quot;s/DEFINE.*PROCEDURE/PROCEDURE/;s/DEFINE.*FUNCTION/FUNCTION/;s/DEFINER.*DEFINER//;s/DEFINER.*EVENT/EVENT/;s/DEFINER.*VIEW/VIEW/;s/utf8mb4_0900_ai_ci/utf8mb4_general_ci/;s/CHARSET=utf8mb3/CHARSET=utf8/;s/\\<span class="token variable"><span class="token variable">\`</span>\$<span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">\\</span><span class="token variable">\`</span></span>.//g&quot;</span><span class="token operator">&gt;</span>/data/<span class="token variable">\${11}</span>_dump.sql
check_status
<span class="token builtin class-name">echo</span> <span class="token string">&quot;备份成功&quot;</span>
<span class="token comment">#mysql -h\$1 -P\$2 -u\$3 -p\$4 -e &#39;set sql_log_bin=0&#39;</span>
mysql -h<span class="token variable">\$1</span> -P<span class="token variable">\$2</span> -u<span class="token variable">\$3</span> -p<span class="token variable">\$4</span> -D<span class="token string">&quot;<span class="token variable">\$5</span>&quot;</span> <span class="token operator">&lt;</span>/data/<span class="token variable">\${11}</span>_dump.sql
check_status
<span class="token builtin class-name">echo</span> <span class="token string">&quot;导库成功&quot;</span>
<span class="token comment">#rm -rf /data/\${11}_dump.sql</span>
<span class="token keyword">else</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;参数有误&quot;</span>
<span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/shell/database_transfer.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\shell\\database_transfer.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const database_transfer_html = (script);

/***/ })

};
;
//# sourceMappingURL=6247.app.js.map