"use strict";
exports.id = 6344;
exports.ids = [6344];
exports.modules = {

/***/ 2416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-74499577",
  "path": "/lot/",
  "title": "物联网",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "MQTT协议",
      "slug": "mqtt协议",
      "children": [
        {
          "level": 3,
          "title": "特点",
          "slug": "特点",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Apache-Apollo服务",
      "slug": "apache-apollo服务",
      "children": []
    }
  ],
  "filePathRelative": "lot/README.md",
  "git": {
    "contributors": [
      {
        "name": "yaomin",
        "email": "272991874@qq.com",
        "commits": 2
      }
    ]
  }
}


/***/ }),

/***/ 6976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/lot/index.html.vue?vue&type=template&id=c6281af8



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="物联网" tabindex="-1"><a class="header-anchor" href="#物联网" aria-hidden="true">#</a> 物联网</h1><h2 id="mqtt协议" tabindex="-1"><a class="header-anchor" href="#mqtt协议" aria-hidden="true">#</a> MQTT协议</h2><p>MQTT（消息队列遥测传输）是ISO标准（ISO/IEC PRF 20922）下基于发布/订阅范式的消息协议。 它工作在 TCP/IP协议族上，是为硬件性能低下的远程设备以及网络状况糟糕的情况下而设计的发布/订阅型消息协议。 国内很多企业都广泛使用MQTT作为Android手机客户端与服务器端推送消息的协议。</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><p>MQTT协议是为大量计算能力有限，且工作在低带宽、不可靠的网络的远程传感器和控制设备通讯而设计的协议，它具有以下主要的几项特性：</p><ol><li><p>使用发布/订阅消息模式，提供一对多的消息发布，解除应用程序耦合；</p></li><li><p>对负载内容屏蔽的消息传输；</p></li><li><p>使用TCP/IP提供网络连接；</p></li><li><p>有三种消息发布服务质量；</p></li></ol><ul><li>至多一次：消息发布完全依赖底层 TCP/IP 网络。会发生消息丢失或重复。这一级别可用于如下情况，环境传感器数据，丢失一次读记录无所谓，因为不久后还会有第二次发送。</li><li>至少一次：确保消息到达，但消息重复可能会发生。</li><li>只有一次：确保消息到达一次。这一级别可用于如下情况，在计费系统中，消息重复或丢失会导致不正确的结果。</li></ul><ol start="5"><li>小型传输，开销很小（固定长度的头部是 2 字节），协议交换最小化，以降低网络流量；</li><li>使用Last Will和Testament特性通知有关各方客户端异常中断的机制。</li></ol><p>Apache Apollo是一个代理服务器，其是在ActiveMQ基础上发展而来的，可以支持STOMP, AMQP, MQTT, Openwire, SSL, WebSockets 等多种协议。</p><ul><li>原理：服务器端创建一个唯一订阅号，发送者可以向这个订阅号中发东西，然后接受者（即订阅了这个订阅号的人）都会收到这个订阅号发出来的消息。 以此来完成消息的推送。服务器其实是一个消息中转站。</li></ul><h2 id="apache-apollo服务" tabindex="-1"><a class="header-anchor" href="#apache-apollo服务" aria-hidden="true">#</a> Apache-Apollo服务</h2><p><a href="http://archive.apache.org/dist/activemq/activemq-apollo/" target="_blank" rel="noopener noreferrer">Apache-Apollo`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><ul><li><p>初始化命令：apollo create myBroker</p></li><li><p>运行命令：apollo-broker run</p></li><li><p>检查打开http://127.0.0.1:61680/，用户名admin， 密码password：</p></li></ul><p>apache-apollo文件下有使用demo，路径：apache-apollo-1.7.1/examples/mqtt/websocket</p><p><a href="https://download.csdn.net/download/m0_37654893/36143308?spm=1001.2014.3001.5503" target="_blank" rel="noopener noreferrer">MQTTBox工具下载`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/lot/index.html.vue?vue&type=template&id=c6281af8

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/lot/index.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\lot\\index.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const index_html = (script);

/***/ })

};
;
//# sourceMappingURL=6344.app.js.map