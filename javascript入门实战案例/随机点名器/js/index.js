var names=["点不到我","李明","刘子扬","黄花菜","郑华","李询","白敬亭","王一博"];
var time=null;
function doit(){
     var button=window.document.getElementById("start");
       if(time==null){
                // nnerHTML 属性设置或返回表格行的开始和结束标签之间的 HTML
                button.innerHTML="停止点名";
                show();
            }else{
             button.innerHTML="开始点名";
        clearInterval(time);
        time=null;
        }
}
function show(){
     var box=window.document.getElementById("ready");
    var num=Math.floor(Math.random()*100000)%names.length;
     box.innerHTML=names[num];
     time=setTimeout("show()",1);
}