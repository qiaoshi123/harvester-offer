class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);//#app document.querySelector()
        this.vm = vm;
        if (this.el) {
            //如果元素能获取到，才开始编译。
            //1.先把这些真实的DOM 移动到内存中，降低性能,减少回流； fragment
            let fragment = this.node2fragment(this.el);

            //2.编译=>提取想要的元素节点v-model和 文本节点{{}}

            this.compile(fragment);
            //3.把编译好的fragment在放回页面中
            this.el.appendChild(fragment)
        }
    }

    /**专门写一些辅助方法*/

    //判断是不是dom节点
    isElementNode(node) {
        return node.nodeType == 1;
    }

    //是不是指令
    idDirective(name) {
        return name.includes('v-');//include 字符串新语法
    }

    /** 核心的方法*/

    //将元素放入到文档碎片中；真实文档中就不会存在元素了
    node2fragment(el) {
        let fragment = document.createDocumentFragment();
        let firstChild = el.firstChild;
        while (firstChild) {
            fragment.appendChild(firstChild);
            firstChild = el.firstChild;
        }
        return fragment;
    }

    //递归编译
    compile(fragment) {
        //需要递归
        let childNodes = fragment.childNodes;//只能获取到第一层子元素
        Array.from(childNodes).forEach(node => {
            if (this.isElementNode(node)) {
                //是元素节点,
                //这里需要编译当前的这个节点，查看v-指令
                this.compileElement(node);
                //还需要继续深入检查。
                this.compile(node)
            } else {
                //是文本节点
                //这里需要编译文本
                this.compileText(node)
            }
        })
    }

    //编译元素
    compileElement(node) {
        //带v-model v-text
        let attrs = node.attributes;//取出节点属性
        Array.from(attrs).forEach(attr => {
            let value = attr.value;
            let attrName = attr.name;//v-mode v-text v-...
            //判断属性名字是不是包含v-
            if (this.idDirective(attrName)) {
                //取到对应的值放到节点的中。
                //node this.vm.$data
                let expr = attr.value;
                let [, type] = attrName.split('-');
                CompileUtil[type](node, this.vm, expr);
            }
        })
    }

    //编译文本
    compileText(node) {
        //带{{}}
        let expr = node.textContent;//取文本节点中的内容
        let reg = /\{\{([^}]+)\}\}/g; // {{a}}{{b}}{{c}}
        if (reg.test(expr)) {
            //node this,vm.$data
            CompileUtil['text'](node, this.vm, expr)
        }
    }
}

CompileUtil = {
    //获取实例上对应的数据
    getVal(vm, expr) {
        expr = expr.split('.');//[message,a]
        return expr.reduce((prev, next) => {
            return prev[next]
        }, vm.$data)
    },
    //获取编译文本后的结果 {{}}  {{}}{{}}
    getTextVal(vm, expr) {
        return expr.replace(/\{\{([^}]+)\}\}/g, (...args) => {
            return this.getVal(vm, args[1])
        });
    },
    //文本处理
    text(node, vm, expr) {
        let updateFn = this.updater['textUpdater'];
        //expr 是{{message.a}} 需要转换成 hello mvvm
        let value = this.getTextVal(vm, expr);
        updateFn && updateFn(node, value)
        //加一个监控，数据变化了，应该调用watcher的callback

        //{{a}}{{b}}，分别给a 和b增加观察者
        expr.replace(/\{\{([^}]+)\}\}/g, (...args) => {
            new Watcher(vm,args[1],(newValue)=>{
                //当值变化后 会调用cb,文本节点需要重新取一下
                //因为{{a}}{{b}}是同一个文本节点，一个变了 就要都取一遍，更新视图；
                updateFn && updateFn(node, this.getTextVal(vm, expr))
            })
        });
    },
    setVal(vm,expr,value){
        // expr  可能是message.a
        expr = expr.split('.');
        return expr.reduce((prev,next,currentIndex)=>{
            if(currentIndex == expr.length-1){
                return prev[next] = value;
            }
            return prev[next];
        },vm.$data)
    },
    // 输入框处理
    model(node, vm, expr) {
        let updateFn = this.updater['modelUpdater'];
        //expr 可能是 message.a
        updateFn && updateFn(node, this.getVal(vm, expr));
        //加一个监控，数据变化了，应该调用watcher的callback
        new Watcher(vm,expr,(newValue)=>{
            //当值变化后 会调用cb，将新的值传递过来()
            updateFn && updateFn(node, this.getVal(vm, expr))
        })
        node.addEventListener('input',(e)=>{
            let newValue = e.target.value;
            this.setVal(vm,expr,newValue)
        })
    },
    updater: {
        //文本更新
        textUpdater(node, value) {
            node.textContent = value;
        },
        //输入框更新
        modelUpdater(node, value) {
            node.value = value;
        }

    }
};