"use strict";
exports.id = 863;
exports.ids = [863];
exports.modules = {

/***/ 2380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-bd1402aa",
  "path": "/others/tcp.html",
  "title": "TCP/IP协议",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "前言",
      "slug": "前言",
      "children": []
    },
    {
      "level": 2,
      "title": "工作过程",
      "slug": "工作过程",
      "children": [
        {
          "level": 3,
          "title": "三次握手和四次挥手的过程：",
          "slug": "三次握手和四次挥手的过程",
          "children": []
        },
        {
          "level": 3,
          "title": "三次握手建立连接阐述：",
          "slug": "三次握手建立连接阐述",
          "children": []
        },
        {
          "level": 3,
          "title": "四次挥手断开连接阐述：",
          "slug": "四次挥手断开连接阐述",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "为啥这样设计？",
      "slug": "为啥这样设计",
      "children": []
    },
    {
      "level": 2,
      "title": "SYN网络攻击：",
      "slug": "syn网络攻击",
      "children": []
    }
  ],
  "filePathRelative": "others/tcp.md",
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

/***/ 3355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tcp_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/others/tcp.html.vue?vue&type=template&id=4a436883



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="tcp-ip协议" tabindex="-1"><a class="header-anchor" href="#tcp-ip协议" aria-hidden="true">#</a> TCP/IP协议</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>TCP(Transmission Control Protocol)网络传输控制协议，是一种面向连接的、可靠的、基于字节流的传输层通信协议， 数据传输前建立连接的工作要经过三次握手，数据传输后断开连接的工作要经过四次挥手。</p><h2 id="工作过程" tabindex="-1"><a class="header-anchor" href="#工作过程" aria-hidden="true">#</a> 工作过程</h2><p>TCP共有6个标志位，分别是：</p><ul><li>SYN(synchronous),建立联机。</li><li>ACK(acknowledgement),确认。</li><li>PSH(push),传输。</li><li>FIN(finish),结束。</li><li>RST(reset),重置。</li><li>URG(urgent),紧急。</li></ul><h3 id="三次握手和四次挥手的过程" tabindex="-1"><a class="header-anchor" href="#三次握手和四次挥手的过程" aria-hidden="true">#</a> 三次握手和四次挥手的过程：</h3><img${(0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/tcp/tcp.jpg'))} alt="tcp"><h3 id="三次握手建立连接阐述" tabindex="-1"><a class="header-anchor" href="#三次握手建立连接阐述" aria-hidden="true">#</a> 三次握手建立连接阐述：</h3><p>第一次握手：客户端要和服务端进行通信，首先要告知服务端一声，遂发出一个SYN=1的连接请求信号,“服务端哥哥，我想给你说说话”。</p><p>第二次握手：当服务端接收到客户端的连接请求，此时要给客户端一个确认信息，“我知道了（ACK）,我这边已经准备好了，你现在能连吗（SYN）”。</p><p>第三次握手：当客户端收到了服务端的确认连接信息后，要礼貌的告知一下服务端，“好的，咱们开始联通吧（ACK）”。</p><p>到此整个建立连接的过程已经结束，接下来就是双方你一句我一句甚至同时交流传递信息的过程了。</p><h3 id="四次挥手断开连接阐述" tabindex="-1"><a class="header-anchor" href="#四次挥手断开连接阐述" aria-hidden="true">#</a> 四次挥手断开连接阐述：</h3><p>第一次挥手：双方交流的差不多了，此时客户端也已经结尾了，接下来要断开通信连接，所以告诉服务端“我说完了（FIN）”，此时自身形成等待结束连接的状态。</p><p>第二次挥手：服务端知道客户端已经没话说了，服务端此时还有两句心里话要给客户端说，“我知道你说完了（ACK），我再给你说两句，&amp;*……%￥”。</p><p>第三次挥手：此时客户端洗耳恭听继续处于等待结束的状态，服务器端也说完了，自身此时处于等待关闭连接的状态，并对告诉客户端，“我说完了，咱们断了吧（FIN）”。</p><p>第四次挥手：客户端收知道服务端也说完了，也要告诉服务端一声（ACK），因为连接和断开要双方都按下关闭操作才能断开，客户端同时又为自己定义一个定时器，因为不知道刚才说的这句话能不能准确到达服务端（网络不稳定或者其他因素引起的网络原因），默认时间定为两个通信的最大时间之和，超出这个时间就默认服务器端已经接收到了自己的确认信息，此时客户端就关闭自身连接，服务器端一旦接收到客户端发来的确定通知就立刻关闭服务器端的连接。</p><p>到此为止双方整个通信过程就此终结。这里要声明一下：断开链接不一定就是客户端，谁都可以先发起断开指令，另外客户端和服务端是没有固定标准的，谁先发起请求谁就是客户端。</p><h2 id="为啥这样设计" tabindex="-1"><a class="header-anchor" href="#为啥这样设计" aria-hidden="true">#</a> 为啥这样设计？</h2><p>1.为什么断开链接的时候客户端设置的定时器时间等待要2MSL(两个通信报文的最大时间)？</p><p>这个问题也很好理解，当客户端最终告诉服务器端断开确认的时候，他不知道自己的发出的指令是否能准确的一次性被服务器接收。假如服务器没有接收到（这已经耗费了一个报文的最大通信时间了），服务器端将会重新发起一个结束通话的指令（FIN）到客户端，客户端又接收到了服务器发来的结束通信指令将继续给服务器进行一个确认，有人会说那要是客户端发出的确认信息服务端没收到，而服务端重发的断开指令客户端也没收到怎么办，说实话我也无奈，遇到这种情况咱们干脆认为网确实不行了。</p><p>2.为什么建立连接要三次握手而断开连接要四次挥手?</p><p>说起这个，打一个比喻，目前祖国正在高速发展高铁，建立连接的过程正如上海到北京打通一条高铁线，TCP通信过程是一个全双工模式，即在这条高铁线上要有两个轨道，即能从上海发车到北京又能从北京发车到上海，甚至两边可以同时发车。所以断开连接前提就是要保证两条轨道都没有车，然后双方才能各自发起断开动作。</p><h2 id="syn网络攻击" tabindex="-1"><a class="header-anchor" href="#syn网络攻击" aria-hidden="true">#</a> SYN网络攻击：</h2><p>原理： 在三次握手过程中，Server发送SYN-ACK之后，收到Client的ACK之前的TCP连接称为半连接（half-open connect），此时Server处于SYN_RCVD状态，当收到ACK后，Server转入ESTABLISHED状态。SYN攻击就是Client在短时间内伪造大量不存在的IP地址，并向Server不断地发送SYN包，Server回复确认包，并等待Client的确认，由于源地址是不存在的，因此，Server需要不断重发直至超时，这些伪造的SYN包将产时间占用未连接队列，导致正常的SYN请求因为队列满而被丢弃，从而引起网络堵塞甚至系统瘫痪。</p><p>检测： SYN攻击时一种典型的DDOS攻击，检测SYN攻击的方式非常简单，即当Server上有大量半连接状态且源IP地址是随机的，则可以断定遭到SYN攻击了。windows下打开cmd,输入命令：”netstat -n -p TCP“，查看是否有大量的”SYN_RECEIVED“状态。</p><p>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/others/syn.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`SYN攻击原理及应对方案`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("SYN攻击原理及应对方案")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/others/tcp.html.vue?vue&type=template&id=4a436883

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/others/tcp.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\others\\tcp.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const tcp_html = (script);

/***/ })

};
;
//# sourceMappingURL=863.app.js.map