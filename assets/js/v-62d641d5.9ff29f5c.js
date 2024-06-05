"use strict";(self.webpackChunkyaomin=self.webpackChunkyaomin||[]).push([[6365],{3609:(e,t,n)=>{n.r(t),n.d(t,{data:()=>p});const p={key:"v-62d641d5",path:"/soft/clickhouse.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"soft/clickhouse.md",git:{contributors:[{name:"Amin.Yao",email:"Amin.Yao@gaiaworks.cn",commits:2}]}}},478:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const p=(0,n(6252).uE)("<p>Clickhouse官方文档：https://clickhouse.tech/docs/zh/sql-reference/functions/date-time-functions/</p><p>一. 数据类型 二. 建表语句 三. 插入数据 四. 修改表 五. 删除数据库/表 六. 引擎 七. 是否存在 八. join 九. count 十. 时间函数 十一. 字符串函数 十二. 其他函数 一. 数据类型 整型Int</p><p>Int整型包括：UInt8,UInt16,UInt32,UInt64,Int8,Int16,Int32,Int64，固定长度的整型，包括有符号整型或无符号整型。</p><p>有符号整型范围</p><p>Int8-[-128:127] Int16-[-32768:32767] Int32-[-2147483648:2147483647] Int64-[-9223372036854775808:9223372036854775807] 无符号整型范围</p><p>UInt8-[0:255] UInt16-[0:65535] UInt32-[0:4294967295] UInt64-[0:18446744073709551615] 2. 字符串String</p><p>字符串String可以任意长度的。它可以包含任意的字节集，包含空字节。因此，字符串类型可以代替其他 DBMSs 中的 VARCHAR、BLOB、CLOB 等类型。</p><pre><code>  3. 日期Date\n</code></pre><p>日期类型Date，即年-月-日，用两个字节存储，表示从 1970-01-01 (无符号) 到当前的日期值。允许存储从 Unix 纪元开始到编译阶段定义的上限阈值常量（目前上限是2106年，但最终完全支持的年份为2105）。最小值输出为1970-01-01。</p><p>日期中没有存储时区信息。</p><pre><code>  4. 日期时间DateTime\n</code></pre><p>DateTime：时间戳类型。用四个字节（无符号的）存储 Unix 时间戳）。允许存储与日期类型相同的范围内的值。最小值为 1970-01-01 00:00:00。时间戳类型值精确到秒（没有闰秒）。</p><p>时区</p><p>使用启动客户端或服务器时的系统时区，时间戳是从文本（分解为组件）转换为二进制并返回。在文本格式中，有关夏令时的信息会丢失。默认情况下，客户端连接到服务的时候会使用服务端时区。您可以通过启用客户端命令行选项 --use_client_time_zone 来设置使用客户端时间。因此，在处理文本日期时（例如，在保存文本转储时），请记住在夏令时更改期间可能存在歧义，如果时区发生更改，则可能存在匹配数据的问题。</p><p>二. 建表语句 建表：</p><p>CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster] ( name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1], name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2], ... ) ENGINE = ReplacingMergeTree([ver]) [PARTITION BY expr] [ORDER BY expr] [SAMPLE BY expr] [SETTINGS name=value, ...] 例如：</p><p>CREATE TABLE domain_persons. dwd_fact_headcount_by_month</p><p>(</p><pre><code>`tenant_code` String,                                                 --非空\n\n`crnt_year` UInt16,\n\n`crnt_year_month` String, \n\n`total_count_begin` UInt64,\n\n`accession_state` Nullable(String),                          --Nullable 可为空\n</code></pre><p>)</p><p>ENGINE = ReplacingMergeTree --引擎 ReplacingMergeTree 和 MergeTree 的不同之处在于它会删除排序键值相同的重复项。数据的去重只会在数据合并期间进行，ReplacingMergeTree 适用于在后台清除重复的数据以节省空间，但是它不保证没有重复的数据出现。</p><p>PRIMARY KEY (tenant_code, crnt_year_month) --主键</p><p>ORDER BY (tenant_code, crnt_year_month) --排序键值</p><p>SETTINGS index_granularity = 8192</p><p>三. 插入数据 多行插入（以逗号间隔） Insert into 表名 values(…),(…),(….);</p><pre><code>  2. 按字段插入\n</code></pre><p>INSERT INTO domain_persons.ods_psnaccount</p><p>( last_update_time, act_last_update_time.)</p><p>SELECT</p><p>lastupdatetime, now()</p><p>FROM dw_xxxxworks_local_ali.psnaccount psn</p><pre><code>  3. 修改值\n</code></pre><p>alter table domain_persons.ods_psnaccount update act_attendon_date=toString(toDate(attendon_date)) where LENGTH(attendon_date)=9</p><p>四. 修改表 新增列的属性 ALTER TABLE domain_persons.ods_psnaccount ADD COLUMN act_dimission_date Nullable(String); --将列由非空改为Nullable可为空</p><pre><code>   2. 删除列\n</code></pre><p>ALTER TABLE test.test DROP COLUMN act_dimission_date;</p><pre><code>   3. 修改列属性\n</code></pre><p>alter table test.ods_psnaccount modify COLUMN act_dimission_date Nullable(String); --Nullable非空</p><pre><code>    4. 删除数据\n</code></pre><p>Truncate table domain_persons.ods_psnaccount; --删除所有数据</p><p>ALTER TABLE domain_persons.ods_psnaccount DELETE where 1=1; --删除所有数据</p><p>ALTER TABLE domain_persons.ods_psnaccount DELETE where 条件; --删除部分数据</p><p>五. 删除数据库/表 drop database 数据库名称; --删除数据库</p><p>drop table 表名称 --删除表</p><p>六. 引擎 表引擎 表引擎（即表的类型）决定了：</p><p>数据的存储方式和位置，写到哪里以及从哪里读取数据 支持哪些查询以及如何支持。 并发数据访问。 索引的使用（如果存在）。 是否可以执行多线程请求。 数据复制参数。 引擎类型：MergeTree</p><p>适用于高负载任务的最通用和功能最强大的表引擎。这些引擎的共同特点是可以快速插入数据并进行后续的后台数据处理。 MergeTree系列引擎支持数据复制（使用Replicated* 的引擎版本），分区和一些其他引擎不支持的其他功能。</p><p>该类型的引擎：</p><ul><li>MergeTree</li><li>ReplacingMergeTree</li><li>SummingMergeTree</li><li>AggregatingMergeTree</li><li>CollapsingMergeTree</li><li>VersionedCollapsingMergeTree</li><li>GraphiteMergeTree</li></ul><p>引擎 ReplacingMergeTree 和 MergeTree 的不同之处在于它会删除排序键值相同的重复项。数据的去重只会在数据合并期间进行，ReplacingMergeTree 适用于在后台清除重复的数据以节省空间，但是它不保证没有重复的数据出现。</p><p>七. 是否存在 ALTER TABLE domain_persons.ods_psnaccount DELETE</p><p>where 1 = (select 1 in(select 1 from domain_persons.ods_etl_last_update lu where lu.task_name =&#39;etl_psnaccount&#39; and lu.init_indicator = &#39;Y&#39; ))</p><p>Select 1 from ** where …… 满足条件则结果为1，否则为空 Select 1 in （a） a 为1则结果为1，a为空则结果为0； Select …from where 1=（b） b为1则结果为1，b为0则0（表示不满足条件） 八. join 新建表left_t1，并插入数据 create table test.left_t1(a UInt16, b UInt16, create_date date) Engine = MergeTree(create_date, a, 8192);</p><p>insert into test.left_t1 values(1, 11, toDate(&#39;2020-03-20&#39;));</p><p>insert into test.left_t1 values(2, 22, toDate(&#39;2020-03-20&#39;));</p><p>insert into test.left_t1 values(3, 22, toDate(&#39;2020-03-20&#39;));</p><p>新建表right_t1，并插入数据 create table test.right_t1(a UInt16, b UInt16, create_date date) Engine = MergeTree(create_date, a, 8192);</p><p>insert into test.right_t1 values(1, 111, toDate(&#39;2020-03-20&#39;));</p><p>insert into test.right_t1 values(2, 222, toDate(&#39;2020-03-20&#39;));</p><p>insert into test.right_t1 values(2, 2222, toDate(&#39;2020-03-20&#39;));</p><p>all inner join 在使用ALL修饰符对JOIN进行修饰时，如果右表中存在多个与左表关联的数据，那么系统则将右表中所有可以与左表关联的数据全部返回在结果中。 SELECT * from test.left_t1 lt all inner join test.right_t1 rt on lt.a =rt .a</p><pre><code>  2. any inner join    在使用ANY修饰符对JOIN进行修饰时，如果右表中存在多个与左表关联的数据，那么系统仅返回第一个与左表匹配的结果。如果左表与右表一一对应，不存在多余的行时，ANY与ALL的结果相同。\n</code></pre><p>SELECT * from test.left_t1 lt any inner join test.right_t1 rt on lt.a =rt .a</p><pre><code>  3. all left join    左连接，在内连接的基础上，对于那些在right_t1表中找不到匹配记录的left_t1表中的记录，用空值或0进行连接\n</code></pre><p>SELECT * from test.left_t1 lt all left join test.right_t1 rt on lt.a =rt .a</p><pre><code> 4. any left join \n</code></pre><p>SELECT * from test.left_t1 lt any left join test.right_t1 rt on lt.a =rt .a</p><pre><code>  5. inner join 只返回匹配的行\n\n  6. left outer join  除了匹配的行之外，还返回左表中的非匹配行。\n\n  7. right outer join 除了匹配的行之外，还返回右表中的非匹配行\n\n  8. full outer join   除了匹配的行之外，还返回两个表中的非匹配行\n\n  9. cross join  产生整个表的笛卡尔积，“join keys” 是不指定\n</code></pre><p>九. count COUNT(*).明确的返回数据表中的数据个数,是最准确的</p><p>COUNT(列),返回数据表中的数据个数,不统计值为null的字段</p><p>COUNT(DISTINCT 字段) 返回数据表中不重复的的数据个数,不统计值为null的字段</p><p>十. 时间函数 计算第几季度，一年分为四个季度。1（一季度:1-3）,2（二季度:4-6）,3（三季度:7-9）,4（四季度:10-12） toQuarter</p><pre><code>   2. 这一年的第几周\n</code></pre><p>SELECT toWeek(toDate(&#39;2021-09-11&#39;))</p><pre><code>   3. 转成Date格式\n\n     toDate\n</code></pre><p>十一. 字符串函数 拼接concat select concat(&#39;China&#39;,&#39; Huawei&#39;,&#39; Shenzhen&#39;) str;</p><pre><code>   2. 字符串长度LENGTH\n</code></pre><p>SELECT LENGTH(p.lastupdatetime) from dw_xxxxworks_local_hw.psnaccount p;</p><p>十二. 其他函数 查看数据类型 toTypeName</p><pre><code>   2. 数据类型转成String\n</code></pre><p>toString</p>",81),r={render:function(e,t){return p}}}}]);