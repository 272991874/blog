"use strict";
exports.id = 3487;
exports.ids = [3487];
exports.modules = {

/***/ 5324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-169e6309",
  "path": "/soft/flink_hadoop.html",
  "title": "Flink && Hadoop",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "常用命令",
      "slug": "常用命令",
      "children": []
    },
    {
      "level": 2,
      "title": "一、部署前准备",
      "slug": "一、部署前准备",
      "children": []
    },
    {
      "level": 2,
      "title": "1、创建存放tool的路径",
      "slug": "_1、创建存放tool的路径",
      "children": []
    },
    {
      "level": 2,
      "title": "2、上传文件并解压（flink在主节点上）",
      "slug": "_2、上传文件并解压-flink在主节点上",
      "children": []
    },
    {
      "level": 2,
      "title": "3、通过scp把jdk包和hadoop包分别传到从机并解压",
      "slug": "_3、通过scp把jdk包和hadoop包分别传到从机并解压",
      "children": []
    },
    {
      "level": 2,
      "title": "4、配置环境变量（集群）",
      "slug": "_4、配置环境变量-集群",
      "children": []
    },
    {
      "level": 2,
      "title": "5、修改相关配置文件",
      "slug": "_5、修改相关配置文件",
      "children": [
        {
          "level": 3,
          "title": "1）vim flink-conf.yaml",
          "slug": "_1-vim-flink-conf-yaml",
          "children": []
        },
        {
          "level": 3,
          "title": "2）vim core-site.xml",
          "slug": "_2-vim-core-site-xml",
          "children": []
        },
        {
          "level": 3,
          "title": "3)  vim yarn-site.xml",
          "slug": "_3-vim-yarn-site-xml",
          "children": []
        },
        {
          "level": 3,
          "title": "4）vim yarn-env.sh  在最后加一行",
          "slug": "_4-vim-yarn-env-sh-在最后加一行",
          "children": []
        },
        {
          "level": 3,
          "title": "5)  vim mapred-site.xml",
          "slug": "_5-vim-mapred-site-xml",
          "children": []
        },
        {
          "level": 3,
          "title": "6)  vim workers",
          "slug": "_6-vim-workers",
          "children": []
        },
        {
          "level": 3,
          "title": "7）vim hdfs-site.xml",
          "slug": "_7-vim-hdfs-site-xml",
          "children": []
        },
        {
          "level": 3,
          "title": "8）vim  hadoop-env.sh",
          "slug": "_8-vim-hadoop-env-sh",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "6、集群初始化（主节点）",
      "slug": "_6、集群初始化-主节点",
      "children": []
    },
    {
      "level": 2,
      "title": "7、启停服务",
      "slug": "_7、启停服务",
      "children": []
    },
    {
      "level": 2,
      "title": "8、测试",
      "slug": "_8、测试",
      "children": []
    }
  ],
  "filePathRelative": "soft/flink_hadoop.md",
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

/***/ 2052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ flink_hadoop_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/soft/flink_hadoop.html.vue?vue&type=template&id=50653d56



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_property = (0,external_vue_.resolveComponent)("property")
  const _component_name = (0,external_vue_.resolveComponent)("name")
  const _component_value = (0,external_vue_.resolveComponent)("value")
  const _component_description = (0,external_vue_.resolveComponent)("description")
  const _component_configuration = (0,external_vue_.resolveComponent)("configuration")

  _push(`<!--[--><h1 id="flink-hadoop" tabindex="-1"><a class="header-anchor" href="#flink-hadoop" aria-hidden="true">#</a> Flink &amp;&amp; Hadoop</h1><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 用来初始化hadoop</span>
hadoop namenode -format
<span class="token comment"># 查看应用列表</span>
<span class="token function">yarn</span> application --list
<span class="token comment"># 创建应用 test</span>
yarn-session.sh -jm <span class="token number">1024</span> -tm <span class="token number">2048</span> -s <span class="token number">10</span> -nm <span class="token builtin class-name">test</span> -d -st
<span class="token comment"># 终止应用</span>
<span class="token function">yarn</span> application --kill application_1704300123553_0001

jps 查看java应用

<span class="token comment"># 启动所有应用</span>
start-all.sh
<span class="token comment"># 关闭所有应用</span>
stop-all.sh


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="一、部署前准备" tabindex="-1"><a class="header-anchor" href="#一、部署前准备" aria-hidden="true">#</a> 一、部署前准备</h2><p>1、机器准备 (3台集群标准)</p><p>机器IP 节点 CPU&amp;内存 系统盘 存储 xx.xx.xx.xx Master 8C16G 100GB 200GB xx.xx.xx.xx Worker 8C16G 100GB 200GB xx.xx.xx.xx Worker 8C16G 100GB 200GB 2、检查防火墙是否关闭 systemctl status firewalld 若关闭，则检查下一项，若开启，则需要执行如下命令 systemctl stop firewalld ###临时关闭防火墙， systemctl disable firewalld ###永久关闭防火墙 3、检查selinux状态是否是disabled sestatus 若关闭，则检查下一项，若开启，则需要执行如下命令 setenforce 0 ###立即生效 ，重启系统后则恢复原状态 修改 /etc/selinux/config文件中的SELINUX=disabled保存退出后，永久生效，</p><p>4、检查磁盘挂载（存储盘全部挂载） df-h ###查看磁盘空间</p><p>5、修改主机名（也可不修改） 1）临时修改 （重启失效） hostname 主机名 2）永久修改主机名（重启不失效） hostnamectl set-hostname 主机名 或者 vim /etc/hostname 删除旧主机名，添加新的 6、免密登录 （以下路径是示例，根据实际选择路径） ssh-keygen -t rsa 一路回车</p><pre><code>       cd /home/devops/.ssh/
       cat id_rsa.pub &gt;&gt;authorized_keys
       chmod  700 .ssh
       chmod 600 authorized_keys
   注：集群的id_rsa.pub要写入authorized_keys中，所涉及的机器都要写入
</code></pre><p>7、host解析（root用户下，集群机器） vim /etc/hosts xx.xx.xx.xx 主机名1 xx.xx.xx.xx 主机名2 xx.xx.xx.xx 主机名3 8、创建路径并授权（root用户下，名字自定义，作为挂载路径） mkdir /data chmod 777 /data</p><h1 id="二、详细步骤" tabindex="-1"><a class="header-anchor" href="#二、详细步骤" aria-hidden="true">#</a> 二、详细步骤</h1><h2 id="_1、创建存放tool的路径" tabindex="-1"><a class="header-anchor" href="#_1、创建存放tool的路径" aria-hidden="true">#</a> 1、创建存放tool的路径</h2><p>主机：mkdir /opt/{flink,java,hadoop} 从机：mkdir /opt/{java,hadoop}</p><h2 id="_2、上传文件并解压-flink在主节点上" tabindex="-1"><a class="header-anchor" href="#_2、上传文件并解压-flink在主节点上" aria-hidden="true">#</a> 2、上传文件并解压（flink在主节点上）</h2><p>从Flink官方网站下载最新版本的Flink二进制发行版。解压缩下载的文件到计算机上的目标文件夹，例如/opt/flink 在计算机上安装Java运行时环境（JRE）或Java开发工具包（JDK）。Flink需要Java 8或更高版本才能正常运行。例如/opt/java 安装hadoop集成，例如/opt/hadoop</p><h2 id="_3、通过scp把jdk包和hadoop包分别传到从机并解压" tabindex="-1"><a class="header-anchor" href="#_3、通过scp把jdk包和hadoop包分别传到从机并解压" aria-hidden="true">#</a> 3、通过scp把jdk包和hadoop包分别传到从机并解压</h2><p>scp -P 端口 jdk-8u341-linux-x64.tar.gz 用户@主机名:/opt/java/ scp -P 端口 hadoop压缩包 用户@主机名:/opt/hadoop/</p><h2 id="_4、配置环境变量-集群" tabindex="-1"><a class="header-anchor" href="#_4、配置环境变量-集群" aria-hidden="true">#</a> 4、配置环境变量（集群）</h2><p>在/etc/profile文件最后添加 （代码块中的路径均为例子，按照自己配置的为准） export JAVA_HOME=/opt/java/jdk1.8.0_192 export CLASSPATH=.😒{JAVA_HOME}/jre/lib/rt.jar:\${JAVA_HOME}/lib/dt.jar:\${JAVA_HOME}/lib/tools.jar export PATH=\$PATH:\$JAVA_HOME/bin</p><p>HADOOP_HOME=/opt/hadoop/hadoop-3.3.1 export PATH=\$PATH:\$HADOOP_HOME/bin:\$HADOOP_HOME/sbin export HADOOP_PID_DIR=\${HADOOP_HOME}/pids</p><p>FLINK_HOME=/opt/flink/flink-1.12.7 export PATH=\$PATH:\$FLINK_HOME/bin</p><p>export HADOOP_CONF_DIR=/opt/hadoop/hadoop-3.3.1/etc/hadoop</p><p>export JAVA_LIBRARY_PATH=\$HADOOP_HOME/lib/native</p><p>export FORMAT_MESSAGES_PATTERN_DISABLE_LOOKUPS=true source /etc/profile使其生效</p><h2 id="_5、修改相关配置文件" tabindex="-1"><a class="header-anchor" href="#_5、修改相关配置文件" aria-hidden="true">#</a> 5、修改相关配置文件</h2><h3 id="_1-vim-flink-conf-yaml" tabindex="-1"><a class="header-anchor" href="#_1-vim-flink-conf-yaml" aria-hidden="true">#</a> 1）vim flink-conf.yaml</h3><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code>
<span class="token comment"># The external address of the host on which the JobManager runs and can be</span>
<span class="token comment"># reached by the TaskManagers and any clients which want to connect. This setting</span>
<span class="token comment"># is only used in Standalone mode and may be overwritten on the JobManager side</span>
<span class="token comment"># by specifying the --host &lt;hostname&gt; parameter of the bin/jobmanager.sh executable.</span>
<span class="token comment"># In high availability mode, if you use the bin/start-cluster.sh script and setup</span>
<span class="token comment"># the conf/masters file, this will be taken care of automatically. Yarn/Mesos</span>
<span class="token comment"># automatically configure the host name based on the hostname of the node where the</span>
<span class="token comment"># JobManager runs.</span>

<span class="token attr-name">jobmanager.rpc.address</span><span class="token punctuation">:</span> <span class="token attr-value">localhost</span>

<span class="token comment"># The RPC port where the JobManager is reachable.</span>

<span class="token attr-name">jobmanager.rpc.port</span><span class="token punctuation">:</span> <span class="token attr-value">6123</span>


<span class="token comment"># The total process memory size for the JobManager.</span>
<span class="token comment">#</span>
<span class="token comment"># Note this accounts for all memory usage within the JobManager process, including JVM metaspace and other overhead.</span>

<span class="token attr-name">jobmanager.memory.process.size</span><span class="token punctuation">:</span> <span class="token attr-value">2048m</span>


<span class="token comment"># The total process memory size for the TaskManager.</span>
<span class="token comment">#</span>
<span class="token comment"># Note this accounts for all memory usage within the TaskManager process, including JVM metaspace and other overhead.</span>

<span class="token attr-name">taskmanager.memory.process.size</span><span class="token punctuation">:</span> <span class="token attr-value">4096m</span>

<span class="token comment"># To exclude JVM metaspace and overhead, please, use total Flink memory size instead of &#39;taskmanager.memory.process.size&#39;.</span>
<span class="token comment"># It is not recommended to set both &#39;taskmanager.memory.process.size&#39; and Flink memory.</span>
<span class="token comment">#</span>
<span class="token comment"># taskmanager.memory.flink.size: 1280m</span>

<span class="token comment"># The number of task slots that each TaskManager offers. Each slot runs one parallel pipeline.</span>

<span class="token attr-name">taskmanager.numberOfTaskSlots</span><span class="token punctuation">:</span> <span class="token attr-value">30</span>

<span class="token comment"># The parallelism used for programs that did not specify and other parallelism.</span>

<span class="token attr-name">parallelism.default</span><span class="token punctuation">:</span> <span class="token attr-value">10</span>
<span class="token attr-name">yarn.containers.vcores</span><span class="token punctuation">:</span> <span class="token attr-value">4</span>
<span class="token attr-name">yarn.application-attempts</span><span class="token punctuation">:</span> <span class="token attr-value">10</span>

<span class="token comment"># zookeeper HA</span>
<span class="token attr-name">high-availability</span><span class="token punctuation">:</span> <span class="token attr-value">zookeeper</span>
<span class="token attr-name">high-availability.zookeeper.quorum</span><span class="token punctuation">:</span> <span class="token attr-value">IP:PORT,IP:PORT,IP:PORT</span>
<span class="token attr-name">high-availability.storageDir</span><span class="token punctuation">:</span> <span class="token attr-value">hdfs://主机名:9000/flink-1.12.7/flink/recovery</span>
<span class="token attr-name">high-availability.zookeeper.path.root</span><span class="token punctuation">:</span> <span class="token attr-value">/flink-1.12.7</span>

<span class="token comment">#promgateway</span>
<span class="token comment">#metrics.reporter.promgateway.class: org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter</span>
<span class="token comment">#metrics.reporter.promgateway.host: 192.168.3.43</span>
<span class="token comment">#metrics.reporter.promgateway.port: 9091</span>
<span class="token comment">#metrics.reporter.promgateway.jobName: DCP-flink-1.9.1</span>
<span class="token comment">#metrics.reporter.promgateway.randomJobNameSuffix: true</span>
<span class="token comment">#metrics.reporter.promgateway.deleteOnShutdown: true</span>


<span class="token comment">#metrics.reporter.grph.class: org.apache.flink.metrics.graphite.GraphiteReporter</span>
<span class="token comment">#metrics.reporter.grph.host: 47.101.44.28</span>
<span class="token comment">#metrics.reporter.grph.port: 2003</span>
<span class="token comment">#metrics.reporter.grph.protocol: TCP</span>
<span class="token comment">#metrics</span>
<span class="token attr-name">metrics.scope.jm</span><span class="token punctuation">:</span> <span class="token attr-value">&lt;host&gt;.jobmanager</span>
<span class="token attr-name">metrics.scope.jm.job</span><span class="token punctuation">:</span> <span class="token attr-value">&lt;host&gt;.jobmanager.&lt;job_name&gt;</span>
<span class="token attr-name">metrics.scope.tm</span><span class="token punctuation">:</span> <span class="token attr-value">&lt;host&gt;.taskmanager.&lt;tm_id&gt;</span>
<span class="token attr-name">metrics.scope.tm.job</span><span class="token punctuation">:</span> <span class="token attr-value">&lt;host&gt;.taskmanager.&lt;tm_id&gt;.&lt;job_name&gt;</span>
<span class="token attr-name">metrics.scope.task</span><span class="token punctuation">:</span> <span class="token attr-value">&lt;host&gt;.taskmanager.&lt;tm_id&gt;.&lt;job_name&gt;.&lt;task_name&gt;.&lt;subtask_index&gt;</span>
<span class="token attr-name">metrics.scope.operator</span><span class="token punctuation">:</span> <span class="token attr-value">&lt;host&gt;.taskmanager.&lt;tm_id&gt;.&lt;job_name&gt;.&lt;operator_name&gt;.&lt;subtask_index&gt;</span>


<span class="token comment"># The default file system scheme and authority.</span>
<span class="token comment"># </span>
<span class="token comment"># By default file paths without scheme are interpreted relative to the local</span>
<span class="token comment"># root file system &#39;file:///&#39;. Use this to override the default and interpret</span>
<span class="token comment"># relative paths relative to a different file system,</span>
<span class="token comment"># for example &#39;hdfs://mynamenode:12345&#39;</span>
<span class="token comment">#</span>
<span class="token comment"># fs.default-scheme</span>

<span class="token comment">#==============================================================================</span>
<span class="token comment"># High Availability</span>
<span class="token comment">#==============================================================================</span>

<span class="token comment"># The high-availability mode. Possible options are &#39;NONE&#39; or &#39;zookeeper&#39;.</span>
<span class="token comment">#</span>
<span class="token comment"># high-availability: zookeeper</span>

<span class="token comment"># The path where metadata for master recovery is persisted. While ZooKeeper stores</span>
<span class="token comment"># the small ground truth for checkpoint and leader election, this location stores</span>
<span class="token comment"># the larger objects, like persisted dataflow graphs.</span>
<span class="token comment"># </span>
<span class="token comment"># Must be a durable file system that is accessible from all nodes</span>
<span class="token comment"># (like HDFS, S3, Ceph, nfs, ...)</span>
<span class="token comment">#</span>
<span class="token comment"># high-availability.storageDir: hdfs:///flink/ha/</span>

<span class="token comment"># The list of ZooKeeper quorum peers that coordinate the high-availability</span>
<span class="token comment"># setup. This must be a list of the form:</span>
<span class="token comment"># &quot;host1:clientPort,host2:clientPort,...&quot; (default clientPort: 2181)</span>
<span class="token comment">#</span>
<span class="token comment"># high-availability.zookeeper.quorum: localhost:2181</span>


<span class="token comment"># ACL options are based on https://zookeeper.apache.org/doc/r3.1.2/zookeeperProgrammers.html#sc_BuiltinACLSchemes</span>
<span class="token comment"># It can be either &quot;creator&quot; (ZOO_CREATE_ALL_ACL) or &quot;open&quot; (ZOO_OPEN_ACL_UNSAFE)</span>
<span class="token comment"># The default value is &quot;open&quot; and it can be changed to &quot;creator&quot; if ZK security is enabled</span>
<span class="token comment">#</span>
<span class="token comment"># high-availability.zookeeper.client.acl: open</span>

<span class="token comment">#==============================================================================</span>
<span class="token comment"># Fault tolerance and checkpointing</span>
<span class="token comment">#==============================================================================</span>

<span class="token comment"># The backend that will be used to store operator state checkpoints if</span>
<span class="token comment"># checkpointing is enabled.</span>
<span class="token comment">#</span>
<span class="token comment"># Supported backends are &#39;jobmanager&#39;, &#39;filesystem&#39;, &#39;rocksdb&#39;, or the</span>
<span class="token comment"># &lt;class-name-of-factory&gt;.</span>
<span class="token comment">#</span>
<span class="token attr-name">state.backend</span><span class="token punctuation">:</span> <span class="token attr-value">filesystem</span>

<span class="token comment"># Directory for checkpoints filesystem, when using any of the default bundled</span>
<span class="token comment"># state backends.</span>
<span class="token comment">#</span>
<span class="token attr-name">state.checkpoints.dir</span><span class="token punctuation">:</span> <span class="token attr-value">hdfs://主机名:9000/flink-1.12.7/flink-checkpoints</span>

<span class="token comment"># Default target directory for savepoints, optional.</span>
<span class="token comment">#</span>
<span class="token attr-name">state.savepoints.dir</span><span class="token punctuation">:</span> <span class="token attr-value">hdfs://主机名:9000/flink-1.12.7/flink-savepoints</span>

<span class="token comment"># Flag to enable/disable incremental checkpoints for backends that</span>
<span class="token comment"># support incremental checkpoints (like the RocksDB state backend).</span>
<span class="token comment">#</span>
<span class="token attr-name">state.backend.incremental</span><span class="token punctuation">:</span> <span class="token attr-value">false</span>

<span class="token comment"># The failover strategy, i.e., how the job computation recovers from task failures.</span>
<span class="token comment"># Only restart tasks that may have been affected by the task failure, which typically includes</span>
<span class="token comment"># downstream tasks and potentially upstream tasks if their produced data is no longer available for consumption.</span>

<span class="token attr-name">jobmanager.execution.failover-strategy</span><span class="token punctuation">:</span> <span class="token attr-value">region</span>

<span class="token comment">#==============================================================================</span>
<span class="token comment"># Rest &amp; web frontend</span>
<span class="token comment">#==============================================================================</span>

<span class="token comment"># The port to which the REST client connects to. If rest.bind-port has</span>
<span class="token comment"># not been specified, then the server will bind to this port as well.</span>
<span class="token comment">#</span>
<span class="token attr-name">rest.port</span><span class="token punctuation">:</span> <span class="token attr-value">8081</span>

<span class="token comment"># The address to which the REST client will connect to</span>
<span class="token comment">#</span>
<span class="token comment">#rest.address: 0.0.0.0</span>

<span class="token comment"># Port range for the REST and web server to bind to.</span>
<span class="token comment">#</span>
<span class="token attr-name">rest.bind-port</span><span class="token punctuation">:</span> <span class="token attr-value">8085-8087</span>

<span class="token comment"># The address that the REST &amp; web server binds to</span>
<span class="token comment">#</span>
<span class="token comment">#rest.bind-address: 0.0.0.0</span>

<span class="token comment"># Flag to specify whether job submission is enabled from the web-based</span>
<span class="token comment"># runtime monitor. Uncomment to disable.</span>

<span class="token comment">#web.submit.enable: false</span>
<span class="token attr-name">web.tmpdir</span><span class="token punctuation">:</span> <span class="token attr-value">/opt/flink-1.12/flink-web</span>
<span class="token attr-name">web.upload.dir</span><span class="token punctuation">:</span> <span class="token attr-value">/opt/flink-1.12/jars</span>

<span class="token comment">#==============================================================================</span>
<span class="token comment"># Advanced</span>
<span class="token comment">#==============================================================================</span>

<span class="token comment"># Override the directories for temporary files. If not specified, the</span>
<span class="token comment"># system-specific Java temporary directory (java.io.tmpdir property) is taken.</span>
<span class="token comment">#</span>
<span class="token comment"># For framework setups on Yarn or Mesos, Flink will automatically pick up the</span>
<span class="token comment"># containers&#39; temp directories without any need for configuration.</span>
<span class="token comment">#</span>
<span class="token comment"># Add a delimited list for multiple directories, using the system directory</span>
<span class="token comment"># delimiter (colon &#39;:&#39; on unix) or a comma, e.g.:</span>
<span class="token comment">#     /data1/tmp:/data/tmp:/data3/tmp</span>
<span class="token comment">#</span>
<span class="token comment"># Note: Each directory entry is read from and written to by a different I/O</span>
<span class="token comment"># thread. You can include the same directory multiple times in order to create</span>
<span class="token comment"># multiple I/O threads against that directory. This is for example relevant for</span>
<span class="token comment"># high-throughput RAIDs.</span>
<span class="token comment">#</span>
<span class="token comment"># io.tmp.dirs: /tmp</span>

<span class="token comment"># The classloading resolve order. Possible values are &#39;child-first&#39; (Flink&#39;s default)</span>
<span class="token comment"># and &#39;parent-first&#39; (Java&#39;s default).</span>
<span class="token comment">#</span>
<span class="token comment"># Child first classloading allows users to use different dependency/library</span>
<span class="token comment"># versions in their application than those in the classpath. Switching back</span>
<span class="token comment"># to &#39;parent-first&#39; may help with debugging dependency issues.</span>
<span class="token comment">#</span>
<span class="token comment"># classloader.resolve-order: child-first</span>

<span class="token comment"># The amount of memory going to the network stack. These numbers usually need</span>
<span class="token comment"># no tuning. Adjusting them may be necessary in case of an &quot;Insufficient number</span>
<span class="token comment"># of network buffers&quot; error. The default min is 64MB, the default max is 1GB.</span>
<span class="token comment"># </span>
<span class="token comment"># taskmanager.memory.network.fraction: 0.1</span>
<span class="token comment"># taskmanager.memory.network.min: 64mb</span>
<span class="token comment"># taskmanager.memory.network.max: 1gb</span>

<span class="token comment"># flink自己管理内存，系数，默认0.4</span>
<span class="token attr-name">taskmanager.memory.managed.fraction</span><span class="token punctuation">:</span> <span class="token attr-value">0.1</span>
<span class="token comment"># flink网络缓冲区，最大值，1GB</span>
<span class="token attr-name">taskmanager.memory.network.max</span><span class="token punctuation">:</span> <span class="token attr-value">200mb</span>
<span class="token comment"># flink jvm元数据大小，默认96</span>
<span class="token attr-name">taskmanager.memory.jvm-metaspace.size</span><span class="token punctuation">:</span> <span class="token attr-value">256mb</span>

<span class="token comment">#==============================================================================</span>
<span class="token comment"># Flink Cluster Security Configuration</span>
<span class="token comment">#==============================================================================</span>

<span class="token comment"># Kerberos authentication for various components - Hadoop, ZooKeeper, and connectors -</span>
<span class="token comment"># may be enabled in four steps:</span>
<span class="token comment"># 1. configure the local krb5.conf file</span>
<span class="token comment"># 2. provide Kerberos credentials (either a keytab or a ticket cache w/ kinit)</span>
<span class="token comment"># 3. make the credentials available to various JAAS login contexts</span>
<span class="token comment"># 4. configure the connector to use JAAS/SASL</span>

<span class="token comment"># The below configure how Kerberos credentials are provided. A keytab will be used instead of</span>
<span class="token comment"># a ticket cache if the keytab path and principal are set.</span>

<span class="token comment"># security.kerberos.login.use-ticket-cache: true</span>
<span class="token comment"># security.kerberos.login.keytab: /path/to/kerberos/keytab</span>
<span class="token comment"># security.kerberos.login.principal: flink-user</span>

<span class="token comment"># The configuration below defines which JAAS login contexts</span>

<span class="token comment"># security.kerberos.login.contexts: Client,KafkaClient</span>

<span class="token comment">#==============================================================================</span>
<span class="token comment"># ZK Security Configuration</span>
<span class="token comment">#==============================================================================</span>

<span class="token comment"># Below configurations are applicable if ZK ensemble is configured for security</span>

<span class="token comment"># Override below configuration to provide custom ZK service name if configured</span>
<span class="token comment"># zookeeper.sasl.service-name: zookeeper</span>

<span class="token comment"># The configuration below must match one of the values set in &quot;security.kerberos.login.contexts&quot;</span>
<span class="token comment"># zookeeper.sasl.login-context-name: Client</span>

<span class="token comment">#==============================================================================</span>
<span class="token comment"># HistoryServer</span>
<span class="token comment">#==============================================================================</span>

<span class="token comment"># The HistoryServer is started and stopped via bin/historyserver.sh (start|stop)</span>

<span class="token comment"># Directory to upload completed jobs to. Add this directory to the list of</span>
<span class="token comment"># monitored directories of the HistoryServer as well (see below).</span>
<span class="token attr-name">jobmanager.archive.fs.dir</span><span class="token punctuation">:</span> <span class="token attr-value">hdfs://flinkp1:9000/flink-1.12.7/completed-jobs</span>

<span class="token comment"># The address under which the web-based HistoryServer listens.</span>
<span class="token comment">#historyserver.web.address: 0.0.0.0</span>

<span class="token comment"># The port under which the web-based HistoryServer listens.</span>
<span class="token comment">#historyserver.web.port: 8082</span>

<span class="token comment"># Comma separated list of directories to monitor for completed jobs.</span>
<span class="token attr-name">historyserver.archive.fs.dir</span><span class="token punctuation">:</span> <span class="token attr-value">hdfs://flinkp1:9000/flink-1.12.7/completed-jobs</span>

<span class="token comment"># Interval in milliseconds for refreshing the monitored directories.</span>
<span class="token attr-name">historyserver.archive.fs.refresh-interval</span><span class="token punctuation">:</span> <span class="token attr-value">10000</span>

<span class="token attr-name">restart-strategy.failure-rate.max-failures-per-interval</span><span class="token punctuation">:</span> <span class="token attr-value">3</span>
<span class="token attr-name">restart-strategy.failure-rate.failure-rate-interval</span><span class="token punctuation">:</span> <span class="token attr-value">5 min</span>
<span class="token attr-name">restart-strategy.failure-rate.delay</span><span class="token punctuation">:</span> <span class="token attr-value">10 s</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br></div></div><h3 id="_2-vim-core-site-xml" tabindex="-1"><a class="header-anchor" href="#_2-vim-core-site-xml" aria-hidden="true">#</a> 2）vim core-site.xml</h3>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_property, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer_.ssrRenderComponent)(_component_name, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`fs.defaultFS`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("fs.defaultFS")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer_.ssrRenderComponent)(_component_value, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`hdfs://主机名1:9000`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("hdfs://主机名1:9000")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_name, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("fs.defaultFS")
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_value, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("hdfs://主机名1:9000")
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push((0,server_renderer_.ssrRenderComponent)(_component_property, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer_.ssrRenderComponent)(_component_name, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`hadoop.tmp.dir`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("hadoop.tmp.dir")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer_.ssrRenderComponent)(_component_value, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`file:/data/hadoop/tmp`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("file:/data/hadoop/tmp")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer_.ssrRenderComponent)(_component_description, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`Abase for other temporary directories.`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("Abase for other temporary directories.")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_name, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("hadoop.tmp.dir")
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_value, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("file:/data/hadoop/tmp")
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_description, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("Abase for other temporary directories.")
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="_3-vim-yarn-site-xml" tabindex="-1"><a class="header-anchor" href="#_3-vim-yarn-site-xml" aria-hidden="true">#</a> 3) vim yarn-site.xml</h3>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_configuration, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer_.ssrRenderComponent)(_component_property, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push((0,server_renderer_.ssrRenderComponent)(_component_name, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`yarn.nodemanager.aux-services`)
                  } else {
                    return [
                      (0,external_vue_.createTextVNode)("yarn.nodemanager.aux-services")
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
              _push((0,server_renderer_.ssrRenderComponent)(_component_value, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`mapreduce_shuffle`)
                  } else {
                    return [
                      (0,external_vue_.createTextVNode)("mapreduce_shuffle")
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
            } else {
              return [
                (0,external_vue_.createVNode)(_component_name, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createTextVNode)("yarn.nodemanager.aux-services")
                  ]),
                  _: 1
                }),
                (0,external_vue_.createVNode)(_component_value, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createTextVNode)("mapreduce_shuffle")
                  ]),
                  _: 1
                })
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push(`<pre${
          _scopeId
        }><code${
          _scopeId
        }>&lt;property&gt;
    &lt;!-- 配置ResourceManager的服务节点 --&gt;
    &lt;name&gt;yarn.resourcemanager.hostname&lt;/name&gt;
    &lt;value&gt;主机名1&lt;/value&gt;
&lt;/property&gt;

&lt;property&gt;
    &lt;name&gt;yarn.resourcemanager.address&lt;/name&gt;
    &lt;value&gt;主机名1:8032&lt;/value&gt;
&lt;/property&gt;

&lt;property&gt;
    &lt;name&gt;yarn.resourcemanager.webapp.address&lt;/name&gt;
    &lt;value&gt;主机名1:8088&lt;/value&gt;
&lt;/property&gt;

    &lt;!-- 配置当前节点yarn的可用资源 start --&gt;
&lt;property&gt;
    &lt;name&gt;yarn.nodemanager.resource.cpu-vcores&lt;/name&gt;
       &lt;value&gt;15&lt;/value&gt;
&lt;/property&gt;

    &lt;property&gt;
    &lt;name&gt;yarn.nodemanager.resource.memory-mb&lt;/name&gt;
       &lt;value&gt;30000&lt;/value&gt;
&lt;/property&gt;
    &lt;!-- 配置当前节点yarn的可用资源 end --&gt;


    &lt;!-- 任务资源分配规则 start --&gt;
&lt;property&gt;
    &lt;name&gt;yarn.scheduler.minimum-allocation-vcores&lt;/name&gt;
       &lt;value&gt;1&lt;/value&gt;
&lt;/property&gt;

&lt;property&gt;
    &lt;name&gt;yarn.scheduler.maximum-allocation-vcores&lt;/name&gt;
       &lt;value&gt;4&lt;/value&gt;
&lt;/property&gt;
    &lt;!-- 任务资源分配规则 end --&gt;


    &lt;property&gt;
    &lt;name&gt;yarn.log-aggregation-enable&lt;/name&gt;
       &lt;value&gt;true&lt;/value&gt;
&lt;/property&gt;

&lt;property&gt;
      &lt;name&gt;yarn.nodemanager.vmem-check-enabled&lt;/name&gt;
      &lt;value&gt;false&lt;/value&gt;
      &lt;description&gt;Whether virtual memory limits will be enforced for containers.&lt;/description&gt;
&lt;/property&gt;

    &lt;property&gt;
      &lt;name&gt;yarn.resourcemanager.am.max-attempts&lt;/name&gt;
      &lt;value&gt;10&lt;/value&gt;
      &lt;description&gt;
            The maximum number of application master execution attempts.
      &lt;/description&gt;
    &lt;/property&gt;

    &lt;!-- 配置RM重启保存yarn上job状态 start --&gt;
     &lt;property&gt;
       &lt;description&gt;Enable RM to recover state after starting. If true, then
       yarn.resourcemanager.store.class must be specified&lt;/description&gt;
       &lt;name&gt;yarn.resourcemanager.recovery.enabled&lt;/name&gt;
       &lt;value&gt;true&lt;/value&gt;
     &lt;/property&gt;

     &lt;property&gt;
       &lt;description&gt;The class to use as the persistent store.&lt;/description&gt;
       &lt;name&gt;yarn.resourcemanager.store.class&lt;/name&gt;
       &lt;value&gt;org.apache.hadoop.yarn.server.resourcemanager.recovery.FileSystemRMStateStore&lt;/value&gt;
     &lt;/property&gt;

     &lt;property&gt;
       &lt;name&gt;yarn.resourcemanager.fs.state-store.uri&lt;/name&gt;
       &lt;value&gt;\${hadoop.tmp.dir}/yarn/system/rmstore&lt;/value&gt;
     &lt;/property&gt;
    &lt;!-- 配置RM重启保存yarn上job状态 end --&gt;
</code></pre>`)
      } else {
        return [
          (0,external_vue_.createVNode)(_component_property, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)(_component_name, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)("yarn.nodemanager.aux-services")
                ]),
                _: 1
              }),
              (0,external_vue_.createVNode)(_component_value, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)("mapreduce_shuffle")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)("pre", null, [
            (0,external_vue_.createVNode)("code", null, "<property>\n    <!-- 配置ResourceManager的服务节点 -->\n    <name>yarn.resourcemanager.hostname</name>\n    <value>主机名1</value>\n</property>\n\n<property>\n    <name>yarn.resourcemanager.address</name>\n    <value>主机名1:8032</value>\n</property>\n\n<property>\n    <name>yarn.resourcemanager.webapp.address</name>\n    <value>主机名1:8088</value>\n</property>\n\n    <!-- 配置当前节点yarn的可用资源 start -->\n<property>\n    <name>yarn.nodemanager.resource.cpu-vcores</name>\n       <value>15</value>\n</property>\n\n    <property>\n    <name>yarn.nodemanager.resource.memory-mb</name>\n       <value>30000</value>\n</property>\n    <!-- 配置当前节点yarn的可用资源 end -->\n\n\n    <!-- 任务资源分配规则 start -->\n<property>\n    <name>yarn.scheduler.minimum-allocation-vcores</name>\n       <value>1</value>\n</property>\n\n<property>\n    <name>yarn.scheduler.maximum-allocation-vcores</name>\n       <value>4</value>\n</property>\n    <!-- 任务资源分配规则 end -->\n\n\n    <property>\n    <name>yarn.log-aggregation-enable</name>\n       <value>true</value>\n</property>\n\n<property>\n      <name>yarn.nodemanager.vmem-check-enabled</name>\n      <value>false</value>\n      <description>Whether virtual memory limits will be enforced for containers.</description>\n</property>\n\n    <property>\n      <name>yarn.resourcemanager.am.max-attempts</name>\n      <value>10</value>\n      <description>\n            The maximum number of application master execution attempts.\n      </description>\n    </property>\n\n    <!-- 配置RM重启保存yarn上job状态 start -->\n     <property>\n       <description>Enable RM to recover state after starting. If true, then\n       yarn.resourcemanager.store.class must be specified</description>\n       <name>yarn.resourcemanager.recovery.enabled</name>\n       <value>true</value>\n     </property>\n\n     <property>\n       <description>The class to use as the persistent store.</description>\n       <name>yarn.resourcemanager.store.class</name>\n       <value>org.apache.hadoop.yarn.server.resourcemanager.recovery.FileSystemRMStateStore</value>\n     </property>\n\n     <property>\n       <name>yarn.resourcemanager.fs.state-store.uri</name>\n       <value>${hadoop.tmp.dir}/yarn/system/rmstore</value>\n     </property>\n    <!-- 配置RM重启保存yarn上job状态 end -->\n")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="_4-vim-yarn-env-sh-在最后加一行" tabindex="-1"><a class="header-anchor" href="#_4-vim-yarn-env-sh-在最后加一行" aria-hidden="true">#</a> 4）vim yarn-env.sh 在最后加一行</h3><p>export JAVA_HOME=/opt/jdk1.8.0_192</p><h3 id="_5-vim-mapred-site-xml" tabindex="-1"><a class="header-anchor" href="#_5-vim-mapred-site-xml" aria-hidden="true">#</a> 5) vim mapred-site.xml</h3>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_property, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer_.ssrRenderComponent)(_component_name, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`mapreduce.framework.name`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("mapreduce.framework.name")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer_.ssrRenderComponent)(_component_value, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`yarn`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("yarn")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_name, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("mapreduce.framework.name")
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_value, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("yarn")
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push((0,server_renderer_.ssrRenderComponent)(_component_property, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer_.ssrRenderComponent)(_component_name, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`mapreduce.application.classpath`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("mapreduce.application.classpath")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer_.ssrRenderComponent)(_component_value, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(` /home/devops/hadoop/hadoop-3.3.1/etc/hadoop, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/common/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/common/lib/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/hdfs/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/hdfs/lib/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/mapreduce/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/mapreduce/lib/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/yarn/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/yarn/lib/* `)
            } else {
              return [
                (0,external_vue_.createTextVNode)(" /home/devops/hadoop/hadoop-3.3.1/etc/hadoop, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/common/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/common/lib/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/hdfs/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/hdfs/lib/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/mapreduce/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/mapreduce/lib/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/yarn/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/yarn/lib/* ")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_name, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("mapreduce.application.classpath")
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_value, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)(" /home/devops/hadoop/hadoop-3.3.1/etc/hadoop, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/common/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/common/lib/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/hdfs/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/hdfs/lib/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/mapreduce/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/mapreduce/lib/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/yarn/*, /home/devops/hadoop/hadoop-3.3.1/share/hadoop/yarn/lib/* ")
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="_6-vim-workers" tabindex="-1"><a class="header-anchor" href="#_6-vim-workers" aria-hidden="true">#</a> 6) vim workers</h3><pre><code>                主机名1
                主机名2
                主机名3
</code></pre><h3 id="_7-vim-hdfs-site-xml" tabindex="-1"><a class="header-anchor" href="#_7-vim-hdfs-site-xml" aria-hidden="true">#</a> 7）vim hdfs-site.xml</h3>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_configuration, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer_.ssrRenderComponent)(_component_property, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push((0,server_renderer_.ssrRenderComponent)(_component_name, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`dfs.replication`)
                  } else {
                    return [
                      (0,external_vue_.createTextVNode)("dfs.replication")
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
              _push((0,server_renderer_.ssrRenderComponent)(_component_value, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`3`)
                  } else {
                    return [
                      (0,external_vue_.createTextVNode)("3")
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
            } else {
              return [
                (0,external_vue_.createVNode)(_component_name, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createTextVNode)("dfs.replication")
                  ]),
                  _: 1
                }),
                (0,external_vue_.createVNode)(_component_value, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createTextVNode)("3")
                  ]),
                  _: 1
                })
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer_.ssrRenderComponent)(_component_property, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push((0,server_renderer_.ssrRenderComponent)(_component_name, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`dfs.namenode.name.dir`)
                  } else {
                    return [
                      (0,external_vue_.createTextVNode)("dfs.namenode.name.dir")
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
              _push((0,server_renderer_.ssrRenderComponent)(_component_value, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`file:/data/hadoop/hdfs/name`)
                  } else {
                    return [
                      (0,external_vue_.createTextVNode)("file:/data/hadoop/hdfs/name")
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
            } else {
              return [
                (0,external_vue_.createVNode)(_component_name, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createTextVNode)("dfs.namenode.name.dir")
                  ]),
                  _: 1
                }),
                (0,external_vue_.createVNode)(_component_value, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createTextVNode)("file:/data/hadoop/hdfs/name")
                  ]),
                  _: 1
                })
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer_.ssrRenderComponent)(_component_property, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push((0,server_renderer_.ssrRenderComponent)(_component_name, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`dfs.datanode.data.dir`)
                  } else {
                    return [
                      (0,external_vue_.createTextVNode)("dfs.datanode.data.dir")
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
              _push((0,server_renderer_.ssrRenderComponent)(_component_value, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`file:/data/hadoop/hdfs/data`)
                  } else {
                    return [
                      (0,external_vue_.createTextVNode)("file:/data/hadoop/hdfs/data")
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
            } else {
              return [
                (0,external_vue_.createVNode)(_component_name, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createTextVNode)("dfs.datanode.data.dir")
                  ]),
                  _: 1
                }),
                (0,external_vue_.createVNode)(_component_value, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createTextVNode)("file:/data/hadoop/hdfs/data")
                  ]),
                  _: 1
                })
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer_.ssrRenderComponent)(_component_property, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push((0,server_renderer_.ssrRenderComponent)(_component_name, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`dfs.permissions.enabled`)
                  } else {
                    return [
                      (0,external_vue_.createTextVNode)("dfs.permissions.enabled")
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
              _push((0,server_renderer_.ssrRenderComponent)(_component_value, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`false`)
                  } else {
                    return [
                      (0,external_vue_.createTextVNode)("false")
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
            } else {
              return [
                (0,external_vue_.createVNode)(_component_name, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createTextVNode)("dfs.permissions.enabled")
                  ]),
                  _: 1
                }),
                (0,external_vue_.createVNode)(_component_value, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createTextVNode)("false")
                  ]),
                  _: 1
                })
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer_.ssrRenderComponent)(_component_property, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push((0,server_renderer_.ssrRenderComponent)(_component_name, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`dfs.namenode.secondary.http-address`)
                  } else {
                    return [
                      (0,external_vue_.createTextVNode)("dfs.namenode.secondary.http-address")
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
              _push((0,server_renderer_.ssrRenderComponent)(_component_value, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`主机名2:9868`)
                  } else {
                    return [
                      (0,external_vue_.createTextVNode)("主机名2:9868")
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
            } else {
              return [
                (0,external_vue_.createVNode)(_component_name, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createTextVNode)("dfs.namenode.secondary.http-address")
                  ]),
                  _: 1
                }),
                (0,external_vue_.createVNode)(_component_value, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createTextVNode)("主机名2:9868")
                  ]),
                  _: 1
                })
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push(`<pre${
          _scopeId
        }><code${
          _scopeId
        }>    &lt;property&gt;
      &lt;name&gt;dfs.http.address&lt;/name&gt;
      &lt;value&gt;0.0.0.0:50070&lt;/value&gt;
    &lt;/property&gt;
</code></pre>`)
      } else {
        return [
          (0,external_vue_.createVNode)(_component_property, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)(_component_name, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)("dfs.replication")
                ]),
                _: 1
              }),
              (0,external_vue_.createVNode)(_component_value, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)("3")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_property, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)(_component_name, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)("dfs.namenode.name.dir")
                ]),
                _: 1
              }),
              (0,external_vue_.createVNode)(_component_value, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)("file:/data/hadoop/hdfs/name")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_property, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)(_component_name, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)("dfs.datanode.data.dir")
                ]),
                _: 1
              }),
              (0,external_vue_.createVNode)(_component_value, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)("file:/data/hadoop/hdfs/data")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_property, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)(_component_name, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)("dfs.permissions.enabled")
                ]),
                _: 1
              }),
              (0,external_vue_.createVNode)(_component_value, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)("false")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_property, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)(_component_name, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)("dfs.namenode.secondary.http-address")
                ]),
                _: 1
              }),
              (0,external_vue_.createVNode)(_component_value, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)("主机名2:9868")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)("pre", null, [
            (0,external_vue_.createVNode)("code", null, "    <property>\n      <name>dfs.http.address</name>\n      <value>0.0.0.0:50070</value>\n    </property>\n")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="_8-vim-hadoop-env-sh" tabindex="-1"><a class="header-anchor" href="#_8-vim-hadoop-env-sh" aria-hidden="true">#</a> 8）vim hadoop-env.sh</h3><p>export JAVA_HOME=/opt/java/jdk1.8.0_341</p><p>export HADOOP_CONF_DIR=/opt/hadoop/hadoop-3.3.1/etc/hadoop</p><p>export HADOOP_OS_TYPE=\${HADOOP_OS_TYPE:-\$(uname -s)} export HADOOP_LOG_DIR=/data/hadoop/logs</p><p>export HADOOP_SSH_OPTS=&quot;-p 10086&quot; ##指定port.默认22号端口则不要加</p><p>注：hadoop,java 集群都需要装，可以在主机上修改完配置文件，scp到其他机器上，也可以一台一台修改</p><h2 id="_6、集群初始化-主节点" tabindex="-1"><a class="header-anchor" href="#_6、集群初始化-主节点" aria-hidden="true">#</a> 6、集群初始化（主节点）</h2><p>hadoop namenode -format</p><h2 id="_7、启停服务" tabindex="-1"><a class="header-anchor" href="#_7、启停服务" aria-hidden="true">#</a> 7、启停服务</h2><p>start-all.sh stop-all.sh 注：如果启动失败 先stop-all.sh，把/data/tmp/dfs 缓存文件 启动失败后需把缓存文件删除 已创建了uuid 把/data/hadoop/hdfs/ 删除 （新建yid失败，datanode节点未起来，因为该目录下保留了以前的id）</p><pre><code>         在进行初始化 hadoop namenode -format
         ###强制退出安全策略
          hdfs dfsadmin -safemode leave
</code></pre><h2 id="_8、测试" tabindex="-1"><a class="header-anchor" href="#_8、测试" aria-hidden="true">#</a> 8、测试</h2><pre><code>         yarn-session.sh -jm 1024 -tm 2048 -s 10 -nm test -d -st、
         可以通过访问http://localhost:8081查看Flink Web控制台
</code></pre><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/flink_hadoop.html.vue?vue&type=template&id=50653d56

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/flink_hadoop.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\soft\\flink_hadoop.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const flink_hadoop_html = (script);

/***/ })

};
;
//# sourceMappingURL=3487.app.js.map