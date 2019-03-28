//DOM 文档数据模型 document object model
//描述网页中各个元素之间的关系，并且dom提供了一些api可以操作dom节点，

//1.获取元素
document.getElementById('id');
document.getElementsByTagName('div');    //获取到的是nodeList，类数组
document.getElementsByClassName('wrap'); //IE8+ 获取到的是nodeList，类数组
document.getElementsByName('aaa');       //获取到的是nodeList，类数组
document.querySelector('#id');           // IE8+
document.querySelectorAll('.wrap');      // IE8+,获取到的是nodeList，类数组

//2.节点信息
let ndApp = document.getElementById('app');
console.log('节点名', ndApp.nodeName);                        //节点明
console.log('节点类型', ndApp.nodeType);                      //节点类型
console.log('节点值', ndApp.nodeValue);                       //节点值
//
// element元素节点:     大写标签名,           1 ，      Null
// Attribute属性节点:   属性名称,             2,       属性值
// Text文本节点:        #text,              3,        文本值
// Comment注释：        #comment，          8，       注释的内容
// document文档节点:    #document           9,       Null
// fragment文档随便节点：#document fragment，11        Null


//3.获取关联节点
console.log('子节点集合', ndApp.childNodes);                  //子节点集合
console.log('element子节点集合', ndApp.children);             //element子节点集合
console.log(ndApp.parentNode);                             // 获取父节点,元素节点
console.log(document.parentNode);                          //document的父节点是null
console.log(ndApp.firstChild);                             //获取第一个子节点 没有则是null
console.log(ndApp.lastChild);                              //获取最后一个子节点，没有则是null
let p1 = document.querySelector('#p1');
console.log(p1.previousSibling);                           //获取上一个兄弟节点，没有则是null
console.log(p1.nextSibling);                               //获取下一个兄弟节点，没有则是null
console.log(p1.previousElementSibling);                    //获取上一个元素兄弟节点，没有则是null
console.log(p1.nextElementSibling);                        //获取下一个元素兄弟节点，没有则是null


//4.节点操作
//创建
let elNode = document.createElement('div');             //创建元素节点
let textNode = document.createTextNode('hello world');  //创建文本本节点
elNode.setAttribute('a', '1');                           //创建元素节点，设置自定义属性
document.body.appendChild(elNode);
elNode.appendChild(textNode)

let fragment = document.createDocumentFragment();       //创建文档碎片，可以一次性添加到dom中，避免浏览器的反复渲染，提高性能，减少回流
var oDiv;
for (var i = 0; i < 5; i++) {
    oDiv = document.createElement('div');
    oDiv.appendChild(document.createTextNode('' + i));
    fragment.appendChild(oDiv)
}
ndApp.appendChild(fragment)

//操作，删除，添加、移动，替换，克隆
//a.父节点.appendChild(子节点)
//向指定元素节点的最后一个子节点之后添加节点，返回值 是新添加的节点

//b.父节点.insertBefore(newNode,oldNode)
//向已有的子节点前插入一个新的子节点，返回值是新添加的节点。
//第二个参数传入null，将默认添加到指定元素的最后，相当于appendChild

//这两个都存在dom映射，可以用来移动dom节点位置。

var oDiv2 = document.createElement('div');
var ochild1 = document.createElement('p');
ochild1.setAttribute('num', 1);
var ochild2 = document.createElement('p');
ochild2.setAttribute('num', 2);
console.log(oDiv2.appendChild(ochild1));              //向指定元素节点的最后一个子节点之后添加节点。
document.body.appendChild(oDiv2);
console.log(oDiv2.insertBefore(ochild2, ochild1));    // 向已有的子节点前插入一个新的子节点。
oDiv2.insertBefore(ochild1, ochild2)//                 //可以用来挪移元素位置，具有dom映射

//c.父节点.replaceChild(newNode,oldNode)
//删除一个子节点并用一个新节点代替原来节点的位置

var ndCcj = document.getElementById('ccj');
var ndCcj1 = document.getElementById('ccj1');
var newCcj3 = document.createElement('p');
newCcj3.setAttribute("id", "ccj3");
ndCcj.replaceChild(newCcj3, ndCcj1);


//d.节点.cloneNode(布尔)
//克隆节点。参数为false，表示浅复制。参数为true表示深复制，复制整个节点包含子节点
//返回值：一个新的节点，特点：没有父节点。
var newCcj = ndCcj.cloneNode();
newCcj.setAttribute("id", "newCcj")
console.log(newCcj.parentNode)//null
document.body.insertBefore(newCcj, null);

// var newCCJ = ndCcj.cloneNode(true);
// newCCJ.setAttribute("id","newCCJ");
// document.body.appendChild(newCCJ)

//e.父节点.removeChild(child)
//删除某个子节点
//返回值：删除成功返回被删除的节点，删除失败返回null
let child = document.getElementById('ccj2');
let parent = child.parentNode;
console.log(parent.removeChild(child));


//f.判断是否存在子节点
//父节点.hasChildNodes()
//返回：布尔，若存在1+个子节点，返回true。否则返回false
console.log(newCcj.hasChildNodes());


//5.属性操作,主要用于自定义属性
//节点.getAttribute('data'),获取属性，不存在返回空
//节点.setAttribute('data','1')设置属性
//节点.removeAttribute('data')移除节点属性
//节点.hasAttribute('data') 判断是否存在指定属性，返回布尔


//DOM应用

/**
 * 获取节点所有元素子节点
 //自带的children方法 Ie8+.
 * @param node node节点
 * @param tagName 标签名
 * @returns {Array}
 */
// children(document.getElementById('app'),"p")
function children(node,tagName) {
    var childNodes = node.childNodes;
    childNodes = Array.prototype.slice.call(childNodes,0);
    var arr = [];
    for(var i = 0 ; i < childNodes.length;i++){
        var cur  = childNodes[i];
        if(tagName){
            if(tagName.toUpperCase() == cur.nodeName && cur.nodeType == 1){
                arr.push(cur)
            }
        }else{
            if( cur.nodeType == 1){
                arr.push(cur)
            }
        }
    }
    return arr;
}

/**
 * 获取下一个兄弟节点,找不到最后返回null
 * 自带nextElementSibling Ie8+
 * @param node
 * @returns node
 */
//循环
function next(node) {
    let nextNode = node.nextSibling;
    while (nextNode && nextNode.nodeType!=1){
        nextNode = nextNode.nextSibling;
    }
    return nextNode;
}
//递归
function next(node) {
    let nextNode = node.nextSibling;
    if(!nextNode){
        return nextNode;
    }
    if(nextNode.nodeType == 1){
        return nextNode;
    }
    return arguments.callee(nextNode)
}




/**
 * 获取上一个兄弟节点，找不到返回null
 * 自带previousElementSibling Ie8+
 * @param node
 * @returns node
 */
//循环
function  prev(node) {
    let prevNode = node.previousSibling;
    while(prevNode && prevNode.nodeType !=1){
        prevNode = prevNode.previousSibling
    }
    return prevNode;
}

//递归
function prev(node) {
    let prevNode = node.previousSibling;
    if(!prevNode){
        return prevNode
    }
    if(prevNode.nodeType == 1){
        return prevNode;
    }
    return prev(prevNode)


}


/**
 * 获取所有弟弟元素节点
 * @param node
 * @returns ary
 */
function nextAll(node) {
    let ary = [];
    let next = node.nextSibling;
    while(next){
        if(next.nodeType==1){
            ary.push(next)
        }
        next  = next.nextSibling;
    }
    return ary;
}

/**
 * 获取所有哥哥元素节点
 * @param node
 * @returns ary
 */
function prevAll(node) {
    let ary = [];
    let prev = node.previousSibling;
    while(prev){
        if(prev.nodeType == 1){
            ary.push(prev)
        }
        prev = prev.nextSibling;

    }
    return ary;
}

/**
 * 获取相邻的两个元素节点
 * @param node
 * @returns ary
 */
function sibling(node) {
    let prev = prev(node);
    let next = next(node);
    let ary = [];
    prev ? ary.push(prev) : null;
    next ? ary.push(next) : null;
    return ary;
}

/**
 * 获取所有的兄弟元素节点
 * @param node
 * @returns ary
 */
function siblings(node){
    return prevAll(node).concat(nextAll(node))
}

/**
 * 获取当前元素的索引
 * @param node
 * @returns num
 */
function index(node) {
    return prevAll(node).length
}

/**
 * 获取第一个元素子节点
 * @param node
 * @returns node
 */
function firstChild(node) {
    let chs = children(node);
    return chs.length>0?chs[0] : null
}

/**
 * 获取最后一个元素子节点
 * @param node
 * @returns node
 */
function lastChild(node) {
    let chs = children(node);
    return chs.length>0?chs[chs.length-1] : null
}

/**
 * 想指定元素的末尾追加元素
 * @param  newEle,container
 * @returns newEle
 */
function append(newEle,container) {
    container.appendChild(newEle);
    return newEle;
}

/**
 * 向指定元素的开头添加元素
 * @param newEle,container
 * @returns newEle
 */
function prepend(newEle,container) {
    let first = firstChild(container);
    if(first){
        container.insertBefore(newEle,first);
        return;
    }
    container.appendChild(newEle);
    return newEle
}

/**
 * 把新元素追加到指定元素前面
 * @param newEle，oldEle
 * @returns newEle
 */
function  insertBefore(newEle,oldEle) {
    oldEle.parentNode.insertBefore(newEle,oldEle);
    return  newEle
}

/**
 * 把新元素追加到指定元素后面
 * @param newEle，oldEle
 * @returns newEle
 */
function insertAfter(newEle,oldEle) {
    let nex = next(oldEle);
    if(nex){
        insertBefore(newEle,nex);
        return newEle;
    }
    oldEle.parentNode.appendChild(newEle);
    return newEle;
}

/**
 * 验证是否具有改class类名
 * @param node className
 * @returns 布尔
 */
function hasClass(node,className) {
    let reg = new RegExp("(^| +)"+className+"( +|$)");
    return reg.test(node.className)

}

/**
 * 给元素增加class类名
 * @param node  className
 * @returns
 */
function addClass(node,className) {
    let classAry = className.replace(/(^ +| +$)/g,"").split(/ +/);
    for(let i = 0 ; i<classAry.length;i++){
        let name = classAry[i];
        if(!hasClass(node,name)){
            node.className +=' '+name;
        }
    }
}

/**
 * 移除类名
 * @param node className
 * @returns
 */
function removeClass(node,className) {
    let classAry = className.replace(/(^ +| +$)/g,"").split(/ +/);
    for(let i = 0 ; i<classAry.length;i++){
        let name = classAry[i];
        if(hasClass(node,name)){
            let reg = new RegExp("(^| +)"+name+"( +|$)","g");
            node.className = node.className.replace(reg," ")
        }
    }
}

/**
 *
 * 通过类名获取元素集合
 * 原生自带的getElementByClass 是IE8+,
 * @param className 上下文
 * @returns 元素集合
 *
 */
function getElementByClass(className,context) {
    context = context || document;

    //todo 如果是IE8+则 直接 返回 context.getElementByClass(className)
    //如果是IE6-IE8
    let classAry = className.replace(/(^ +| +$)/g,"").split(/ +/);
    let nodes = context.getElementsByTagName("*");
    let ary = [];
    for(let i = 0;i<nodes.length;i++){
        let curEle = nodes[i];
        let flag = classAry.every(curClass=>{
            return hasClass(curEle,curClass)
        });
        if(flag){
            ary.push(curEle)
        }
    }
    return ary;

}


/**
 * 获取css属性值
 * 原生window.getComputedStyle(node,null)[attr],只支持Ie8+
 * node.currentStyle[attr]  IE6-Ie8
 */
function getCss(attr) {
    var val,reg;
    if(window.getComputedStyle){
        val =  window.getComputedStyle(this,null)[attr]
    }else{
        //透明度单独处理
        if(arr == 'opacity'){
            val = this.currentStyle["filter"];
            reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/;
            val = reg.test(val) ? reg.exec(val)[1]/100 :1;
        }else{
            val = this.currentStyle[attr];
        }
    }
    reg = /^(-?\d+(\.\d+)?)(px|pt|em|rem)?$/;
    return reg.test(val) ? parseFloat(val) :val;

}

/**
 * 设置css
 * @param attr 属性
 * @param value 值
 */
function setCss(attr,value) {
    if(attr=='float'){
        this['style']["cssFloat"] = value;
        this["style"]["styleFloat"] = value;
        return;
    }
    if(attr == "opacity"){
        this['style']["opacity"]=value;
        this["style"]["filter"] = "alpha(opacity"+value*100+")"
        return;
    }
    var reg = /^(width|height|top|bottom|left|right|((margin|padding)(Top|Bottom|Left|Right)?))$/;

    if (reg.test(attr)) {
        if (!isNaN(value)) {
            value += "px";
        }
    }
    this["style"][attr] = value;

}

/**
 * setGroupCss:给当前元素批量的设置样式属性值
 * @param options {}
 */
function setGroupCss(options) {
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            setCss.call(this, key, options[key]);
        }
    }
}

/**
 * 此方法实现了获取、单独设置、批量设置元素的样式值
 * @param curEle
 * @returns {*}
 */
function css(curEle) {
    var argTwo = arguments[1], ary = Array.prototype.slice.call(arguments, 1);
    if (typeof argTwo === "string") {
        if (typeof arguments[2] === "undefined") {
            return getCss.apply(curEle, ary);
        }
        setCss.apply(curEle, ary);
    }
    argTwo = argTwo || 0;
    if (argTwo.toString() === "[object Object]") {
        setGroupCss.apply(curEle, ary);
    }
}








// jquery 封装
var jQuery = function (selector) {
    return new jQuery.fn.init(selector);
};
window.$ = window.jQuery = jQuery;

jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
    init: function (selector) {
        this.node = document.querySelector(selector);
        return this;
    },
    // todo 一些实例调用的方法，比如append remove等。
};
jQuery.fn.init.prototype = jQuery.fn;



//继承 静态属性方法。 $.xxx $.xxx
// jQuery.extend() 向jquery上扩展方法，类调用，
// jquery.fn.extend()扩展到了$的prototype上，所以实例化一个jQuery对象的时候，它就具有了这些方法
jQuery.extend = jQuery.fn.extend = function (obj) {
    for (var key in obj) {
        this.__proto__[key] = obj[key];
    }
};





//方便理解
function Jquery(select) {
    this.node = document.querySelector(selector);
}

Jquery.prototype = {
    constructor: jQuery,
    //todo 一些实力调用方法
};


window.$ = window.jquery = function (select) {
    return new Jquery(select);
};
jquery.fn = jquery.prototype = Jquery.prototype;
jquery.extend = jquery.fn.extend = Jquery.prototype.extend= function (obj) {
    for (var key in obj) {
        this.__proto__[key] = obj[key];
    }
};







