//1、replace是字符串替换的方法
//    var str = "珠峰JS培训,珠峰NODE培训";
//    str = str.replace("珠峰", "@");//->在不使用正则的情况下,执行一次只能替换一个
//    console.log(str);//->"@JS培训,珠峰NODE培训"
//    str = str.replace("珠峰", "@");
//    console.log(str);//->"@JS培训,@NODE培训"
//->不使用正则的情况下,执行多次不一定能解决问题
//    var str = "珠峰JS培训,珠峰NODE培训";//->"珠峰"->"珠峰培训"
//    str = str.replace("珠峰", "珠峰培训");
//    console.log(str);//->"珠峰培训JS培训,珠峰NODE培训"
//    str = str.replace("珠峰", "珠峰培训");
//    console.log(str);//->"珠峰培训培训JS培训,珠峰NODE培训"
//->replace天生为正则而生
//    var str = "珠峰JS培训,珠峰NODE培训";
//    str = str.replace(/珠峰/g, "珠峰培训");
//    console.log(str);//->"珠峰培训JS培训,珠峰培训NODE培训"
//->replace的原理:
//第一个参数:正则
//第二个参数:匿名函数A
//->正则和字符串进行匹配,匹配到几次,我们的A就执行几次
//->每一次执行A的时候,都有一些参数传递进来(传递进来的参数值和每一次使用exec捕获到的结果是一模一样的):包含了大正则捕获的内容(如果有分组,也有分组捕获的内容)、大正则捕获的开始索引的位置、捕获的原始字符串
//->在A中的每一次return后面的返回值,都是把当前大正则捕获的内容进行替换,return的是啥,相当于把大正则捕获的替换成啥
//    var str = "珠峰JS培训,珠峰NODE培训,珠峰HTML5培训";
//    str = str.replace(/珠峰/g, function () {
//        return "珠峰培训";
//    });
//    console.log(str);
//2、
//    var str = "123678";//->"壹贰叁陆柒捌"
//    var ary = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
//    str = str.replace(/\d/g, function () {
//        //console.log(arguments[0]);//->每一次捕获到的内容(我们要的数字)
//        return ary[arguments[0]];
//    });
//    console.log(str);
//3、格式化时间字符串
//    var str = "2016-04-03";//->"2016年04月03日"
//    var reg = /^(\d{4})-(\d{2})-(\d{2})$/g;
//    str = str.replace(reg, function () {
//        //->执行一次:arguments[n]第n个分组捕获的内容
//        return arguments[1] + "年" + arguments[2] + "月" + arguments[3] + "日";
//    });
//    console.log(str);
//    var str = "2016-04-03";//->"2016年04月03日"
//    var reg = /^(\d{4})-(\d{2})-(\d{2})$/g;
//    str = str.replace(reg, "$1年$2月$3日");
//    console.log(str);
//4、模板引擎实现的原理
var ary = ["赵爽", "18", "china", "javascript"];
var str = "my name is {0}，my age is {1}，i com from {2}，i can do {3}~~";
str = str.replace(/\{(\d+)\}/g, function () {
    return ary[arguments[1]];
});
console.log(str)

//5.截取？参数
function getQuery(str){
    let reg = /([^?&=]+)=([^?&=]+)/g;
    let obj = {};
    str.replace(reg,(...args)=>{
        obj[args[1]] = args[2]
    })
    return obj;


}