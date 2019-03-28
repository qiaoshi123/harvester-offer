/*
* 函数
*
*
*
* */
//1.默认参数  (必填项不填报错；某些参数没有给传参的话,是undefined的话，就给默认值)
function ajax(url=new Error('url不能为空'),method='get',dataType='json') {
    console.log(url);
    console.log(method);
    console.log(dataType);
}
ajax('/user','post');
//2.剩余操作符
// function sum(prefix,a,b) {
//     return prefix+(a+b)
// }
// console.log(sum('$',1,2))
function sum(prefix,...rest) {
    // rest [1,2,3,4]
    var n = rest.reduce((prev,next)=>{
        return prev + next;
    })
    return prefix+n
}
console.log(sum('$',1,2,3,4));

let arr4 = [1,2,3,4]
//可以传一个参数，也可以传两个参数，第二个参数表示初始值;
//上一次的执行结果或称为下一次的初始值
//i 表示的next的索引
console.log(arr4.reduce((prev,next, i, origin) => {

    console.log(prev,next , i);

    return next + prev;
},3));

//平均值
console.log(arr4.reduce((prev,next, i, origin) => {
    let sum  = next + prev;
    console.log(i)
    if(i == arr4.length-1){
        return sum/arr4.length
    }else{
        return sum
    }
}));

//reduceRight 从右往左
console.log(arr4.reduceRight((prev, next, i, origin) => {
    return prev + next;
}));


//
Array.prototype.myReduce = function (cb,initVal) {
    var n ,i;
   if(typeof initVal != 'undefined'){
       n = initVal;
       i = 0;
   }else{
       i = 1;
       n = this[0]
   }
   for(var j = i;j<this.length;j++){
       n = cb(n,this[j],j,this)
   }
   return n;
};
console.log(arr4.myReduce((prev, next, i, origin) => {
    console.log(prev, next, i);
    return prev + next;
},3));


//展开运算符
var arr  = [1,2,3]
var arr2  = [4,5,6]
var arr3 = [...arr,...arr2];
console.log(arr3);


console.log(Math.max(1, 2, 3));
console.log(Math.max.apply(null, [1, 3, 4]));
console.log(Math.max(...[1, 3, 4]));




var obj = {name:'zfpx'}
var obj2 = {age:9}
Object.assign({},obj,obj2)
var obj3= {
    ...obj,
    ...obj2
}

console.log(obj3);


//浅拷贝
var obj5 = {name:'zfpx',home:{city:'北京'}}
var obj6 = Object.assign({},obj5);
var obj7 = {...obj5}
obj6.home.city = '上海';
console.log(obj5);
console.log(obj7);
//深度拷贝

// JSON.parse(JSON.stringify(obj5)),1.不能拷贝函数 2.浪费内存

function clone(origin) {
    let newObj = {};
    for(let key in origin){
        if(typeof origin[key] =='object'){
            newObj[key] = clone(origin[key])
        }else{
            newObj[key] = origin[key]
        }
    }

    return newObj

}


function clone1(origin) {
    var result;
    if(origin instanceof Array){
        result = []
        for(let i =0;i<origin.length;i++){
            result.push(clone1(origin[i]))
        }
    }else if(origin instanceof Object){
        result = {};
        for(let key in origin){
            result[key] = clone1(origin[key])
        }
    }else{
        result = origin
    }
    return result;
}



var obj8 = clone1(obj5)
obj8.home.city = '广州';
console.log(obj8)
console.log(obj5)

var ary = ['zfpx',{home:{city:'北京'}}]
var ary1 = clone(ary);
ary1[1].home.city = '还是那个嗨哦'
console.log(ary)




