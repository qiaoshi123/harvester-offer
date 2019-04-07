// this关键字,表示当前执行环境的上下文

//1.dom事件的this指向元素
//2.自执行函数的this 是window
//3.new一个实例，类中的this指的的当前实例
//4.普通函数执行，this指向window
//5.定时器回调函数的this是window
//6.obj.fn(),函数执行.前面是谁，this就是谁
//7.箭头函数中的this，是函数声明时就确定的，指的是函数声明时所处的上下文。



// console.log('1');
// setTimeout(function() {
//     console.log('2');
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5'); setTimeout(function(){console.log(100)})
//     })
// },500)
//
// setTimeout(function() {
//     console.log('6');
//     new Promise(function(resolve) {
//         console.log('7');
//         resolve();
//     }).then(function() {
//         console.log('8')
//     })
// },500)
// 1,2,4,6,7,5,8

// console.log(1)
// setTimeout(function () {
//     console.log(2);
//     setImmediate(function () {
//         console.log(5)
//     })
//     process.nextTick(function () {
//         console.log(6)
//     })
//     new Promise((resolve,reject)=>{
//         console.log(7);
//         resolve()
//     }).then(function () {
//         console.log(8)
//     })
// },100);
// process.nextTick(function () {
//     console.log(3)
// });
// setImmediate(function () {
//     console.log(4)
// });

// 1,3,4,2,7,6,8,5


console.log('--------------')

console.log('1');
setTimeout(function() {
    console.log('2');
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5');
        setTimeout(function(){console.log(11)})
    })
    process.nextTick(function () {
        console.log(10)
    })
    setImmediate(function () {
        console.log(12)
    })
},500);

setTimeout(function() {
    console.log('6');
    new Promise(function(resolve) {
        console.log('7');
        resolve();
    }).then(function() {
        console.log('8')
    })
    process.nextTick(function () {
        console.log(9)
    })
},500)

// 第一次事件环
//timer 阶段 1，2，4，6，7，; nexttick:10,9;//微任务队列  5，8
//io 阶段 无
//check 阶段 12
//close 阶段 无

//第二次事件环
//timer 阶段 11;
//io 阶段 无
//check 阶段
//close 阶段


