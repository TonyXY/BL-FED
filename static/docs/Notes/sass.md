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



