"use strict";
exports.id = 2368;
exports.ids = [2368];
exports.modules = {

/***/ 5491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-6aace6fc",
  "path": "/soft/jumpServer.html",
  "title": "JumpServer 堡垒机",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装",
      "slug": "安装",
      "children": [
        {
          "level": 3,
          "title": "1.安装 Python3.6 MySQL Redis",
          "slug": "_1-安装-python3-6-mysql-redis",
          "children": []
        },
        {
          "level": 3,
          "title": "2.设定数据库密码,然后创建对应的jumpserver库",
          "slug": "_2-设定数据库密码-然后创建对应的jumpserver库",
          "children": []
        },
        {
          "level": 3,
          "title": "3.创建 Python 虚拟环境，并且载入 Python 虚拟环境",
          "slug": "_3-创建-python-虚拟环境-并且载入-python-虚拟环境",
          "children": []
        },
        {
          "level": 3,
          "title": "4.安装jumpserver核心软件包",
          "slug": "_4-安装jumpserver核心软件包",
          "children": []
        },
        {
          "level": 3,
          "title": "5.安装jumpser编译环境依赖",
          "slug": "_5-安装jumpser编译环境依赖",
          "children": []
        },
        {
          "level": 3,
          "title": "6.修改配置文件",
          "slug": "_6-修改配置文件",
          "children": []
        },
        {
          "level": 3,
          "title": "7.修改 Jumpserver 配置文件",
          "slug": "_7-修改-jumpserver-配置文件",
          "children": []
        },
        {
          "level": 3,
          "title": "8.运行 Jumpserver",
          "slug": "_8-运行-jumpserver",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "soft/jumpServer.md",
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

/***/ 1898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ jumpServer_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/soft/jumpServer.html.vue?vue&type=template&id=0f9a77e3



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="jumpserver-堡垒机" tabindex="-1"><a class="header-anchor" href="#jumpserver-堡垒机" aria-hidden="true">#</a> JumpServer 堡垒机</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="_1-安装-python3-6-mysql-redis" tabindex="-1"><a class="header-anchor" href="#_1-安装-python3-6-mysql-redis" aria-hidden="true">#</a> 1.安装 Python3.6 MySQL Redis</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@jumpserver ~<span class="token punctuation">]</span><span class="token comment"># yum install python3 python3-devel mariadb-server mariadb redis -y</span>
<span class="token punctuation">[</span>root@jumpserver ~<span class="token punctuation">]</span><span class="token comment"># systemctl enable mariadb redis</span>
<span class="token punctuation">[</span>root@jumpserver ~<span class="token punctuation">]</span><span class="token comment"># systemctl start mariadb redis</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-设定数据库密码-然后创建对应的jumpserver库" tabindex="-1"><a class="header-anchor" href="#_2-设定数据库密码-然后创建对应的jumpserver库" aria-hidden="true">#</a> 2.设定数据库密码,然后创建对应的jumpserver库</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@jumpserver ~<span class="token punctuation">]</span><span class="token comment"># mysqladmin password boy123.com</span>
<span class="token punctuation">[</span>root@jumpserver ~<span class="token punctuation">]</span><span class="token comment"># mysql -uroot -pboy123.com</span>
MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> create database jumpserver default charset <span class="token string">&#39;utf8&#39;</span> collate <span class="token string">&#39;utf8_bin&#39;</span><span class="token punctuation">;</span>
MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3-创建-python-虚拟环境-并且载入-python-虚拟环境" tabindex="-1"><a class="header-anchor" href="#_3-创建-python-虚拟环境-并且载入-python-虚拟环境" aria-hidden="true">#</a> 3.创建 Python 虚拟环境，并且载入 Python 虚拟环境</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@jumpserver ~<span class="token punctuation">]</span><span class="token comment"># python3.6 -m venv /opt/py3</span>
<span class="token punctuation">[</span>root@jumpserver ~<span class="token punctuation">]</span><span class="token comment"># source /opt/py3/bin/activate</span>
<span class="token punctuation">(</span>py3<span class="token punctuation">)</span> <span class="token punctuation">[</span>root@jumpserver ~<span class="token punctuation">]</span><span class="token comment"># </span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_4-安装jumpserver核心软件包" tabindex="-1"><a class="header-anchor" href="#_4-安装jumpserver核心软件包" aria-hidden="true">#</a> 4.安装jumpserver核心软件包</h3><p>本地方式进行软件包的上传并安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>py3<span class="token punctuation">)</span> <span class="token punctuation">[</span>root@jumpserver ~<span class="token punctuation">]</span><span class="token comment"># cd /opt</span>
<span class="token punctuation">(</span>py3<span class="token punctuation">)</span> <span class="token punctuation">[</span>root@jumpserver opt<span class="token punctuation">]</span><span class="token comment"># tar xf jumpserver-v2.2.2.tar.gz </span>
<span class="token punctuation">(</span>py3<span class="token punctuation">)</span> <span class="token punctuation">[</span>root@jumpserver opt<span class="token punctuation">]</span><span class="token comment"># mv jumpserver-v2.2.2 jumpserver</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_5-安装jumpser编译环境依赖" tabindex="-1"><a class="header-anchor" href="#_5-安装jumpser编译环境依赖" aria-hidden="true">#</a> 5.安装jumpser编译环境依赖</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/jumpserver/requirements
yum <span class="token function">install</span> -y <span class="token variable"><span class="token variable">\$(</span><span class="token function">cat</span> rpm_requirements.txt<span class="token variable">)</span></span>
pip <span class="token function">install</span> wheel -i https://mirrors.aliyun.com/pypi/simple/
pip <span class="token function">install</span> --upgrade pip setuptools -i https://mirrors.aliyun.com/pypi/simple/
pip <span class="token function">install</span> -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_6-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_6-修改配置文件" aria-hidden="true">#</a> 6.修改配置文件</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/jumpserver <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>            
<span class="token function">cp</span> config_example.yml config.yml <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
<span class="token function">vi</span> config.yml

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_7-修改-jumpserver-配置文件" tabindex="-1"><a class="header-anchor" href="#_7-修改-jumpserver-配置文件" aria-hidden="true">#</a> 7.修改 Jumpserver 配置文件</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\$ <span class="token builtin class-name">cd</span> /opt/jumpserver
\$ <span class="token function">cp</span> config_example.yml config.yml
\$ <span class="token assign-left variable">SECRET_KEY</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /dev/urandom <span class="token operator">|</span> <span class="token function">tr</span> -dc A-Za-z0-9 <span class="token operator">|</span> <span class="token function">head</span> -c <span class="token number">50</span><span class="token variable">\`</span></span> <span class="token comment"># 生成随机SECRET_KEY</span>
\$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;SECRET_KEY=<span class="token variable">\$SECRET_KEY</span>&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.bashrc
\$ <span class="token assign-left variable">BOOTSTRAP_TOKEN</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /dev/urandom <span class="token operator">|</span> <span class="token function">tr</span> -dc A-Za-z0-9 <span class="token operator">|</span> <span class="token function">head</span> -c <span class="token number">16</span><span class="token variable">\`</span></span> <span class="token comment"># 生成随机BOOTSTRAP_TOKEN</span>
\$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;BOOTSTRAP_TOKEN=<span class="token variable">\$BOOTSTRAP_TOKEN</span>&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.bashrc
\$ <span class="token function">sed</span> -i <span class="token string">&quot;s/SECRET_KEY:/SECRET_KEY: <span class="token variable">\$SECRET_KEY</span>/g&quot;</span> /opt/jumpserver/config.yml
\$ <span class="token function">sed</span> -i <span class="token string">&quot;s/BOOTSTRAP_TOKEN:/BOOTSTRAP_TOKEN: <span class="token variable">\$BOOTSTRAP_TOKEN</span>/g&quot;</span> /opt/jumpserver/config.yml
\$ <span class="token function">sed</span> -i <span class="token string">&quot;s/# DEBUG: true/DEBUG: false/g&quot;</span> /opt/jumpserver/config.yml
\$ <span class="token function">sed</span> -i <span class="token string">&quot;s/# LOG_LEVEL: DEBUG/LOG_LEVEL: ERROR/g&quot;</span> /opt/jumpserver/config.yml
\$ <span class="token function">sed</span> -i <span class="token string">&quot;s/# SESSION_EXPIRE_AT_BROWSER_CLOSE: false/SESSION_EXPIRE_AT_BROWSER_CLOSE: true/g&quot;</span> /opt/jumpserver/config.yml
\$ <span class="token function">sed</span> -i <span class="token string">&quot;s/DB_PASSWORD: /DB_PASSWORD: <span class="token variable">\$DB_PASSWORD</span>/g&quot;</span> /opt/jumpserver/config.yml
\$ <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m 你的SECRET_KEY是 <span class="token variable">\$SECRET_KEY</span> <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
\$ <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m 你的BOOTSTRAP_TOKEN是 <span class="token variable">\$BOOTSTRAP_TOKEN</span> <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
\$ <span class="token function">vi</span> config.yml <span class="token comment"># 确认内容有没有错误</span>
<span class="token comment"># SECURITY WARNING: keep the secret key used in production secret!# 加密秘钥 生产环境中请修改为随机字符串, 请勿外泄, PS: 纯数字不可以SECRET_KEY:</span>
<span class="token comment"># SECURITY WARNING: keep the bootstrap token used in production secret!# 预共享Token coco和guacamole用来注册服务账号, 不在使用原来的注册接受机制BOOTSTRAP_TOKEN:</span>
<span class="token comment"># Development env open this, when error occur display the full process track, Production disable it# DEBUG 模式 开启DEBUG后遇到错误时可以看到更多日志DEBUG: false</span>
<span class="token comment"># DEBUG, INFO, WARNING, ERROR, CRITICAL can set. See https://docs.djangoproject.com/en/1.10/topics/logging/# 日志级别LOG_LEVEL: ERROR# LOG_DIR:</span>
<span class="token comment"># Session expiration setting, Default 24 hour, Also set expired on on browser close# 浏览器Session过期时间, 默认24小时, 也可以设置浏览器关闭则过期# SESSION_COOKIE_AGE: 86400SESSION_EXPIRE_AT_BROWSER_CLOSE: true</span>
<span class="token comment"># Database setting, Support sqlite3, mysql, postgres ....# 数据库设置# See https://docs.djangoproject.com/en/1.10/ref/settings/#databases</span>
<span class="token comment"># SQLite setting:# 使用单文件sqlite数据库# DB_ENGINE: sqlite3# DB_NAME:</span>
<span class="token comment"># MySQL or postgres setting like:# 使用Mysql作为数据库DB_ENGINE: mysqlDB_HOST: 127.0.0.1DB_PORT: 3306DB_USER: jumpserverDB_PASSWORD:DB_NAME: jumpserver</span>
<span class="token comment"># When Django start it will bind this host and port# ./manage.py runserver 127.0.0.1:8080# 运行时绑定端口HTTP_BIND_HOST: 0.0.0.0HTTP_LISTEN_PORT: 8080</span>
<span class="token comment"># Use Redis as broker for celery and web socket# Redis配置REDIS_HOST: 127.0.0.1REDIS_PORT: 6379# REDIS_PASSWORD:# REDIS_DB_CELERY: 3# REDIS_DB_CACHE: 4</span>
<span class="token comment"># Use OpenID authorization# 使用OpenID 来进行认证设置# BASE_SITE_URL: http://localhost:8080# AUTH_OPENID: false # True or False# AUTH_OPENID_SERVER_URL: https://openid-auth-server.com/# AUTH_OPENID_REALM_NAME: realm-name# AUTH_OPENID_CLIENT_ID: client-id# AUTH_OPENID_CLIENT_SECRET: client-secret</span>
<span class="token comment"># OTP settings# OTP/MFA 配置# OTP_VALID_WINDOW: 0# OTP_ISSUER_NAME: Jumpserver</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_8-运行-jumpserver" tabindex="-1"><a class="header-anchor" href="#_8-运行-jumpserver" aria-hidden="true">#</a> 8.运行 Jumpserver</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\$ <span class="token builtin class-name">cd</span> /opt/jumpserver
\$ ./jms start all -d <span class="token comment"># 后台运行使用 -d 参数./jms start all -d</span>
<span class="token comment"># 新版本更新了运行脚本, 使用方式./jms start|stop|status all 后台运行请添加 -d 参数</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><a href="https://blog.csdn.net/weixin_46768610/article/details/115451716" target="_blank" rel="noopener noreferrer">教程地址`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/jumpServer.html.vue?vue&type=template&id=0f9a77e3

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/jumpServer.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\soft\\jumpServer.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const jumpServer_html = (script);

/***/ })

};
;
//# sourceMappingURL=2368.app.js.map