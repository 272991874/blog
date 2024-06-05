"use strict";
exports.id = 3501;
exports.ids = [3501];
exports.modules = {

/***/ 402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-173ace7e",
  "path": "/algorithm/digital_signature.html",
  "title": "数字签名",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "HMAC",
      "slug": "hmac",
      "children": []
    },
    {
      "level": 2,
      "title": "盲签名",
      "slug": "盲签名",
      "children": []
    },
    {
      "level": 2,
      "title": "多重签名",
      "slug": "多重签名",
      "children": []
    },
    {
      "level": 2,
      "title": "群签名",
      "slug": "群签名",
      "children": []
    },
    {
      "level": 2,
      "title": "环签名",
      "slug": "环签名",
      "children": []
    }
  ],
  "filePathRelative": "algorithm/digital_signature.md",
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

/***/ 5327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ digital_signature_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/algorithm/digital_signature.html.vue?vue&type=template&id=429cbd3e



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="数字签名" tabindex="-1"><a class="header-anchor" href="#数字签名" aria-hidden="true">#</a> 数字签名</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#hmac" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`HMAC`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("HMAC")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#盲签名" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`盲签名`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("盲签名")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#多重签名" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`多重签名`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("多重签名")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#群签名" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`群签名`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("群签名")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#环签名" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`环签名`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("环签名")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></nav><p>类似在纸质合同上签名确认合同内容，数字签名用于证实某数字内容的完整性（integrity）和 来源（或不可抵赖，non-repudiation）。</p><p>一个典型的场景是，A 要发给 B 一个文件（一份信息），B 如何获知所得到的文件即为 A 发 出的原始版本？A 先对文件进行摘要，然后用自己的私钥进行加密，将文件和加密串都发给 B。 B 收到后文件和加密串，用 A 的公钥来解密加密串，得到原始的数字摘要，跟对文件进行 摘要后的结果进行比对。如果一致，说明该文件确实是 A 发过来的，并且文件内容没有被修 改过。</p><h2 id="hmac" tabindex="-1"><a class="header-anchor" href="#hmac" aria-hidden="true">#</a> HMAC</h2><p>全称是 Hash-based Message Authentication Code，即“基于 Hash 的消息认证码”。 基本过程 为对某个消息，利用提前共享的对称密钥和 Hash 算法进行加密处理，得到 HMAC 值。该 HMAC 值提供方可以证明自己拥有共享的对称密钥，并且消息自身可以利用 HMAC 确保未经 篡改。</p><p>HMAC(K, H, Message)其中，K 为提前共享的对称密钥，H 为提前商定的 Hash 算法（一般为公认的经典算法）， Message 为要处理的消息内容。如果不知道 K 和 H，则无法根据 Message 得到准确的 HMAC 值。</p><p>HMAC 一般用于证明身份的场景，如 A、B 提前共享密钥，A 发送随机串给 B，B 对称加密处 理后把 HMAC 值发给 A，A 收到了自己再重新算一遍，只要相同说明对方确实是 B。</p><p>HMAC 主要问题是需要共享密钥。当密钥可能被多方拥有的场景下，无法证明消息确实来自 某人（Non-repudiation）。反之，如果采用非对称加密方式，则可以证明。</p><h2 id="盲签名" tabindex="-1"><a class="header-anchor" href="#盲签名" aria-hidden="true">#</a> 盲签名</h2><p>1983 年由 David Chaum 提出。签名者在无法看到原始内容的前提下对信息进行签名。</p><p>盲签名主要是为了实现防止追踪（unlinkability），签名者无法将签名内容和结果进行对应。 典型的实现包括 RSA 盲签名)。</p><h2 id="多重签名" tabindex="-1"><a class="header-anchor" href="#多重签名" aria-hidden="true">#</a> 多重签名</h2><p>n 个持有人中，收集到至少 m 个（ ）的签名，即认为合法，这种签名被称为多重签名。 其中，n 是提供的公钥个数，m 是需要匹配公钥的最少的签名个数。</p><h2 id="群签名" tabindex="-1"><a class="header-anchor" href="#群签名" aria-hidden="true">#</a> 群签名</h2><p>1991 年由 Chaum 和 van Heyst 提出。群签名属于群体密码学的一个课题。</p><p>群签名有如下几个特点：只有群中成员能够代表群体签名（群特性）；接收者可以用公钥验 证群签名（验证简单性）；接收者不能知道由群体中哪个成员所签（无条件匿名保护）；发 生争议时，群体中的成员或可信赖机构可以识别签名者（可追查性）。</p><p>Desmedt 和 Frankel 在 1991 年提出了基于门限的群签名实现方案。在签名时，一个具有 n 个成员的群体共用同一个公钥，签名时必须有 t 个成员参与才能产生一个合法的签名，t 称为 门限或阈值。这样一个签名称为(n, t)不可抵赖群签名。</p><h2 id="环签名" tabindex="-1"><a class="header-anchor" href="#环签名" aria-hidden="true">#</a> 环签名</h2><p>环签名由 Rivest,shamir 和 Tauman 三位密码学家在 2001 年首次提出。环签名属于一种简化 的群签名。</p><p>签名者首先选定一个临时的签名者集合,集合中包括签名者自身。然后签名者利用自己的私钥 和签名集合中其他人的公钥就可以独立的产生签名,而无需他人的帮助。签名者集合中的其他 成员可能并不知道自己被包含在其中。</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/algorithm/digital_signature.html.vue?vue&type=template&id=429cbd3e

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/algorithm/digital_signature.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\algorithm\\digital_signature.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const digital_signature_html = (script);

/***/ })

};
;
//# sourceMappingURL=3501.app.js.map