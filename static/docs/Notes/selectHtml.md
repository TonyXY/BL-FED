[//]: # (2017-07-20 html)
## 常用select切换html结构及js

### html
``` html
<div class="dropdown">
	<input  name="aaa" type="text" readonly class="inputImgBg input_select place" value="" placeholder="请选择换货原因" />
	<ul>
		<li><a href="javascript:;">拍错颜色/型号</a></li>
		<li><a href="javascript:;">质量问题</a></li>
		<li><a href="javascript:;">其他</a></li>
	</ul>
</div>
```
### css
``` css
.dropdown {
	position:relative;
}
.dropdown .input_select {
	cursor:pointer;
}
.dropdown ul {
	position:absolute;
	left:0;
	top:60px;
	z-index:1000;
	width:425px;
	background:#f0f0f0;
	display:none;
}
.dropdown ul li a {
	display:block;
	font-size:18px;
	color:#999;
	padding:0 16px;
	line-height:42px;
}
.dropdown ul li a:hover {
	color:#333;
	background:#c0c0c0;
}
```

### javascript
``` javascript
$(".input_select").click(function(){
	var ul = $(this).siblings("ul");
	if(ul.is(':visible')){
		ul.slideUp("fast");
	}else{
		ul.slideDown("fast");
	}
});
$(".dropdown ul li a").click(function(){
	//event.preventDefault();
	var txt = $(this).text();
	var dropdown = $(this).closest(".dropdown");
	dropdown.find(".input_select").val(txt);
	//var value = $(this).attr("rel");
	dropdown.children("ul").slideUp("fast");
	//$(".input_select").val(9999)
});
```
