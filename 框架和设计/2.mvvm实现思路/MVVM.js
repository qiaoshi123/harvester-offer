class MVVM {
    constructor(options) {
        //一上来先把可用的东西挂载在实例上；
        this.$el = options.el;
        this.$data = options.data;
        //判断如果有要编译的模版，就开始编译
        if (this.$el) {
            //数据劫持 就是把对象的所有属性改成get和set方法
            new Observer(this.$data);

            //将数据代理到实例上。
            this.proxyData(this.$data);

            //用数据和元素进行编译；
            new Compile(this.$el, this);
        }
    }

    proxyData(data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                get() {
                    return data[key]
                },
                set(newValue) {
                    data[key] = newValue
                }
            })
        })
    }
}




//1.利用Object.definedProperty. a.对每个data属性，创建一个订阅池，每个订阅池可以存放多个监听者。b.拦截每个属性的get 和set 创建响应数据。
// get 将 监听者watcher 添加到对应属性订阅池中。
// set,数据更新,调用订阅池更新方法，将多个监听者watcher的cb执行；
//2.编译dom树，对每一个模版{{}}或指令{{}}, 都创建一个监听者。

//如何在创建watcher过程中，将此监听者 添加到对应属性的订阅池 ？

//1.在创建watcher过程中，利用Dep对象target属性(或是一个顶层变量)存放当前watcher实例，然后调用该属性get方法（获取属性值）。
//2.在拦截get过程中，判断顶层对象是否是一个监听者，如果是则添加到的该属性的订阅池。