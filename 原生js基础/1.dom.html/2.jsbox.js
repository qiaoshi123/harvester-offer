/*
    1.offsetParent:父级参照物
    第一个具有position属性且非static的父级，没有的话，最终是body
    一般情况下页面中所有元素的父级参照物都是body;
    document.body.offsetParent =>null//body 的父级参照物是null
 */
let ndInner1 = document.getElementById('inner1');
console.log(ndInner1.offsetParent);

/*
    2.偏移量
    左边offsetLeft/上边offsetTop
    当前元素(从外边框开始)距离父级参照物(内边框结束)的距离(IE8除外)
    IE8 是当前元素外边框距离父级参照物（外边框结束）的距离，比其他的浏览器多一个边框宽度。
 */
console.log(ndInner1.offsetLeft);
console.log(ndInner1.offsetTop);


/*
 * 3.offsetWidth offsetHeight
 *  返回元素的布局高度(layout height)
    值 = contentH + paddingH + borderH
    display:none时，值为0
 */
let ndBox2= document.getElementById('inner2');
console.log('inner2 oH '+ndBox2.offsetHeight);
console.log('inner2 oW '+ndBox2.offsetWidth);


/**
 * 4.真实内容宽高
 * 没有滚动条的话，和clientHeight相等,contentHeight + paddingHeight
 * 当内部元素过高，溢出了，该元素有滚动条，
 * scrollHeight属性存在兼容性问题，chrome和safari浏览器中，scrollHeight包含padding-bottom,则等于 内部元素真实高度 + 该元素的padding-bottom
 * 而IE和firefox不包含padding-bottom
 */
console.log(ndBox2.scrollHeight);
console.log(ndBox2.scrollWidth);


/**
 * 5.
 * 可视窗口
 * contentHeight + paddingHeight
 */
console.log(ndBox2.clientHeight);
console.log(ndBox2.clientWidth);

/**
 * 6.
 * clientLeft,clientTop:
 * 这两个返回的是元素周围边框的厚度(边框的宽度),左边框宽度，右边框宽度
 */
console.log(ndBox2.clientLeft);
console.log(ndBox2.clientTop);


// DOM应用
//获取页面中任一元素距离body的左偏移量 上偏移量。
function offset(node) {
    var disLeft = node.offsetLeft;
    var disTop = node.offsetTop;
    var par = node.offsetParent;
    while(par){
        //在IE8浏览器中，元素距离距离参照物的距离包含了参照物边框的宽度。所以非Ie8的 需要单独在加一个边框
        const isIE8 = window.navigator.userAgent.includes('MSIE 8');
        if(!isIE8) {
            disLeft += par.clientLeft;
            disTop += par.clientTop;
        }
        disLeft += par.offsetLeft;
        disTop += par.offsetTop;
        par = par.offsetParent;
    }
    return {
        disLeft,
        disTop
    }
}

//图片懒加载
// 思路
//1.获取滚动窗口的clientHeight
//2.获取图片元素相对于文档顶部的距离 offsetTop
//3.获取scrollTop 滚动条滚动的距离
//当clientHeight + scrollTop >=offsetTop 表示图片元素进入可是窗口，这时就去加载






