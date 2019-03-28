var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    //如果父类不是函数，并且父类不等于null，抛出异常，父类必须是函数或者是null
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    //子类的构造函数重写原型，继承父类公有
    // subClass.prototype.__proto__ = superClass.prototype
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        //重写constructor
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    //subClass.__proto__ = superClass
    //继承静态方法
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

//定义一个类
var Parent = function () {
    //定义构造函数；当new的时候就会调用构造函数
    function Parent(name) {
        _classCallCheck(this, Parent);

        //实例的私有属性
        this.name = name;
    }

    //公有方法->原型上的


    _createClass(Parent, [{
        key: 'getName',
        value: function getName() {
            console.log(this.name);
        }
        //静态方法 ，类调用

    }], [{
        key: 'say',
        value: function say() {
            console.log('我是人类');
        }
    }]);

    return Parent;
}();

var Child = function (_Parent) {
    _inherits(Child, _Parent);

    function Child(name, age) {
        //类调用检查
        _classCallCheck(this, Child);
        //(Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name)
        //Parent.call(this) 继承私有
        var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name));
        //super指的是父类的构造函数


        _this.age = age;
        return _this;
    }

    _createClass(Child, [{
        key: 'getAge',
        value: function getAge() {
            console.log(this.age);
        }
    }]);

    return Child;
}(Parent);

new Child('xiaoming',9)