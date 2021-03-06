[//]: # (2017-08-21 js)
## js异常错误整理

### 1.cookie过多会导致访问页面报400错误
> 最近测试时页面经常会报400错误，清除缓存才会正常，然后过会儿又报错了，我们抓包发现cookie设置里有些是重复的。谷歌了下发现cookie过多确实会导致400错误，然后去删除部分cookie就正常了。

### 2.cookie跨域不能写入
> ajax配置credentials: true可实现跨域请求带cookie

### 3.IE9跨域解决方案
#### （1）XDomainRequest（XDR）
>   XDR的限制：
>*   1.XDR仅支持__GET__与__POST__这两种请求方式
>*   2.XDR__不支持__自定义的请求头，因此如果你的服务端是用过header中的自定义参数进行做身份验证的话，那就行不通了。
>*   3.求头的__Content-Type__只允许设置为__text/plain__
>*   4.XDR__不允许跨协议__的请求，如果你的网页是在HTTP协议下，那么你只能请求HTTP协议下的接口，不能访问HTTPS 下的接口。
>*   5.XDR只接受__HTTP/HTTPS__ 的请求
>*   6.发起请求的时候，__不会__携带authentication 或 cookies

#### （2）JSONP（JSONP的本质是动态的加载script标签，因此其只支持GET请求而不支持其他类型的HTTP请求。）
>   JSONP 的执行过程大致如下：
>*   1.客户端设置一个全局的__function__，然后使用__callback=function__ 的方法，将回调的方法传递给服务端。
>*   2.服务端在接收到请求的时候，生成一个动态的js脚本，在该脚本中，调用__callback__参数传递进来的function，将回来返回的json 数据已参数的形式去传递给该function，这样，客户端在加载这个js的时候，就会自动去执行了。

#### （3）代理
>   跨域的根本问题就在于:你调用的服务端地址web地址__不在同一个域下__。

>   那么，我们最容易想到的一个解决方案就是：那我把他们放在一个域下面不就可以了么。因此我们可以在__web工程下__放置一个代理服务器，在IE10以下的浏览器中，我们的网络请求统一走这一个代理接口，由服务器带我们去__转发__这个HTTP请求，然后再将结果返回给我们。