//对象


//短命名，如果对象的属性名和变量名如果一样的话，可以二合一
let name ='zfpx',age=9;
let obj ={name,age}
console.log(obj);

//设置原型链指针
var obj1 = {age:1,getFood(){return '面包'}}
var obj3 = {
    getFood(){
        //通过super可以调用原型上的方法
        return '蔬菜'+super.getFood()
    }
}
Object.setPrototypeOf(obj3,obj1)//obj3.__proto__ = obj1
console.log(obj3.age);

//super
console.log(obj3.getFood());


//assign
var nameObj = {name:'zfpx'};
var ageObj = {age:8};
var obj = {};
Object.assign(obj,nameObj,ageObj);


//Object.is 验证两个变量是否相等
Object.is(NaN,NaN);//true
console.log(NaN==NaN)//false

