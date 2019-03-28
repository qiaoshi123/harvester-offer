/**
 * Created by qiaoshi on 2016/4/13.
 */
var utils=(function(){
    return{
        offset:function(curEle){
            var left=curEle.offsetLeft;
            var top=curEle.offsetTop;
            var par=curEle.offsetParent;
            while(par){
                if(window.navigator.userAgent.indexOf("MSIE 8")==-1){
                    left+=par.clientLeft;
                    top+=par.clientTop;
                }
                left+=par.offsetLeft;
                top+=par.offsetTop;
                par=par.offsetParent;
            }
            return {
                    left:left,
                top:top
            }
        },
        win:function(attr,value){
            if(typeof  value=="undefined"){
                return document.documentElement[attr]||document.body[attr];
            }
            document.documentElement[attr]=value;
            document.body[attr]=value;
        }

    }


})();