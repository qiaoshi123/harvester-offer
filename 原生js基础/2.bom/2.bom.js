//1.window
window.open('url','_self'); //在当前窗口跳转
window.open('url','_blank');//打开一个新的窗口
window.close()//关闭页面
console.log(window.innerHeight);//浏览器窗口高
console.log(window.innerWidth);//浏览器窗口宽


console.log(window.navigator.userAgent);//浏览器信息

//2.history
// 在当前窗口中，每访问一个新url，都会将新url压入history
// API: history.go(n)

history.go(1) //前进
history.go(-1)//后退
history.go(0)//刷新


//3.location
console.log(location.href);     //完整url地址
console.log(location.protocol); //'https:'
console.log(location.host);     //主机名+端口 www.baidu.com:8080
console.log(location.hostname); //主机名 www..baidu.com
console.log(location.port);     //端口号
console.log(location.pathname); //路径 /detail/detail
console.log(location.hash);     //#aaa
console.log(location.search);   //?a=1s
//在当前页面跳转新得地址，可支持后退
// location.assign('url')  => location.href = url = >location= 'url'

//在当前窗口打开新页面，禁止后退
// location.replace(url)

//刷新当前页面
// 普通刷新:优先从浏览器本地缓冲获取资源:
history.go(0)
location.reload(false)
//强制刷新，不走缓存走服务器
location.reload(true)

// 4.定时器
// setTimeout()
// setInterval()

// 5.navigator
console.log(navigator.cookieEnabled); //当前浏览器是否启用cookie ，布尔
console.log(navigator.userAgent);//浏览器名称和版本号，字符串

//6.event事件
//标准浏览器
nd.addEventListener('click',handler,false);// false 表示冒泡阶段执行 true表示捕获阶段执行
nd.removeEventListener('click',handler); //移除绑定事件
//IE
nd.attachEvents('onclick',handler)//只支持冒泡阶段触发 onmouseover

// 区别:1.浏览器不同
//     2.前者在时间流不同阶段触发，后者只能在冒泡阶段触发
//     3.绑定时，前者事件名不用on  后者事件名需要on
//     4。统一事件绑定多个函数，执行顺序，前者是按添加顺序执行。后者相反
//     5.前者this是当钱dom 后者this是window

//7.事件对象

// e.target

// 取消冒泡 e.stopPropagation() e.cancelBubble = true;
// 应用
// 利用冒泡，减少事件监听，实现事件委托，事件委托this是父元素， e.target 是触发事件的元素

// 阻止默认事件 e.preventDefault(); e.returnValue = true;
// 应用：
// 用a当按钮时，a会自动向地址栏中添加#锚点地址。
// 提交表单时，如果验证没通过，可阻止提交
// 自定义表单提交:
//     input button + onclick + form.submit
// input submit + form.onsubmit事件 + e.preventDefault()
// HTML5中拖拽API: 首先要阻止浏览器默认的拖拽行为

//8.鼠标坐标
//相对于屏幕左上角
console.log(e.screenX);
console.log(e.screenY);
//相对于文档显示区左上角
console.log(e.clientX);
console.log(e.clientY);

//相对于当前元素左上角
console.log(e.offsetX);
console.log(e.offsetY);

// 9.页面滚动
// 事件: window.onscroll
// 获得页面滚动过的高度: body顶部超出文档显示区顶部的距离
//
// scrollTop=document.documentElement.scrollTop
//    ||document.body.scrollTop;
// 滚动API:
//     window.scrollTo(left, top)
//     window.scrollBy(left的增量,top的增量)

//10.cookie localStorage sessionStorage

//cookie存在属性 :
// domain生效域
// expires最长有效时间绝对时间
// path 生效路径
// Max-Age 最长存活秒数
// HttpOnly：客户端无法更改Cookie，客户端设置cookie时不能使用这个参数，一般是服务器端使用

// document.cookie 获取到是个字符串
//"a=1; remove_cookie=true; access_token=ccj411583908824955000073111060b51583908824; weixin_union_id=opTdBt7TPz6fbAhEbDLvn5p6Dv6k; weixin_open_id=o-Wu0wq8VCWziLwizH82AubBLj6o"
function getCookie(name) { //获取指定名称的cookie值
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    reg = new RegExp('(^| )'+name+'=([^;]*)(;|$)')
    if(arr != null) {
        console.log(arr);
        return unescape(arr[2]);
    }
    return null;
}
function setCookie(name,value,domain,path='/',days='7'){
    var time = new Date();
    time = new Date(time.getTime() + (days * 24 * 3600 * 1000));
    document.cookie = name + "=" + value + ";path="+path+";domain=" + domain + ";expires=" + time;
}
// document.cookie = "a=231312;path=/;domain=.baidu.com;expires=Fri, 15 Mar 2019 06:55:34 GMT"

function removeCookie() {
//    todo 设置为null ||  设置过期时间为昨天

}

// localStorage
// localStorage.setItem(key,value)
// localStorage.removeItem(key)
// localStorage.getItem(key)
// localStorage.clear()


//sessionStorage
// sessionStorage.setItem(key,value)
// sessionStorage.removeItem(key)
// sessionStorage.getItem(key)
// sessionStorage.clear()


// cookie localStorage sessionStorage 共同点和区别
//共同点：都保存在浏览器端，且必须是同源的才可以通讯
// 区别：
//1.cookie会在同源的http请求中携带传递，cookie保存过多会浪费性能
//2.存储大小，cookie最大4kb。storage 可达到5M
//3.cookie 具备一定的属性，如domain  path expires过期时间
//  localStorage 永不过期，除非用户手动清楚
// sessionStorage 窗口关闭及清除
//4.作用域不同
// sessionStorage不能跨窗口使用，即便是同一个地址
// localStorage 是同源文档不同窗口共享
// cookie 是同源文档同源窗口共享
//5.cookie原生api documen.cookie 不太友好，需要开发者自己封装方法
//     storage的api较友好