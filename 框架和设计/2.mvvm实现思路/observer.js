//数据劫持
class Observer {
    constructor(data){
        this.observe(data);
    }
    observe(data) {
        //要对这个data数据将原有的属性改成set和get形式
        if (!data || typeof data != "object") {
            return;
        }
        //将数据一一劫持，先获取到date的key和value
        Object.keys(data).forEach(key=>{
            //定义数据响应（劫持）
            this.defineReactive(data,key,data[key]);
            //深度劫持
            this.observe(data[key]);

        })
    }
    //数据响应式（劫持）
    defineReactive(obj,key,value){
        let that = this;
        let dep = new Dep();//每个变化的数据对应多个watcher，dep是用来存放的所有watcher的。
        Object.defineProperty(obj,key,{
            enumerable:true,
            configurable:true,
            get(){//当取值时调用的方法
                Dep.target && dep.addSub(Dep.target);
                return value;
            },
            set(newValue){//当给data属性设置值的时候，更改获取的属性的值。
                if(newValue!=value){
                    //这个里面的this不是Observer的实例，修改的时候 是 vm.message = ***,是vm调用的。
                    that.observe(newValue);//赋值时，重新定义劫持。
                    value = newValue;
                    dep.notify();
                }
            }

        })
    }
}

//管理观察者watcher, 一个变化的值会对应多个watcher，统一进行管理
class Dep {
    constructor(){
        //订阅的数组
        this.subs = []
    }
    addSub(watcher){
        this.subs.push(watcher)
    }
    notify(){
        this.subs.forEach(watcher=>{
            watcher.update();
        })
    }
}