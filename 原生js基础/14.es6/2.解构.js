//解构
//解构意思就是分解一个对象的结构,可以用一种类似数组的方式定义N个变量，可以将一个数组中的值按照规则赋值过去。
//解构的时候，等号两边结构类似；左边对象右边对象；左边数组右边也是数组；右边还必须是一个真实的值
var arr = [1,2,3]
// var a = arr[0]
// var b = arr[1]
// var c = arr[2]
var [a,b,c] = arr;
console.log(a,b,c);

var user  = {a:1,b:2,c:3}
var {a,b,c} = user;
console.log(a,b,c);

//嵌套赋值`
var arr = [{name:'zfpx',age:9},[1,2],3]
var [{name,age},[a,b],c] = arr;
console.log(name,age,a,b,c,)
var [obj,arr2,c] = arr;
console.log(obj,arr2,c)


var obj1 = {name:'zfpx',age:9}
var {name,age} = obj1;
console.log(name,age)
var {name:myname,age:myage = 3} = obj1

console.log(myname,myage)

//默认赋值；如果能取出来值就用取出来的值，如果取不出来就用默认值；
var obj = {name:'zfpx'};
var {name,age} = obj;
console.log(age)//undefined
var {name,age = 8} = obj;
console.log(age)//8

//省略赋值
var arr = [1,2,3]
var [,,j] = arr;
console.log(j)



//结构对象
var ary = [1,,3]//ary[1] = undefined
var [a = "a", b = "b", c =new Error('C必须指定')] = ary;
console.log(a, b, c);

function ajax (options) {
    var method = options.method || "get";
    var data = options.data || {};
    //.....
}
function ajax ({method = "get", data}) {
    console.log(arguments);
}
ajax({
    method: "post",
    data: {"name": "zfpx"}
});