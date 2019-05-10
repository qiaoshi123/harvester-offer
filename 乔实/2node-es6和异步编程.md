###es6

var let const区别？
```$javascript
1.变量提升；es6 暂时性死区
2.作用域
3.var 声明的全局会赋予给window属性
4.const 常量，不能重新赋值
```

继承?
```$javascript

组合继承
Parent.call(this) + Child.prototype = new Parent();
缺点：会在子类原型上创建没必要的属性，浪费内存

寄生组合继承
Parent.call(this) + Object.create(Parent.prototype,{constructor:{value:child,enumerable:false,configrable:true,writrable:true})


calss 继承

extends + super(param);
super= >Parent.call(this,param)
extends=>
1. Object.create(Parent.prototype,{constructor:{value:child,enumerable:false,configrable:true,writrable:true})
2. Object.setPrototypeOf(Child,Parent)


```

##模块化 

```$javascript
好处：
避免命名冲突
代码复用
可维护性


闭包 (function(){

        return {

        }
     })()

amd require.js 加载前置
define(['a.js'],function(a){
    

})

cmd sea.js,特点：同步导入，加载后置
define('b',function(require,exports,module){
    require('a.js')

})


common.js  
原理：闭包

module.exports = {}
exports.xxx= {}

let a = require('a.js')

node里commonjs
(function(module,exports,require,__filename,__dirname){
   exports = module.exports = {};

    return module.exports;

})(module,module.exports,require,__filename,__dirname)


ES6 Module

export const a = {};
export const b = {};
import {a,b} from 'a.js'
import * as util from 'a.js'


export default {
    a,b
}
import util from 'a/js'



export defauld function(){

   
}
import fn from 'fn.js'



ES module 与common.js 比较

1.common.js 支持动态导入
 let path = 'a.js'
 require(`./${path}`)

 es module 不支持
 
2.common导入是值拷贝，导出值变化了，导入值不会发生改变；除非重新导入；
 es module导入导出的都是内存地址，导出值导入互相影响
 
3.common是同步导入；
  es module是异步导入；因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响
  



proxy 数据代理，可以实现什么功能？

proxy可以将原始对象包装一层，可以劫持到数据的变化，代理一些操作；

proxy与defineproperty不同？
1.可以监听到数组的变化。
2.是针对对象的，不用去遍历对象每个属性
3.嵌套对象不要深度遍历对象,需要在get方法中在返回一个代理对象
4.Reflect 表示原始对象；

实现数据响应


function observe(obj,setler,getler){
let handler = {
    get(target,property){
        setler(target,property)
        //深度监听
        if(typeof target[property] =='object'){
            new Proxy(target[peoperty],handler)
        }
        return  Reflect.get(target,property)
    },
    set(target,property,newVal){
       
        getler(target,newVal)
        Reflect.set(target,property,newVal)
    }

}
 return new Proxy(obj, handler)
}


let a = {name:1}
let p = observer(a,function(t,v){

    console.log('我在设置属性值')
},function(t,v){
    console.log('我在获取属性')
})



```


## js 异步编程

并发和并行?
```$javascript
并发：通过任务切换完成任务。
我分别有任务 A 和任务 B，在一段时间内通过任务间的切换完成了这两个任务，这种情况就可以称之为并发。

并行：
假设 CPU 中存在两个核心，那么我就可以同时完成任务 A、B。同时完成多个任务的情况就可以称之为并行。

```

回调函数缺点？如何解决？
```$javascript




1.回调地狱
2.不能return 
3.不能try catch


promise generator async和await，
参考地址：


promise特点：

三种状态pending resolve reject
状态一经改变，不可在变；
可解决回调地狱
异步转同步
缺点：无法取消promise；错误需要catch捕获

generator 
* yiled ，next方法 
特点：可以控制函数的执行，需要配合co库调用；

async和await
优点：取消then调用链，清晰；可解决回调地狱；
缺点：多个毫无关系的异步请求，都用了await应用不当，导致性能降低；

await 内部实现了 generator，其实 await 就是 generator 加上 Promise 的语法糖，
且内部实现了自动执行 generator。如果你熟悉 co 的话，其实自己就可以实现这样的语法糖。

```

## setTimeout setInterval requestAnimationFrame 
```$javascript
setTimeout 时间可能不准；会被主线程执行时间延误。

setTimeout(function(){
    console.log('a')
},1000);
sleep(2000)//主线程延误2秒


setInterVal 时间可能不准；会被主线程延误；（eventloop有关）


setTimeout(function(){
    console.log('a')
},1000);
sleep(4000)//主线程延误4秒，接下来定时器回调会一下子执行4次，会影响性能；（eventloop有关）



requestAnimateFrame(callback)
 自带函数节流功能，基本可以保证在 16.6 毫秒内只执行一次（不掉帧的情况下），并且该函数的延时效果是精确的；
 
 
 requestAnimationFrame 实现setInterval效果
 function setInterval(cb,interval){
    let s = Date.now();
    let timer;
    let loop  = ()=>{
        timer = requestAnimationFrame(loop)
        let c =  Date.now();
        if(c-s >=interval){
            s = c = Date.now();
            cb(timer);
        }   
    
    }
    timer = requestAnimationFrame(loop);
    return timer
 }
 
 


```





