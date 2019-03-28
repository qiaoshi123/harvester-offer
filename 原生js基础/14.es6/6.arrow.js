//箭头函数
//1.声明函数的更简单的方法
//


var sum  = function (a,b) {
  return a+b;
};
var sum = (a,b)=>a+b;

console.log(sum(1, 2));

//如果有且只有一个参数，可以省略小括号；
//如果只有返回值，没有函数题代码，则可以省略{}
var double = num=>num*2
console.log(double(2));


//this问题
let obj = {
    name:'zfpx',
    getName(){
        console.log(this.name)
    }
}
obj.getName()


let obj2 = {
    name:'zfpx',
    getName(){
        //this=>obj
        setTimeout(function () {
            console.log(this.name)//this=>window,   undefined
        },1000)
    }
}
obj2.getName()



let obj3 = {
    name:'zfpx',
    getName(){
        //this=>obj
        setTimeout( ()=> {
            //箭头函数没有this,他会使用上级作用域的的this
            console.log(this.name)//this=>obj,  zfpx
        },1000)
    }
}
obj3.getName()


// this=>window
let obj4 = {
    name:'zfpx',
    getName:()=>{
        console.log(this.name,11111) //this =>window,    undefined
    }
}
obj4.getName()

//箭头函数的this是定死的，在定义时就定死了，不管在哪里调，不管谁去调，this都是定义时的外层作用域的this
var obj5 = {
    name:'zfpx',
    getName:()=>{
        console.log(this.name) //this =>window,    undefined
    }
}
var obj6 = {};
obj6.getName = obj5.getName;
obj6.getName();