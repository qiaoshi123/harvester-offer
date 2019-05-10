function defineReactive(obj,key,value){
    var deps = [];
    Object.defineProperty(obj,key,{
        configurable:true,
        enumerable:true,
        get(){
            if(Dep.target){
                deps.push(Dep.target)
            }
            return value;
        },
        set(newValue) {
            value = newValue;
        }
    })
}

function defineCompute(obj,key,getter) {
    var value ;
    var updateFn = function(){
        value = getter();
    };
Object.defineProperty(obj,key,{
    configurable:true,
    enumerable:true,
    get(){
        Dep.target = updateFn;
        updateFn();
        Dep.target = null;
        return value;
    },
    set() {
        //计算属性不用设置
    }
})
}

// 大概原理：
//computed属性会通过defineProperty挂在到vm上去，
//在get时，将couputd属性的getter方法包装一层Fn，赋值给Dep.target。
//然后执行getter方法，因为data属性的响应式，所以Fn方法 会被收集到各个依赖属性的 deps中。
//当依赖属性变化时，会调用Fn，改变计算属性的值；