## 常用JavaScript

### 通过正则方式获取url带的参数:
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
