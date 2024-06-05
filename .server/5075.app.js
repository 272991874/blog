"use strict";
exports.id = 5075;
exports.ids = [5075];
exports.modules = {

/***/ 1831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-31fedecd",
  "path": "/algorithm/encryption_algorithm.html",
  "title": "加解密算法",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "算法体系",
      "slug": "算法体系",
      "children": []
    },
    {
      "level": 2,
      "title": "对称加密",
      "slug": "对称加密",
      "children": []
    },
    {
      "level": 2,
      "title": "非对称加密",
      "slug": "非对称加密",
      "children": []
    },
    {
      "level": 2,
      "title": "混合加密机制",
      "slug": "混合加密机制",
      "children": []
    }
  ],
  "filePathRelative": "algorithm/encryption_algorithm.md",
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

/***/ 6342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ encryption_algorithm_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/algorithm/encryption_algorithm.html.vue?vue&type=template&id=401700b6



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="加解密算法" tabindex="-1"><a class="header-anchor" href="#加解密算法" aria-hidden="true">#</a> 加解密算法</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#算法体系" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`算法体系`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("算法体系")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#对称加密" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`对称加密`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("对称加密")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#非对称加密" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`非对称加密`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("非对称加密")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#混合加密机制" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`混合加密机制`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("混合加密机制")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></nav><table><thead><tr><th>算法类型</th><th>特点</th><th>优势</th><th>缺陷</th><th>代表算法</th></tr></thead><tbody><tr><td>对称加密</td><td>加解密密钥相同或可推算</td><td>计算效率高， 加密强度高</td><td>需提前共享密钥；易泄露</td><td>DES、3DES、 AES、IDEA</td></tr><tr><td>非对称加密</td><td>加解密密钥不相关</td><td>无需提前共享密钥</td><td>计算效率低，仍存在中间人攻击可能</td><td>RSA、ElGamal、椭圆曲线系列算法</td></tr></tbody></table><h2 id="算法体系" tabindex="-1"><a class="header-anchor" href="#算法体系" aria-hidden="true">#</a> 算法体系</h2><p>现代加密算法的典型组件包括：加解密算法、加密密钥、解密密钥。 其中，加解密算法自身 是固定不变的，一般是公开可见的；密钥则往往每次不同，并且需要保护起来，一般来说， 对同一种算法，密钥长度越长，则加密强度越大。</p><p>加密过程中，通过加密算法和加密密钥，对明文进行加密，获得密文。</p><p>解密过程中，通过解密算法和解密密钥，对密文进行解密，获得明文。</p><p>根据加解密的密钥是否相同，算法可以分为<strong>对称加密</strong>（symmetric cryptography，又称公共密 钥加密，common-key cryptography）和<strong>非对称加密</strong>(asymmetric cryptography，又称公钥加密，public-key cryptography)。 两种模式适用于不同的需求，恰好形成互补，很多时候也可以组合使用，形成混合加密机制。</p><blockquote><p>并非所有加密算法的强度都可以从数学上进行证明。公认的高强度加密算法是在经过长时间各方面实践论证后，被大家所认可，不代表其不存在漏洞。 但任何时候，自行发明加密算法 都是一种不太明智的行为。</p></blockquote><h2 id="对称加密" tabindex="-1"><a class="header-anchor" href="#对称加密" aria-hidden="true">#</a> 对称加密</h2><p>顾名思义，加解密的密钥是相同的。</p><ul><li><p>优点是加解密效率高（速度快，空间占用小），加密强度高。</p></li><li><p>缺点是参与多方都需要持有密钥，一旦有人泄露则安全性被破坏；另外如何在不安全通道下 分发密钥也是个问题。</p></li></ul><p>对称密码从实现原理上可以分为两种：<strong>分组密码</strong>和<strong>序列密码</strong>。前者将明文切分为定长数据块 作为加密单位，应用最为广泛。 后者则只对一个字节进行加密，且密码不断变化，只用在一 些特定领域，如数字媒介的加密等。</p><p>代表算法包括 DES、3DES、AES、IDEA 等。</p><ul><li><p>DES（Data Encryption Standard）：经典的分组加密算法，1977 年由美国联邦信息处 理标准（FIPS）所采用 FIPS-46-3，将 64 位明文加密为 64 位的密文，其密钥长度为 56 位 + 8 位校验。现在已经很容易被暴力破解。</p></li><li><p>3DES：三重 DES 操作：加密 --&gt; 解密 --&gt; 加密，处理过程和加密强度优于 DES，但现 在也被认为不够安全。</p></li><li><p>AES（Advanced Encryption Standard）：美国国家标准研究所（NIST）采用取代 DES 成为对称加密实现的标准，1997~2000 年 NIST 从 15 个候选算法中评选 Rijndael 算法 （由比利时密码学家 Joan Daemon 和 Vincent Rijmen 发明）作为 AES，标准为 FIPS- 197。AES 也是分组算法，分组长度为 128、192、256 位三种。AES 的优势在于处理速 度快，整个过程可以数学化描述，目前尚未有有效的破解手段。</p></li></ul><p>适用于大量数据的加解密；不能用于签名场景；需要提前分发密钥。</p><div class="custom-container tip"><p class="custom-container-title">注：分组加密每次只能处理固定长度的明文，因此过长的内容需要采用一定模式进行加密， 《实用密码学》中推荐使用 密文分组链接（Cipher Block Chain，CBC）、计数器 （Counter，CTR）模式。</p></div><h2 id="非对称加密" tabindex="-1"><a class="header-anchor" href="#非对称加密" aria-hidden="true">#</a> 非对称加密</h2><p>非对称加密是现代密码学历史上最为伟大的发明，可以很好的解决对称加密需要的提前分发 密钥问题。</p><p>顾名思义，加密密钥和解密密钥是不同的，分别称为公钥和私钥。</p><p>公钥一般是公开的，人人可获取的，私钥一般是个人自己持有，不能被他人获取。</p><ul><li><p>优点是公私钥分开，不安全通道也可使用</p></li><li><p>缺点是加解密速度慢，一般比对称加解密算法慢两到三个数量级；同时加密强度相比对称加 密要差。</p></li></ul><p>非对称加密算法的安全性往往需要基于数学问题来保障，目前主要有基于大数质因子分解、 离散对数、椭圆曲线等几种思路。</p><p>代表算法包括：RSA、ElGamal、椭圆曲线（Elliptic Curve Crytosystems，ECC）系列算 法。</p><ul><li><p>RSA：经典的公钥算法，1978 年由 Ron Rivest、Adi Shamir、Leonard Adleman 共同提 出，三人于 2002 年获得图灵奖。算法利用了对大数进行质因子分解困难的特性，但目前 还没有数学证明两者难度等价，或许存在未知算法在不进行大数分解的前提下解密。</p></li><li><p>Diffie-Hellman 密钥交换：基于离散对数无法快速求解，可以在不安全的通道上，双方协 商一个公共密钥。</p></li><li><p>ElGamal：由 Taher ElGamal 设计，利用了模运算下求离散对数困难的特性。被应用在 PGP 等安全工具中。</p></li><li><p>椭圆曲线算法（Elliptic curve cryptography，ECC）：现代备受关注的算法系列，基于对 椭圆曲线上特定点进行特殊乘法逆运算难以计算的特性。 最早在 1985 年由 Neal Koblitz 和 Victor Miller 分别独立提出。 ECC 系列算法一般被认为具备较高的安全性，但加解密 计算过程往往比较费时。</p></li></ul><p>一般适用于签名场景或密钥协商，不适于大量数据的加解密。</p><p>RSA 算法等已被认为不够安全，一般推荐采用椭圆曲线系列算法。</p><h2 id="混合加密机制" tabindex="-1"><a class="header-anchor" href="#混合加密机制" aria-hidden="true">#</a> 混合加密机制</h2><p>即先用计算复杂度高的非对称加密协商一个临时的对称加密密钥（会话密钥，一般相对内容 来说要短的多），然后双方再通过对称加密对传递的大量数据进行加解密处理。</p><p>典型的场景是现在大家常用的 HTTPS 机制。HTTPS 实际上是利用了 Transport Layer Security/Secure Socket Layer（TLS/SSL）来实现可靠的传输。TLS 为 SSL 的升级版本，目 前广泛应用的为 TLS 1.0，对应到 SSL 3.1 版本。</p><p>建立安全连接的具体步骤如下：</p><ul><li>客户端浏览器发送信息到服务器，包括随机数 R1，支持的加密算法类型、协议版本、压 缩算法等。注意该过程为明文。</li><li>服务端返回信息，包括随机数 R2、选定加密算法类型、协议版本，以及服务器证书。注 意该过程为明文。</li><li>浏览器检查带有该网站公钥的证书。该证书需要由第三方 CA 来签发，浏览器和操作系统 会预置权威 CA 的根证书。如果证书被篡改作假（中间人攻击），很容易通过 CA 的证书 验证出来。</li><li>如果证书没问题，则用证书中公钥加密随机数 R3，发送给服务器。此时，只有客户端和 服务器都拥有 R1、R2 和 R3 信息，基于 R1、R2 和 R3，生成对称的会话密钥（如 AES 算法）。后续通信都通过对称加密进行保护。</li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/algorithm/encryption_algorithm.html.vue?vue&type=template&id=401700b6

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/algorithm/encryption_algorithm.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\algorithm\\encryption_algorithm.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const encryption_algorithm_html = (script);

/***/ })

};
;
//# sourceMappingURL=5075.app.js.map