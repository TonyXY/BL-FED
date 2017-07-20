[//]: # (2017-07-16 js)
## 常用JavaScript

### 1.通过正则方式获取url带的参数:
``` javascript
function getQueryObject(url) {
    url = url == null ? window.location.href : url;
    var search = url.substring(url.lastIndexOf("?") + 1);
    var obj = {};
    var reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg,function(rs, $1, $2) {
         var name = decodeURLComponent($1);
         var val = decodeURLComponent($2);
         var val = String(val);
         obj[name] = val;
         return rs;
     });
    return obj;
 }
```

### 2.处理手机浏览器音乐自动播放问题:
``` javascript
autoPlayMusic();
// 音乐播放
function autoPlayMusic() {
	// 自动播放音乐效果，解决浏览器或者APP自动播放问题
	function musicInBrowserHandler() {
		musicPlay(true);
		document.body.removeEventListener('touchstart', musicInBrowserHandler);
	}
	document.body.addEventListener('touchstart', musicInBrowserHandler);
	// 自动播放音乐效果，解决微信自动播放问题
	function musicInWeixinHandler() {
		musicPlay(true);
		document.addEventListener("WeixinJSBridgeReady", function() {
			musicPlay(true);
		}, false);
		document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
	}
	document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}
function musicPlay(isPlay) {
	var media = audio;
	if (isPlay && media.paused) {
		media.play();
	}
	if (!isPlay && !media.paused) {
		media.pause();
	}
}
```