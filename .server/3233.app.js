"use strict";
exports.id = 3233;
exports.ids = [3233];
exports.modules = {

/***/ 6197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7c4ad36a",
  "path": "/soft/docker_file.html",
  "title": "Dockerfile",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "创建Dockerfile文件，内容如下：",
      "slug": "创建dockerfile文件-内容如下",
      "children": []
    },
    {
      "level": 2,
      "title": "制作镜像",
      "slug": "制作镜像",
      "children": []
    },
    {
      "level": 2,
      "title": "运行镜像",
      "slug": "运行镜像",
      "children": []
    },
    {
      "level": 2,
      "title": "推送镜像到远程仓库",
      "slug": "推送镜像到远程仓库",
      "children": [
        {
          "level": 3,
          "title": "1.在本地登录到远程仓库",
          "slug": "_1-在本地登录到远程仓库",
          "children": []
        },
        {
          "level": 3,
          "title": "2.给本地镜像打标签",
          "slug": "_2-给本地镜像打标签",
          "children": []
        },
        {
          "level": 3,
          "title": "3.推送",
          "slug": "_3-推送",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "soft/docker_file.md",
  "git": {
    "contributors": [
      {
        "name": "yaomin_java",
        "email": "272991874@qq.com",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 1255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ docker_file_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/soft/docker_file.html.vue?vue&type=template&id=40f65a87

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h1><h2 id="创建dockerfile文件-内容如下" tabindex="-1"><a class="header-anchor" href="#创建dockerfile文件-内容如下" aria-hidden="true">#</a> 创建Dockerfile文件，内容如下：</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FROM openjdk:8u332-oracle
MAINTAINER Amin Yao xxx@amin.com

COPY target/min-gateway-1.0.0.jar /min-gateway-1.0.0.jar

ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span>, <span class="token string">&quot;-jar&quot;</span>, <span class="token string">&quot;/min-gateway-1.0.0.jar&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="制作镜像" tabindex="-1"><a class="header-anchor" href="#制作镜像" aria-hidden="true">#</a> 制作镜像</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker build -t 镜像名称
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="运行镜像" tabindex="-1"><a class="header-anchor" href="#运行镜像" aria-hidden="true">#</a> 运行镜像</h2><p>docker run -t 镜像名称</p><h2 id="推送镜像到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送镜像到远程仓库" aria-hidden="true">#</a> 推送镜像到远程仓库</h2><h3 id="_1-在本地登录到远程仓库" tabindex="-1"><a class="header-anchor" href="#_1-在本地登录到远程仓库" aria-hidden="true">#</a> 1.在本地登录到远程仓库</h3><p>docker login --username=[用户名] -p=[密码]</p><p>例：docker login ccr.ccs.tencentyun.com/yaomin/yaomin --username=100010893455</p><h3 id="_2-给本地镜像打标签" tabindex="-1"><a class="header-anchor" href="#_2-给本地镜像打标签" aria-hidden="true">#</a> 2.给本地镜像打标签</h3><p>docker tag [镜像id] [远程ip:端口/自定义路径/*]:[版本号]</p><p>例：docker tag ccr.ccs.tencentyun.com/yaomin/yaomin:1.0</p><h3 id="_3-推送" tabindex="-1"><a class="header-anchor" href="#_3-推送" aria-hidden="true">#</a> 3.推送</h3><p>docker push [远程ip:端口/自定义路径/*]:[版本号]</p><p>例：docker push ccr.ccs.tencentyun.com/yaomin/yaomin:1.0</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/docker_file.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\soft\\docker_file.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const docker_file_html = (script);

/***/ })

};
;
//# sourceMappingURL=3233.app.js.map