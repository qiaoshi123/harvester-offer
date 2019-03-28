//数组Array

var arr1 = [24,56,88,90,5];

//filter,返回true此元素保留在新数组，返回false则过滤掉
var arr2 = arr1.filter((item,index)=>{
    return item>=60
})
console.log(arr2);

Array.prototype.myFilter = function (cb) {
    let newArr = [];
    for(let i =0;i<this.length;i++){
        let flag = cb(this[i],i)
        if(flag){
            newArr.push(this[i])
        }
    }
    return newArr;
}
var arr2 = arr1.myFilter((item,index)=>{
    return item>=60
})
console.log(arr2);

//填充
var arr3 = Array(3)//[ <3 empty items> ]
console.log(arr3);
arr3.fill(1)//[ 1, 1, 1 ]
console.log(arr3);


//map reduce reduceRight filter forEach find findIndex some every


var arr4 = [1,2,3]
console.log(arr4.find((item, index) => {
    return item == 2; //找到就不往下找了，直接返回该元素。找不到返回undefined
}));

Array.prototype.myFind = function (cb) {
    for(let i =0;i<this.length;i++){
        let flag = cb(this[i],i);
        if(flag){
            return this[i]
        }
    }
    return undefined;
}
console.log(arr4.myFind((item, index) => {
    return item == 2; //找到就不往下找了，直接返回该元素。找不到返回undefined
}));


console.log(arr4.findIndex((item, index) => {
    return item == 6;////找到就不往下找了，直接返回该元素索引。找不到返回 -1
}));

Array.prototype.myFindIndex = function (cb) {
    for(let i =0;i<this.length;i++){
        let flag = cb(this[i],i)
        if(flag){
            return i
        }
    }
    return -1;
}
console.log(arr4.myFindIndex((item, index) => {
    return item == 6;////找到就不往下找了，直接返回该元素索引。找不到返回 -1
}));


//some 有一个满足条件就行，返回布尔
Array.prototype.mySome =function (cb) {
    for(let i =0;i<this.length;i++){
        let flag = cb(this[i],i)
        if(flag){
            return flag;
        }
    }
    return false;
};
console.log(arr4.some((item, index) => {
    return item > 10
}));
console.log(arr4.mySome((item, index) => {
    return item > 2
}));

//every所有都满足条件才行，返回布尔

Array.prototype.myEvery=function (cb) {
    let flag = true;
    for(let i=0;i<this.length;i++){
        if(!cb(this[i])){
            return false;
        }
    }
    return flag;
}
console.log(arr4.every((item, index) => {
    return item >=1
}));
console.log(arr4.myEvery((item, index) => {
    return item > 2
}));


//Array.from（类数组）//类数组转数组
function print() {
    // let arr = Array.prototype.slice.call(arguments)//转数组

    let arr = Array.from(arguments)

    arr.forEach(item=>{
        console.log(item)
    })
}
print('a','b','c')


var ary = Array(3)//创建一个空数组
console.log(ary);//[<3 empty items>]
var ary = Array.of(3)//创建一个长度为1，只有一个元素的数组
console.log(ary);//[ 3 ]