"use strict";
exports.id = 5609;
exports.ids = [5609];
exports.modules = {

/***/ 6764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-d70309b0",
  "path": "/soft/mysql_monitor.html",
  "title": "mysql性能监控",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一、 Mysql基础层",
      "slug": "一、-mysql基础层",
      "children": []
    },
    {
      "level": 2,
      "title": "二、 性能监控",
      "slug": "二、-性能监控",
      "children": [
        {
          "level": 3,
          "title": "2.1 show profile",
          "slug": "_2-1-show-profile",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 Performance Schema(性能模块)",
          "slug": "_2-2-performance-schema-性能模块",
          "children": []
        },
        {
          "level": 3,
          "title": "2.3 show processlist",
          "slug": "_2-3-show-processlist",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "soft/mysql_monitor.md",
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

/***/ 2458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mysql_monitor_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(2745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/soft/mysql_monitor.html.vue?vue&type=template&id=3a14e24a



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="mysql性能监控" tabindex="-1"><a class="header-anchor" href="#mysql性能监控" aria-hidden="true">#</a> mysql性能监控</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#一、-mysql基础层" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`一、 Mysql基础层`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("一、 Mysql基础层")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#二、-性能监控" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`二、 性能监控`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("二、 性能监控")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_2-1-show-profile" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`2.1 show profile`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("2.1 show profile")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_2-2-performance-schema-性能模块" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`2.2 Performance Schema(性能模块)`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("2.2 Performance Schema(性能模块)")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#_2-3-show-processlist" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`2.3 show processlist`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("2.3 show processlist")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul></nav><h2 id="一、-mysql基础层" tabindex="-1"><a class="header-anchor" href="#一、-mysql基础层" aria-hidden="true">#</a> 一、 Mysql基础层</h2><p>Mysql优化的基础在于尽量少的执行IO，一个是减少IO的量，另一个是减少IO的次数，但不管怎么样，我们都要尽量少的从我们的磁盘里获取数据</p><p>用户发出sql请求，会经过连接器、分析器、优化器、执行器等各个组件，每个组件做什么事情是必须要知道的。</p><ul><li>控制用户的连接</li><li>语法分析</li><li>优化sqchcl语句，规定执行流程</li><li>sql语句的执行组件</li></ul><p>每一个步骤所消耗的时间是不同的，调优的时候可以具体统计每一个步骤消耗的时间，再根据不同的阶段调优</p><h2 id="二、-性能监控" tabindex="-1"><a class="header-anchor" href="#二、-性能监控" aria-hidden="true">#</a> 二、 性能监控</h2><h3 id="_2-1-show-profile" tabindex="-1"><a class="header-anchor" href="#_2-1-show-profile" aria-hidden="true">#</a> 2.1 show profile</h3><p>使用show profiles查询剖析工具，可以指定具体的type。</p><ul><li>all：显示所有性能信息</li><li>block io：显示块io操作的次数</li><li>context switches：显示上下文切换次数，被动和主动</li><li>cpu：显示用户cpu时间、系统cpu时间</li><li>IPC：显示发送和接受的消息数量</li><li>Memory：暂未实现</li><li>page faults：显示页错误数量</li><li>source：显示源码中的函数名称与位置</li><li>swaps：显示swap的次数</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- 使用show profiles前需要设置</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">set</span> profiling <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">-- 然后可以查看执行用时</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> profiles<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----------+------------+--------------------+</span>
<span class="token operator">|</span> Query_ID <span class="token operator">|</span> Duration   <span class="token operator">|</span> Query              <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+------------+--------------------+</span>
<span class="token operator">|</span>        <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">0.00013450</span> <span class="token operator">|</span> <span class="token keyword">SELECT</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">|</span>
<span class="token operator">|</span>        <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">0.00028600</span> <span class="token operator">|</span> <span class="token keyword">show</span> <span class="token keyword">databases</span>     <span class="token operator">|</span>
<span class="token operator">|</span>        <span class="token number">3</span> <span class="token operator">|</span> <span class="token number">0.00027225</span> <span class="token operator">|</span> <span class="token keyword">show</span> <span class="token keyword">tables</span>        <span class="token operator">|</span>
<span class="token operator">|</span>        <span class="token number">4</span> <span class="token operator">|</span> <span class="token number">0.00030125</span> <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+------------+--------------------+</span>
<span class="token number">4</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span><span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

<span class="token comment">-- show profile [type] [for query n]</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> profile<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----------------------+----------+</span>
<span class="token operator">|</span> <span class="token keyword">Status</span>               <span class="token operator">|</span> Duration <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------------------+----------+</span>
<span class="token operator">|</span> <span class="token keyword">starting</span>             <span class="token operator">|</span> <span class="token number">0.000072</span> <span class="token operator">|</span>
<span class="token operator">|</span> checking permissions <span class="token operator">|</span> <span class="token number">0.000010</span> <span class="token operator">|</span>
<span class="token operator">|</span> Opening <span class="token keyword">tables</span>       <span class="token operator">|</span> <span class="token number">0.000016</span> <span class="token operator">|</span>
<span class="token operator">|</span> init                 <span class="token operator">|</span> <span class="token number">0.000040</span> <span class="token operator">|</span>
<span class="token operator">|</span> System <span class="token keyword">lock</span>          <span class="token operator">|</span> <span class="token number">0.000010</span> <span class="token operator">|</span>
<span class="token operator">|</span> optimizing           <span class="token operator">|</span> <span class="token number">0.000006</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token keyword">statistics</span>           <span class="token operator">|</span> <span class="token number">0.000011</span> <span class="token operator">|</span>
<span class="token operator">|</span> preparing            <span class="token operator">|</span> <span class="token number">0.000010</span> <span class="token operator">|</span>
<span class="token operator">|</span> executing            <span class="token operator">|</span> <span class="token number">0.000004</span> <span class="token operator">|</span>
<span class="token operator">|</span> Sending <span class="token keyword">data</span>         <span class="token operator">|</span> <span class="token number">0.000070</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token keyword">end</span>                  <span class="token operator">|</span> <span class="token number">0.000005</span> <span class="token operator">|</span>
<span class="token operator">|</span> query <span class="token keyword">end</span>            <span class="token operator">|</span> <span class="token number">0.000007</span> <span class="token operator">|</span>
<span class="token operator">|</span> closing <span class="token keyword">tables</span>       <span class="token operator">|</span> <span class="token number">0.000007</span> <span class="token operator">|</span>
<span class="token operator">|</span> freeing items        <span class="token operator">|</span> <span class="token number">0.000020</span> <span class="token operator">|</span>
<span class="token operator">|</span> cleaning up          <span class="token operator">|</span> <span class="token number">0.000014</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------------------+----------+</span>
<span class="token number">15</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span><span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h3 id="_2-2-performance-schema-性能模块" tabindex="-1"><a class="header-anchor" href="#_2-2-performance-schema-性能模块" aria-hidden="true">#</a> 2.2 Performance Schema(性能模块)</h3><p>Performance Schema提供了更加复杂的机制来替代show profiles，如果使用的5.7版本，是默认开启的</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">--查看performance_schema的属性</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;performance_schema&#39;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">--------------------+-------+</span>
<span class="token operator">|</span> Variable_name      <span class="token operator">|</span> <span class="token keyword">Value</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------+-------+</span>
<span class="token operator">|</span> performance_schema <span class="token operator">|</span> <span class="token keyword">ON</span>    <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------+-------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>

<span class="token comment">-- 想要关闭需要到/etc/my.cnf文件修改，但是一般不建议关闭。</span>
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
performance_schema<span class="token operator">=</span><span class="token keyword">ON</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Performance Schema提供了一种在数据库运行时检查Server的内部执行情况的方法。使用Performance Schema存储引擎 与information_schema不同的是information_schema要关注server运行过程中的元数据</p><ol><li>当你在使用performance_schema数据库的时候，无法直接创建表</li><li>performance_schema提供了一种在数据库运行时实时检查server的内部执行情况的方法。</li><li>performance_schema通过监视server的事件来监视server内部运行情况。事件代表任何操作以及对应消耗的时间。 事件的采集可以方便的提供server中相关存储引擎对磁盘文件，表I/O，表锁等资源的同步调用信息。</li><li>performance_schema中的事件与写入二进制日志中的事件(描述数据修改的events)、事件计划调度持程序(一种存储程序)的事件不同，performance_schema记录的是server执行某些活动对某些资源的消耗、耗时、次数等情况。</li><li>performance_schema中的事件只会记录在本地server的performance_schema中，不会写入binlog中，也不会被复制机制复制到其他server中。</li><li>当前活跃时间、历史时间和摘要相关的表中记录的信息。能提供某个事件的执行次数、使用时长、进而可用于分析某个特定线程、特定对象（如mutex货file）相关的活动</li><li>PERFORMANCE_SCHEMA存储引擎使用server源代码中的“检测点”来实现事件数据的收集。对于performance_schema实现机制本身的代码没有相关的单独线程来检测，这与其他功能（如复制或事件计划程序）不同</li><li>所有收集的数据会放到数据库的表里面，可以通过select语句进行查询 performance_schema一共有87张表，可以通过以下方式查看</li><li>performance_schema的表中的数据不会持久化存储在磁盘中，而是保存在内存中，一旦服务器重启，这些数据会丢失（包括配置表在内的整个performance_schema下的所有数据）</li><li>MySQL支持的所有平台中事件监控功能都可用，但不同平台中用于统计事件时间开销的计时器类型可能会有所差异。</li></ol><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">use</span> Performance_schema<span class="token punctuation">;</span>
Reading <span class="token keyword">table</span> information <span class="token keyword">for</span> completion <span class="token keyword">of</span> <span class="token keyword">table</span> <span class="token operator">and</span> <span class="token keyword">column</span> names
You can turn <span class="token keyword">off</span> this feature <span class="token keyword">to</span> get a quicker startup <span class="token keyword">with</span> <span class="token operator">-</span>A

<span class="token keyword">Database</span> changed

<span class="token comment">--查看当前数据库下的所有表,会看到有很多表存储着相关的信息</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> <span class="token keyword">tables</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------------------------------------------------------+</span>
<span class="token operator">|</span> Tables_in_performance_schema                         <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------------------------------------------+</span>
<span class="token operator">|</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>                                                 <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------------------------------------------+</span>
<span class="token number">87</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> <span class="token keyword">tables</span> <span class="token operator">like</span> <span class="token string">&#39;%wait%&#39;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----------------------------------------------+</span>
<span class="token operator">|</span> Tables_in_performance_schema <span class="token punctuation">(</span><span class="token operator">%</span>wait<span class="token operator">%</span><span class="token punctuation">)</span>         <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------------------------------+</span>
<span class="token operator">|</span> events_waits_current                          <span class="token operator">|</span>
<span class="token operator">|</span> events_waits_history                          <span class="token operator">|</span>
<span class="token operator">|</span> events_waits_history_long                     <span class="token operator">|</span>
<span class="token operator">|</span> events_waits_summary_by_account_by_event_name <span class="token operator">|</span>
<span class="token operator">|</span> events_waits_summary_by_host_by_event_name    <span class="token operator">|</span>
<span class="token operator">|</span> events_waits_summary_by_instance              <span class="token operator">|</span>
<span class="token operator">|</span> events_waits_summary_by_thread_by_event_name  <span class="token operator">|</span>
<span class="token operator">|</span> events_waits_summary_by_user_by_event_name    <span class="token operator">|</span>
<span class="token operator">|</span> events_waits_summary_global_by_event_name     <span class="token operator">|</span>
<span class="token operator">|</span> table_io_waits_summary_by_index_usage         <span class="token operator">|</span>
<span class="token operator">|</span> table_io_waits_summary_by_table               <span class="token operator">|</span>
<span class="token operator">|</span> table_lock_waits_summary_by_table             <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------------------------------+</span>
<span class="token number">12</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

<span class="token comment">--可以通过show create table tablename来查看创建表的时候的表结构</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">table</span> setup_consumers<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----------------+---------------------------------</span>
<span class="token operator">|</span> <span class="token keyword">Table</span>           <span class="token operator">|</span> <span class="token keyword">Create</span> <span class="token keyword">Table</span>                    
<span class="token operator">+</span><span class="token comment">-----------------+---------------------------------</span>
<span class="token operator">|</span> setup_consumers <span class="token operator">|</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">\`</span>setup_consumers<span class="token punctuation">\`</span> <span class="token punctuation">(</span>
  <span class="token punctuation">\`</span>NAME<span class="token punctuation">\`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>                      
  <span class="token punctuation">\`</span>ENABLED<span class="token punctuation">\`</span> <span class="token keyword">enum</span><span class="token punctuation">(</span><span class="token string">&#39;YES&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;NO&#39;</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>               
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span>PERFORMANCE_SCHEMA <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8 <span class="token operator">|</span>  
<span class="token operator">+</span><span class="token comment">-----------------+---------------------------------</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>      
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>两个基本概念：</p><blockquote><p>instruments: 生产者，用于采集mysql中各种各样的操作产生的事件信息，对应配置表中的配置项我们可以称为监控采集配置项。</p></blockquote><blockquote><p>consumers:消费者，对应的消费者表用于存储来自instruments采集的数据，对应配置表中的配置项我们可以称为消费存储配置项。</p></blockquote><h4 id="_2-2-1-performance-schema表的分类" tabindex="-1"><a class="header-anchor" href="#_2-2-1-performance-schema表的分类" aria-hidden="true">#</a> 2.2.1 performance_schema表的分类</h4><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">--语句事件记录表，这些表记录了语句事件信息，当前语句事件表events_statements_current、历史语句事件表events_statements_history和长语句历史事件表events_statements_history_long、以及聚合后的摘要表summary，其中，summary表还可以根据帐号(account)，主机(host)，程序(program)，线程(thread)，用户(user)和全局(global)再进行细分)</span>
<span class="token keyword">show</span> <span class="token keyword">tables</span> <span class="token operator">like</span> <span class="token string">&#39;%statement%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">--等待事件记录表，与语句事件类型的相关记录表类似：</span>
<span class="token keyword">show</span> <span class="token keyword">tables</span> <span class="token operator">like</span> <span class="token string">&#39;%wait%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">--阶段事件记录表，记录语句执行的阶段事件的表</span>
<span class="token keyword">show</span> <span class="token keyword">tables</span> <span class="token operator">like</span> <span class="token string">&#39;%stage%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">--事务事件记录表，记录事务相关的事件的表</span>
<span class="token keyword">show</span> <span class="token keyword">tables</span> <span class="token operator">like</span> <span class="token string">&#39;%transaction%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">--监控文件系统层调用的表</span>
<span class="token keyword">show</span> <span class="token keyword">tables</span> <span class="token operator">like</span> <span class="token string">&#39;%file%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">--监视内存使用的表</span>
<span class="token keyword">show</span> <span class="token keyword">tables</span> <span class="token operator">like</span> <span class="token string">&#39;%memory%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">--动态对performance_schema进行配置的配置表</span>
<span class="token keyword">show</span> <span class="token keyword">tables</span> <span class="token operator">like</span> <span class="token string">&#39;%setup%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h4 id="_2-2-2-performance-schema的配置与使用" tabindex="-1"><a class="header-anchor" href="#_2-2-2-performance-schema的配置与使用" aria-hidden="true">#</a> 2.2.2 performance_schema的配置与使用</h4><p>虽然performance_schema默认开启，但是不是所有的属性都是开启的，如</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> setup_instruments<span class="token punctuation">;</span>
<span class="token comment">-- 这条语句执行玩可以看到ENABLED和TIMED</span>
<span class="token comment">-- ENABLED表示这个属性监控是否开启</span>
<span class="token comment">-- TIMED表示计时器是否开启</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">UPDATE</span> setup_instruments <span class="token keyword">SET</span> ENABLED <span class="token operator">=</span> <span class="token string">&#39;YES&#39;</span><span class="token punctuation">,</span>TIMED <span class="token operator">=</span> <span class="token string">&#39;YES&#39;</span> <span class="token keyword">WHERE</span> name <span class="token operator">like</span> <span class="token string">&#39;wait%&#39;</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">266</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
<span class="token keyword">Rows</span> <span class="token keyword">matched</span>: <span class="token number">320</span>  Changed: <span class="token number">266</span>  <span class="token keyword">Warnings</span>: <span class="token number">0</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">UPDATE</span> setup_consumers <span class="token keyword">SET</span> ENABLED <span class="token operator">=</span> <span class="token string">&#39;YES&#39;</span> <span class="token keyword">WHERE</span> name <span class="token operator">like</span> <span class="token string">&#39;wait%&#39;</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
<span class="token keyword">Rows</span> <span class="token keyword">matched</span>: <span class="token number">0</span>  Changed: <span class="token number">0</span>  <span class="token keyword">Warnings</span>: <span class="token number">0</span>

<span class="token comment">--当配置完成之后可以查看当前server正在做什么，可以通过查询events_waits_current表来得知，该表中每个线程只包含一行数据，用于显示每个线程的最新监视事件</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> events_waits_current\\G
<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token number">1.</span> <span class="token keyword">row</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
            THREAD_ID: <span class="token number">11</span>
             EVENT_ID: <span class="token number">570</span>
         END_EVENT_ID: <span class="token number">570</span>
           EVENT_NAME: wait<span class="token operator">/</span>synch<span class="token operator">/</span>mutex<span class="token operator">/</span><span class="token keyword">innodb</span><span class="token operator">/</span>buf_dblwr_mutex
               SOURCE: 
          TIMER_START: <span class="token number">4508505105239280</span>
            TIMER_END: <span class="token number">4508505105270160</span>
           TIMER_WAIT: <span class="token number">30880</span>
                SPINS: <span class="token boolean">NULL</span>
        OBJECT_SCHEMA: <span class="token boolean">NULL</span>
          OBJECT_NAME: <span class="token boolean">NULL</span>
           INDEX_NAME: <span class="token boolean">NULL</span>
          OBJECT_TYPE: <span class="token boolean">NULL</span>
OBJECT_INSTANCE_BEGIN: <span class="token number">67918392</span>
     NESTING_EVENT_ID: <span class="token boolean">NULL</span>
   NESTING_EVENT_TYPE: <span class="token boolean">NULL</span>
            OPERATION: <span class="token keyword">lock</span>
      NUMBER_OF_BYTES: <span class="token boolean">NULL</span>
                FLAGS: <span class="token boolean">NULL</span>
<span class="token comment">/*该信息表示线程id为11的线程正在等待buf_dblwr_mutex锁，等待事件为30880
属性说明：
    id:事件来自哪个线程，事件编号是多少
    event_name:表示检测到的具体的内容
    source:表示这个检测代码在哪个源文件中以及行号
    timer_start:表示该事件的开始时间
    timer_end:表示该事件的结束时间
    timer_wait:表示该事件总的花费时间
注意：_current表中每个线程只保留一条记录，一旦线程完成工作，该表中不会再记录该线程的事件信息
*/</span>

<span class="token comment">/*
_history表中记录每个线程应该执行完成的事件信息，但每个线程的事件信息只会记录10条，再多就会被覆盖，*_history_long表中记录所有线程的事件信息，但总记录数量是10000，超过就会被覆盖掉
*/</span>
<span class="token keyword">select</span> thread_id<span class="token punctuation">,</span>event_id<span class="token punctuation">,</span>event_name<span class="token punctuation">,</span>timer_wait <span class="token keyword">from</span> events_waits_history <span class="token keyword">order</span> <span class="token keyword">by</span> thread_id <span class="token keyword">limit</span> <span class="token number">21</span><span class="token punctuation">;</span>

<span class="token comment">/*
summary表提供所有事件的汇总信息，该组中的表以不同的方式汇总事件数据（如：按用户，按主机，按线程等等）。例如：要查看哪些instruments占用最多的时间，可以通过对events_waits_summary_global_by_event_name表的COUNT_STAR或SUM_TIMER_WAIT列进行查询（这两列是对事件的记录数执行COUNT（*）、事件记录的TIMER_WAIT列执行SUM（TIMER_WAIT）统计而来）
*/</span>
<span class="token keyword">SELECT</span> EVENT_NAME<span class="token punctuation">,</span>COUNT_STAR <span class="token keyword">FROM</span> events_waits_summary_global_by_event_name  <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> COUNT_STAR <span class="token keyword">DESC</span> <span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------------------------------------------+------------+</span>
<span class="token operator">|</span> EVENT_NAME                               <span class="token operator">|</span> COUNT_STAR <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------------------------------+------------+</span>
<span class="token operator">|</span> wait<span class="token operator">/</span>synch<span class="token operator">/</span>mutex<span class="token operator">/</span><span class="token keyword">innodb</span><span class="token operator">/</span>buf_pool_mutex   <span class="token operator">|</span>     <span class="token number">631800</span> <span class="token operator">|</span>
<span class="token operator">|</span> wait<span class="token operator">/</span>synch<span class="token operator">/</span>mutex<span class="token operator">/</span><span class="token keyword">innodb</span><span class="token operator">/</span>log_sys_mutex    <span class="token operator">|</span>     <span class="token number">631790</span> <span class="token operator">|</span>
<span class="token operator">|</span> wait<span class="token operator">/</span>synch<span class="token operator">/</span>mutex<span class="token operator">/</span><span class="token keyword">innodb</span><span class="token operator">/</span>flush_list_mutex <span class="token operator">|</span>     <span class="token number">421197</span> <span class="token operator">|</span>
<span class="token operator">|</span> wait<span class="token operator">/</span>synch<span class="token operator">/</span>mutex<span class="token operator">/</span><span class="token keyword">innodb</span><span class="token operator">/</span>sync_array_mutex <span class="token operator">|</span>     <span class="token number">421192</span> <span class="token operator">|</span>
<span class="token operator">|</span> wait<span class="token operator">/</span>synch<span class="token operator">/</span>mutex<span class="token operator">/</span><span class="token keyword">innodb</span><span class="token operator">/</span>dict_sys_mutex   <span class="token operator">|</span>     <span class="token number">210635</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------------------------------+------------+</span>
<span class="token number">5</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

<span class="token comment">/*
instance表记录了哪些类型的对象会被检测。这些对象在被server使用时，在该表中将会产生一条事件记录，例如，file_instances表列出了文件I/O操作及其关联文件名
*/</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> file_instances <span class="token keyword">limit</span> <span class="token number">20</span><span class="token punctuation">;</span> 
<span class="token operator">+</span><span class="token comment">-------------------------------------+--------------------------------------+------------+</span>
<span class="token operator">|</span> FILE_NAME                           <span class="token operator">|</span> EVENT_NAME                           <span class="token operator">|</span> OPEN_COUNT <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------------------------------+--------------------------------------+------------+</span>
<span class="token operator">|</span> <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">share</span><span class="token operator">/</span>mysql<span class="token operator">/</span>english<span class="token operator">/</span>errmsg<span class="token punctuation">.</span>sys <span class="token operator">|</span> wait<span class="token operator">/</span>io<span class="token operator">/</span><span class="token keyword">file</span><span class="token operator">/</span><span class="token keyword">sql</span><span class="token operator">/</span>ERRMSG              <span class="token operator">|</span>          <span class="token number">0</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">share</span><span class="token operator">/</span>mysql<span class="token operator">/</span>charsets<span class="token operator">/</span><span class="token keyword">Index</span><span class="token punctuation">.</span>xml <span class="token operator">|</span> wait<span class="token operator">/</span>io<span class="token operator">/</span><span class="token keyword">file</span><span class="token operator">/</span>mysys<span class="token operator">/</span><span class="token keyword">charset</span>           <span class="token operator">|</span>          <span class="token number">0</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">/</span>var<span class="token operator">/</span>lib<span class="token operator">/</span>mysql<span class="token operator">/</span>ibdata1              <span class="token operator">|</span> wait<span class="token operator">/</span>io<span class="token operator">/</span><span class="token keyword">file</span><span class="token operator">/</span><span class="token keyword">innodb</span><span class="token operator">/</span>innodb_data_file <span class="token operator">|</span>          <span class="token number">3</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">/</span>var<span class="token operator">/</span>lib<span class="token operator">/</span>mysql<span class="token operator">/</span>ib_logfile0          <span class="token operator">|</span> wait<span class="token operator">/</span>io<span class="token operator">/</span><span class="token keyword">file</span><span class="token operator">/</span><span class="token keyword">innodb</span><span class="token operator">/</span>innodb_log_file  <span class="token operator">|</span>          <span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">/</span>var<span class="token operator">/</span>lib<span class="token operator">/</span>mysql<span class="token operator">/</span>ib_logfile1          <span class="token operator">|</span> wait<span class="token operator">/</span>io<span class="token operator">/</span><span class="token keyword">file</span><span class="token operator">/</span><span class="token keyword">innodb</span><span class="token operator">/</span>innodb_log_file  <span class="token operator">|</span>          <span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------------------------------+--------------------------------------+------------+</span>
<span class="token number">5</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div><h4 id="_2-2-3-常用配置项的参数说明" tabindex="-1"><a class="header-anchor" href="#_2-2-3-常用配置项的参数说明" aria-hidden="true">#</a> 2.2.3 常用配置项的参数说明</h4><p>1、启动选项</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>performance_schema_consumer_events_statements_current<span class="token operator">=</span><span class="token boolean">TRUE</span>
<span class="token comment">-- 是否在mysql server启动时就开启events_statements_current表的记录功能(该表记录当前的语句事件信息)，启动之后也可以在setup_consumers表中使用UPDATE语句进行动态更新setup_consumers配置表中的events_statements_current配置项</span>
<span class="token comment">-- 默认值为TRUE</span>

performance_schema_consumer_events_statements_history<span class="token operator">=</span><span class="token boolean">TRUE</span>
<span class="token comment">-- 与performance_schema_consumer_events_statements_current选项类似，但该选项是用于配置是否记录语句事件短历史信息</span>
<span class="token comment">-- 默认为TRUE</span>

performance_schema_consumer_events_stages_history_long<span class="token operator">=</span><span class="token boolean">FALSE</span>
<span class="token comment">-- 与performance_schema_consumer_events_statements_current选项类似，但该选项是用于配置是否记录语句事件长历史信息</span>
<span class="token comment">-- 默认为FALSE</span>

<span class="token comment">-- 除了statement(语句)事件之外，还支持：wait(等待)事件、state(阶段)事件、transaction(事务)事件，他们与statement事件一样都有三个启动项分别进行配置，但这些等待事件默认未启用，如果需要在MySQL Server启动时一同启动，则通常需要写进my.cnf配置文件中</span>
performance_schema_consumer_global_instrumentation<span class="token operator">=</span><span class="token boolean">TRUE</span>
<span class="token comment">-- 是否在MySQL Server启动时就开启全局表（如：mutex_instances、rwlock_instances、cond_instances、file_instances、users、hostsaccounts、socket_summary_by_event_name、file_summary_by_instance等大部分的全局对象计数统计和事件汇总统计信息表 ）的记录功能，启动之后也可以在setup_consumers表中使用UPDATE语句进行动态更新全局配置项</span>
<span class="token comment">-- 默认值为TRUE</span>

performance_schema_consumer_statements_digest<span class="token operator">=</span><span class="token boolean">TRUE</span>
<span class="token comment">-- 是否在MySQL Server启动时就开启events_statements_summary_by_digest 表的记录功能，启动之后也可以在setup_consumers表中使用UPDATE语句进行动态更新digest配置项</span>
<span class="token comment">-- 默认值为TRUE</span>

performance_schema_consumer_thread_instrumentation<span class="token operator">=</span><span class="token boolean">TRUE</span>
<span class="token comment">-- 是否在MySQL Server启动时就开启</span>

<span class="token comment">-- events_xxx_summary_by_yyy_by_event_name表的记录功能，启动之后也可以在setup_consumers表中使用UPDATE语句进行动态更新线程配置项</span>
<span class="token comment">-- 默认值为TRUE</span>

performance_schema_instrument<span class="token punctuation">[</span><span class="token operator">=</span>name<span class="token punctuation">]</span>
<span class="token comment">-- 是否在MySQL Server启动时就启用某些采集器，由于instruments配置项多达数千个，所以该配置项支持key-value模式，还支持%号进行通配等，如下:</span>

<span class="token comment">--# [=name]可以指定为具体的Instruments名称（但是这样如果有多个需要指定的时候，就需要使用该选项多次），也可以使用通配符，可以指定instruments相同的前缀+通配符，也可以使用%代表所有的instruments</span>

<span class="token comment">--## 指定开启单个instruments</span>

performance<span class="token operator">-</span><span class="token keyword">schema</span><span class="token operator">-</span>instrument<span class="token operator">=</span> <span class="token string">&#39;instrument_name=value&#39;</span>

<span class="token comment">--## 使用通配符指定开启多个instruments</span>

performance<span class="token operator">-</span><span class="token keyword">schema</span><span class="token operator">-</span>instrument<span class="token operator">=</span> <span class="token string">&#39;wait/synch/cond/%=COUNTED&#39;</span>

<span class="token comment">--## 开关所有的instruments</span>

performance<span class="token operator">-</span><span class="token keyword">schema</span><span class="token operator">-</span>instrument<span class="token operator">=</span> <span class="token string">&#39;%=ON&#39;</span>

performance<span class="token operator">-</span><span class="token keyword">schema</span><span class="token operator">-</span>instrument<span class="token operator">=</span> <span class="token string">&#39;%=OFF&#39;</span>

<span class="token comment">-- 注意，这些启动选项要生效的前提是，需要设置performance_schema=ON。另外，这些启动选项虽然无法使用show variables语句查看，但我们可以通过setup_instruments和setup_consumers表查询这些选项指定的值。</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p>2、系统变量</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;%performance_schema%&#39;</span><span class="token punctuation">;</span>
<span class="token comment">--重要的属性解释</span>
performance_schema<span class="token operator">=</span><span class="token keyword">ON</span>
<span class="token comment">/*
控制performance_schema功能的开关，要使用MySQL的performance_schema，需要在mysqld启动时启用，以启用事件收集功能
该参数在5.7.x之前支持performance_schema的版本中默认关闭，5.7.x版本开始默认开启
注意：如果mysqld在初始化performance_schema时发现无法分配任何相关的内部缓冲区，则performance_schema将自动禁用，并将performance_schema设置为OFF
*/</span>

performance_schema_digests_size<span class="token operator">=</span><span class="token number">10000</span>
<span class="token comment">/*
控制events_statements_summary_by_digest表中的最大行数。如果产生的语句摘要信息超过此最大值，便无法继续存入该表，此时performance_schema会增加状态变量
*/</span>
performance_schema_events_statements_history_long_size<span class="token operator">=</span><span class="token number">10000</span>
<span class="token comment">/*
控制events_statements_history_long表中的最大行数，该参数控制所有会话在events_statements_history_long表中能够存放的总事件记录数，超过这个限制之后，最早的记录将被覆盖
全局变量，只读变量，整型值，5.6.3版本引入 * 5.6.x版本中，5.6.5及其之前的版本默认为10000，5.6.6及其之后的版本默认值为-1，通常情况下，自动计算的值都是10000 * 5.7.x版本中，默认值为-1，通常情况下，自动计算的值都是10000
*/</span>
performance_schema_events_statements_history_size<span class="token operator">=</span><span class="token number">10</span>
<span class="token comment">/*
控制events_statements_history表中单个线程（会话）的最大行数，该参数控制单个会话在events_statements_history表中能够存放的事件记录数，超过这个限制之后，单个会话最早的记录将被覆盖
全局变量，只读变量，整型值，5.6.3版本引入 * 5.6.x版本中，5.6.5及其之前的版本默认为10，5.6.6及其之后的版本默认值为-1，通常情况下，自动计算的值都是10 * 5.7.x版本中，默认值为-1，通常情况下，自动计算的值都是10
除了statement(语句)事件之外，wait(等待)事件、state(阶段)事件、transaction(事务)事件，他们与statement事件一样都有三个参数分别进行存储限制配置，有兴趣的同学自行研究，这里不再赘述
*/</span>
performance_schema_max_digest_length<span class="token operator">=</span><span class="token number">1024</span>
<span class="token comment">/*
用于控制标准化形式的SQL语句文本在存入performance_schema时的限制长度，该变量与max_digest_length变量相关(max_digest_length变量含义请自行查阅相关资料)
全局变量，只读变量，默认值1024字节，整型值，取值范围0~1048576
*/</span>
performance_schema_max_sql_text_length<span class="token operator">=</span><span class="token number">1024</span>
<span class="token comment">/*
控制存入events_statements_current，events_statements_history和events_statements_history_long语句事件表中的SQL_TEXT列的最大SQL长度字节数。 超出系统变量performance_schema_max_sql_text_length的部分将被丢弃，不会记录，一般情况下不需要调整该参数，除非被截断的部分与其他SQL比起来有很大差异
全局变量，只读变量，整型值，默认值为1024字节，取值范围为0~1048576，5.7.6版本引入
降低系统变量performance_schema_max_sql_text_length值可以减少内存使用，但如果汇总的SQL中，被截断部分有较大差异，会导致没有办法再对这些有较大差异的SQL进行区分。 增加该系统变量值会增加内存使用，但对于汇总SQL来讲可以更精准地区分不同的部分。
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h4 id="_2-2-4-重要配置表的相关说明" tabindex="-1"><a class="header-anchor" href="#_2-2-4-重要配置表的相关说明" aria-hidden="true">#</a> 2.2.4 重要配置表的相关说明</h4><p>按照配置影响先后顺序可以添加为：</p><img${(0,server_renderer_.ssrRenderAttr)("src", _ctx.$withBase('/images/mysql/mysql202108251.jpg'))} alt="mysql202108251"><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">/*
performance_timers表中记录了server中有哪些可用的 事件计时器
字段解释：
    timer_name:表示可用计时器名称，CYCLE是基于CPU周期计数器的定时器
    timer_frequency:表示每秒钟对应的计时器单位的数量,CYCLE计时器的换算值与CPU的频率相关、
    timer_resolution:计时器精度值，表示在每个计时器被调用时额外增加的值
    timer_overhead:表示在使用定时器获取事件时开销的最小周期值
*/</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> performance_timers<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-------------+-----------------+------------------+----------------+</span>
<span class="token operator">|</span> TIMER_NAME  <span class="token operator">|</span> TIMER_FREQUENCY <span class="token operator">|</span> TIMER_RESOLUTION <span class="token operator">|</span> TIMER_OVERHEAD <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------+-----------------+------------------+----------------+</span>
<span class="token operator">|</span> <span class="token keyword">CYCLE</span>       <span class="token operator">|</span>      <span class="token number">2492676616</span> <span class="token operator">|</span>                <span class="token number">1</span> <span class="token operator">|</span>             <span class="token number">22</span> <span class="token operator">|</span>
<span class="token operator">|</span> NANOSECOND  <span class="token operator">|</span>      <span class="token number">1000000000</span> <span class="token operator">|</span>                <span class="token number">1</span> <span class="token operator">|</span>             <span class="token number">50</span> <span class="token operator">|</span>
<span class="token operator">|</span> MICROSECOND <span class="token operator">|</span>         <span class="token number">1000000</span> <span class="token operator">|</span>                <span class="token number">1</span> <span class="token operator">|</span>             <span class="token number">50</span> <span class="token operator">|</span>
<span class="token operator">|</span> MILLISECOND <span class="token operator">|</span>            <span class="token number">1037</span> <span class="token operator">|</span>                <span class="token number">1</span> <span class="token operator">|</span>             <span class="token number">50</span> <span class="token operator">|</span>
<span class="token operator">|</span> TICK        <span class="token operator">|</span>             <span class="token number">105</span> <span class="token operator">|</span>                <span class="token number">1</span> <span class="token operator">|</span>           <span class="token number">5614</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------+-----------------+------------------+----------------+</span>

<span class="token comment">/*
setup_timers表中记录当前使用的事件计时器信息
字段解释：
    name:计时器类型，对应某个事件类别
    timer_name:计时器类型名称
*/</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> setup_timers<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-------------+-------------+</span>
<span class="token operator">|</span> NAME        <span class="token operator">|</span> TIMER_NAME  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------+-------------+</span>
<span class="token operator">|</span> idle        <span class="token operator">|</span> MICROSECOND <span class="token operator">|</span>
<span class="token operator">|</span> wait        <span class="token operator">|</span> <span class="token keyword">CYCLE</span>       <span class="token operator">|</span>
<span class="token operator">|</span> stage       <span class="token operator">|</span> NANOSECOND  <span class="token operator">|</span>
<span class="token operator">|</span> statement   <span class="token operator">|</span> NANOSECOND  <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token keyword">transaction</span> <span class="token operator">|</span> NANOSECOND  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------+-------------+</span>

<span class="token comment">/*
setup_consumers表中列出了consumers可配置列表项
字段解释：
    NAME：consumers配置名称
    ENABLED：consumers是否启用，有效值为YES或NO，此列可以使用UPDATE语句修改。
*/</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> setup_consumers<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----------------------------------+---------+</span>
<span class="token operator">|</span> NAME                             <span class="token operator">|</span> ENABLED <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------------------------------+---------+</span>
<span class="token operator">|</span> events_stages_current            <span class="token operator">|</span> <span class="token keyword">NO</span>      <span class="token operator">|</span>
<span class="token operator">|</span> events_stages_history            <span class="token operator">|</span> <span class="token keyword">NO</span>      <span class="token operator">|</span>
<span class="token operator">|</span> events_stages_history_long       <span class="token operator">|</span> <span class="token keyword">NO</span>      <span class="token operator">|</span>
<span class="token operator">|</span> events_statements_current        <span class="token operator">|</span> YES     <span class="token operator">|</span>
<span class="token operator">|</span> events_statements_history        <span class="token operator">|</span> YES     <span class="token operator">|</span>
<span class="token operator">|</span> events_statements_history_long   <span class="token operator">|</span> <span class="token keyword">NO</span>      <span class="token operator">|</span>
<span class="token operator">|</span> events_transactions_current      <span class="token operator">|</span> <span class="token keyword">NO</span>      <span class="token operator">|</span>
<span class="token operator">|</span> events_transactions_history      <span class="token operator">|</span> <span class="token keyword">NO</span>      <span class="token operator">|</span>
<span class="token operator">|</span> events_transactions_history_long <span class="token operator">|</span> <span class="token keyword">NO</span>      <span class="token operator">|</span>
<span class="token operator">|</span> events_waits_current             <span class="token operator">|</span> <span class="token keyword">NO</span>      <span class="token operator">|</span>
<span class="token operator">|</span> events_waits_history             <span class="token operator">|</span> <span class="token keyword">NO</span>      <span class="token operator">|</span>
<span class="token operator">|</span> events_waits_history_long        <span class="token operator">|</span> <span class="token keyword">NO</span>      <span class="token operator">|</span>
<span class="token operator">|</span> global_instrumentation           <span class="token operator">|</span> YES     <span class="token operator">|</span>
<span class="token operator">|</span> thread_instrumentation           <span class="token operator">|</span> YES     <span class="token operator">|</span>
<span class="token operator">|</span> statements_digest                <span class="token operator">|</span> YES     <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------------------------------+---------+</span>

<span class="token comment">/*
setup_instruments 表列出了instruments 列表配置项，即代表了哪些事件支持被收集：
字段解释：
    NAME：instruments名称，instruments名称可能具有多个部分并形成层次结构
    ENABLED：instrumetns是否启用，有效值为YES或NO，此列可以使用UPDATE语句修改。如果设置为NO，则这个instruments不会被执行，不会产生任何的事件信息
    TIMED：instruments是否收集时间信息，有效值为YES或NO，此列可以使用UPDATE语句修改，如果设置为NO，则这个instruments不会收集时间信息
*/</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> setup_instruments<span class="token punctuation">;</span>
<span class="token comment">-- 1020 rows in set (0.00 sec)</span>

<span class="token comment">/*
setup_actors表的初始内容是匹配任何用户和主机，因此对于所有前台线程，默认情况下启用监视和历史事件收集功能
字段解释：
    HOST：与grant语句类似的主机名，一个具体的字符串名字，或使用“％”表示“任何主机”
    USER：一个具体的字符串名称，或使用“％”表示“任何用户”
    ROLE：当前未使用，MySQL 8.0中才启用角色功能
    ENABLED：是否启用与HOST，USER，ROLE匹配的前台线程的监控功能，有效值为：YES或NO
    HISTORY：是否启用与HOST， USER，ROLE匹配的前台线程的历史事件记录功能，有效值为：YES或NO
*/</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> setup_actors<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------+------+------+---------+---------+</span>
<span class="token operator">|</span> HOST <span class="token operator">|</span> <span class="token keyword">USER</span> <span class="token operator">|</span> ROLE <span class="token operator">|</span> ENABLED <span class="token operator">|</span> HISTORY <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------+------+------+---------+---------+</span>
<span class="token operator">|</span> <span class="token operator">%</span>    <span class="token operator">|</span> <span class="token operator">%</span>    <span class="token operator">|</span> <span class="token operator">%</span>    <span class="token operator">|</span> YES     <span class="token operator">|</span> YES     <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------+------+------+---------+---------+</span>


<span class="token comment">/*
setup_objects表控制performance_schema是否监视特定对象。默认情况下，此表的最大行数为100行。
字段解释：
    OBJECT_TYPE：instruments类型，有效值为：“EVENT”（事件调度器事件）、“FUNCTION”（存储函数）、“PROCEDURE”（存储过程）、“TABLE”（基表）、“TRIGGER”（触发器），TABLE对象类型的配置会影响表I/O事件（wait/io/table/sql/handler instrument）和表锁事件（wait/lock/table/sql/handler instrument）的收集
    OBJECT_SCHEMA：某个监视类型对象涵盖的数据库名称，一个字符串名称，或“％”(表示“任何数据库”)
    OBJECT_NAME：某个监视类型对象涵盖的表名，一个字符串名称，或“％”(表示“任何数据库内的对象”)
    ENABLED：是否开启对某个类型对象的监视功能，有效值为：YES或NO。此列可以修改
    TIMED：是否开启对某个类型对象的时间收集功能，有效值为：YES或NO，此列可以修改
*/</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> setup_objects<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-------------+--------------------+-------------+---------+-------+</span>
<span class="token operator">|</span> OBJECT_TYPE <span class="token operator">|</span> OBJECT_SCHEMA      <span class="token operator">|</span> OBJECT_NAME <span class="token operator">|</span> ENABLED <span class="token operator">|</span> TIMED <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------+--------------------+-------------+---------+-------+</span>
<span class="token operator">|</span> EVENT       <span class="token operator">|</span> mysql              <span class="token operator">|</span> <span class="token operator">%</span>           <span class="token operator">|</span> <span class="token keyword">NO</span>      <span class="token operator">|</span> <span class="token keyword">NO</span>    <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>       <span class="token operator">|</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>              <span class="token operator">|</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         <span class="token operator">|</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>      <span class="token operator">|</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>    <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------+--------------------+-------------+---------+-------+</span>
<span class="token number">20</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

<span class="token comment">/*
threads表对于每个server线程生成一行包含线程相关的信息，
字段解释：
    THREAD_ID：线程的唯一标识符（ID）
    NAME：与server中的线程检测代码相关联的名称(注意，这里不是instruments名称)
    TYPE：线程类型，有效值为：FOREGROUND、BACKGROUND。分别表示前台线程和后台线程
    PROCESSLIST_ID：对应INFORMATION_SCHEMA.PROCESSLIST表中的ID列。
    PROCESSLIST_USER：与前台线程相关联的用户名，对于后台线程为NULL。
    PROCESSLIST_HOST：与前台线程关联的客户端的主机名，对于后台线程为NULL。
    PROCESSLIST_DB：线程的默认数据库，如果没有，则为NULL。
    PROCESSLIST_COMMAND：对于前台线程，该值代表着当前客户端正在执行的command类型，如果是sleep则表示当前会话处于空闲状态
    PROCESSLIST_TIME：当前线程已处于当前线程状态的持续时间（秒）
    PROCESSLIST_STATE：表示线程正在做什么事情。
    PROCESSLIST_INFO：线程正在执行的语句，如果没有执行任何语句，则为NULL。
    PARENT_THREAD_ID：如果这个线程是一个子线程（由另一个线程生成），那么该字段显示其父线程ID
    ROLE：暂未使用
    INSTRUMENTED：线程执行的事件是否被检测。有效值：YES、NO 
    HISTORY：是否记录线程的历史事件。有效值：YES、NO * 
    THREAD_OS_ID：由操作系统层定义的线程或任务标识符（ID）：
*/</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> threads<span class="token punctuation">;</span>
<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token number">1.</span> <span class="token keyword">row</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
          THREAD_ID: <span class="token number">1</span>
               NAME: thread<span class="token operator">/</span><span class="token keyword">sql</span><span class="token operator">/</span>main
               <span class="token keyword">TYPE</span>: BACKGROUND
     PROCESSLIST_ID: <span class="token boolean">NULL</span>
   PROCESSLIST_USER: <span class="token boolean">NULL</span>
   PROCESSLIST_HOST: <span class="token boolean">NULL</span>
     PROCESSLIST_DB: <span class="token boolean">NULL</span>
PROCESSLIST_COMMAND: <span class="token boolean">NULL</span>
   PROCESSLIST_TIME: <span class="token number">18295646</span>
  PROCESSLIST_STATE: <span class="token boolean">NULL</span>
   PROCESSLIST_INFO: <span class="token boolean">NULL</span>
   PARENT_THREAD_ID: <span class="token boolean">NULL</span>
               ROLE: <span class="token boolean">NULL</span>
       INSTRUMENTED: YES
            HISTORY: YES
    CONNECTION_TYPE: <span class="token boolean">NULL</span>
       THREAD_OS_ID: <span class="token number">1</span>
<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token number">2.</span> <span class="token keyword">row</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
          THREAD_ID: <span class="token number">2</span>
               NAME: thread<span class="token operator">/</span><span class="token keyword">sql</span><span class="token operator">/</span>thread_timer_notifier
               <span class="token keyword">TYPE</span>: BACKGROUND
     PROCESSLIST_ID: <span class="token boolean">NULL</span>
   PROCESSLIST_USER: <span class="token boolean">NULL</span>
   PROCESSLIST_HOST: <span class="token boolean">NULL</span>
     PROCESSLIST_DB: <span class="token boolean">NULL</span>
PROCESSLIST_COMMAND: <span class="token boolean">NULL</span>
   PROCESSLIST_TIME: <span class="token boolean">NULL</span>
  PROCESSLIST_STATE: <span class="token boolean">NULL</span>
   PROCESSLIST_INFO: <span class="token boolean">NULL</span>
   PARENT_THREAD_ID: <span class="token number">1</span>
               ROLE: <span class="token boolean">NULL</span>
       INSTRUMENTED: YES
            HISTORY: YES
    CONNECTION_TYPE: <span class="token boolean">NULL</span>
       THREAD_OS_ID: <span class="token number">128</span>
<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br></div></div><p>1、performance_schema常用操作</p><p>​ 基本了解了表的相关信息之后，可以通过这些表进行实际的查询操作来进行实际的分析。</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">--1、哪类的SQL执行最多？</span>
<span class="token keyword">SELECT</span> DIGEST_TEXT<span class="token punctuation">,</span>COUNT_STAR<span class="token punctuation">,</span>FIRST_SEEN<span class="token punctuation">,</span>LAST_SEEN <span class="token keyword">FROM</span> events_statements_summary_by_digest <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> COUNT_STAR <span class="token keyword">DESC</span>

<span class="token comment">--2、哪类SQL的平均响应时间最多？</span>
<span class="token keyword">SELECT</span> DIGEST_TEXT<span class="token punctuation">,</span>AVG_TIMER_WAIT <span class="token keyword">FROM</span> events_statements_summary_by_digest <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> COUNT_STAR <span class="token keyword">DESC</span>

<span class="token comment">--3、哪类SQL排序记录数最多？</span>
<span class="token keyword">SELECT</span> DIGEST_TEXT<span class="token punctuation">,</span>SUM_SORT_ROWS <span class="token keyword">FROM</span> events_statements_summary_by_digest <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> COUNT_STAR <span class="token keyword">DESC</span>

<span class="token comment">--4、哪类SQL扫描记录数最多？</span>
<span class="token keyword">SELECT</span> DIGEST_TEXT<span class="token punctuation">,</span>SUM_ROWS_EXAMINED <span class="token keyword">FROM</span> events_statements_summary_by_digest <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> COUNT_STAR <span class="token keyword">DESC</span>

<span class="token comment">--5、哪类SQL使用临时表最多？</span>
<span class="token keyword">SELECT</span> DIGEST_TEXT<span class="token punctuation">,</span>SUM_CREATED_TMP_TABLES<span class="token punctuation">,</span>SUM_CREATED_TMP_DISK_TABLES <span class="token keyword">FROM</span> events_statements_summary_by_digest <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> COUNT_STAR <span class="token keyword">DESC</span>

<span class="token comment">--6、哪类SQL返回结果集最多？</span>
<span class="token keyword">SELECT</span> DIGEST_TEXT<span class="token punctuation">,</span>SUM_ROWS_SENT <span class="token keyword">FROM</span> events_statements_summary_by_digest <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> COUNT_STAR <span class="token keyword">DESC</span>

<span class="token comment">--7、哪个表物理IO最多？</span>
<span class="token keyword">SELECT</span> file_name<span class="token punctuation">,</span>event_name<span class="token punctuation">,</span>SUM_NUMBER_OF_BYTES_READ<span class="token punctuation">,</span>SUM_NUMBER_OF_BYTES_WRITE <span class="token keyword">FROM</span> file_summary_by_instance <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> SUM_NUMBER_OF_BYTES_READ <span class="token operator">+</span> SUM_NUMBER_OF_BYTES_WRITE <span class="token keyword">DESC</span>

<span class="token comment">--8、哪个表逻辑IO最多？</span>
<span class="token keyword">SELECT</span> object_name<span class="token punctuation">,</span>COUNT_READ<span class="token punctuation">,</span>COUNT_WRITE<span class="token punctuation">,</span>COUNT_FETCH<span class="token punctuation">,</span>SUM_TIMER_WAIT <span class="token keyword">FROM</span> table_io_waits_summary_by_table <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> sum_timer_wait <span class="token keyword">DESC</span>

<span class="token comment">--9、哪个索引访问最多？</span>
<span class="token keyword">SELECT</span> OBJECT_NAME<span class="token punctuation">,</span>INDEX_NAME<span class="token punctuation">,</span>COUNT_FETCH<span class="token punctuation">,</span>COUNT_INSERT<span class="token punctuation">,</span>COUNT_UPDATE<span class="token punctuation">,</span>COUNT_DELETE <span class="token keyword">FROM</span> table_io_waits_summary_by_index_usage <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> SUM_TIMER_WAIT <span class="token keyword">DESC</span>

<span class="token comment">--10、哪个索引从来没有用过？</span>
<span class="token keyword">SELECT</span> OBJECT_SCHEMA<span class="token punctuation">,</span>OBJECT_NAME<span class="token punctuation">,</span>INDEX_NAME <span class="token keyword">FROM</span> table_io_waits_summary_by_index_usage <span class="token keyword">WHERE</span> INDEX_NAME <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token operator">AND</span> COUNT_STAR <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">AND</span> OBJECT_SCHEMA <span class="token operator">&lt;&gt;</span> <span class="token string">&#39;mysql&#39;</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> OBJECT_SCHEMA<span class="token punctuation">,</span>OBJECT_NAME<span class="token punctuation">;</span>

<span class="token comment">--11、哪个等待事件消耗时间最多？</span>
<span class="token keyword">SELECT</span> EVENT_NAME<span class="token punctuation">,</span>COUNT_STAR<span class="token punctuation">,</span>SUM_TIMER_WAIT<span class="token punctuation">,</span>AVG_TIMER_WAIT <span class="token keyword">FROM</span> events_waits_summary_global_by_event_name <span class="token keyword">WHERE</span> event_name <span class="token operator">!=</span> <span class="token string">&#39;idle&#39;</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> SUM_TIMER_WAIT <span class="token keyword">DESC</span>

<span class="token comment">--12-1、剖析某条SQL的执行情况，包括statement信息，stege信息，wait信息</span>
<span class="token keyword">SELECT</span> EVENT_ID<span class="token punctuation">,</span>sql_text <span class="token keyword">FROM</span> events_statements_history <span class="token keyword">WHERE</span> sql_text <span class="token operator">LIKE</span> <span class="token string">&#39;%count(*)%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">--12-2、查看每个阶段的时间消耗</span>
<span class="token keyword">SELECT</span> event_id<span class="token punctuation">,</span>EVENT_NAME<span class="token punctuation">,</span>SOURCE<span class="token punctuation">,</span>TIMER_END <span class="token operator">-</span> TIMER_START <span class="token keyword">FROM</span> events_stages_history_long <span class="token keyword">WHERE</span> NESTING_EVENT_ID <span class="token operator">=</span> <span class="token number">1553</span><span class="token punctuation">;</span>

<span class="token comment">--12-3、查看每个阶段的锁等待情况</span>
<span class="token keyword">SELECT</span> event_id<span class="token punctuation">,</span>event_name<span class="token punctuation">,</span>source<span class="token punctuation">,</span>timer_wait<span class="token punctuation">,</span>object_name<span class="token punctuation">,</span>index_name<span class="token punctuation">,</span>operation<span class="token punctuation">,</span>nesting_event_id <span class="token keyword">FROM</span> events_waits_history_longWHERE nesting_event_id <span class="token operator">=</span> <span class="token number">1553</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="_2-3-show-processlist" tabindex="-1"><a class="header-anchor" href="#_2-3-show-processlist" aria-hidden="true">#</a> 2.3 show processlist</h3><p>使用show processlist查看连接的线程个数，来观察是否有大量线程处于不正常的状态或者其他不正常的特征</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> processlist<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">--------+------+-----------+--------------------+---------+------+----------+------------------+</span>
<span class="token operator">|</span> Id     <span class="token operator">|</span> <span class="token keyword">User</span> <span class="token operator">|</span> Host      <span class="token operator">|</span> db                 <span class="token operator">|</span> Command <span class="token operator">|</span> <span class="token keyword">Time</span> <span class="token operator">|</span> State    <span class="token operator">|</span> Info             <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------+------+-----------+--------------------+---------+------+----------+------------------+</span>
<span class="token operator">|</span> <span class="token number">149961</span> <span class="token operator">|</span> root <span class="token operator">|</span> localhost <span class="token operator">|</span> performance_schema <span class="token operator">|</span> Query   <span class="token operator">|</span>    <span class="token number">0</span> <span class="token operator">|</span> <span class="token keyword">starting</span> <span class="token operator">|</span> <span class="token keyword">show</span> processlist <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------+------+-----------+--------------------+---------+------+----------+------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token number">1.</span> <span class="token keyword">row</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
     Id: <span class="token number">149961</span> <span class="token comment">#session_id</span>
   <span class="token keyword">User</span>: root <span class="token comment">#操作的用户</span>
   Host: localhost <span class="token comment">#操作的主机</span>
     db: performance_schema <span class="token comment">#操作的数据库</span>
Command: Query <span class="token comment">#当前状态</span>
   <span class="token keyword">Time</span>: <span class="token number">0</span> <span class="token comment"># 命令执行时间</span>
  State: <span class="token keyword">starting</span> <span class="token comment"># 命令执行状态</span>
   Info: <span class="token keyword">show</span> processlist <span class="token comment"># 详细sql语句 </span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>command当前状态有以下几种：</p><ul><li>sleep：线程正在等待客户端发送新的请求</li><li>query：线程正在执行查询或正在将结果发送给客户端</li><li>locked：在mysql的服务层，该线程正在等待表锁</li><li>analyzing and statistics：线程正在收集存储引擎的统计信息，并生成查询的执行计划</li><li>Copying to tmp table：线程正在执行查询，并且将其结果集都复制到一个临时表中</li><li>sorting result：线程正在对结果集进行排序</li><li>sending data：线程可能在多个状态之间传送数据，或者在生成结果集或者向客户端返回数据</li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/mysql_monitor.html.vue?vue&type=template&id=3a14e24a

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/soft/mysql_monitor.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\soft\\mysql_monitor.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const mysql_monitor_html = (script);

/***/ })

};
;
//# sourceMappingURL=5609.app.js.map