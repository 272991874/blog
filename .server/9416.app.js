"use strict";
exports.id = 9416;
exports.ids = [9416];
exports.modules = {

/***/ 2181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5e9ba4c2",
  "path": "/soft/k8s.html",
  "title": "k8s区块链部署",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一、部署k8s集群",
      "slug": "一、部署k8s集群",
      "children": [
        {
          "level": 3,
          "title": "修改主机名",
          "slug": "修改主机名",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "二、构建K8S集群",
      "slug": "二、构建k8s集群",
      "children": [
        {
          "level": 3,
          "title": "1 初始化 master",
          "slug": "_1-初始化-master",
          "children": []
        },
        {
          "level": 3,
          "title": "2 创建flannel网络",
          "slug": "_2-创建flannel网络",
          "children": []
        },
        {
          "level": 3,
          "title": "3 创建K8S Kuboard",
          "slug": "_3-创建k8s-kuboard",
          "children": []
        },
        {
          "level": 3,
          "title": "4. 配置k8s集群DNS解析",
          "slug": "_4-配置k8s集群dns解析",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "三、部署区块链",
      "slug": "三、部署区块链",
      "children": [
        {
          "level": 3,
          "title": "1 部署 baas-kubeengine",
          "slug": "_1-部署-baas-kubeengine",
          "children": []
        },
        {
          "level": 3,
          "title": "2 部署 baas-fabricengine和nfs",
          "slug": "_2-部署-baas-fabricengine和nfs",
          "children": []
        },
        {
          "level": 3,
          "title": "3 安装 baas-gateway",
          "slug": "_3-安装-baas-gateway",
          "children": []
        },
        {
          "level": 3,
          "title": "4 部署baas-frontend",
          "slug": "_4-部署baas-frontend",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "soft/k8s.md",
  "git": {
    "contributors": [
      {
        "name": "yaomin",
        "email": "272991874@qq.com",
        "commits": 2
      },
      {
        "name": "yaomin_java",
        "email": "272991874@qq.com",
        "commits": 2
      }
    ]
  }
}


/***/ }),

/***/ 7167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ k8s_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/soft/k8s.html.vue?vue&type=template&id=5bae0da0



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="k8s区块链部署" tabindex="-1"><a class="header-anchor" href="#k8s区块链部署" aria-hidden="true">#</a> k8s区块链部署</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#一、部署k8s集群" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`一、部署k8s集群`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("一、部署k8s集群")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#修改主机名" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`修改主机名`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("修改主机名")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#二、构建k8s集群" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`二、构建K8S集群`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("二、构建K8S集群")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_1-初始化-master" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`1 初始化 master`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("1 初始化 master")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_2-创建flannel网络" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`2 创建flannel网络`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("2 创建flannel网络")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_3-创建k8s-kuboard" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`3 创建K8S Kuboard`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("3 创建K8S Kuboard")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_4-配置k8s集群dns解析" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`4. 配置k8s集群DNS解析`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("4. 配置k8s集群DNS解析")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#三、部署区块链" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`三、部署区块链`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("三、部署区块链")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_1-部署-baas-kubeengine" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`1 部署 baas-kubeengine`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("1 部署 baas-kubeengine")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_2-部署-baas-fabricengine和nfs" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`2 部署 baas-fabricengine和nfs`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("2 部署 baas-fabricengine和nfs")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_3-安装-baas-gateway" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`3 安装 baas-gateway`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("3 安装 baas-gateway")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_4-部署baas-frontend" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`4 部署baas-frontend`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("4 部署baas-frontend")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul></nav><p>环境需求<br> 主机名 ip<br> k8s-master 192.168.124.100<br> k8s-node1 192.168.124.101<br> k8s-node2 192.168.124.102</p><h2 id="一、部署k8s集群" tabindex="-1"><a class="header-anchor" href="#一、部署k8s集群" aria-hidden="true">#</a> 一、部署k8s集群</h2><h3 id="修改主机名" tabindex="-1"><a class="header-anchor" href="#修改主机名" aria-hidden="true">#</a> 修改主机名</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hostnamectl --static set-hostname k8s-master 
hostnamectl --static set-hostname k8s-node1 
hostnamectl --static set-hostname k8s-node2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>接下来可以多执行</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 添加host</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;192.168.124.100 k8s-master<span class="token entity" title="\\n">\\n</span>192.168.124.101 k8s-node1<span class="token entity" title="\\n">\\n</span>192.168.124.102 k8s-node2&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts

<span class="token comment"># 关闭防火墙</span>
systemctl stop firewalld <span class="token operator">&amp;</span> systemctl disable firewalld

<span class="token comment"># 关闭selinux</span>
setenforce <span class="token number">0</span>

<span class="token comment"># 关闭swap</span>
<span class="token function">sed</span> -i <span class="token string">&#39;/ swap / s/^/#/&#39;</span> /etc/fstab

<span class="token comment"># 安装docker</span>
yum <span class="token function">install</span> -y yum-utils device-mapper-persistent-data lvm2

<span class="token comment"># 设置yum源</span>
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo 

<span class="token comment"># 可以查看所有仓库中所有docker版本，并选择特定版本安装</span>
yum list docker-ce --showduplicates <span class="token operator">|</span> <span class="token function">sort</span> -r

<span class="token comment"># 安装</span>
yum <span class="token function">install</span> docker-ce-18.06.3.ce-3.el7   

<span class="token comment"># 启动</span>
systemctl <span class="token builtin class-name">enable</span> docker <span class="token operator">&amp;&amp;</span> systemctl start docker 

<span class="token comment"># 配置镜像加速器,通过修改daemon配置文件/etc/docker/daemon.json来使用加速器</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> -p /etc/docker

<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://ijdk512y.mirror.aliyuncs.com&quot;]
}
EOF</span>

<span class="token function">sudo</span> systemctl daemon-reload

<span class="token function">sudo</span> systemctl restart docker

<span class="token comment"># 验证</span>
docker version

<span class="token comment"># 安装kubelet、kubeadm、kubectl</span>
<span class="token comment"># 配置K8S的yum源,执行以下命令安装kubelet、kubeadm、kubectl</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/yum.repos.d/kubernetes.repo</span>
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
       http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF</span>

<span class="token comment"># 安装</span>
yum <span class="token function">install</span> -y kubelet-1.14.1-0.x86_64
yum <span class="token function">install</span> -y kubectl-1.14.1-0.x86_64 kubeadm-1.14.1-0.x86_64

<span class="token comment"># 避免iptables被绕过而导致流量路由不正确的问题</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span>  /etc/sysctl.d/k8s.conf</span>
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF</span>
sysctl --system

<span class="token comment"># 启动k8s相关服务</span>
systemctl <span class="token builtin class-name">enable</span> kubelet <span class="token operator">&amp;&amp;</span> systemctl start kubelet
<span class="token comment"># 初始化k8s集群镜像</span>
<span class="token comment"># 默认去访问谷歌的服务器，以下载集群所依赖的Docker镜像,因此也会超时失败。docker.io仓库对google的容器做了镜像，可以通过下列命令下拉取相关镜像</span>

docker pull mirrorgooglecontainers/kube-apiserver-amd64:v1.14.1
docker pull mirrorgooglecontainers/kube-controller-manager-amd64:v1.14.1
docker pull mirrorgooglecontainers/kube-scheduler-amd64:v1.14.1
docker pull mirrorgooglecontainers/kube-proxy-amd64:v1.14.1
docker pull mirrorgooglecontainers/pause:3.1
docker pull mirrorgooglecontainers/etcd-amd64:3.3.10
docker pull coredns/coredns:1.3.1
docker pull thejosan20/flannel:v0.10.0-amd64
docker pull mirrorgooglecontainers/kubernetes-dashboard-amd64:v1.10.0

<span class="token comment"># 版本信息需要根据实际情况进行相应的修改。通过docker tag命令来修改镜像的标签</span>
docker tag docker.io/mirrorgooglecontainers/kube-proxy-amd64:v1.14.1 k8s.gcr.io/kube-proxy:v1.14.1
docker tag docker.io/mirrorgooglecontainers/kube-scheduler-amd64:v1.14.1 k8s.gcr.io/kube-scheduler:v1.14.1
docker tag docker.io/mirrorgooglecontainers/kube-apiserver-amd64:v1.14.1 k8s.gcr.io/kube-apiserver:v1.14.1
docker tag docker.io/mirrorgooglecontainers/kube-controller-manager-amd64:v1.14.1 k8s.gcr.io/kube-controller-manager:v1.14.1
docker tag docker.io/mirrorgooglecontainers/etcd-amd64:3.3.10  k8s.gcr.io/etcd:3.3.10
docker tag docker.io/mirrorgooglecontainers/pause:3.1  k8s.gcr.io/pause:3.1
docker tag docker.io/coredns/coredns:1.3.1  k8s.gcr.io/coredns:1.3.1
docker tag docker.io/thejosan20/flannel:v0.10.0-amd64 quay.io/coreos/flannel:v0.10.0-amd64
docker tag docker.io/mirrorgooglecontainers/kubernetes-dashboard-amd64:v1.10.0  k8s.gcr.io/kubernetes-dashboard-amd64:v1.10.0

<span class="token comment"># 删除原镜像</span>
docker rmi mirrorgooglecontainers/kube-apiserver-amd64:v1.14.1
docker rmi mirrorgooglecontainers/kube-controller-manager-amd64:v1.14.1
docker rmi mirrorgooglecontainers/kube-scheduler-amd64:v1.14.1
docker rmi mirrorgooglecontainers/kube-proxy-amd64:v1.14.1
docker rmi mirrorgooglecontainers/pause:3.1
docker rmi mirrorgooglecontainers/etcd-amd64:3.3.10
docker rmi coredns/coredns:1.3.1
docker rmi thejosan20/flannel:v0.10.0-amd64
docker rmi mirrorgooglecontainers/kubernetes-dashboard-amd64:v1.10.0  

<span class="token comment"># fabric 相关镜像</span>
docker pull hyperledger/fabric-ca:1.4.1
docker tag hyperledger/fabric-ca:1.4.1 hyperledger/fabric-ca:latest

docker pull hyperledger/fabric-tools:1.4.1
docker tag hyperledger/fabric-tools:1.4.1 hyperledger/fabric-tools:latest

docker pull hyperledger/fabric-ccenv:1.4.1
docker tag hyperledger/fabric-ccenv:1.4.1 hyperledger/fabric-ccenv:latest

docker pull hyperledger/fabric-orderer:1.4.1 
docker tag hyperledger/fabric-orderer:1.4.1 hyperledger/fabric-orderer:latest

docker pull hyperledger/fabric-peer:1.4.1 
docker tag hyperledger/fabric-peer:1.4.1 hyperledger/fabric-peer:latest

docker pull hyperledger/fabric-javaenv:1.4.1
docker tag hyperledger/fabric-javaenv:1.4.1 hyperledger/fabric-javaenv:latest

docker pull hyperledger/fabric-zookeeper:0.4.15
docker tag hyperledger/fabric-zookeeper:0.4.15 hyperledger/fabric-zookeeper:latest

docker pull hyperledger/fabric-kafka:0.4.15 
docker tag hyperledger/fabric-kafka:0.4.15 hyperledger/fabric-kafka:latest

docker pull hyperledger/fabric-couchdb:0.4.15
docker tag hyperledger/fabric-couchdb:0.4.15 hyperledger/fabric-couchdb:latest

docker pull hyperledger/fabric-baseos:0.4.15 
docker tag hyperledger/fabric-baseos:0.4.15 hyperledger/fabric-baseos:latest

<span class="token comment"># 安装go语言</span>
<span class="token function">rm</span> -rf /usr/local/go
<span class="token function">wget</span> https://studygolang.com/dl/golang/go1.12.7.linux-amd64.tar.gz
<span class="token function">tar</span> -zxvf go1.12.7.linux-amd64.tar.gz -C /usr/local/
添加代理
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.io


<span class="token comment"># 安装 nfs gcc工具</span>
yum -y <span class="token function">install</span> nfs-utils gcc gcc-c++
<span class="token function">vim</span> /etc/profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br></div></div><p>添加</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">\$PATH</span>:/usr/local/go/bin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>保存后</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
<span class="token function">reboot</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="二、构建k8s集群" tabindex="-1"><a class="header-anchor" href="#二、构建k8s集群" aria-hidden="true">#</a> 二、构建K8S集群</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> /data
<span class="token builtin class-name">cd</span> /data
<span class="token function">git</span> clone https://gitee.com/liveanddream/baasmanager.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-初始化-master" tabindex="-1"><a class="header-anchor" href="#_1-初始化-master" aria-hidden="true">#</a> 1 初始化 master</h3><p>进入master执行</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubeadm init --kubernetes-version<span class="token operator">=</span>v1.14.1 --pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>将生成的kubeadm join代码在node节点上运行，如</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubeadm <span class="token function">join</span> <span class="token number">172.26</span>.84.124:6443 --token 5bsm6z.7udt6z3u40ap27xu <span class="token punctuation">\\</span>
    --discovery-token-ca-cert-hash sha256:4284e4d214c62bf48f64120afa8d436a8653c40db7d464d7aaa34cc478c11d6c
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>再回到master</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p <span class="token environment constant">HOME</span>/.kube
<span class="token function">sudo</span> <span class="token function">cp</span> -i /etc/kubernetes/admin.conf <span class="token environment constant">\$HOME</span>/.kube/config
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token punctuation">(</span>id -u<span class="token punctuation">)</span>:<span class="token punctuation">(</span>id -g<span class="token punctuation">)</span> <span class="token environment constant">\$HOME</span>/.kube/config
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-创建flannel网络" tabindex="-1"><a class="header-anchor" href="#_2-创建flannel网络" aria-hidden="true">#</a> 2 创建flannel网络</h3><p>进入 k8s-master</p><p>在k8s-master验证，并创建网络</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl get nodes   这时查看到的node状态是NotReady
kubectl taint nodes --all node-role.kubernetes.io/master-
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>编辑flannel/kube-flannel.yml,创建flannel网络</p><p>文件在K8S Addon官方文档中提供，文章底部提供一个V1.14.0文件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl apply -f kube-flannel.yml

<span class="token comment"># 查看pods</span>
kubectl get pods --all-namespaces
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_3-创建k8s-kuboard" tabindex="-1"><a class="header-anchor" href="#_3-创建k8s-kuboard" aria-hidden="true">#</a> 3 创建K8S Kuboard</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 通过以下命令部署</span>
kubectl apply -f https://kuboard.cn/install-script/kuboard.yaml

<span class="token comment">#获取登陆token</span>
<span class="token comment"># 如果您参考 www.kuboard.cn 提供的文档安装 Kuberenetes，可在第一个 Master 节点上执行此命令</span>
<span class="token builtin class-name">echo</span> <span class="token punctuation">(</span>kubectl -n kube-system get secret<span class="token punctuation">(</span>kubectl -n kube-system get secret <span class="token operator">|</span> <span class="token function">grep</span> kuboard-user <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print \$1}&#39;</span><span class="token punctuation">)</span> -o go-template<span class="token operator">=</span><span class="token string">&#39;{{.data.token}}&#39;</span> <span class="token operator">|</span> base64 -d<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>访问任意节点的32567端口并输入Token</p><h3 id="_4-配置k8s集群dns解析" tabindex="-1"><a class="header-anchor" href="#_4-配置k8s集群dns解析" aria-hidden="true">#</a> 4. 配置k8s集群DNS解析</h3><p>获取 kube-dns 的ip地址</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl get services --all-namespaces <span class="token operator">|</span> <span class="token function">grep</span> kube-dns 
显示下列内容
kube-system   kube-dns               ClusterIP   <span class="token number">10.96</span>.0.10      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">53</span>/UDP,53/TCP,9153/TCP   26m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>得到kube-dns的ip：10.96.0.10</p><p>在k8s集群搭建完后操作</p><p>为了解决解析域名的问题，需要在k8s集群每个worker节点的 ExecStart 中加入相关参数： kube-dns 的 ip 为10.96.0.10，宿主机网络 DNS 的地址为 192.168.0.1， 为使得 chaincode 的容器可以解析到 peer 节点，在每个k8s worker节点，修改步骤如下</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /lib/systemd/system/docker.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在 ExecStart 参数后追加：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>--dns<span class="token operator">=</span><span class="token number">10.96</span>.0.10 --dns<span class="token operator">=</span><span class="token number">192.168</span>.0.1 --dns-search default.svc.cluster.local --dns-search svc.cluster.local --dns-opt ndots:2 --dns-opt timeout:2 --dns-opt attempts:2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>重启docker</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl daemon-reload <span class="token operator">&amp;&amp;</span> systemctl restart docker 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="三、部署区块链" tabindex="-1"><a class="header-anchor" href="#三、部署区块链" aria-hidden="true">#</a> 三、部署区块链</h2><h3 id="_1-部署-baas-kubeengine" tabindex="-1"><a class="header-anchor" href="#_1-部署-baas-kubeengine" aria-hidden="true">#</a> 1 部署 baas-kubeengine</h3><p>修改 kubeconfig/config</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/baasmanager/baas-kubeengine
<span class="token function">cp</span> <span class="token environment constant">\$HOME</span>/. kube/config  kubeconfig/config 
<span class="token comment"># 修改配置文件 keconfig.yaml为实际路径地址</span>
<span class="token function">vi</span> keconfig.yaml 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>修改为</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">BaasKubeMasterConfig</span><span class="token punctuation">:</span> /data/baasmanager/baaskubeengine/kubeconfig/config
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后启动</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nohup</span> go run main.go <span class="token operator">&amp;</span>
<span class="token function">tail</span> -f nohup.out
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-部署-baas-fabricengine和nfs" tabindex="-1"><a class="header-anchor" href="#_2-部署-baas-fabricengine和nfs" aria-hidden="true">#</a> 2 部署 baas-fabricengine和nfs</h3><p>在k8s-node1上</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data
<span class="token function">git</span> clone https://gitee.com/liveanddream/baasmanager.git
<span class="token builtin class-name">cd</span> /data/baasmanager
<span class="token function">mkdir</span> baas
<span class="token function">cp</span>  -ar baas-template baas
<span class="token function">cp</span> -ar baas-nfsshared baas

<span class="token comment"># 安装nfs</span>
yum -y <span class="token function">install</span> nfs-utils rpcbind 
<span class="token function">vim</span> /etc/exports 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>添加</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/data/baasmanager/baas-nfsshared *<span class="token punctuation">(</span>rw,sync,no_root_squash,no_all_squash<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>配置生效</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>exportfs -r
<span class="token comment"># 启动rpcbind、nfs服务</span>
<span class="token function">service</span> rpcbind start <span class="token operator">&amp;&amp;</span> <span class="token function">service</span> nfs start 

<span class="token comment"># 测试nfs，能显示出来表示正常</span>
showmount -e k8s-master

<span class="token comment"># 修改 feconfig.yaml 文件</span>
<span class="token builtin class-name">cd</span> /data/baasmanager/baas-fabricengine
<span class="token function">vim</span> feconfig.yaml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>改为</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># fabric引擎端口</span>
<span class="token key atrule">BaasFabricEnginePort</span><span class="token punctuation">:</span> <span class="token number">4991</span>
<span class="token comment"># baas 的根目录</span>
<span class="token key atrule">BaasRootPath</span><span class="token punctuation">:</span> /data/baasmanager
<span class="token comment"># nfs server ip</span>
<span class="token key atrule">BaasNfsServer</span><span class="token punctuation">:</span> 192.168.124.101
<span class="token comment"># k8s引擎地址</span>
<span class="token key atrule">BaasKubeEngine</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//192.168.124.100<span class="token punctuation">:</span><span class="token number">5991</span>
<span class="token comment"># 在baas根目录下nfs共享目录</span>
<span class="token key atrule">BaasNfsShared</span><span class="token punctuation">:</span> baas<span class="token punctuation">-</span>nfsshared
<span class="token comment"># 在baas根目录下fabric k8s模板目录</span>
<span class="token key atrule">BaasTemplate</span><span class="token punctuation">:</span> baas<span class="token punctuation">-</span>template
<span class="token comment"># 保存chaincode的gopath下的src目录</span>
<span class="token key atrule">BaasChaincodeGithub</span><span class="token punctuation">:</span> github.com/baaschaincodes
<span class="token comment"># 共识排序参数</span>
<span class="token key atrule">OrdererBatchTimeout</span><span class="token punctuation">:</span> 2s
<span class="token key atrule">OrdererMaxMessageCount</span><span class="token punctuation">:</span> <span class="token number">500</span>
<span class="token key atrule">OrdererAbsoluteMaxBytes</span><span class="token punctuation">:</span> 99 MB
<span class="token key atrule">OrdererPreferredMaxBytes</span><span class="token punctuation">:</span>  512 KB
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>然后启动</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nohup</span> go run main.go <span class="token operator">&amp;</span>
<span class="token function">tail</span> -f nohup.out
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-安装-baas-gateway" tabindex="-1"><a class="header-anchor" href="#_3-安装-baas-gateway" aria-hidden="true">#</a> 3 安装 baas-gateway</h3><p>在k8s-node2上</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 安装mysql</span>
docker run -p <span class="token number">3306</span>:3306 --name apimysql --restart<span class="token operator">=</span>always -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> -d mysql:5.7 
<span class="token comment"># 并用sql文件初始化</span>

<span class="token comment">#跳转到gateway</span>
<span class="token builtin class-name">cd</span> /data/baasmanager/baas-gateway
<span class="token function">vim</span> gwconfig.yaml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>修改配置文件</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># gateway引擎端口</span>
<span class="token key atrule">BaasGatewayPort</span><span class="token punctuation">:</span> <span class="token number">6991</span>
<span class="token comment"># fabric引擎地址</span>
<span class="token key atrule">BaasFabricEngine</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//192.168.124.101<span class="token punctuation">:</span><span class="token number">4991</span>
<span class="token comment"># db配置</span>
<span class="token key atrule">BaasGatewayDbconfig</span><span class="token punctuation">:</span> /data/baasmanager/baas<span class="token punctuation">-</span>gateway/dbconfig.yaml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>然后启动</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nohup</span> go run main.go <span class="token operator">&amp;</span>
<span class="token function">tail</span> -f nohup.out
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_4-部署baas-frontend" tabindex="-1"><a class="header-anchor" href="#_4-部署baas-frontend" aria-hidden="true">#</a> 4 部署baas-frontend</h3><p>部署到gateway主机上</p><h1 id="部署到gateway主机上" tabindex="-1"><a class="header-anchor" href="#部署到gateway主机上" aria-hidden="true">#</a> 部署到gateway主机上</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/baasmanager/baas-frontend

<span class="token comment"># 安装nodeJS</span>
<span class="token function">curl</span> --silent --location https://rpm.nodesource.com/setup_10.x <span class="token operator">|</span> <span class="token function">bash</span> -
yum <span class="token function">install</span> -y nodejs
<span class="token function">npm</span> <span class="token function">install</span> -g cnpm --registry<span class="token operator">=</span>https://registry.npm.taobao.org
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> -v
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>构建前端环境</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run build:prod
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>把打包生成的dist文件夹复制并重命名/usr/local/nginx/baas</p><p>配置nginx.conf反向代理(相应修改baas-gateway地址 )</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user www-data<span class="token punctuation">;</span>
worker_processes auto<span class="token punctuation">;</span>
pid /run/nginx.pid<span class="token punctuation">;</span>

events <span class="token punctuation">{</span>
    worker_connections <span class="token number">768</span><span class="token punctuation">;</span>
    <span class="token comment"># multi_accept on;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    log_format  logformat  <span class="token string">&#39;remote_addr -remote_user [time_local] &quot;request&quot; &#39;</span>
                      <span class="token string">&#39;statusbody_bytes_sent &quot;http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;http_user_agent&quot; &quot;http_x_forwarded_for&quot; &#39;</span>
                      <span class="token string">&#39;&quot;[request_time]&quot; &quot;[upstream_response_time]&quot; &#39;</span>
                      <span class="token string">&#39;&quot;[connection]&quot; &quot;[connection_requests]&quot; &#39;</span>
                      <span class="token string">&#39;&quot;http_imei&quot; &quot;http_mobile&quot; &quot;http_type&quot; &quot;http_key&quot; &quot;cookie_sfpay_jsessionid&quot;&#39;</span><span class="token punctuation">;</span>
    access_log  /var/log/nginx/access.log logformat<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>
    underscores_in_headers on<span class="token punctuation">;</span>

    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>
    proxy_connect_timeout <span class="token number">120</span><span class="token punctuation">;</span>
    proxy_read_timeout <span class="token number">120</span><span class="token punctuation">;</span>
    proxy_send_timeout <span class="token number">60</span><span class="token punctuation">;</span>
    proxy_buffer_size 16k<span class="token punctuation">;</span>
    proxy_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>
    proxy_busy_buffers_size 128k<span class="token punctuation">;</span>
    proxy_temp_file_write_size 128k<span class="token punctuation">;</span>
    proxy_temp_path /tmp/temp_dir<span class="token punctuation">;</span>
    proxy_cache_path /tmp/cache <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">1</span>:2 <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>cache_one:200m <span class="token assign-left variable">inactive</span><span class="token operator">=</span>1d <span class="token assign-left variable">max_size</span><span class="token operator">=</span>30g<span class="token punctuation">;</span>

    client_header_buffer_size 12k<span class="token punctuation">;</span>
    open_file_cache <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">204800</span> <span class="token assign-left variable">inactive</span><span class="token operator">=</span>65s<span class="token punctuation">;</span>
    open_file_cache_valid 30s<span class="token punctuation">;</span>
    open_file_cache_min_uses <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token function">gzip</span>  on<span class="token punctuation">;</span>
    gzip_types       text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png image/jpg<span class="token punctuation">;</span>
    <span class="token comment"># baas-gateway地址</span>
    upstream baasapi <span class="token punctuation">{</span>
        server <span class="token number">127.0</span>.0.1:6991<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># HTTP server</span>
    <span class="token comment">#</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">8080</span><span class="token punctuation">;</span>
        server_name  baasadmin<span class="token punctuation">;</span>

        location /nginx_status <span class="token punctuation">{</span>
                stub_status on<span class="token punctuation">;</span>
                access_log off<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        location /api/<span class="token punctuation">{</span>
            proxy_pass  http://baasapi/api/<span class="token punctuation">;</span>
            proxy_set_header  X-Real-IP  remote_addr<span class="token punctuation">;</span>
            proxy_set_header Hosthost<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        location /dev-api/<span class="token punctuation">{</span>
            proxy_pass  http://baasapi/api/<span class="token punctuation">;</span>
            proxy_set_header  X-Real-IP  remote_addr<span class="token punctuation">;</span>
            proxy_set_header Hosthost<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        location /stage-api/<span class="token punctuation">{</span>
            proxy_pass  http://baasapi/api/<span class="token punctuation">;</span>
            proxy_set_header  X-Real-IP  remote_addr<span class="token punctuation">;</span>
            proxy_set_header Hosthost<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

        location / <span class="token punctuation">{</span>
            root   baas<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        location ~ ^/favicon<span class="token punctuation">\\</span><span class="token punctuation">\\</span>.ico\$ <span class="token punctuation">{</span>
            root   baas<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><p>访问http://IP:8080</p><ul><li>账户：admin</li><li>密码：123456</li></ul><p>kube-flannel.yml</p><hr><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> policy/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PodSecurityPolicy
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> psp.flannel.unprivileged
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">seccomp.security.alpha.kubernetes.io/allowedProfileNames</span><span class="token punctuation">:</span> docker/default
    <span class="token key atrule">seccomp.security.alpha.kubernetes.io/defaultProfileName</span><span class="token punctuation">:</span> docker/default
    <span class="token key atrule">apparmor.security.beta.kubernetes.io/allowedProfileNames</span><span class="token punctuation">:</span> runtime/default
    <span class="token key atrule">apparmor.security.beta.kubernetes.io/defaultProfileName</span><span class="token punctuation">:</span> runtime/default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> configMap
  <span class="token punctuation">-</span> secret
  <span class="token punctuation">-</span> emptyDir
  <span class="token punctuation">-</span> hostPath
  <span class="token key atrule">allowedHostPaths</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">pathPrefix</span><span class="token punctuation">:</span> <span class="token string">&quot;/etc/cni/net.d&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">pathPrefix</span><span class="token punctuation">:</span> <span class="token string">&quot;/etc/kube-flannel&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">pathPrefix</span><span class="token punctuation">:</span> <span class="token string">&quot;/run/flannel&quot;</span>
  <span class="token key atrule">readOnlyRootFilesystem</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># Users and groups</span>
  <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span>
    <span class="token key atrule">rule</span><span class="token punctuation">:</span> RunAsAny
  <span class="token key atrule">supplementalGroups</span><span class="token punctuation">:</span>
    <span class="token key atrule">rule</span><span class="token punctuation">:</span> RunAsAny
  <span class="token key atrule">fsGroup</span><span class="token punctuation">:</span>
    <span class="token key atrule">rule</span><span class="token punctuation">:</span> RunAsAny
  <span class="token comment"># Privilege Escalation</span>
  <span class="token key atrule">allowPrivilegeEscalation</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">defaultAllowPrivilegeEscalation</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># Capabilities</span>
  <span class="token key atrule">allowedCapabilities</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;NET_ADMIN&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;NET_RAW&#39;</span><span class="token punctuation">]</span>
  <span class="token key atrule">defaultAddCapabilities</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">requiredDropCapabilities</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment"># Host namespaces</span>
  <span class="token key atrule">hostPID</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">hostIPC</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">hostNetwork</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">hostPorts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">min</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">max</span><span class="token punctuation">:</span> <span class="token number">65535</span>
  <span class="token comment"># SELinux</span>
  <span class="token key atrule">seLinux</span><span class="token punctuation">:</span>
    <span class="token comment"># SELinux is unused in CaaSP</span>
    <span class="token key atrule">rule</span><span class="token punctuation">:</span> <span class="token string">&#39;RunAsAny&#39;</span>
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> flannel
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;extensions&#39;</span><span class="token punctuation">]</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;podsecuritypolicies&#39;</span><span class="token punctuation">]</span>
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;use&#39;</span><span class="token punctuation">]</span>
  <span class="token key atrule">resourceNames</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;psp.flannel.unprivileged&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> pods
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> get
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> nodes
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> nodes/status
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> patch
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> flannel
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> flannel
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> flannel
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> flannel
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>flannel<span class="token punctuation">-</span>cfg
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">tier</span><span class="token punctuation">:</span> node
    <span class="token key atrule">app</span><span class="token punctuation">:</span> flannel
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">cni-conf.json</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    {
      &quot;name&quot;: &quot;cbr0&quot;,
      &quot;cniVersion&quot;: &quot;0.3.1&quot;,
      &quot;plugins&quot;: [
        {
          &quot;type&quot;: &quot;flannel&quot;,
          &quot;delegate&quot;: {
            &quot;hairpinMode&quot;: true,
            &quot;isDefaultGateway&quot;: true
          }
        },
        {
          &quot;type&quot;: &quot;portmap&quot;,
          &quot;capabilities&quot;: {
            &quot;portMappings&quot;: true
          }
        }
      ]
    }</span>
  <span class="token key atrule">net-conf.json</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    {
      &quot;Network&quot;: &quot;10.244.0.0/16&quot;,
      &quot;Backend&quot;: {
        &quot;Type&quot;: &quot;vxlan&quot;
      }
    }</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DaemonSet
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>flannel<span class="token punctuation">-</span>ds
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">tier</span><span class="token punctuation">:</span> node
    <span class="token key atrule">app</span><span class="token punctuation">:</span> flannel
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> flannel
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">tier</span><span class="token punctuation">:</span> node
        <span class="token key atrule">app</span><span class="token punctuation">:</span> flannel
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">affinity</span><span class="token punctuation">:</span>
        <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span>
          <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span>
            <span class="token key atrule">nodeSelectorTerms</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> kubernetes.io/os
                <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
                <span class="token key atrule">values</span><span class="token punctuation">:</span>
                <span class="token punctuation">-</span> linux
      <span class="token key atrule">hostNetwork</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">priorityClassName</span><span class="token punctuation">:</span> system<span class="token punctuation">-</span>node<span class="token punctuation">-</span>critical
      <span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">operator</span><span class="token punctuation">:</span> Exists
        <span class="token key atrule">effect</span><span class="token punctuation">:</span> NoSchedule
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> flannel
      <span class="token key atrule">initContainers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install<span class="token punctuation">-</span>cni
        <span class="token key atrule">image</span><span class="token punctuation">:</span> quay.io/coreos/flannel<span class="token punctuation">:</span>v0.14.0
        <span class="token key atrule">command</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> cp
        <span class="token key atrule">args</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token punctuation">-</span>f
        <span class="token punctuation">-</span> /etc/kube<span class="token punctuation">-</span>flannel/cni<span class="token punctuation">-</span>conf.json
        <span class="token punctuation">-</span> /etc/cni/net.d/10<span class="token punctuation">-</span>flannel.conflist
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> cni
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/cni/net.d
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> flannel<span class="token punctuation">-</span>cfg
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/kube<span class="token punctuation">-</span>flannel/
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>flannel
        <span class="token key atrule">image</span><span class="token punctuation">:</span> quay.io/coreos/flannel<span class="token punctuation">:</span>v0.14.0
        <span class="token key atrule">command</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> /opt/bin/flanneld
        <span class="token key atrule">args</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>ip<span class="token punctuation">-</span>masq
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>kube<span class="token punctuation">-</span>subnet<span class="token punctuation">-</span>mgr
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token string">&quot;100m&quot;</span>
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> <span class="token string">&quot;50Mi&quot;</span>
          <span class="token key atrule">limits</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token string">&quot;100m&quot;</span>
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> <span class="token string">&quot;50Mi&quot;</span>
        <span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
          <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
          <span class="token key atrule">capabilities</span><span class="token punctuation">:</span>
            <span class="token key atrule">add</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;NET_ADMIN&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;NET_RAW&quot;</span><span class="token punctuation">]</span>
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> POD_NAME
          <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
            <span class="token key atrule">fieldRef</span><span class="token punctuation">:</span>
              <span class="token key atrule">fieldPath</span><span class="token punctuation">:</span> metadata.name
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> POD_NAMESPACE
          <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
            <span class="token key atrule">fieldRef</span><span class="token punctuation">:</span>
              <span class="token key atrule">fieldPath</span><span class="token punctuation">:</span> metadata.namespace
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /run/flannel
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> flannel<span class="token punctuation">-</span>cfg
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/kube<span class="token punctuation">-</span>flannel/
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run
        <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> /run/flannel
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> cni
        <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> /etc/cni/net.d
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> flannel<span class="token punctuation">-</span>cfg
        <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>flannel<span class="token punctuation">-</span>cfg

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/k8s.html.vue?vue&type=template&id=5bae0da0

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/k8s.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\soft\\k8s.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const k8s_html = (script);

/***/ })

};
;
//# sourceMappingURL=9416.app.js.map