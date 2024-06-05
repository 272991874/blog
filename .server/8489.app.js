"use strict";
exports.id = 8489;
exports.ids = [8489];
exports.modules = {

/***/ 8071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-233aa6f6",
  "path": "/devops/build-script.html",
  "title": "编译脚本",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "k8s 滚动脚本",
      "slug": "k8s-滚动脚本",
      "children": []
    },
    {
      "level": 2,
      "title": "需要配置哪些",
      "slug": "需要配置哪些",
      "children": [
        {
          "level": 3,
          "title": "服务详情",
          "slug": "服务详情",
          "children": []
        },
        {
          "level": 3,
          "title": "部署模板",
          "slug": "部署模板",
          "children": []
        },
        {
          "level": 3,
          "title": "服务器绑定",
          "slug": "服务器绑定",
          "children": []
        },
        {
          "level": 3,
          "title": "日志提取",
          "slug": "日志提取",
          "children": []
        },
        {
          "level": 3,
          "title": "权限管理",
          "slug": "权限管理",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "devops/build-script.md",
  "git": {
    "contributors": [
      {
        "name": "Amin.Yao",
        "email": "Amin.Yao@gaiaworks.cn",
        "commits": 3
      }
    ]
  }
}


/***/ }),

/***/ 6256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ build_script_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/devops/build-script.html.vue?vue&type=template&id=90ebaaba

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="编译脚本" tabindex="-1"><a class="header-anchor" href="#编译脚本" aria-hidden="true">#</a> 编译脚本</h1><ul><li>后端</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">path</span><span class="token operator">=</span><span class="token variable">\$1</span>
<span class="token assign-left variable">dockerfile_name</span><span class="token operator">=</span><span class="token variable">\$2</span>
<span class="token assign-left variable">appname</span><span class="token operator">=</span><span class="token variable">\$3</span>
<span class="token assign-left variable">git_tag</span><span class="token operator">=</span><span class="token variable">\$4</span>
<span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token variable">\$5</span>
<span class="token assign-left variable">packageName</span><span class="token operator">=</span><span class="token variable">\$7</span>

<span class="token builtin class-name">source</span> /etc/profile
mvn -s /data/settings/wfm4.xml clean package <span class="token operator">||</span> <span class="token punctuation">{</span> <span class="token builtin class-name">printf</span> <span class="token string">&#39;[ERROR] build failed, pls check...\\n%.0s&#39;</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">500</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token function">sudo</span> docker build -f <span class="token variable">\$dockerfile_name</span> -t xxxx-e2-01-registry.cn-shanghai.cr.aliyuncs.com/xxxxworks/<span class="token variable">\${appname}</span><span class="token builtin class-name">:</span><span class="token variable">\$git_tag</span><span class="token variable">\${version}</span> <span class="token builtin class-name">.</span>
<span class="token function">sudo</span> docker push xxxx-e2-01-registry.cn-shanghai.cr.aliyuncs.com/xxxxworks/<span class="token variable">\${appname}</span><span class="token builtin class-name">:</span><span class="token variable">\$git_tag</span><span class="token variable">\${version}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>前端</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">mytime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d%H%M%S<span class="token variable">\`</span></span>
<span class="token assign-left variable">path</span><span class="token operator">=</span><span class="token variable">\$1</span>
<span class="token assign-left variable">dockerfile_name</span><span class="token operator">=</span><span class="token variable">\$2</span>
<span class="token assign-left variable">appname</span><span class="token operator">=</span><span class="token variable">\$3</span>
<span class="token assign-left variable">git_tag</span><span class="token operator">=</span><span class="token variable">\$4</span>
<span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token variable">\$5</span>
<span class="token comment">#cd \$path</span>
<span class="token builtin class-name">source</span> /etc/profile

<span class="token builtin class-name">cd</span> public
<span class="token function">pnpm</span> <span class="token function">install</span>
<span class="token function">pnpm</span> run build
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\$?</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;[ERROR] public build failed, pls check...&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token function">sleep</span> 2s
<span class="token comment">#上传至对象存储</span>
<span class="token builtin class-name">cd</span> <span class="token variable">\$WORKSPACE</span>/public/dest
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\$?</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;[ERROR] public build failed, pls check...&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
<span class="token function">tar</span> czvf <span class="token variable">\$version</span>.tgz ./*
/home/JumpLin/workspace/obsutil/obsutil <span class="token function">cp</span> <span class="token variable">\$version</span>.tgz obs://devops-auto/package/<span class="token variable">\$active</span>/frontend/Develop/<span class="token variable">\$product</span>/
<span class="token function">rm</span> -rf <span class="token variable">\$version</span>.tgz

<span class="token builtin class-name">cd</span>  <span class="token variable">\$WORKSPACE</span>/server-maya
<span class="token function">sudo</span> docker build -t xxxx-e2-01-registry.cn-shanghai.cr.aliyuncs.com/xxxxworks/<span class="token variable">\${appname}</span><span class="token builtin class-name">:</span><span class="token variable">\$git_tag</span><span class="token variable">\${version}</span> <span class="token builtin class-name">.</span>
<span class="token function">sudo</span> docker push xxxx-e2-01-registry.cn-shanghai.cr.aliyuncs.com/xxxxworks/<span class="token variable">\${appname}</span><span class="token builtin class-name">:</span><span class="token variable">\$git_tag</span><span class="token variable">\${version}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ul><li>git_tag(\$branch): 分支名</li><li>appname: 镜像名</li><li>run_env: 运行环境</li><li>version: 版本号</li><li>product: 项目code</li><li>docker_image: 页面上展示的镜像名</li><li>i(\$1): ecs部署的IP</li><li>server_location: ecs部署是项目所在目录</li><li>packageName: ecs部署的包名</li></ul><h2 id="k8s-滚动脚本" tabindex="-1"><a class="header-anchor" href="#k8s-滚动脚本" aria-hidden="true">#</a> k8s 滚动脚本</h2><ul><li>后端</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment">#!/bin/bash</span>

kubectl --kubeconfig ~/.kube/ali-<span class="token variable">\${run_env}</span> -n devopsplatform <span class="token builtin class-name">set</span> image deployments.apps/database-transfer database-transfer<span class="token operator">=</span>xxxx-e2-01-registry.cn-shanghai.cr.aliyuncs.com/xxxxworks/database-transfer:<span class="token variable">\$docker_image</span> --record

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>前端</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl --kubeconfig /home/devops/.kube/devops-xxxx -n devops-platform-d <span class="token builtin class-name">set</span> image deployment/devops-frontend devops-frontend<span class="token operator">=</span>xxxx-e2-01-registry.cn-shanghai.cr.aliyuncs.com/xxxxworks/devops-frontend:<span class="token variable">\$docker_image</span> --record

kubectl --kubeconfig /home/devops/.kube/devops-xxxx -n devops-platform-d <span class="token builtin class-name">set</span> <span class="token function">env</span> deployment/devops-frontend <span class="token assign-left variable">CDN</span><span class="token operator">=</span>https://xxxx-static-d.obs.cn-east-3.myhuaweicloud.com/devops-frontend/<span class="token variable">\$version</span>
	
/home/devops/workspace/obsutil/obsutil <span class="token function">cp</span> obs://devops-auto/package/prod/frontend/Develop/<span class="token variable">\$product</span>/<span class="token variable">\$version</span>.tgz /home/devops/upload/frontend-obs/<span class="token variable">\$product</span>/
<span class="token builtin class-name">cd</span> /home/devops/upload/frontend-obs/<span class="token variable">\$product</span> 
<span class="token function">tar</span> -zxvf <span class="token variable">\$version</span>.tgz 
<span class="token function">rm</span> -rf <span class="token variable">\$version</span>.tgz
<span class="token function">sudo</span> <span class="token function">su</span> devops<span class="token operator">&lt;&lt;</span><span class="token string">HERE
/home/devops/workspace/obsutil/obsutil cp -r -f -flat ./ obs://xxxx-static-d/devops-frontend/<span class="token variable">\$version</span>/ 
HERE</span>
<span class="token function">rm</span> -rf ./*


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="需要配置哪些" tabindex="-1"><a class="header-anchor" href="#需要配置哪些" aria-hidden="true">#</a> 需要配置哪些</h2><h3 id="服务详情" tabindex="-1"><a class="header-anchor" href="#服务详情" aria-hidden="true">#</a> 服务详情</h3><p>基本信息 上线门禁 组件安全扫描</p><h3 id="部署模板" tabindex="-1"><a class="header-anchor" href="#部署模板" aria-hidden="true">#</a> 部署模板</h3><p>发布脚本： 编译脚本 滚动脚本 灰度脚本 启停脚本 下发脚本 初始化脚本 巡检脚本 yaml配置 Prepare脚本</p><h3 id="服务器绑定" tabindex="-1"><a class="header-anchor" href="#服务器绑定" aria-hidden="true">#</a> 服务器绑定</h3><p>未绑定服务器 已绑定服务器</p><h3 id="日志提取" tabindex="-1"><a class="header-anchor" href="#日志提取" aria-hidden="true">#</a> 日志提取</h3><p>选择服务器，输入服务器文件地址</p><h3 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理" aria-hidden="true">#</a> 权限管理</h3><p>分模块管理权限</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/devops/build-script.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\devops\\build-script.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const build_script_html = (script);

/***/ })

};
;
//# sourceMappingURL=8489.app.js.map