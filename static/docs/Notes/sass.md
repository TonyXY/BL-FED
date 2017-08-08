[//]: # (2017-08-07 css)
# TOC
## Sass 学习

### 1.变量
>* 使用$符号来标识变量，在声明变量时，变量值也可以引用其他变量。
>* 变量名多个词之间可以使用中划线或下划线分隔，用中划线声明的变量可以使用下划线的方式引用，反之亦然。

``` scss
//在声明变量时，变量值也可以引用其他变量
$highlight-color: #F90;
$highlight-border: 1px solid $highlight-color;
.selected {
    //用中划线声明的变量可以使用下划线的方式引用，反之亦然
    border: $highlight_border;
}
```

### 2.嵌套css规则
>* "&" 父选择器
>* "," 群组选择器
>* ">、+、~" 子组合选择器和同层组合选择器
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

### 4.注释
>* /* ... */静默注释，其内容不会出现在生成的css文件中
>* //开头，注释内容直到行末。

``` scss
body {
  color: #333; // 这种注释内容不会出现在生成的css文件中
  padding: 0; /* 这种注释内容会出现在生成的css文件中 */
}
```

### 5.注释
>* /* ... */静默注释，其内容不会出现在生成的css文件中
>* //开头，注释内容直到行末。

``` scss
body {
  color: #333; // 这种注释内容不会出现在生成的css文件中
  padding: 0; /* 这种注释内容会出现在生成的css文件中 */
}
```