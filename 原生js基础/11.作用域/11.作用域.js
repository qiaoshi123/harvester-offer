// 作用域
//作用域是在函数声明就确定了上级作用域是什么。
function setFn(num) {
    return function fn(){
        num++;//num 为定义去上级作用域查找。
        return num;
    }
}
let fn = setFn(1);
console.log(fn());//2
console.log(fn());//3

//作用域查找
//现在当前自己的作用域查找变量，找不到的话，去上级作用域查找，找不到继续一级一级向上查找，
//找到window全局作用域，如果还不存在，则会在window上声明一个全局的变量。

function fn2() {
    sex = 1;
    return sex;
}
console.log(fn2());
console.log(window.sex);