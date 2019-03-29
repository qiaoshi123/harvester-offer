//观察者的目的就是给需要变化的那个元素 增加一个观察者，当数据变化后执行对应的方法。

class Watcher {
    constructor(vm,expr,cb){
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        //先获取一下老的值,存起来
        this.value = this.get()
    }
    getVal(vm, expr) {
        expr = expr.split('.');//[message,a]
        return expr.reduce((prev, next) => {
            return prev[next]
        }, vm.$data)
    }
    get(){
        Dep.target = this;
        let value = this.getVal(this.vm,this.expr);
        Dep.target = null;
        return value;
    }
    //对外报漏的方法；
    //用新值和老值进行比对，如果发生变化，就调用对应的更新方法。
    update(){
        let newValue = this.getVal(this.vm,this.expr);
        let oldValue = this.value;
        if(newValue != oldValue){
            this.cb(newValue);//调用water的callback
        }
    }
}


//vm.$data  expr


