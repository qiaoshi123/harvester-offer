// 模块
//在浏览器中使用模块需要借助 导出

export var name = 'zfpx';
export var age = 8;
//导入

//import {name,age} from './school.js';
import * as school from './school.js';
console.log(school.name,school.age);

//重命名
//导出时重命名

function say(){
    console.log('say');
}
export {say as say2};
//导入时重命名

import {say2 as say3} from './school.js';
//默认导出
//每个模块都可以有一个默认要导出的东西 导出

export default function say(){
    console.log('say');
}
//导入

import say from './school.js';

