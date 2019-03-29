// 排序
/**
 *冒泡排序
 */
function switchStr(str) {
    let arr = str.split('');
    return arr.reduce((prev,next,index,origin)=>{
        if(prev.slice(prev.length-1) == next){
            return prev;
        }else{
            return prev + next;
        }


    },'')
}
//比较相邻的两个数的大小，满足条件更换位置。
//第一个for循环代表轮数
//第二个for表示每一轮比较多少次
//顺序是从右到左，每轮都确认1个。
function mpSort1(arr){
    for(i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        console.log(arr)
    }
    return arr;
}
mpSort1([9,7,4,8,5,3,2]);

console.log('------------------------');
/*
快排
思路：取中间值，与中间值比较分两路。利用递归，反复操作
 */

function quickSort(arr) {
    if(arr.length <= 1){
        return arr;
    }
    let n = Math.ceil(arr.length/2);
    let middleArr =  arr.splice(n,1);
    let left = [],right = [];
    for(let i =0;i < arr.length;i++){
        if(arr[i]>middleArr[0]){
            right.push(arr[i])
        }
        if(arr[i]<middleArr[0]){
            left.push(arr[i])
        }
        if(arr[i] == middleArr[0]){
            middleArr.push(arr[i])
        }
    }
    return quickSort(left).concat(middleArr).concat(quickSort(right));
}
console.log(quickSort([9,7,4,8,5,3,2]));
console.log('------------------------');
/*
选择排序
选择排序从数组内遍历出最小值，加入新数组，将最小值从原数组中删除，
重复上述操作，最后得出的新数组就是一个从小到大排序的数组了
 */
function selectSort(arr) {
    // arr = [...arr];
    // let newArr = [];
    // while(arr.length) {
    //     let min = Infinity;
    //     let minIndex;
    //     arr.forEach((value, i) => {
    //         if (value < min) {
    //             min = value;
    //             minIndex = i;
    //         }
    //     })
    //     newArr.push(min);
    //     arr.splice(i, 1)
    // }

    arr = [...arr];
    let minIndex;
    for(let i = 0 ;i<arr.length - 1;i++){
        minIndex = i;
        for(let j =i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp
    }



}
console.log(selectSort([9,7,4,8,5,3,2]));


console.log('------------------------');
const selectSort1 = (ary)=>{
    var len = ary.length;
    for(var i=0;i<len-1;i++){
        for(var j = i +1;j<len;j++) {
            if(ary[i]>ary[j]){
                let temp = ary[i];
                ary[i] = ary[j];
                ary[j] = temp
            }
        }
        console.log(ary)
    }
    return ary;
}
selectSort1([9,7,4,8,5,3,2]);

/*
插入排序
假设第一个是已经排序好的，剩下的都与他进行比较。比他小的放左边，比他大的放右边；
类似打扑克，抽到牌后 和手里已经排列好的进行比较，放到响应位置。
 */
console.log("=======================")

function insertSort2(arr){
    for(var i=1;i<arr.length;i++){
        var temp = arr[i];
        for(var j= i-1;j>=0;j--){
            if(arr[j]>=temp){
                arr[j+1] = arr[j];
                arr[j] = temp;
                continue;
            }
            break;
        }
        console.log('debug',arr)
    }
    return arr;
}
console.log('insert2',insertSort2([12, 11, 44,33,22,22,60,6,122]))


console.log("=======================")

function insertSort3(arr) {
    console.time('插入排序耗时：');
    for (var i = 1; i < arr.length; i++) {
        var temp = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] >=temp) {
            arr[j + 1] = arr[j];
            arr[j] = temp;
            j--;
        }

        // arr[j + 1] = temp;　

    }
    console.timeEnd('插入排序耗时：');
    return arr;

}

console.log(insertSort3([12, 11, 44,33,22,22,60,6,122]));
console.log("======二分插入排序=======");
function binaryInsertionSort(array) {
    console.time('二分插入排序耗时：');
    for (var i = 1; i < array.length; i++) {
        var key = array[i], left = 0, right = i - 1;
        console.log('init:',left,right)
        while (left <= right) {
            var middle = parseInt((left + right) / 2);//1
            if (key < array[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        console.log('end:',left,right)
        for (var j = i - 1; j >= left; j--) {
            let temp = array[j+1];
            array[j + 1] = array[j];
            array[j] = temp;
        }
        // array[left] = key;
        console.log('debug',array)
    }
    console.timeEnd('二分插入排序耗时：');
    return array;
}
console.log(binaryInsertionSort( [11, 16, 18,15,22,22,60,6,122,111]));


//数组去重
Array.prototype.quchong = function () {
    let obj = {};
    for(let i = 0 ; i < this.length;i++){
        let cur = this[i]
        if(!obj[cur]){
            obj[cur] = 1;
        }else{
            obj[cur]++;
        }
    }
    return Object.keys(obj)
};

Array.prototype.quchong2 = function () {
    return Array.from(new Set(this))
        // [...new Set(this)]

}
Array.prototype.quchong3 = function () {
    let arr = [];
    for(let i = 0 ;i<this.length;i++){
        if(arr.indexOf(this[i])==-1){
            arr.push(this[i])
        }
    }
    return arr;
}


//合并两个有序数组
function mergeArray(left,right) {
    let arr = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    if(left.length){
        arr = arr.concat(left)
    }
    if(right.length){
        arr = arr.concat(right)
    }
    return arr;
}

function mergeArray2(left,right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let arr = [];
    while(leftIndex < left.length && rightIndex <right.length){
        if(left[leftIndex] <= right[rightIndex]){
            arr.push(left[leftIndex]);
            leftIndex++;
        }else{
            arr.push(right[rightIndex]);
            rightIndex++;
        }
    }
    if(leftIndex<left.length){
        arr = arr.concat(left.slice(leftIndex))
    }
    if(rightIndex<right.length){
        arr = arr.concat(right.slice(rightIndex))
    }
    return arr;
}

//归并排序
function mergeSort(arr) {
    if(arr.length<=1){
        return arr;
    }
    let middleIndex = Math.floor(arr.length/2);
    let left =arr.slice(0,middleIndex);
    let right = arr.slice(middleIndex);
    return mergeArray3(mergeSort(left),mergeSort(right))
}
function mergeArray3(left,right) {
    console.log('left:',left,'right:',right)
    let arr = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            arr.push(left.shift());
        }else{
            arr.push(right.shift());
        }
    }
    return arr.concat(left,right)
}

//合并多个有序数组
var arr = [[1, 2], [0, 3, 5], [-1, 4]];
arr = arr
    .reduce((a, b) => a.concat(b), [])
    .sort((a, b) => a - b);



//实现数组flat方法,递归
// var arr1 = [1, 2, [3, 4]];
// arr1.flat();
// [1, 2, 3, 4]
Array.prototype.flat = function () {
    let arr = [];
    this.forEach((item,index)=>{
        if(Array.isArray(item)){
            arr  = arr.concat(item.flat())
        }else{
            arr.push(item)
        }
    })
    return arr;
    // return this.toString().split(',').map(item=> +item )
};

//二分查找，在一个有序数组里找到目标值
function search(arr,target,low,high) {
    let m = Math.floor((low+high)/2);
    let cur  = arr[m];
    if(cur == target){
        return `找到了，索引为${m}`
    }
    if(cur>target){
        return search(arr,target,low,m-1)
    }
    if(cur<target){
        return search(arr,target,m+1,high)
    }
    return -1;
}





//操作字符串
/*
统计改字符串中出现的最多的字符以及出现的次数
 */
function cacl(str) {
    str = [...str];
    let maxValue;
    let max = 0;
    let obj = {};
    str.forEach((item)=>{
        obj[item]  = obj[item] ? obj[item]+1 :1;
        if(obj[item] > max){
            maxValue = item;
            max = obj[item]
        }
    })
    return `字符：${maxValue} 次数${max}`
}
/*
反转字符串
*/
function reverseStr(str){
    str = [...str];
    return str.reverse().join("")
}
/*
找到字符串中第一个不重复的字符
 */
function getNoRepeatChat(str) {
    let obj = {};
    for(var i = 0;i<str.length;i++){
        if(obj[str[i]]){
            obj[str[i]]++;
        }else{
            obj[str[i]] = 1;
        }
    }
    for(var key in obj){
        if(obj[key] == 1){
            return key;
        }
    }
}
//转换驼峰
// xiaoshuo-ss-sfff-fe  变为驼峰xiaoshuoSsSfffFe
function switchName(str) {
    let arr = str.split("-");
    arr = arr.map((item,index)=>{
        if(index ==0 ){
            return item;
        }else{
            let char = item.charAt(0);
            return char.toUpperCase()+item.slice(1)
        }
    })
    return arr.join("");
}

function switchName2(str) {
    let arr = str.split("-");
    let first = arr.shift();
    let result = arr.reduce((prev,next,index,origin)=>{
        let char = next[0].toUpperCase();
        return prev+char+next.slice(1);
    },first)
    return result;
}

function switchName3(str) {
    str.replace(/-([a-z])/g,function (...arg) {
        console.log(arg);
      return arg[1].toUpperCase();
    })
}

//反向转换 xiaoshuoSsSfffFe 转为 xiaoshuo-ss-sfff-fe
function reverseSwitch(str) {
    let arr = str.split("");
    return arr.map((item,index)=>{
        if(item.toUpperCase() == item){
            return '-'+item.toLowerCase();
        }else{
            return item;
        }
    }).join("")
}
function reverseSwitch2(str) {
    return str.replace(/[A-Z]/g,(...args)=>{
        return '-'+args[0].toLowerCase()
    })


}
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
var lengthOfLongestSubstring = function(s) {
    let arr = s.split('');
    let result = "";
    for(let i = 0 ; i <arr.length-1;i++){
        let str = arr[i];
        for(let j = i+1 ; j<arr.length;j++){
            if(str.indexOf(arr[j])>-1){
                break;
            }else{
                str += arr[j];
            }
        }
        if(str.length >result.length){
            result = str;
        }
    }
    return result.length;
};







//斐波那契数列
//获取斐波那契数列第n个数
function fabo(n) {
    if( n<= 2){
        return 1;
    }
    let faboAry = [0,1];
    for(let i = 2; i<=n;i++){
        faboAry[i] = faboAry[i-1] +faboAry[i-2]
    }
    return faboAry[n]
}
//利用递归
function fabo4(n) {
    if(n<=2){
        return 1
    }else{
        return fabo4(n-1) + fabo4(n-2)
    }
}
//实现阶乘,0当作1。
//递归阶乘
function factorial(n) {
    if(n<=1){
        return 1;
    }else{
        return n * arguments.callee(n-1)
    }
}
function factorial2(n) {
    return n>1?n*factorial(n-1):1
}
var factorial3 = function fn(n) {

    return n>1?n*fn(n-1):1

};
//for循环阶乘
function factorial4(n) {
    let result = 1;
    for(let i =1;i<=n;i++){
        result = result*i;
    }
    return result
}
function factorial5(n) {
    let result = 1;
    for(let i = n;i>0;i--){
        result = result * i;
    }
    return result
}
function  factorial6(n) {
    var arr =  Array.from({length:n}).map((v, k) => k+1);
    return arr.reduce((prev,next,index,arr)=>{
           return prev * next;
    },1)

}
//深拷贝
function clone(origin) {
    let target;
    // Object.prototype.toString.call(origin) == "[object Array]"
    if(origin.constructor == Array){
        target = [];
        for(let i = 0;i<origin.length;i++){
            target[i] = clone(origin[i])
        }
        return target;
    }
    // Object.prototype.toString.call(origin) == "[object Object]"
    if(origin.constructor == Object){
        target = {};
        for(let key in origin){
            target[key] = clone(origin[key])
        }
        return target;
    }

    return  origin;

}


//找出1-60之间 不能被7整出 和 末尾不是7的
function getSafeNum(n) {
    let arr = [];
    for(let i = 1 ; i<=n;i++){
        if(i%7 == 0 ){
            continue;
        }
        if(i+''.charAt(i.length-1) == "7"){
            continue;
        }
        arr.push(i)
    }
    console.log(arr)
}
// 水仙花数是一种特殊的三位数，它的特点就是，每个数位的立方和，等于它本身。
//比如153就是水仙花数。因为：1的3次方+5的三次方+3三次方 = 153
// 100~999之内，只有4个水仙花数，请找出来
function getNumber(start,end) {
    let result = [];
    for(let i = start;i<=end;i++) {
        let arr = (i+'').split("");
        let total = arr.reduce((prev,next)=>{
            return prev + Math.pow(parseInt(next),3);
        },0);
        if(total == i){
            result.push(i)
        }
    }
    return result;
}
//求和 1- n 的和
function sum(n) {
    let total = 0;
    for(let i = 1;i<=n;i++){
       total +=i;
    }
    return total;

}
function sum2(n) {
    if(n<=1){
        return 1;
    }
    return n+sum2(n-1)
}
// 用户输入一个数，输出因数及个数。
function yinshu(n) {
    let arr = [];
    for(let i = 1;i<=n;i++){
        if(n%i ==0) {
            arr.push(i)
        }
    }
    console.log(`因数${arr.length}个，分别是${arr.toString()}`)
}







/*
如何验证一个素数（质数），素数只能被1 和自己本身整出
//小于等于2  ，默认为素数
//大于2 需要循环去除，验证是否能被（除自身）整除
 */
function isPrime(num) {
    // let d = 2;
    // while(num>d){
    //  if(num%d == 0){
    //      return false
    //  }else {
    //      d++;
    //  }
    // }
    for(let d = 2;d<num;d++){
        if(num%d==0){
            return false;
        }
    }
    return true;

}


function isPrime2(n) {
    if(n == 2 || n==3){
        return true;
    }
    if(n%2 ==0){
        return false;
    }
    let d = 3;
    let limit = Math.sqrt(n);
    while(d <= limit){
        if(n % d ==0){
            return false
        }else{
            d+=2;
        }

    }
    return true;


}




/*
在一个未排序的数组中找出是否有任意两数之和等于给定的数
 */
//双for循环
function sumFinder(arr,sum) {
    for(let i = 0 ; i<arr.length-1;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]+ arr[j] == sum){
                return true;
            }
        }
    }
    return false;

}

//可以用一个对象来存储当前元素和和值的差值。当我拿到一个新元素，如果这个元素的差值在对象中存在，那么我就能判断出是否存在。
function sumFinder2(arr,sum) {
    let obj = {};
    let stract;
    for(let i = 0 ;i<arr.length;i++){
        stract = sum - arr[i];
        if(obj[stract]){
            return true;
        }else{
            obj[arr[i]] = true;
        }
    }
    return false;

}

//使用递归的方法，将obj变为obj2的格式
let ary1 = [
    {id:1,parent:null},
    {id:2,parent:1},
    {id:3,parent:2}
];
// let obj2 = {
//     obj:{
//         id: 1,
//         parent: null,
//         child: {
//             id: 2,
//             parent: 1,
//             child: {
//                 id:3,
//                 parent: 2
//             }
//         }
// };
function switchObj(arr) {
    let obj = arr.shift();
    if(arr.length){
        obj.child   = switchObj(arr)
    }
    return obj;
}
console.log(switchObj(ary1));




//字符串
// string.charAt(index) =>string[index] 获取制定索引字符串
//string.substring(startIndex,endIndex) 字符串截取，包前不包后， =>string.slice(startIndex,endIndex)
//string.substr(starIndex,number) 字符串截取，从第几位开始截取，截取多少个。
//todo string.replace方法