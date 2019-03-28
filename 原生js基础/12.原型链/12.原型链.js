// 函数的三种角色
//1。普通函数
//2。类
//3。对象

// 1.一个实例的__proto__属性指向它所属类的protoType原型，而protoType是个对象，它的__proto_属性指向Object类的protoType。
var arr = [];
console.log(arr.__proto__ == Array.prototype);
console.log(Array.prototype.__proto__ == Object.prototype);


//2.Object.protoType.__proto__ == null ；
// Object是所有类的基类；



// 3.Array由于是个函数，所以是Function的实例。
// 所以Array.__proto__ 指向的是 Function的protoType;


// 4.Function.protoType比较特殊，它是一个空函数，但是它的__proto__ 也指向Object.protoType；
//Function同时也是一个实例，他的__proto__ 指向他自己的protoType；




//基于原型链查找，实现继承

function Child() {
    this.name = '子';
}

function Parent() {
    this.name = '父';

}
Parent.prototype.say = function () {
    console.log('my name is '+ this.name)
};

//继承共有属性
// Child.prototype = Parent.prototype;
// Child.prototype = Object.create(Parent.prototype);
// Object.setPrototypeOf(Child.prototype,Parent.prototype)
// Child.prototype.__proto__ = Parent.prototype;

//继承私有
let child = new Child();
Parent.call(child);


//私有+公有
Child.prototype = new parent();





