const watcher = {
    update(data){
        console.log(data)
    }
};
class ObserverList {
    constructor(){
        this.list = []
    }
    add(watcher){
        this.list.push(watcher)
    }
    remove(watcher){
        this.list = this.list.filter(item=>{
            return item!=watcher;
        })
    }
}

class Target {
    constructor() {
        this.observers = new ObserverList();
    }
    addWatcher(watcher){
        this.observers.add(watcher)
    }
    removeWatcher(watcher){
        this.observers.remove(watcher)
    }
    notify(...args){
        this.observers.list.forEach(watcher=>{
            watcher.update(...args)
        })
    }
}

let target = new Target();
target.addWatcher(watcher);
target.notify('触发')


// new Target();
// 这是一个目标对象，
//目标对象可以添加watcher监听自己的变化。
//当目标对象有所变化时，由目标对象直接通知监听者执行对应的update方法；