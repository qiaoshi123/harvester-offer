/*
    var
    1.可以重复声明
    2.不能定义常量
    3.不支持块儿级作用域
 */
//变量a已经定义过了，不能重复声明；但是不同块级可以多次定义
let a = 10;
// let a =20;//

//可以定义常量
const PI = 3.14;
//试图给一个常量复制，这是错误
// PI = 3.15

//支持块儿级作用域
if(true){
    let c = 10;
}
// console.log(c); //c is not defined





//以前js只有两个作用域 一个是全局 一个是函数作用域
// ;(function() {
//
// })()
//
//
// let d = 20;
// {
//     //let 没有变量提升;
//     console.log(f) //f is not defined
//     let f = 10;
// }



for(var i = 0 ;i<3;i++){
    (function (i){setTimeout(function () {

        console.log(i)

    },1000)})(i)

}


for(let i = 0 ;i<3;i++){
    setTimeout(function () {

        console.log(i)

    },1000)

}


///
const str = '123';
// str = 123;//报错 常量不能重新赋值


const user = {name:'1231'};
user.name = 'dada';//const限制的是不能给变量重新赋值，而变量的值本身是可以改变的；



//不同的块级作用域可以多次定义;但是同一块中不可重复声明
const A = "0";
{
    const A = "A";
    console.log(A)
}
{
    const A = "B";
    console.log(A)
}
console.log(A);

    