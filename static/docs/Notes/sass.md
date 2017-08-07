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
```



