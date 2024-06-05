"use strict";(self.webpackChunkyaomin=self.webpackChunkyaomin||[]).push([[9102],{3861:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-0e60ae70",path:"/lot/Arduino.html",title:"Arduino + ESP8266 + DHT11",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"连线：",slug:"连线",children:[]}],filePathRelative:"lot/Arduino.md",git:{contributors:[{name:"yaomin",email:"272991874@qq.com",commits:1}]}}},8598:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});const e=(0,a(6252).uE)('<h1 id="arduino-esp8266-dht11" tabindex="-1"><a class="header-anchor" href="#arduino-esp8266-dht11" aria-hidden="true">#</a> Arduino + ESP8266 + DHT11</h1><h2 id="连线" tabindex="-1"><a class="header-anchor" href="#连线" aria-hidden="true">#</a> 连线：</h2><ol><li>Arduino 连笔记本电脑</li><li>Usb-TTF接Arduino：TXD连8 RXD连9</li><li>DHT11(温湿度)接Arduino：vcc连5v，DATA连A2，GND连GND</li><li>ESP8266(wifi)连Arduino：TX连0，RX连1，3号位和7号位对接，然后连3.3v，GND连GND</li></ol><p>代码：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#include &lt;SoftwareSerial.h&gt;\n#define DEBUG\n#define _baudrate   9600\n \n// USB TTL 检错用\n#define _rxpin      9\n#define _txpin      8\nSoftwareSerial debug( _rxpin, _txpin ); // RX, TX\n \n// DHT温湿度传感器\n#define dht_dpin A2\nbyte bGlobalErr;\nbyte dht_dat[5];\n \n// ESP8266 Wifi模块 \n#define SSID &quot;iBuildingS102&quot; \n#define PASS &quot;zyzhang128104&quot;\n#define IP &quot;192.168.1.158&quot; // 连接路由的IP\n// 使用 GET格式\nString GET = &quot;GET /update?key=[Write API Key]&quot;;\n \nvoid setup() {\n    InitDHT();\n    Serial.begin( _baudrate );\n    debug.begin( _baudrate );\n    delay(300);\n    sendDebug(&quot;AT&quot;);\n    delay(500);\n    if(Serial.find(&quot;OK&quot;))\n    {\n        debug.println(&quot;RECEIVED: OK\\nData ready to sent!&quot;);\n        connectWiFi();\n    }\n    delay(700);\n}\n \nvoid loop() {\n  ReadDHT();\n  switch(bGlobalErr){\n     case 0:\n        String TT,HH;\n        HH = String(dht_dat[0])+&#39;.&#39;+String(dht_dat[1]);\n        TT = String(dht_dat[2])+&#39;.&#39;+String(dht_dat[3]);\n        updateDHT11( TT, HH );        \n        #ifdef DEBUG\n            debug.print(&quot;Humidity: &quot;); \n            debug.print( HH );\n            debug.print(&quot; %\\t&quot;);\n            debug.print(&quot;Temperature: &quot;); \n            debug.print( TT );\n            debug.println(&quot; *C\\t&quot;);\n        #endif\n     \n  }\n  delay(6000);   // 一分种一次\n}\n \nvoid updateDHT11( String T, String H )\n{\n    // 使用AT指令上传\n    String cmd = &quot;AT+CIPSTART=\\&quot;TCP\\&quot;,\\&quot;&quot;;\n    cmd += IP;\n    cmd += &quot;\\&quot;,8081&quot;;//端口号\n    sendDebug(cmd);\n    delay(2000);\n    if( Serial.find( &quot;Error&quot; ) )\n    {\n        debug.print( &quot;RECEIVED: Error\\nExit1&quot; );\n        return;\n    }\n \n    cmd = GET + &quot;&amp;field1=&quot; + T + &quot;&amp;field2=&quot; + H +&quot;\\r\\n&quot;;\n    Serial.print( &quot;AT+CIPSEND=&quot; );\n    Serial.println( cmd.length() );\n    if(Serial.find( &quot;&gt;&quot; ) )\n    {\n        debug.print(&quot;&gt;&quot;);\n        debug.print(cmd);\n        Serial.print(cmd);\n    }\n    else\n    {\n        sendDebug( &quot;AT+CIPCLOSE&quot; );\n    }\n    if( Serial.find(&quot;OK&quot;) )\n    {\n        debug.println( &quot;RECEIVED: OK&quot; );\n    }\n    else\n    {\n        debug.println( &quot;RECEIVED: Error\\nExit2&quot; );\n    }\n}\n \nvoid sendDebug(String cmd)\n{\n    // 传到 USB TTL\n    debug.print(&quot;SEND: &quot;);\n    debug.println(cmd);\n    Serial.println(cmd);\n} \n  \nboolean connectWiFi()\n{\n    // 连接到Wifi\n    Serial.println(&quot;AT+CWMODE=1&quot;);\n    delay(2000);\n    String cmd=&quot;AT+CWJAP=\\&quot;&quot;;\n    cmd+=SSID;\n    cmd+=&quot;\\&quot;,\\&quot;&quot;;\n    cmd+=PASS;\n    cmd+=&quot;\\&quot;&quot;;\n    sendDebug(cmd);\n    delay(5000);\n    if(Serial.find(&quot;OK&quot;))\n    {\n        debug.println(&quot;RECEIVED: OK&quot;);\n        return true;\n    }\n    else\n    {\n        debug.println(&quot;RECEIVED: Error&quot;);\n        return false;\n    }\n \n    cmd = &quot;AT+CIPMUX=0&quot;;\n    sendDebug( cmd );\n    if( Serial.find( &quot;Error&quot;) )\n    {\n        debug.print( &quot;RECEIVED: Error&quot; );\n        return false;\n    }\n}\nvoid InitDHT(){\n   // 初始化DHT\n   pinMode(dht_dpin,OUTPUT);\n   digitalWrite(dht_dpin,HIGH);\n}\n \nvoid ReadDHT(){\nbGlobalErr=0;\nbyte dht_in;\nbyte i;\ndigitalWrite(dht_dpin,LOW);\ndelay(20);\n \ndigitalWrite(dht_dpin,HIGH);\ndelayMicroseconds(40);\npinMode(dht_dpin,INPUT);\n \ndht_in=digitalRead(dht_dpin);\n \nif(dht_in){\n   bGlobalErr=1;\n   return;\n   }\ndelayMicroseconds(80);\ndht_in=digitalRead(dht_dpin);\n \nif(!dht_in){\n   bGlobalErr=2;\n   return;\n   }\ndelayMicroseconds(80);\nfor (i=0; i&lt;5; i++)\n   dht_dat[i] = read_dht_dat();\npinMode(dht_dpin,OUTPUT);\ndigitalWrite(dht_dpin,HIGH);\nbyte dht_check_sum =\n       dht_dat[0]+dht_dat[1]+dht_dat[2]+dht_dat[3];\nif(dht_dat[4]!= dht_check_sum)\n   {bGlobalErr=3;}\n};\n \nbyte read_dht_dat(){\n  byte i = 0;\n  byte result=0;\n  for(i=0; i&lt; 8; i++){\n      while(digitalRead(dht_dpin)==LOW);\n      delayMicroseconds(30);\n      if (digitalRead(dht_dpin)==HIGH)\n     result |=(1&lt;&lt;(7-i));\n    while (digitalRead(dht_dpin)==HIGH);\n    }\n  return result;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br></div></div>',5),r={render:function(n,s){return e}}}}]);