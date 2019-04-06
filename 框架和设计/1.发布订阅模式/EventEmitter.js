//发布订阅模式

class EventEmitter {
    constructor(){
        this._events = {};
    }
    on(type,cb){
        if(!this._events[type]){
           this._events[type] = [cb]
        }else{
            this._events[type].push(cb)
        }
    }
    emit(type,...args){
        this._events[type].forEach(cb=>{
            cb.apply(this,args)
        })
    }
    removeListener(type,callback){
        if(this._events[type]){
            this._events[type] = this._events[type].filter(cb=>cb!=callback)
        }
    }
    once(type,cb){
        let fn = (...args)=>{
            cb.apply(this,args);
            this.removeListener(type,fn)
        };
        this.on(type,fn)
    }
}
let e = new EventEmitter();
let cry = (name='')=>{console.log('cry'+name)};
e.on('失恋',cry);
e.on('失恋',cry);
e.removeListener('失恋',cry);
e.once('失恋',cry);
e.emit('失恋','我');
e.emit('失恋');


//new EventEmitter() 相当于创建一个事件调度中心；
//假设消息类型"die"
//订阅者B 订阅个die消息，会订阅到调度中心。
//发布者A 发布die消息到调度中心。
//最后由调度中心依次通知订阅者。

//从始到终，订阅者B 和 发布者A，都没有关联。