//1、正则的捕获分为两个阶段：
//->匹配:首先验证字符串和正则是否匹配,不匹配的话捕获到的结果为null
//    var str = "zhufenpeixun";
//    var reg = /\d+/;
//    console.log(reg.exec(str));//->null
//->捕获:把正则匹配到的内容捕获到:捕获到的结果是一个数组,数组第一项是当前正则匹配捕获的内容,index:捕获的开始索引位置,input:捕获的原始字符串
//->每一次执行exec只能捕获到一个匹配的,想把所有匹配的都捕获到,至少要执行多次 ->但是一般情况下，我们不管执行多少次，每一次捕获的内容都是和第一次一模一样，后面的2017是捕获不到的
//->"正则捕获的懒惰性"
//    var str = "zhufeng2016peixun2017";
//    var reg = /\d+/;
//    console.log(reg.exec(str));//->["2016", index: 7, input: "zhufeng2016peixun2017"]
//    console.log(reg.exec(str));//->["2016"...]
//->为啥会出现懒惰性? reg.lastIndex:正则每一次捕获的时候,在字符串中开始查找的索引
//正则每一次捕获结束后,默认的没有把lastIndex值进行修改,lastIndex一直是零,导致第二次捕获还是从字符串的起始位置开始查找,导致每一次捕获的都是第一个和正则匹配的
//    var str = "zhufeng2016peixun2017";
//    var reg = /\d+/;
//    console.log(reg.lastIndex);//->0 捕获的时候是从字符串开始的位置进行查找的
//    console.log(reg.exec(str));//->["2016"...]
//    console.log(reg.lastIndex);//->0 第二次捕获的话还是从字符串索引为零的位置开始查找
//    console.log(reg.exec(str));//->["2016"...]
//->如果我每一次把lastIndex值修改了会不会好转呢？(手动修改了值,确实也改过来了,但是没有任何的效果,获取的还是第一个匹配的)
//    var str = "zhufeng2016peixun2017";
//    var reg = /\d+/;
//    console.log(reg.lastIndex);//->0
//    console.log(reg.exec(str));//->["2016"...]
//    reg.lastIndex = 11;
//    console.log(reg.lastIndex);//->11
//    console.log(reg.exec(str));//->["2016"...]
//->那该如何是好呢? ->"我们只需要使用全局匹配的修饰符g即可" ->g的作用就是为了解决正则的懒惰性
//    var str = "zhufeng2016peixun2017";
//    var reg = /\d+/g;
//    console.log(reg.lastIndex);//->0
//    console.log(reg.exec(str));//->["2016"...]
//
//    console.log(reg.lastIndex);//->11
//    console.log(reg.exec(str));//->["2017"...]
//->有n个的匹配的就需要执行n次exec这个方法,比较的麻烦,生活如此美好，何必这么麻烦? ->字符串中提供了一个叫做match的方法,这个方法可以一次执行把所有匹配的捕获到
//    var str = "zhufeng2016peixun2017";
//    var reg = /\d+/g;//->不管用哪个方法,g是不能少的
//    console.log(str.match(reg));//->["2016", "2017"]
//->但是match也有自己的局限性? 如果正则中出现分组,而且需要执行多次exec才能全部捕获的,使用match不能把分组的内容捕获到
//->并不是出现分组捕获就不能用match,如果不管用exec/match都可以一次性就捕获全的,使用两个方法中的哪一个都可以,获取的结果是一样的
//    var reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(?:\d{2})(\d)(?:\d|X)$/;
//    console.log(reg.exec("130828199012040617"));//->["130828199012040617", "130828", "1990", "12", "04", "1", index: 0, input: "130828199012040617"]
//    console.log("130828199012040617".match(reg));//->["130828199012040617", "130828", "1990", "12", "04", "1", index: 0, input: "130828199012040617"]
//->只有需要多次捕获的,match才会出现小分组的捕获不到
//    var str = "zhufeng[2016]peixun[2017]yangfan[2018]";
//    var reg = /\[(\d+)\]/g;
//    console.log(str.match(reg));//->["[2016]", "[2017]"] 只有大正则捕获的内容,第一个小分组每一次捕获的内容获取不到
//    var str = "zhufeng[2016]peixun[2017]yangfan[2018]";
//    var reg = /\[(\d+)\]/g;
//    var ary = [], res = reg.exec(str);
//    while (res) {
//        var obj = {};
//        obj[0] = res[0];//->每一次大正则捕获的内容 例如："[2016]"
//        obj[1] = res[1];//->每一次第一个小分组捕获的内容 例如："2016"
//        ary.push(obj);
//        res = reg.exec(str);
//    }
//    console.log(ary);
var str = "zhufeng[2016]peixun[2017]yangfan[2018]";
var reg = /\[(\d+)\]/g;
var ary = [], res = reg.exec(str);
while (res) {
    var obj = {0: null, 1: null};
    for (var key in obj) {
        obj[key] = res[key];
    }
    ary.push(obj);
    res = reg.exec(str);
}
console.log(ary);