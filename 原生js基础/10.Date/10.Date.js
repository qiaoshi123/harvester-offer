//事件对象类
let time = new Date();

//获取年
console.log(time.getFullYear());
//获取月
console.log(time.getMonth() + 1);

//获取日
console.log(time.getDate());

//获取周几
var week = time.getDay();
var area = "日一二三四五六";//->0~6
console.log(area[week]);
//获取小时
console.log(time.getHours());

//获取分钟
console.log(time.getMinutes());
//获取秒
console.log(time.getSeconds());

//获取豪秒
console.log(time.getMilliseconds());

//获取时间戳 毫秒级别
console.log(new Date().getTime());


//毫秒数转date对象
console.log(new Date(new Date().getTime()));


//时间字符串转时间对象 一定要用/ 分隔，否则有兼容性
new Date("2019/01/01 09:00")
new Date("2019/01/01 09:00:31")


