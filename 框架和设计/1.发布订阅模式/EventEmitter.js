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