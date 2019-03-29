//1.
//subStr(startIndex,num)
//字符串截取,开始索引，截取个数。
//不改变原字符串
//返回值:截取的字符
var str = '1234567893';
console.log(str.substr(1, 2));
console.log(str);

// 2.
//subString(startIndex,endIndex) 等同于slice(startIndex,endIndex)
//字符串截取，开始索引，结束索引，包前不包后
//不改变原字符串
//返回值：截取的字符
console.log(str.substring(1, 2));
console.log(str);
console.log(str.slice(1, 2));
console.log(str);

//3.charAt(Index)等同于 str[Index]
//获取指定位置字符串
console.log(str.charAt(3));
console.log(str[3]);

//4.charCodeAt
//获取指定位置字符串对应的 ascii编码
console.log(str.charCodeAt(3));

//5.concat 字符串拼接,会先调用toString()，然后在进行拼接
//不改变原字符串
//返回值：新的字符串
console.log(str.concat('10', '11', 12));

//6.
//indexOf
//获取字符首次出现的索引，没有的话返回-1
console.log(str.indexOf('3'))

//7.
//lastIndexOf
//获取字符最后一次出现的索引，
//返回索引，没有的话返回-1
console.log(str.lastIndexOf('3'));

//8. includes es2015+
//检查字符串是否包含指定字符串，
//返回布尔
console.log(str.includes('891'));

//9. startsWith es2015+
//检查字符串是否已指定字符开头
//返回布尔
console.log(str.startsWith('123'));

//10. endsWith es2015+
//检查字符串是否已指定字符结尾
//返回布尔

console.log(str.endsWith('11'));

//11 toLowerCase 转小写
//不改变原字符串
//返回新字符串，
str = '123456789qwerQwer';
console.log(str.toLowerCase());
console.log(str)

//12 toUpperCase 转大写
//不改变原字符串
//返回新字符串，
console.log(str.toUpperCase());
console.log(str)

//13
//trim 去除两边空格
//trimLeft 去除锁边空格
//trimRight 去除右边空格
//不改变原字符串
//返回新的字符串
var str = '  123  ';
console.log(str.trim());
console.log(str.trimLeft());
console.log(str.trimRight());
console.log(str);
//14.
//localeCompare(target)
//Unicode 编码比较字符串 + 当地排序规则
//字符串比较大小,当前值大于目标值 返回1，小于目标值返回-1
var str = '3';
console.log(str.localeCompare('1'));

//15.
//match 字符串匹配
//返回值：数组
//场景：
//a.如果传入的是字符串，那么通过new RegExp(str)将其隐式转换成正则表达式。
//返回值：数组，第一项是匹配到字符串，index是起始下标。 input为原字符串
var str = 'qwerwertyui';
console.log(str.match('qwer'));
console.log(str.match(/qwer/));

//b.如果传入的是正则
//返回值:数组，第一项是匹配到字符串，index是起始下标。 input为原字符串
//匹配不到的话是null
var str = 'homehomehome';
console.log(str.match(/home/));

//c.正则+全局，想要知道一个元素在字符串中出现的次数，可以用match全局匹配
//返回值数组，对应的是匹配到的每一项.
console.log(str.match(/home/g).length);

//d.传入正则+分组捕获(使用全局g就不能使用分组捕获，否则的话分组捕获失效)
//返回值:数组第一项是匹配到的字符串，第二项是分组捕获的字符串
var  str = '#home#home';
var reg5 = /(#)home/ ;
console.log(str.match(reg5));


// 16.
// replace 替换
// 不改变原字符串
// 返回新的字符串
//
var str = '#aaa#bbb#ccc#aaa';
// 场景：
//a.传入字符串，只能匹配到一次。不能匹配全局
console.log(str.replace('#aaa','1'));
//b.传入正则，可匹配全局，可用过函数自定义替换值;
//每次匹配到一项，就会执行一次函数，函数的返回值是替换的文本。
//函数的参数依次是：正则匹配到的值，正则分组捕获依次输出，当前匹配到的起始索引，原字符串
str.replace(/#aaa/g,(...args)=>{
    console.log(args)
    return 1;
})
str.replace(/(#)aa(a)/g,(...args)=>{
    console.log(args);
    return 1;
});

// 17.字符串拆分成数组
// split
//  不改变原串
//  返回：数组

var str = 'qwer';
console.log(str.split());   //["qwer"] 不传的话默认使用,分隔  与数组join对应，join不传默认也是，拼接
console.log(str.split('=')) //["qwer"]
console.log(str.split(""));//[ 'q', 'w', 'e', 'r' ]




