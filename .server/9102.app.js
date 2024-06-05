"use strict";
exports.id = 9102;
exports.ids = [9102];
exports.modules = {

/***/ 3861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0e60ae70",
  "path": "/lot/Arduino.html",
  "title": "Arduino + ESP8266 + DHT11",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "连线：",
      "slug": "连线",
      "children": []
    }
  ],
  "filePathRelative": "lot/Arduino.md",
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

/***/ 8598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Arduino_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/lot/Arduino.html.vue?vue&type=template&id=a8d2bd0c

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="arduino-esp8266-dht11" tabindex="-1"><a class="header-anchor" href="#arduino-esp8266-dht11" aria-hidden="true">#</a> Arduino + ESP8266 + DHT11</h1><h2 id="连线" tabindex="-1"><a class="header-anchor" href="#连线" aria-hidden="true">#</a> 连线：</h2><ol><li>Arduino 连笔记本电脑</li><li>Usb-TTF接Arduino：TXD连8 RXD连9</li><li>DHT11(温湿度)接Arduino：vcc连5v，DATA连A2，GND连GND</li><li>ESP8266(wifi)连Arduino：TX连0，RX连1，3号位和7号位对接，然后连3.3v，GND连GND</li></ol><p>代码：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#include &lt;SoftwareSerial.h&gt;
#define DEBUG
#define _baudrate   9600
 
// USB TTL 检错用
#define _rxpin      9
#define _txpin      8
SoftwareSerial debug( _rxpin, _txpin ); // RX, TX
 
// DHT温湿度传感器
#define dht_dpin A2
byte bGlobalErr;
byte dht_dat[5];
 
// ESP8266 Wifi模块 
#define SSID &quot;iBuildingS102&quot; 
#define PASS &quot;zyzhang128104&quot;
#define IP &quot;192.168.1.158&quot; // 连接路由的IP
// 使用 GET格式
String GET = &quot;GET /update?key=[Write API Key]&quot;;
 
void setup() {
    InitDHT();
    Serial.begin( _baudrate );
    debug.begin( _baudrate );
    delay(300);
    sendDebug(&quot;AT&quot;);
    delay(500);
    if(Serial.find(&quot;OK&quot;))
    {
        debug.println(&quot;RECEIVED: OK\\nData ready to sent!&quot;);
        connectWiFi();
    }
    delay(700);
}
 
void loop() {
  ReadDHT();
  switch(bGlobalErr){
     case 0:
        String TT,HH;
        HH = String(dht_dat[0])+&#39;.&#39;+String(dht_dat[1]);
        TT = String(dht_dat[2])+&#39;.&#39;+String(dht_dat[3]);
        updateDHT11( TT, HH );        
        #ifdef DEBUG
            debug.print(&quot;Humidity: &quot;); 
            debug.print( HH );
            debug.print(&quot; %\\t&quot;);
            debug.print(&quot;Temperature: &quot;); 
            debug.print( TT );
            debug.println(&quot; *C\\t&quot;);
        #endif
     
  }
  delay(6000);   // 一分种一次
}
 
void updateDHT11( String T, String H )
{
    // 使用AT指令上传
    String cmd = &quot;AT+CIPSTART=\\&quot;TCP\\&quot;,\\&quot;&quot;;
    cmd += IP;
    cmd += &quot;\\&quot;,8081&quot;;//端口号
    sendDebug(cmd);
    delay(2000);
    if( Serial.find( &quot;Error&quot; ) )
    {
        debug.print( &quot;RECEIVED: Error\\nExit1&quot; );
        return;
    }
 
    cmd = GET + &quot;&amp;field1=&quot; + T + &quot;&amp;field2=&quot; + H +&quot;\\r\\n&quot;;
    Serial.print( &quot;AT+CIPSEND=&quot; );
    Serial.println( cmd.length() );
    if(Serial.find( &quot;&gt;&quot; ) )
    {
        debug.print(&quot;&gt;&quot;);
        debug.print(cmd);
        Serial.print(cmd);
    }
    else
    {
        sendDebug( &quot;AT+CIPCLOSE&quot; );
    }
    if( Serial.find(&quot;OK&quot;) )
    {
        debug.println( &quot;RECEIVED: OK&quot; );
    }
    else
    {
        debug.println( &quot;RECEIVED: Error\\nExit2&quot; );
    }
}
 
void sendDebug(String cmd)
{
    // 传到 USB TTL
    debug.print(&quot;SEND: &quot;);
    debug.println(cmd);
    Serial.println(cmd);
} 
  
boolean connectWiFi()
{
    // 连接到Wifi
    Serial.println(&quot;AT+CWMODE=1&quot;);
    delay(2000);
    String cmd=&quot;AT+CWJAP=\\&quot;&quot;;
    cmd+=SSID;
    cmd+=&quot;\\&quot;,\\&quot;&quot;;
    cmd+=PASS;
    cmd+=&quot;\\&quot;&quot;;
    sendDebug(cmd);
    delay(5000);
    if(Serial.find(&quot;OK&quot;))
    {
        debug.println(&quot;RECEIVED: OK&quot;);
        return true;
    }
    else
    {
        debug.println(&quot;RECEIVED: Error&quot;);
        return false;
    }
 
    cmd = &quot;AT+CIPMUX=0&quot;;
    sendDebug( cmd );
    if( Serial.find( &quot;Error&quot;) )
    {
        debug.print( &quot;RECEIVED: Error&quot; );
        return false;
    }
}
void InitDHT(){
   // 初始化DHT
   pinMode(dht_dpin,OUTPUT);
   digitalWrite(dht_dpin,HIGH);
}
 
void ReadDHT(){
bGlobalErr=0;
byte dht_in;
byte i;
digitalWrite(dht_dpin,LOW);
delay(20);
 
digitalWrite(dht_dpin,HIGH);
delayMicroseconds(40);
pinMode(dht_dpin,INPUT);
 
dht_in=digitalRead(dht_dpin);
 
if(dht_in){
   bGlobalErr=1;
   return;
   }
delayMicroseconds(80);
dht_in=digitalRead(dht_dpin);
 
if(!dht_in){
   bGlobalErr=2;
   return;
   }
delayMicroseconds(80);
for (i=0; i&lt;5; i++)
   dht_dat[i] = read_dht_dat();
pinMode(dht_dpin,OUTPUT);
digitalWrite(dht_dpin,HIGH);
byte dht_check_sum =
       dht_dat[0]+dht_dat[1]+dht_dat[2]+dht_dat[3];
if(dht_dat[4]!= dht_check_sum)
   {bGlobalErr=3;}
};
 
byte read_dht_dat(){
  byte i = 0;
  byte result=0;
  for(i=0; i&lt; 8; i++){
      while(digitalRead(dht_dpin)==LOW);
      delayMicroseconds(30);
      if (digitalRead(dht_dpin)==HIGH)
     result |=(1&lt;&lt;(7-i));
    while (digitalRead(dht_dpin)==HIGH);
    }
  return result;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/lot/Arduino.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\yaomin\\WorkSpace\\yaomin_java2\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\yaomin\\WorkSpace\\yaomin_java2\\docs\\.vuepress\\.temp\\pages\\lot\\Arduino.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const Arduino_html = (script);

/***/ })

};
;
//# sourceMappingURL=9102.app.js.map