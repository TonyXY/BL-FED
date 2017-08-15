[//]: # (2017-07-16 css)
## 常用css代码

### 1.硬件加速:
``` css
.hwACC {
	//硬件加速css
	transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
	opacity: 0.999999;
}
```

### 2.meta相关:
``` html
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no"/>
<meta name="format-detection" content="telephone=no"/>
<meta name="format-detection" content="email=no"/>
```

### 3.快速滚动和回弹的效果:
``` css
{
    -webkit-overflow-scrolling:touch;
}
```

### 4.移动端字体:
``` css
body {font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif; /*使用无衬线字体*/}
```

### 5.禁止长按链接与图片弹出菜单:
``` css
a, img { -webkit-touch-callout: none; }
```
### 6.去掉a、input和button点击时的蓝色外边框和灰色半透明背景:
``` css
a,button,input,optgroup,select,textarea {-webkit-tap-highlight-color:rgba(0,0,0,0); }
```
### 7.修改input的planceholder样式:
``` css
input::-webkit-input-placeholder {color:#ccc;}
```
### 8.修改表单获取焦点时的样式:
``` css
input[type=text]:focus, input[type=password]:focus { border: 2px solid#f00;outline: none;}
```
### 9.用CSS实现省略号文字截断:
``` css
{display:block;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;}
```
### 10.处理移动端页面中iframe无法滚动的问题: 
``` css
/*在iframe外加一层div，设置如下样式，让超出div的内容可以通过touch来滚动。*/
{
    -webkit-overflow-scrolling: touch !important;
	overflow-y: scroll !important;
}
```

### 11.判断横屏竖屏
``` css
@media screen and (orientation: portrait) {
  /*竖屏 css*/
} 
@media screen and (orientation: landscape) {
  /*横屏 css*/
}
```
``` javascript
//判断手机横竖屏状态(javascript)：
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function({
	if (window.orientation === 180 || window.orientation === 0) { 
		alert('竖屏状态！');
	} 
	if (window.orientation === 90 || window.orientation === -90 ){ 
		alert('横屏状态！');
	}  
}, false); 
```

### 12.placeholder占位符颜色自定义
``` css
input:-moz-placeholder {color: #369;}
::-webkit-input-placeholder {color:#369;}
```

### 13.取消chrome搜索x提示
``` css
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
    display: none;
}
```

### 14.取消textarea右下角可拖动手柄
``` css
resize:none;
```