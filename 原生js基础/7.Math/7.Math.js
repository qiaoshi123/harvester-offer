//Math内置全局对象
/**
 * 1.向上取整
 * 不影响原数据，返回新数据
 */
console.log(Math.ceil(1.01));
//js 实现
const ceil = function (num) {
    if(isNaN(num)){
        return NaN;
    }
    if(num%1 == 0 ){
        return parseInt(num);
    }else{
        return parseInt(num)+1;
    }
};

/**
 * 2.向下取整
 * 不影响原数据，返回新数据
 */
console.log(Math.floor(1.11));
//js实现
const floor = (num)=>{
    if(isNaN(num)){
        return NaN;
    }
    return parseInt(num);
}
console.log(floor(1.1112));


/**
 * 3.取最大值
 * 参数：要比较的数字，依次传入
 */
console.log(Math.max(1, 2, 3, 3, 18));
console.log(Math.max.apply(null, [1, 2, 31]));
console.log(Math.max(...[1, 2, 31]));
//js实现
const Max = function () {
    arguments = [].slice.call(arguments);
    let max= arguments[0];
    for(let i = 1 ; i<arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i]
        }
    }
    return max;
};
/**
 * 4.取最小值
 * 参数：要比较的数字，依次传入
 */

console.log(Math.min(1, 2, 3, 3, 18));
console.log(Math.min.apply(null, [1, 2, 31]));
console.log(Math.min(...[1, 2, 31]));

//js实现
function min() {
    arguments = [].slice.call(arguments);
    let min= arguments[0];
    for(let i = 1 ; i<arguments.length;i++){
        if(arguments[i]<min){
            min = arguments[i]
        }
    }
    return min;
};

/*
*5.求方
* 2次方 3次方...
*/
console.log(Math.pow(3, 2));//3的2次方
console.log(Math.pow(3,3)); //3的3次方

//js实现
const pow = function (num,degree) {
    let result = 1;
    for(let i=0;i<degree;i++){
        result = result *num;
    }
    return result;
};
console.log(pow(3, 2));//3的2次方
console.log(pow(3,3)); //3的3次方

/**
 * 6.开平方
 */
console.log(Math.sqrt(9));

//网上找的js实现，没看懂，闲的蛋疼
var diff=0.00000000001; //精度
var GetSqrt= function(n){
    var s = n / 2; //假设的平方根初值
    while (NotFit(s,n)) {
        s = ((n / s) + s) / 2;
    }
    return s;
},NotFit=function( num, n){
    var r= num*num;
    var d = Abs(n - Abs(r));
    console.log(`num:${num},n:${n},r:${r},d:${d}`)
    if(d>diff){
        return true;
    }
    return false;
},Abs=function(a){
    if(a>=0 )return a;
    else return -a;
};
console.log(GetSqrt(9));


/*
 *7.绝对值
 */
console.log(Math.abs(1));
console.log(Math.abs(-1));
console.log(Math.abs(-1.1));
var abs = function(a){
    if(a>=0 )return a;
    else return -a;
};

/*
 * 8.四舍五入
 *
 */
console.log(Math.round(0.4));
console.log(Math.round(1.5));
//js实现
const round = function (num) {
    if(num % 1>=0.5){
        return parseInt(num)+1
    }else{
        return parseInt(num)
    }
}
console.log(round(0.41));
console.log(round(1.5));

/*
 *随机数,0.0-1.0之间随机数
 */
console.log(Math.random());//0.0**-0.9**
console.log(Math.random()*10)//0.**-9.**
console.log(Math.random()*10+1)//1.**-10.**
Math.floor(Math.random()*10+1)//1-10


Math.ceil(Math.random()*10)//1-10
Math.round(Math.random()*10)//0-10

Math.ceil(Math.random()*13)//1-13
Math.round(Math.random()*13)//0-13


