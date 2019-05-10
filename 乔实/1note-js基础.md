##数据类型
```$javascript
1.
基本类型（原始类型）:null undefined number string boolean symbol
引用数据类型：Object Array Function ...

原始数据类型存储的是值，是没有函数可以调用的；
undefined.toString() 报错
 1.toString() //报错
'1'.toString() 是可以使用的，因为隐式的转为了 String类型；


typeof null == 'object',为什么？
 JS 的最初版本中使用的是 32 位系统,000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 

2.判断

typeof 对于原始类型来说，除了 null 都可以显示正确的类型；
对于对象来说，除了函数都会显示object；
typeof [] == 'object'
type fn =='function'

instanceof,通过原型链来判断的。
但是对于 原始数据类型 直接通过instanceof 判断是不行的；
var a = 123
a instanceof Number  //false;
Number.prototype.isPrototypeOf(a) //false
```

## 类型转换

```$javascript 

1.转换
转布尔：null undefined "" 0 -0 NaN false,表示false；其他都是true

转字符串:
   1 =>"1"
   true => "true"
   {}=>"[object Object]"
   []=>"";
   [1,2,3]=>"1,2,3"
   
转数字：
   "1" =>1
   "a" =>NaN
   true = > 1
   false = >0
   null =>0
   []=>0
   [1] =>1
   [1,2,3]=>NaN
   ["a"] = >NaN
   
   除了数组特殊外，其他引用类型 转数字都是 NaN;
   
   
引用类型转原始类型
   先调用valueOf,如果拿到原始类型，返回；
   在调用toString,如果拿到原始类型，返回；
   如果拿不到，报错；
   
   let a = {
     valueOf() {
       return 0
     },
     toString() {
       return '1'
     }
   }
   1 + a // => 1
   
   let a = {
       toString() {
         return '1'
       }
   }
   1 + a // => "11"
   
   let a = {
      
   }
   1 + a // => "1[object Object]"
   
2.比较
    "5" >0  //=> 5>0;
    "a" == 0; //NaN ==0 
    [] == ![];// [] == false  =>[]==0 => 0==0; 
    [] == false;// [] == 0;
    ![] == false; // false == false
    !!"hello" //true
    'hello' == true ;// 'hello' == 1;  NaN == 1
    
    比较时,判断流程：
    1.比较类型是否相等，相同的话就是比大小了
    
    类型不相同的话，那么就会进行类型转换:
    1.null 和 undefined，是的话就会返回 true
    
    2.字符串和数字比较，转成数字进行比较；
    
    3.遇到布尔就将布尔转成数字，然后在把运算符另一边转成数字；
    
    4.其中一方是否为 object 且另一方为 string、number,先将object转换成原始类型
    在进行比较
    var a = {}
    a == "[object Object]" //true
    

```
