//数字
// 0 - false
// 1+ - true

// 扩展 0 "" false null undefined 都表示false
let a = 123.013;

//1.保留小数点后几位
console.log(a.toFixed(2));

//2.toString 转字符串
//支持参数，进行进制转换，表示想要转换成几进制；
//会隐式的先转成10进制数字，在转换成指定进制

var b = 0xff;
b.toString(2);//1111 1111      会先转换成255 在转换成2进制

//3.NaN  属于number类型
// NaN 和谁都不相等，包括他自己。
console.log(Number('das'))
console.log(parseInt('das'));
console.log(typeof  NaN); //number
console.log(NaN == NaN); //false


//4.parseInt 转数字
//特点：
//不保留小数点，整形
//可用于字符串转数字，数字格式化
//可用于进制转换，转换成10进制,第二个参数表示当前数字的进制数。

console.log(parseInt(123.11));
console.log(parseInt(11111111, 2)); //255
console.log(parseInt('11111111', 2)); //255

//5.parseFloat 浮点型数字
//字符串转成数字，保留浮点
//数字格式化
console.log(parseFloat('1.111'));


