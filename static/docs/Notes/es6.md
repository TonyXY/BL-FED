[//]: # (2017-07-29 js)
# TOC
## es6知识

### 1.let命令
>* 块级作用域：它所声明的变量，只在let命令所在的代码块内有效。
>* 不存在变量提升：let不像var那样存在"变量提升"(也就是变量声明提前)，所以，变量一定要在声明后使用，否则会报错。
>* 暂时性死区：只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
>* 不允许在相同作用域内，声明同一个变量。

``` javascript
//不存在变量提升 示例
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;
// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;

//暂时性死区 示例
var tmp = 123;
if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
}
```

### 2.const命令
>* 声明一个只读的常量，一旦声明，常量的值就不能改变: const声明的常量必须马上赋值，如果只声明不赋值，就会报错。
>* 块级作用域：它所声明的变量，只在const命令所在的代码块内有效。
>* 不允许在相同作用域内，声明同一个变量。

``` javascript
//const值就不能改变 示例
const aa = "11";
console.log(aa);  //11
aa = "22";//Uncaught TypeError: Assignment to constant variable
```

### 3.箭头函数"=>"
>* 与一般函数不同，函数体内的this对象，指向的是绑定定义时所在的对象，而不是使用时所有的对象。即 共享父作用域的关键字this。
>* 支持两种写法：表达式和函数体。
>* 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
>* 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
>* 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

``` javascript
//共享父作用域的关键字this 示例
var obj = {
    name:'aa'，
    courses: ["react"，"nodejs"]，
    getMessage:function(){
        this.courses.forEach((item)=>{
            console.log(this.name + ' teach us '+item);
        })
    }
};
obj.getMessage();

//表达式形式 示例
//1.无参数
var fn1 = () =>'无参数输入';
//2.传递一个参数
var fn = p =>p;
//3.传递多个参数
var fn2 = (a，b) => a+b;

//函数体形式 示例
var fn4 = (a，b) =>{
    var m = a+2;
    //显示return
    return m*2;
};
console.log(fn4(1，2));  //6
```

### 3.class
>* ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。
>* constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
>* 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。
>* 类不存在变量提升。
>* 通过关键字 extends 来继承一个类，并且，可以通过 super 关键字来引用父类。
>* 通过static关键字定义静态方法，静态方法一般用来提供一些工具方法。
>* 以通过 get 和 set 关键字来定义 getters 和 setters
>* ES6并没有提供对私有属性的语法支持，但是我们可以通过闭包来实现私有属性。

``` javascript
//定义类 示例
class People {
    constructor(name) { //构造函数
        this.name = name;
    }
    get name() {
        return this._name.toUpperCase();
    }
    set name(name) {
        this._name = name;
    }
    sayName() {
        console.log(this.name);
    }
    static formatName(name) {
        return name[0].toUpperCase() + name.substr(1).toLowerCase();
    }
}
console.log(People.formatName("xiao"));//调用静态方法 输出Xiao
let a = new People('xiao');
console.log(a.name);//XIAO
console.log(a._name);//xiao
a.sayName();//XIAO

//extends继承 示例 
class Student extends People {
    constructor(name, grade) { //构造函数
        super(name);//调用父类构造函数
        this.grade = grade;
    }
    sayGrade() {
        console.log(this.grade);
    }
}
let b = new Student('xiao',1);
b.sayName();//XIAO
b.sayGrade();//1
```

### 4.数组"Array"
>* ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。
>* Array.from方法用于将两类对象转为真正的数组，类似数组的对象（array-like object）和可遍历（iterable）的对象。
>* Array.of方法用于将一组值，转换为数组。
>* 数组实例的find()和findIndex()，用于找出第一个符合条件的数组成员和成员的位置。
>* 数组实例的fill()，使用给定值，填充一个数组。
>* 数组实例的entries()，keys()和values()，用于遍历数组。
>* 数组实例的includes()，用于判断某个数组是否包含给定的值。
>* 数组实例的 copyWithin()，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。

``` javascript
//Array.from 将两类对象转为真正的数组
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
Array.from('hello');// ['h', 'e', 'l', 'l', 'o']

//Array.of方法用于将一组值，转换为数组。
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]

//find返回第一个符合条件的数组成员
[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10
//findIndex返回第一个符合条件的数组成员的位置
[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2

//fill使用给定值，填充一个数组
['a', 'b', 'c'].fill(7);// [7, 7, 7]
//fill方法可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
['a', 'b', 'c'].fill(7, 1, 2);// ['a', 7, 'c']

//entries()，keys()和values()，用于遍历数组
for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}

//includes()，用于判断某个数组是否包含给定的值。
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, NaN].includes(NaN); // true
//该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true

//copyWithin()，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员）
//Array.prototype.copyWithin(target, start = 0, end = this.length)
//target（必需）：从该位置开始替换数据。
//start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
//end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
[1, 2, 3, 4, 5].copyWithin(0, 3, 4);// 将3号位复制到0号位
// [4, 2, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, -2, -1);// -2相当于3号位，-1相当于4号位
// [4, 2, 3, 4, 5]
```

### 5.export和import
>* export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。
>* export default为模块指定默认输出，一个模块只能有一个默认输出。
>* import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块对外接口的名称相同。
>* import命令具有提升效果，会提升到整个模块的头部，首先执行。
>* 重复的import语句，只会执行一次。
>* import(specifier)，动态加载函数，specifier指定所要加载的模块的位置。import命令能够接受什么参数，import()函数就能接受什么参数，两者区别主要是后者为动态加载。
>* import()函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用。它是运行时执行，也就是说，什么时候运行到这一句，也会加载指定的模块。
>* import()函数与所加载的模块没有静态连接关系，这点也是与import语句不相同。
>* import()类似于 Node 的require方法，区别主要是前者是异步加载，后者是同步加载。

``` javascript
//export 示例
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export {firstName, lastName, year};

//import 示例
// main.js
//逐一加载
import {firstName, lastName, year} from './profile';
function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}
//整体加载
import * as profile from './profile';

//import() 示例
//可以在需要的时候，再加载某个模块。
button.addEventListener('click', event => {
	import('./dialogBox.js')
		.then(dialogBox => {
			dialogBox.open();
		})
		.catch(error => {
			/* Error handling */
		})
});
//如果想同时加载多个模块，可以采用下面的写法
Promise.all([
  import('./module1.js'),
  import('./module2.js'),
  import('./module3.js'),
])
.then(([module1, module2, module3]) => {
   ···
});
```