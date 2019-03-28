// Funnction的prototype原型上存放着 Function实例 的一些共有方法。
// A.Function的原型不像其他类(Array、Object...)的原型一样是个对象，Fuction的原型是一个空函数，是可以执行的，只不过返回undefined，Function.prototype();但是这并不影响它作为一个对象拥有自己的属性方法
// B.Function这个类，同时也是Function的一个实例，所以它也具备__proto__属性，这个属性指向它自己的原型


//  length
//  call bind  apply

//1.length 表示形参的个数
function fn1(a,b,c) {

}

console.log(fn1.length);

//2.call
//特点:函数执行，改变函数中this指向。
//    call执行，返回的就是调用call的函数的方法的返回值
//    执行完 this注销
//
//参数：context-this指向
//     ... 函数原本参数依次传入

function fn1(a) {
    console.log(this,a)
}
fn1(1);
fn1.call({},1)

//js实现call方法

Function.prototype.myCall = function (context) {
    context  = context || window;
    context.fn = this;
    var ary = [];
    for(let i = 1 ;i <arguments.length;i++){
        ary.push(`arguments[${i}]`)
    }
    let str  = `context.fn(${ary.toString()})`;
    let result = eval(str);
    delete context.fn;
    return result;
};


//3.apply方法
//特点:函数执行，改变函数中this指向。
//    apply执行，返回的就是调用apply的函数的方法的返回值
//    执行完 this注销
//
//参数：context-this指向
//     [ 函数原本参数用数组方式传入]


function fn1(a,b,c) {
    console.log(this,a,b,c)
}
fn1(1);
fn1.apply({},[1,2,3])

//js实现apply
Function.prototype.myApply = function(context,arr) {
    context  = context || window;
    context.fn = this;
    if(!arr){
        return  context.fn();
    }
    var ary = arr.map((item,index)=>{
        return  `arr[${index}]`
    })

    let str = `context.fn(${ary.toString()})`;
    let result = eval(str);
    return result;


}
function fn1(a,b,c) {
    console.log(this,a,b,c)
}
fn1(1);
fn1.myApply({},[1,2,3]);


//3.bind
// bind方法，是改变当前调用bind方法的函数this指向，但是不会立即执行当前函数，而是返回一个新的函数。
// 并且支持给新的函数传入参数执行，从而出发之前调用bind方法的函数执行，并且参数透传进去。bind方法是高阶函数的一种。

//js实现bind

Function.prototype.bind= function (context) {
    context = context || window;
    let self = this;
    return function () {
        return self.apply(context,arguments)
    }
}

// 实现原生 call、apply、bind方法的重点:
// 1.改变this指向:函数执行，点.前面是谁，this就是谁的原理改变this指向
// 2.参数透传:通过eval将字符串转变成js语法 去执行。
// 3.bind方法返回一个函数，返回的函数执行，会进行作用域查找context对象；并且通过原型链查找调用apply方法
//
// call、apply、bind相同和区别
// 相同：都能改变函数执行的this指向
// 不同:callapply 是立即执行 bind是不执行
//
// call传参是一个一个传入，apply是数组形式传入


