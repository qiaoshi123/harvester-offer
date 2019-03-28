var _createClass = function () {
    //target 目标 props数属性对象的数组
    function defineProperties(target, props) {
        //循环数组
        for (var i = 0; i < props.length; i++) {
            //取出每个属性描述器
            var descriptor = props[i];
            //可枚举 for in循环能循环出来就是可枚举
            descriptor.enumerable = descriptor.enumerable || false;
            //可配置 delete
            descriptor.configurable = true;
            //可修改
            if ("value" in descriptor) descriptor.writable = true;
            //真正的给target定义属性
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    //参数1是构造函数 参数二是原型上的属性 参数3是静态属性（类的属性）
    return function (Constructor, protoProps, staticProps) {
        //如果有原型属性的话
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        //类的属性
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

//类的调用检查，参数1是类的实例 参数二是类本身
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        //如果这个实例不是这个构造函数的实例的话，就报错，不能把一个类当成普通函数来调用，只能通过new
        throw new TypeError("Cannot call a class as a function");
    }
}

var Parent = function () {
    //定义构造函数；当new的时候就会调用构造函数
    function Parent(name) {
        //保证Parent是通过new调用的
        _classCallCheck(this, Parent);

        //实例的私有属性
        this.name = name;
    }

    //公有方法->原型上的

    _createClass(Parent, [{
        key: "getName",
        value: function getName() {
            console.log(this.name);
        }
    }],[{
        key: 'say',
        value: function say() {
            console.log('我是人类');
        }
    }]);

    return Parent;
}();