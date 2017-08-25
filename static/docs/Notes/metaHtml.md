[//]: # (2017-08-24 html)
## meta相关

### 1.常用head
``` html
<meta charset="utf-8">
<title>xxx</title>
<meta name="description" content="">
<meta name="author" content="xxx">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="xxx">
<meta name="mobile-web-app-capable" content="yes">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
<meta http-equiv="Cache-Control" content="no-siteapp">
<!--调试阶段禁止缓存,例如微信，QQ浏览器缓存-->
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="0">
<meta name="format-detection" content="telephone=no" />
<meta name="format-detection" content="email=no"/>
<!-- Favicons -->
<link rel="shortcut icon" href="favicon.ico">
<!-- IOS / Android 主屏图标 -->
<link href="/img/webappicon/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
<link href="/img/webappicon/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
<link href="/img/webappicon/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
<link href="/img/webappicon/apple-touch-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
```

### 2.设置添加到主屏幕的App标题
> __iOS Safari__ 允许用户将一个网页添加到主屏幕然后像 __App__ 一样来操作它。我们知道每个 __App__ 下方都会有一个名字，__iOS Safari__ 提供了一个私有的 __meta__ 来定义这个名字，代码如下：

``` html
<meta name="apple-mobile-web-app-title" content="Web App名称" />
```
> __Android Chrome31.0__，__Android Browser5.0__ 也开始支持添加到主屏幕了，但并没有提供相应的定义标题的方式，所以如果你想统一 __iOS__ 和 __Android__ 平台定义 Web app 名称的方式，可以使用 __title__ 标签来定义，代码如下：

``` html
<title>Web App名称</title>
<!-- 但如果你想要网页标题和App名字不一样的话，那就只有iOS才行。 -->
```

### 3.设置添加到主屏幕的App图标
``` html
<!-- 当我们将一个网页添加到主屏幕时，除了会需要设置标题之外，肯定还需要能够自定义这个App的图标，代码如下： -->
<link rel="apple-touch-icon" href="app.png" />
<!-- 如果你想给不同的设备定不同的图标，可以通过如下 `sizes` 属性来定义：
如果没有跟相应设备推荐尺寸一致的图标，会优先选择比推荐尺寸大并且最接近推荐尺寸的图标。
如果没有比推荐尺寸大的图标，会优先选择最接近推荐尺寸的图标。
如果有多个图标符合推荐尺寸，会优先选择包含关键字precomposed的图标。
实际情况下，大部分智能手机都接近或者已经达到视网膜屏质量，所以如果想省事的话，可以分别为 `iPhone` 和 `iPad` 定义一种高质量的 `icon` 即可。 -->
<link rel="apple-touch-icon" sizes="76x76" href="ipad.png@1x" />
<link rel="apple-touch-icon" sizes="120x120" href="iphone-retina@2x.png" />
<link rel="apple-touch-icon" sizes="152x152" href="ipad-retina@2x.png" />
<link rel="apple-touch-icon" sizes="180x180" href="iphone-retina@3x.png" />
```

### 4.添加到主屏幕时设置系统顶栏颜色
``` html
<!-- 网页添加到主屏幕时，开启系统顶栏设置，该设置只在iOS上有效 -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<!-- content只有3个固定值可选：default | black | black-translucent
如果设置为default，状态栏将为正常的，即白色，网页从状态栏以下开始显示；
如果设置为black，状态栏将为黑色，网页从状态栏以下开始显示；
如果设置为black-translucent，状态栏将为灰色半透明，网页将充满整个屏幕，状态栏会盖在网页之上； -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
```

### 5.电话自动识别，开启电话呼出和短信功能。
``` html
<!-- 1. 关闭电话识别： -->
<meta name="format-detection" content="telephone=no" />
<!-- 2. 开启电话功能： -->
<a href="tel:15222222222">移动WEB页面拨打号码功能</a>
<!-- 3. 开启短信功能： -->
<a href="sms:15222222222">移动WEB页面发送短信功能</a>
```

### 6.邮箱地址识别
``` html
<!-- 浏览器会自动识别看起来像邮箱地址的字符串，不论有你没有加上邮箱链接，当你在这个字符串上长按，会弹出发邮件的提示。 -->
<!-- 1. 关闭邮箱地址识别： -->
<meta name="format-detection" content="email=no" />
<!-- 2.开启邮件发送： -->
<a href="mailto:dooyoe@gmail.com">dooyoe@gmail.com</a>
```

### 7.关闭iOS键盘首字母自动大写
``` html
<!-- 在iOS中，默认情况下键盘是开启首字母大写的功能的，如果业务不想出现首字母大写，可以这样： -->
<input type="text" autocapitalize="off" />
```

### 8.关闭iOS输入自动修正
``` html
<!--在iOS中，默认输入法会开启自动修正输入内容的功能，如果不需要的话，可以这样： -->
<input type="text" autocorrect="off" />
```