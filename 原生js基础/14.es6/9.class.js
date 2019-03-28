//类，只能通过new调用，不能通过函数调用；

//定义一个类
class Parent {
    //定义构造函数；当new的时候就会调用构造函数
    constructor(name){
        //实例的私有属性
        this.name = name
    }
    //公有方法->原型上的
    getName(){
        console.log(this.name)
    }
    //静态方法 ，类调用
    static say(){
        console.log('我是人类')
    }
}
let p = new Parent('小明')
p.getName()
// Parent() 类的构造器必须通过new调用；Class constructor Parent cannot be invoked without 'new'


class Child extends Parent{
    constructor(name,age){
        //super指的是父类的构造函数
        super(name);
        this.age = age;
    }
    getAge(){
        console.log(this.age)
    }

}

/**

Object.create = function (protoType) {
    function Fn() {

    }
    Fn.prototype = protoType
    return new Fn();//__protp__ =>protoType

}
 **/

// .__proto__  setProtoType 和 .protoType 区别
//原型链查找是通过__proto__实现，继承是通过修改__proto__改变对象的指向的原型
//setProtoType 是修改一个对象的__proto__指向谁
//.protoType 是类的原型对象。

