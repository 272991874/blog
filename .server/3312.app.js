"use strict";
exports.id = 3312;
exports.ids = [3312];
exports.modules = {

/***/ 7425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7c178fb8",
  "path": "/others/syn.html",
  "title": "SYN攻击",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "others/syn.md",
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

/***/ 4889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ syn_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/others/syn.html.vue?vue&type=template&id=576245ce

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="syn攻击" tabindex="-1"><a class="header-anchor" href="#syn攻击" aria-hidden="true">#</a> SYN攻击</h1><p>SYN洪水攻击是DDOS攻击中最常见的攻击类型之一。是一种利用TCP 协议缺陷，攻击者向被攻击的主机发送大量伪造的TCP连接请求,从而使得被攻击方主机服务器的资源耗尽(CPU 满负荷或内存不足) 的攻击方式。SYN攻击的目标不止于服务器，任何网络设备，都可能会受到这种攻击，针对网络设备的SYN攻击往往会导致整个网络瘫痪。企业遭到SYN攻击该如何防御呢？墨者安全通过以往的高防经验来分享一下如何利用iptables来缓解SYN攻击。</p><p>1、修改等待数 sysctl -w net.ipv4.tcp_max_syn_backlog=2048</p><p>2、启用syncookies sysctl -w net.ipv4.tcp_syncookies=1</p><p>3、修改重试次数 sysctl -w net.ipv4.tcp_syn_retries = 0</p><p>重传次数设置为0，只要收不到客户端的响应，立即丢弃该连接，默认设置为5次</p><p>4、限制单IP并发数 使用iptables限制单个地址的并发连接数量：</p><p>iptables -t filter -A INPUT -p tcp --dport 80 --tcp-flags FIN,SYN,RST,ACK SYN -m connlimit --connlimit-above 10 --connlimit-mask 32 -j REJECT</p><p>5、限制C类子网并发数 使用iptables限制单个c类子网的并发链接数量：</p><p>iptables -t filter -A INPUT -p tcp --dport 80 --tcp-flags FIN,SYN,RST,ACK SYN -m connlimit --connlimit-above 10 --connlimit-mask 24 -j REJECT</p><p>6、限制单位时间内连接数 设置如下：</p><p>iptables -t filter -A INPUT -p tcp --dport 80 -m --state --syn -m recent --set</p><p>iptables -t filter -A INPUT -p tcp --dport 80 -m --state --syn -m recent --update --seconds 60 --hitcount 30 -j DROP</p><p>7、修改modprobe.conf 为了取得更好的效果，需要修改/etc/modprobe.conf</p><p>options ipt_recent ip_list_tot=1000 ip_pkt_list_tot=60</p><p>作用：记录10000个地址，每个地址60个包，ip_list_tot最大为8100,超过这个数值会导致iptables错误</p><p>8、限制单个地址最大连接数 iptables -I INPUT -p tcp --dport 80 -m connlimit --connlimit-above 50 -j D</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/others/syn.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\others\\syn.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const syn_html = (script);

/***/ })

};
;
//# sourceMappingURL=3312.app.js.map