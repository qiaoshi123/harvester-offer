var a = [];
// 1.push
//向数组末尾添加
//改变原数组
//返回值：添加后数组长度
console.log(a.push(11));
console.log(a)
//2.unshift
//向数组开头添加
//改变原数组
//返回值：数组最新长度
console.log(a.unshift(22));
console.log(a)
//3.pop
//删除数组末尾
//改变原数组
//返回值:删除项
console.log(a.pop());
console.log(a)

//4.shift
//删除数组开头
//改变愿数组
//返回值：删除项
console.log(a.shift());
console.log(a);

//5.concat
//数组拼接
//不改变原数组
//返回值：新数组
console.log(a.concat([1, 2, 3]));
console.log(a);

//7.indexOf
//数组中查找指定项首次起始索引
//返回：索引 || -1
var a = [1,2,3,4]
console.log(a.indexOf(1));

//9.lastIndexOf
//数组中查找指定项最后一次索引
//返回：索引 || -1
var a = [1,2,3,4,1]
console.log(a.lastIndexOf(1));


//8.slice(startIndex,endIndex)
//数组截取,开始索引，结束索引，包前不包后
//不改变原数组
//返回值：将截取的定义为新的数组返回
console.log(a.slice(1, 3));
console.log(a)

//9.splice(startIndex,num，replace)
//数组截取、删除、替换，开始索引，截取几个，将谁插入
//改变原数组
//返回值：返回截取的数据，数组形式返回
console.log(a.splice(0, 2));
console.log(a);
console.log(a.splice(0, 1, 20));
console.log(a);
// 删除数组末尾
a.splice(a.length - 1, 1);


//10.toString
//数组转成字符串，用","分割
//返回值：新的字符串
var a = [1,2,3,4,5]
console.log(a.toString());
var a = [];
console.log(a.toString()); //""

// 11.join
// 数组转字符串,默认用","分割； 支持传入分割符
//返回值：新的字符串
var a = [1,2,3,4,5]
console.log(a.join());//1,2,3,4,5 等价于 toString
console.log(a.join("")) //12345


//12reverse
//颠倒顺序
//改变原数组
//返回值：颠倒后的原数组
var a = [1,2,3,4]
let b = a.reverse();
console.log(b)
b.push(5)
console.log(a);

//13.sort
//排序
//改变原数组
//返回排序后的原数组
var a = [89,13,45,77,4];
console.log(a.sort((a, b) => a - b));
console.log(a)
console.log(a.sort((a, b) => b - a));
console.log(a)



//14.数组内置生成器与迭代器，（与generator很像）
//返回值：迭代器
//使用方法
let ite = a.entries();
function co(ite){
   function run(result) {
       console.log(result)
       if(result.done){
           return result.value;
       }
       run(ite.next(result.value))
   }
   run(ite.next())
}
co(ite);

//15.forEach遍历
//遍历数组
//callback(value,index,origin) 每一项，索引，原数组
//context 上下文，指定callback中的this，不指定的话 ，this是window
var arr  = [1,2,3,4,5,6,7];
arr.forEach(function(item,index,origin){
    console.log(item,index,origin,this);
},{});

// 手写js模拟forEach方法
Array.prototype.forEach_my = function (callback,context) {
    for(let i = 0 ; i <this.length;i++){
        context ? callback.apply(context,[this[i],i,this]) : callback(this[i],i,this)
    }
};

//16.map遍历
//遍历数组，有返回值，返回值是一个全新的数组
//callback每次执行的返回值，会添加到一个新数组中。最后由map返回
//context 决定callback中的this指向

var arr  = [1,2,3,4,5,6,7];
var newArr = arr.map(function(item,index,origin){
    console.log(item,index,origin,this);
    return item*10
},{});
console.log(newArr);
//手写js模拟map方法
Array.prototype.map_my = function (callback,context) {
    let arr = [];
    for(let i = 0 ; i < this.length;i++){
       let item =  context ? callback.apply(context,[this[i],i,this]):callback(this[i],i,this);
       arr.push(item)
    }
    return arr;
}


// 17.filter
// 遍历过滤，有返回值，返回值是一个新数组.不改变原数组
// callback 如果返回true ，则当前这一项会保留,并且添加到新数组。返回false，则会过滤掉
// context 上下文
var arr = [1,2,3,4,5,6,7,8,9,10];
var newArr = arr.filter(function (item,index,origin) {
    console.log(item,index,origin,this);
    return item % 2 ==0;
},{});
console.log(newArr,arr);

//手写js模拟filter方法
Array.prototype.filter_map = function (callback,context) {
    let arr = [];
    for(let i = 0 ; i < this.length;i++){
        let f = context ? callback.apply(context,[this[i],i,this]):callback(this[i],i,this);
        f ? arr.push(this[i]) : "";
    }
    return arr ;
}


// 18.every
// 遍历数组中每一项，查看是否每一项都满足条件.返回布尔值
// callback 每遍历一边，执行一遍返回值都是true时，则都满足条件，every返回true.有一次遍历不满足条件，则every返回false
// context 上下文
var arr = [1,2,3,4,5,6,7,8,9]
var f = arr.every(function (item,index,origin) {
    console.log(item,index,origin,this);
    return item <10
},{});
console.log(f);

//手写js 模拟every方法
Array.prototype.every_my = function (callback,context) {
    for(let i = 0 ; i <this.length;i++){
        let f = context ? callback.apply(context,[this[i],i,this]) : callback(this[i],i,this)
        if(!f){
            return false;
        }
    }
    return true;
};

//19.some 方法
//遍历数组中的每一项，查看是否至少一个满足条件，返回布尔值
//只要有一个满足条件则返回true，一个都没返回false
//callback 对每一项进行条件判断，只要又一个满足条件。则直接影响到some的返回值
//context 上下文
var arr = [1,2,3,4,5,6];
var f = arr.some(function (item,index,origin) {
    console.log(item,index,origin,this)
    return item>5
},{})
console.log(f)

//手写js模拟some方法

Array.prototype.some_my = function (callback, context) {
  for(let i =0;i<this.length;i++){
        let f = context? callback.apply(context,[this[i],i,this]) : callback(this[i],i,this)
        if(f){
            return true;
        }
  }
  return false;
};
//20.find
//找到第一个满足条件的那一项，返回。如果找不到则返回undefined
//callback 对每一项进行条件判断，如果满足条件，则遍历中止 直接返回。
//context 上下文
var arr = [1,2,3,4,5,6];
var item = arr.find(function (item,index,origin) {
    console.log(item,index,origin,this)
    return item >5;
},{});
console.log(item)

//手写js模拟find方法
Array.prototype.find_my = function (cb,context) {
    for(let i = 0 ; i< this.length;i++){
        let f = context ? cb.apply(context,[this[i],i,this]) : cb(this[i],i,this);
        if(f){
            return this[i]
        }
    }

    return undefined;
}

//21.findIndex
//找到第一个满足条件的那一项，返回他的索引。如果找不到则返回-1
//callback 对每一项进行条件判断，如果满足条件，则遍历中止 直接返回索引。
//context 上下文

var arr = [1,2,3,4,5,6];
var index = arr.findIndex(function (item,index,origin) {
    console.log(item,index,origin,this)
    return item >5;
},{});
console.log(index)

//手写js 模拟findIndex

Array.prototype.findIndex_my = function (cb,context) {
    for(let i = 0 ; i< this.length;i++){
        let f = context ? cb.apply(context,[this[i],i,this]) : cb(this[i],i,this);
        if(f){
            return i;
        }
    }
    return -1;
}

//22.reduce
//遍历数组，上一个callback执行结果是下次callback的参数/
//返回值：累计执行后的结果；可用于计算数组元素相加后的总和:

//callback(init,next,nextIndex,origin)
//init 初始值,不传默认初始值是数组第一项
console.log('==========')
var arr = [1,2,3,4,5];
var total = arr.reduce(function (prev,next,idx,origin) {
    console.log(prev,next,idx,origin);
    return prev+next
},0);
console.log(total)
var total = arr.reduce(function (prev,next,idx,origin) {
    console.log(prev,next,idx,origin);
    return prev+next
});
console.log(total)


//手写js 模拟reduce方法
Array.prototype.reduce_my = function (cb,init) {

    let i =  typeof init == 'undefined' ? 1 : 0;
    init = typeof init == 'undefined' ? this[0] :init;

    for( let j = i;j<this.length;j++){
        init = cb(init,this[j],j,this)
    }
    return init;
}

//23.校验是不是一个数组
console.log(Array.isArray([]));

//24.声明数组；类数组转数组；去重
let ary = Array.from({
    length: 5
});
console.log(ary);

console.log(Array.from({0: 1, 1: 2, 2: 3,length:3}));

console.log(Array.from(new Set([1, 1, 1, 3, 3, 3, 6, 6, 6])));


//25.数组填充
//返回原数组
ary.fill(1);
console.log(ary);













