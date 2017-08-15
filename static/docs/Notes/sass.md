[//]: # (2017-08-07 css)
# TOC
## Sass 学习

### 1.变量及注释
>* 使用__$符号__来标识变量，在声明变量时，变量值也可以引用其他变量。
>* 变量名多个词之间可以使用中划线或下划线分隔，用中划线声明的变量可以使用下划线的方式引用，反之亦然。
>* __/* ... */标准注释格式__，内容会出现在生成的css文件中 
>* __//静默注释__，注释内容直到行末，其内容不会出现在生成的css文件中。

``` scss
//在声明变量时，变量值也可以引用其他变量
$highlight-color: #F90;
$highlight-border: 1px solid $highlight-color;
.selected {
    //用中划线声明的变量可以使用下划线的方式引用，反之亦然
    border: $highlight_border;
}

//注释 示例
body {
  color: #333; // 这种注释内容不会出现在生成的css文件中
  padding: 0; /* 这种注释内容会出现在生成的css文件中 */
}
```

### 2.嵌套css规则
>* __"&"__ 父选择器
>* __","__ 群组选择器
>* __">、+、~"__ 子组合选择器和同层组合选择器
>* 除了CSS选择器，属性也可以进行嵌套

``` scss
//"&" 父选择器
article a {
  color: blue;
  &:hover { color: red }
}
/*编译后*/
article a { color: blue }
article a:hover { color: red }

#content aside {
  color: red;
  body.ie & { color: green }
}
/*编译后*/
#content aside {color: red};
body.ie #content aside { color: green }

//"," 群组选择器
nav, aside {
  a {color: blue}
}
/*编译后*/
nav a, aside a {color: blue}

//">、+、~" 子组合选择器和同层组合选择器
article {
    ~ article { border-top: 1px dashed #ccc }
    > section { background: #eee }
    dl > {
        dt { color: #333 }
        dd { color: #555 }
    }
    nav + & { margin-top: 0 }
}
/*编译后*/
article ~ article { border-top: 1px dashed #ccc }
article > footer { background: #eee }
article dl > dt { color: #333 }
article dl > dd { color: #555 }
nav + article { margin-top: 0 }

//属性也可以进行嵌套
nav {
    border: {
        style: solid;
        width: 1px;
        color: #ccc;
    }
}
/*编译后*/
nav {
    border: 1px solid #ccc;
    border-left: 0px;
    border-right: 0px;
}
//对于属性的缩写形式，你甚至可以像下边这样来嵌套，指明例外规则
nav {
    border-style: solid;
    border-width: 1px;
    border-color: #ccc;
}
/*编译后*/
nav {
    border: 1px solid #ccc;
    border-left: 0px;
    border-right: 0px;
}
```

 ### 3.导入sass文件“@import”
>* @import可以省略.sass或.scss文件后缀，在SASS中允许@import命令写在css规则内
>* 局部文件，文件名以下划线开头；sass不会在编译时单独编译这个文件输出css。
>* @import局部文件时，可以不写文件的全名，即省略文件名开头的下划线。
>* !default 设置默认变量值，含义是：如果这个变量被声明赋值了，那就用它声明的值，否则就用这个默认值。
>* 在sass文件中导入css文件如@import 'reset.css'，那效果跟普通CSS导入样式文件一样，导入的css文件不会合并到编译后的文件中，而是以@import方式存在。另外sass的语法完全兼容css，可以把原始的css文件改名为.scss后缀，即可直接导入了

``` scss
//导入文件colors.scss
@import "colors";
//@import命令写在css规则内 _blue-theme.scss
.blue-theme{
    @import "blue-theme"
}
//导入局部文件themes/_night-sky.scss
@import "themes/night-sky";
//!default 设置默认变量值
$fancybox-width: 400px !default;
```

### 4.高级用法
>* 条件判断：@if、@else。
>* 循环：@for、@while、@each。
>* 自定义函数：@function。

``` scss
//@if
p {
    @if 1 + 1 == 2 { border: 1px solid; }
    @if 5 < 3 { border: 2px dotted; }
}
//@if-@else
@if lightness($color) > 30% {
    background-color: #000;
} @else {
    background-color: #fff;
}

//@for
@for $i from 1 to 10 {
    .border-#{$i} {
        border: #{$i}px solid blue;
    }
}
//@while
$i: 6;
@while $i > 0 {
    .item-#{$i} { width: 2em * $i; }
    $i: $i - 2;
}
//@each
@each $member in a, b, c, d {
    .#{$member} {
        background-image: url("/image/#{$member}.jpg");
    }
}　
　
//自定义函数
@function double($n) {
    @return $n * 2;
}　　
``` 

### 5.颜色函数
>* SASS提供了一些内置的颜色函数，以便生成系列颜色。

``` scss
//颜色函数
$color1:lighten(#cc3, 10%) // #d6d65c
$color2:darken(#cc3, 10%) // #a3a329
$color3:grayscale(#cc3) // #808080
$color4:complement(#cc3) // #33c
```

### 6.混合器及继承
>* 使用__@mixin__命令，定义一个代码块，混合器中不仅可以包含属性，也可以包含css规则，包含选择器和选择器中的属性。
>* 使用__@include__命令，调用这个mixin，在混合器中的规则最终会生成父规则中的嵌套规则。
>* mixin的强大之处，在于可以指定参数和缺省值。
>* 使用__@extend__使一个选择器，继承另一个选择器。

``` scss
//混合器@mixin
@mixin no-bullets {
    list-style: none;
    li {
        margin-left: 0px;
    }
}
ul.plain {
    color: #444;
    @include no-bullets;
}
/*编译后*/
ul.plain {
    color: #444;
    list-style: none;
}
ul.plain li {
    list-style: none;
    margin-left: 0px;
}
//指定参数和缺省值
@mixin left($value: 10px) {
    float: left;
    margin-right: $value;
}
div {
    @include left(20px);
}
//继承@extend
.class1 {
    border: 1px solid #ddd;
}
//class2继承class1
.class2 {
    @extend .class1;
    font-size:120%;
}
```