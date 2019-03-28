var   a= {};

//1.验证一个对象是否存在指定可枚举属性,
//返回布尔
console.log(a.hasOwnProperty('name'));

//2.验证一个对象是否是另外一个对象的原型
var b = {};
a.__proto__ = b;
console.log(b.isPrototypeOf(a));


//3.验证指定属性是否该对象的可枚举属性
var a = {name:123}
a.propertyIsEnumerable('name');//true
a.propertyIsEnumerable('toString');//false

//4.toString
// 空数组转字符串 是空数组
//可用于判断数据类型

var a = {};
console.log(a.toString()); //[object Object]

var c = [];
console.log(c.toString(),1); //""

console.log(Object.prototype.toString.call(b));//[object RegExp]
console.log(Object.prototype.toString.call(c));//[object Array]



//defineProperty 定义属性。
//valye 和writable存在 则不能使用set 和get拦截器。
var o = {};
var o2 = {name:12}
var sex;
Object.defineProperty(o,'sex',{
    enumerable:true,
    configurable:true,
    get : function(){
        return sex;
    },
    set : function(newValue){
        sex = newValue;
    },
})
Object.defineProperty(o,'sex2',{
    enumerable:true,
    writable:true,
    configurable:true,
    value:1,
})


console.log(o)


//设置原型。设置指定对象的__proto__指向
Object.setPrototypeOf(o,o2)
console.log(o.name);

//获取原型,获取对象的__proto__
console.log(Object.getPrototypeOf(o));

//验证b是不是a的原型
var b = {};
a.__proto__ = b;
console.log(b.isPrototypeOf(a));


//对象合并
//params： 目标对象，被合并的对象....
//返回值：目标对象
var m = {};
var n = Object.assign(m,{q:'123'},{c:'123'})
console.log(m == n);


//以谁为原型创建一个对象。
var p = {name:'qiaoshi'}

console.log(Object.create(p));
console.log(Object.create(p).__proto__);

//js实现create
function create(proto) {
    function Fn() {

    }
    Fn.prototype = proto;
    return new Fn();
}

//new 的过程

// var obj = {};
// Object.setPrototypeOf(obj,Fn.prototype);
// Fn.call(obj);
// return obj;



