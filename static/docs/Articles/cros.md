[//]: # (2017-10-13 js)
# TOC
## JavaScript跨域总结

### 什么是跨域
JavaScript出于安全方面的考虑(同源策略)，不允许跨域调用其他页面的对象。但在安全限制的同时也给注入iframe或是ajax应用上带来了不少麻烦。  
只要协议、域名、端口有任何一个不同，都被当做不同的域，js不能在不同的域之间进行通信和传输数据。
> 跨域的情况：  
> 1、用ajax向不同的域请求数据  
> 2、通过js获取页面中不同域的框架中的数据(常见iframe)  

### 一.CORS解决方案
CORS是XMLHttpRequest Level 2 里规定的一种跨域方式。在支持这个方式的浏览器里，javascript的写法和不跨域的ajax写法一模一样，只要服务器需要设置Access-Control-Allow-Origin: *
``` js
//前端
var appliance = new window.XMLHttpRequest();
appliance.onreadystatechange = function() {
    if (appliance.readyState === 4) {
        if (appliance.status === 200) {
            // success, use appliance.responseText
        } else {
            // error        
        }
    }
};
appliance.open("POST", "http://somewhere.com/endpoint", true);
appliance.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
appliance.withCredentials = true; // to support sending cookies with CORS
appliance.send(data);

// 1.服务器设置header内容：Access-Control-Allow-Origin：* 或者 http://localhost:8080
// 2.前端ajax设置参数：withCredentials: true
```
>* 优点：前端ajax改动很少
>* 缺点：需要服务器配合，设置Access-Control-Allow-Origin 存在一定的风险

### 二.XDomainRequest（IE8/9）
对于XHR2，IE浏览器的支持是IE10以上。但是IE早在IE8时就推出了 XDomainRequest 对象进行跨域操作，一直沿用到IE10才被取代掉。因此在IE8,IE9中应该使用 XDomainRequest (XDR)来实现。
``` js
var appliance = new window.XDomainRequest();
appliance.onprogress = function() {}; // no aborting
appliance.ontimeout = function() {}; // "
appliance.onload = function() {
    // do something with appliance.responseText
};
appliance.onerror = function() {
    // error handling
};
appliance.open("POST", "http://somewhere.com/endpoint", true);
appliance.send(data);
```
> 需要注意XDR有如下限制：  
> 1.XDR仅支持GET与POST这两种请求方式。  
> 2.XDR不支持自定义的请求头，因此如果你的服务端是用过header中的自定义参数进行做身份验证的话，那就行不通了。  
> 3.请求头的Content-Type只允许设置为text/plain。  
> 4.XDR不允许跨协议的请求，如果你的网页是在HTTP协议下，那么你只能请求HTTP协议下的接口，不能访问HTTPS下的接口。  
> 5.XDR只接受HTTP/HTTPS 的请求。  
> 6.发起请求的时候，不会携带authentication 或 cookies。   

### 三.JSONP
jsonp是利用script标签没有跨域限制的特性，通过在src的url的参数上附加回调函数名字，然后服务器接收回调函数名字并返回一个包含数据的回调函数。
``` js
function doSomething(data) {}// 对data处理
var script = document.createElement("script");
script.src = "http://www.b.com/b.html?callback=doSomething";
document.body.appendChild(script);
// 1.生成一个script标签，将其append在body上，向服务器发出请求
// 2.服务器根据 callback 这个参数生成一个包含数据的函数 doSomething({"a", "1"})
// 3.页面事先已声明doSomething函数，此时执行 doSomething(data) 这个函数，获得数据

//前端jq示例
$.ajax({
    url:'http://xxx.php',
    dataType:"jsonp",
    jsonp:"jsonpcallback",
    success:function(data){
    }
});
```
>* 优点：它不像XMLHttpRequest对象实现的Ajax请求那样受到同源策略的限制；它的兼容性更好，在更加古老的浏览器中都可以运行，不需要XMLHttpRequest或ActiveX的支持；并且在请求完毕后可以通过调用callback的方式回传结果。
>* 缺点：它只支持GET请求而不支持POST等其它类型的HTTP请求；它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题。

### 四.代理
在web工程下放置一个代理服务器，由代理服务器代去转发跨域HTTP请求，然后再将结果返回给我们。  
比如：前端调用的服务 /apis/xxxx/xxxx  和当前页是同源的，nginx来做一个代理到想要的地方，来实现跨域
``` bash
# nginx.conf 配置一个反向代理路径
location /apis {
    rewrite ^.+apis/?(.*)$ /$1 break;
    include uwsgi_params;
    proxy_pass http://www.baicu.com/xxxx
}
```
``` js
//webpack 代理配置
var proxyMiddleware = require('http-proxy-middleware')
// 定义HTTP代理到自定义的API后端
var proxyTable = {
    '/api': {
        target: 'http://localhost:7003/',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/api' 
        }
    }
}
// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
    let options = proxyTable[context]
    if (typeof options === 'string') {
        options = {
            target: options
        }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})
```

### 五.iframe＋window.postMessage
window.postMessage 是一个安全的跨源通信的方法，postMessage兼容IE8+、Firefox、Opera、Safari、Chrome。   
需要在后端放一个html页面，前端通过iframe引入这个页面，通过postMessage通信，解决跨域问题。  
``` html
<!-- proxy.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>proxy</title>
    <!-- <script src="jquery.min.js"></script> -->
</head>
<body>

</body>
<script>
    (function () {
        console.log(window.top.postMessage);
        window.top.postMessage('shake', "http://192.168.1.248:3000");

        function receiveMsg(e) {
            console.log("iframe got a message!");
            console.log("nMessage: " + e.data);
            console.log("nOrigin: " + e.origin);
            var theData = JSON.parse(e.data);
            window.top.postMessage(JSON.stringify({
                callbackName: theData.callbackName
            }), "http://192.168.1.248:3000");
            // $.ajax({
            //     type: "post",
            //     data: theData,
            //     url: "http://www.cnblogs.com/rss",
            //     beforeSend: function (XMLHttpRequest) {
            //     },
            //     success: function (data, textStatus) {
            //     },
            //     complete: function (XMLHttpRequest, textStatus) {
            //     },
            //     error: function () {
            //         //请求出错处理
            //     }
            // });
        }
        if (window.addEventListener) {
            //为窗口注册message事件，并绑定监听函数
            window.addEventListener('message', receiveMsg, false);
        } else {
            window.attachEvent('message', receiveMsg);
        }
    })();
</script>
</html>

<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>index</title>
</head>
<body>

</body>
<script>
    var proxyCallBack = {};
    function receiveMsg(e) {
        if(e.origin == 'http://192.168.1.248:8088'){
            console.log("top got a message!");
            console.log("nMessage: " + e.data);
            console.log("nOrigin: " + e.origin);
            if (e.data == 'shake') {
                proxyCallBack.callback1 = function() {
                    alert(222);
                }
                var win = document.getElementById("proxy_iframe").contentWindow;
                win.postMessage(JSON.stringify({
                    msg: 222,
                    callbackName: 'callback1'
                }), "http://192.168.1.248:8088");
                return false;
            }
            var theData = JSON.parse(e.data);
            console.log(theData);
            if(theData.callbackName){
                alert(333);
                proxyCallBack[theData.callbackName]();
                delete proxyCallBack[theData.callbackName];
            }
            
        }
    }
    if (window.addEventListener) {
        //为窗口注册message事件，并绑定监听函数
        window.addEventListener('message', receiveMsg, false);
    } else {
        window.attachEvent('message', receiveMsg);
    }
</script>
</html>
```  

### 六.document.domain + iframe  
``` js
//在www.a.com/a.html中
document.domain = 'a.com';
var ifr = document.createElement('iframe');
ifr.src = 'http://www.script.a.com/b.html';
ifr.display = none;
document.body.appendChild(ifr);
ifr.onload = function(){
    var doc = ifr.contentDocument || ifr.contentWindow.document;
    //在这里操作doc，也就是b.html
    ifr.onload = null;
};

// 在www.script.a.com/b.html中
document.domain = 'a.com';
```
> 需要注意:只有在主域相同的时候才能使用该方法

### 六.web sockets
web sockets是一种浏览器的API，它的目标是在一个单独的持久连接上提供全双工、双向通信。  
web sockets原理：在JS创建了web socket之后，会有一个HTTP请求发送到浏览器以发起连接。取得服务器响应后，建立的连接会使用HTTP升级从HTTP协议交换为web sockt协议。  
``` js
var socket = new WebSockt('ws://www.baidu.com');//http->ws; https->wss
socket.send('hello WebSockt');
socket.onmessage = function(event){
    var data = event.data;
}
```
> 需要注意:只有在支持web socket协议的服务器上才能正常工作。