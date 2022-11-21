
JavaScript实战案例，编写随机点名器小程序，学会这个案例就再也不他用担心你会被点名了，适合JavaScript入门初学者。<br />#JavaScript #实战案例 #编程 #初学者 #程序员<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668993239344-93ef2b49-f351-43cd-ae78-2c5d8fe111f9.png#averageHue=%23a6a6bf&clientId=ud4cded2b-718f-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u230aff08&margin=%5Bobject%20Object%5D&originHeight=764&originWidth=1600&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uac87f339-0a44-4446-b57e-8cbc27504a6&title=)
<a name="aBw00"></a>
# **案例介绍**

欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript相关知识，做一个随机点名的案例。你可以通过点击开始按钮控制上方名字的闪动，点击停止按钮可以随机选定一个名字。

<a name="lLMRT"></a>
# **案例演示**

运行程序后，我们可以看到一个矩形框按钮，显示开始点名，点击后名字随机闪动。同时按钮变成停止点名，再次点击按钮，会随机出现一个名字，也就是"天选之子"。

![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668993239311-3c587328-ef8c-439e-b472-7c767ad924d3.png#averageHue=%23a1a5c0&clientId=ud4cded2b-718f-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u945cdb16&margin=%5Bobject%20Object%5D&originHeight=760&originWidth=1923&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u75dd555f-6132-48be-b617-b0f7f81dc52&title=)<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668993239267-b7acca43-f0cd-4d3c-ac62-5c900c8f29ad.png#averageHue=%23a1a2bb&clientId=ud4cded2b-718f-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ua5c5b2d7&margin=%5Bobject%20Object%5D&originHeight=905&originWidth=1600&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u6b413561-2294-44f3-bc36-20c0f98d686&title=)
<a name="dJwTk"></a>
# **源码学习**

HTML主要就是两个盒子模型，用于存放姓名数组和点击按钮。

```
<body background="../images/背景图片.jpg">
    <!-- 有个小院-兴趣编程 -->
    <!-- 点名的大盒子 -->
        <div id="ready">天选之子,你准备好了吗?</div>
        <div id="start" onclick="doit()">开始点名</div>
    <!-- 引入js文件 -->
<script src="../js/index.js" type="text/javascript"></script>
</body>
```

接下来是核心javascript代码，定义一个承载名字的数组，定时器初始化为null。开始点名按钮的点击事件doit()，根据getElementById()方法获取对应组件。用if()判断若时间为空，则开启点名事件show()同时通过innerHTML属性返回开始和结束标签之间的 HTML，否则清除定时器。show()函数主要是获取名字数组，并通过下标随机生成名字，setTimeout()函数是表示1s后执行show()函数。

```
var names=["点不到我","李明","刘子扬","黄花菜","郑华","李询","白敬亭","王一博"];
var time=null;
function doit(){
    var button=window.document.getElementById("start");
    if(time==null){
        // innerHTML 属性设置或返回表格行的开始和结束标签之间的 HTML
        button.innerHTML="停止点名";
        show();
    }else{
        button.innerHTML="开始点名";
        clearInterval(time);
        time=null;
    }
}
function show(){
    var box=window.document.getElementById("ready");
    var num=Math.floor(Math.random()*100000)%names.length;
    box.innerHTML=names[num];
    time=setTimeout("show()",1);
}
```


关注我，跟着我每天学习一点点，让你不在枯燥，不在孤单..
<a name="kKWJK"></a>
# **学会这个随机点名器，上课还怕被提问？**
![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668993239007-dc8be211-0347-41bd-92af-5b7989d146e6.png#averageHue=%23525252&clientId=ud4cded2b-718f-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u30b5756c&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue156f1f9-3050-4d18-a9c1-0583fff2c74&title=)
