//模版字符串
let name = 'zfpx',age = 9;
var desc = name+'今年'+age+'岁';
//模版字符串
//1.字符串可以嵌套变量
//2.支持换行
//3.可带一个标签进行 描述,因为有些时候我们希望有自己的拼接模版字符串的逻辑
var desc = `${name}今
年${age}岁了`
console.log(desc);


var users = [{id:1,name:'zfpx1'},{id:2,name:'zfpx2'}]
/**
 *
 * <ul>
 *    <li>1:zfpx1</li>
 * </ul>
 */
//把老数组中的每一个元素应设为新数组中的每一个元素
var newUsers = users.map((item,i)=>{
    return `<li>${item.id}:${item.name}</li>`
}).join('');
var ul = (`
    <ul>
    ${newUsers}
    </ul>
`)
console.log(ul);


// 原理：
var tem = "${name}今年${age}岁了";
function replace(tem) {
    return tem.replace(/\$\{(\w+)\}/g,function (...args) {
        return eval(args[1])
    })

}
console.log(replace(tem));



function desc1(strings,...rest) {
    console.log(arguments)//{ '0': [ '', '今年', '岁了' ], '1': 'zfpx', '2': 9 }
    console.log(strings);
    console.log(rest);
    let result = ''
    for(let i =0;i<rest.length;i++){
        result += (strings[i]+rest[i])
    }
    result += strings[strings.length-1]
    return result;
}
//带标签的模版字符串就像一个函数调用
//参数：第一个是文本的数组
//       剩下的依次是变量值，可用剩余运算符收拢,剩余运算符只能作为最后一个参数
let str = desc1`${name}今年${age}岁了`;
console.log(str)