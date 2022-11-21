
CSS实战案例，编写加载进度条的小程序，适合CSS入门初学者。<br />方便初学者理解html与css的关系，以及css的属性对html页面样式的显示有何影响，可以更直观的将页面设置为目标布局样式。<br />#HTML #CSS #实战案例 #编程 #初学者 #程序员<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668993967672-5c2f719e-341d-445c-9a6b-a728f7d1f4af.png#averageHue=%23e7e2dc&clientId=u5879237c-167c-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ud07433d8&margin=%5Bobject%20Object%5D&originHeight=754&originWidth=1256&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ubff950e8-b76e-4d8b-8e10-83cac767dcf&title=)
<a name="cVzrN"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用CSS相关属性知识，做一个加载进度条的案例。提前设定好进度条的长度，然后可以以线性的关系来加载到所规定的长度。通过这个实例我们可以学到CSS的background-image和box-shadow等属性。
<a name="qPE3b"></a>
# **案例演示**
运行程序后，我们可以看到进度条以线性的关系自动加载到所规定的值。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668993967769-96b3a552-a637-43bb-aa39-7e22777fa2d9.png#averageHue=%23e7e2de&clientId=u5879237c-167c-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ud4b73c7c&margin=%5Bobject%20Object%5D&originHeight=744&originWidth=1224&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u67a0c4d9-e15b-4feb-88ab-e454e237fa1&title=)<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668993967695-21a3ed0a-a096-4654-ac0c-757d8b2b7cfa.png#averageHue=%23e7e2dc&clientId=u5879237c-167c-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u065f87ec&margin=%5Bobject%20Object%5D&originHeight=754&originWidth=1256&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uf4186442-e00a-4036-9062-c5997f5a38c&title=)
<a name="cPHji"></a>
# **案例设计**
[CSS实战案例-加载进度条](https://docs.qq.com/mind/DZWtKY1l3S0NPU1Jz?newPad=1&newPadType=clone&u=0286baac112a4ebeaf462d8cd990b8bc)<br />我们来看此案例的思维导图设计，包括需求描述，页面设计和设计架构。<br />其中架构设计包含了HTML，CSS 共两部分代码。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668993967700-15fdd406-e177-4699-8f1c-043d2d5971e5.png#averageHue=%23d8e9d2&clientId=u5879237c-167c-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u5139b69c&margin=%5Bobject%20Object%5D&originHeight=1194&originWidth=2356&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u9a4711c5-2357-47fa-b73f-ec108a29969&title=)
<a name="kV0LG"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。主要是对列表标记ul及其子列表li进行设置。
```
<!-- 有个小院-兴趣编程 -->
    <ul id="skill">
        <li><span class="bar graphic-design"></span><h3>Graphic Design</h3></li>
        <li><span class="bar html-css"></span><h3>Html // Css</h3></li>
        <li><span class="bar jquery"></span><h3>jQuery // MoTools</h3></li>
        <li><span class="bar wordpress"></span><h3>Wordpress</h3></li>
    </ul>
```
首先设置ul列表的内外边距padding和margin等属性，来规定进度条所在盒子的大小。然后设置animation动画，对子列表li进行除基本的属性外，还要进行background-image和box-shadow属性的设置。Gradient 分为 linear-gradient（线性渐变）和 radial-gradient（径向渐变),该案例主要设置线性渐变在Mozilla、WebKit、Opera三个浏览器内核的应用，(-webkit- 或 -moz-或-o- 的数字表示使用前缀的首个版本)参数值如下:<br />（1）参数：第一个参数表示线性渐变的方向，top 是从上到下、left 是从左到右，如果定义成 left top，那就是从左上角到右下角。第二个和第三个参数分别是起点颜色和终点颜色。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668993967600-ce1d1bfb-f984-434a-9863-3db5811371cd.png#averageHue=%23fafafa&clientId=u5879237c-167c-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u87a9da24&margin=%5Bobject%20Object%5D&originHeight=218&originWidth=650&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u980b8e9f-3bcf-47ac-8733-fff0cb8b0dc&title=)<br />（2）参数：第一个参数表示渐变类型（type），可以是linear（线性渐变）或者radial（径向渐变）。第二个参数和第三个参数，都是一对值，分别表示渐变起点和终点。这对值可以用坐标形式表示，也可以用关键值表示，比如 left top（左上角）和left bottom（左下角）。第四个和第五个参数，分别是两个color-stop函数。color-stop 函数接受两个参数，第一个表示渐变的位置，0为起点，0.5为中点，1为结束点；第二个表示该点的颜色。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668993968120-51a55ab7-7b10-4b82-94be-36adc660792d.png#averageHue=%23fbfbfb&clientId=u5879237c-167c-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u480bcd5f&margin=%5Bobject%20Object%5D&originHeight=288&originWidth=918&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u1063cebd-e9ba-4f27-9d0a-4b1997b0e57&title=)<br />（3）参数：第一个参数表示线性渐变的方向，top 是从上到下、left 是从左到右，如果定义成 left top，那就是从左上角到右下角。第二个和第三个参数分别是起点颜色和终点颜色。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668993968433-5af66982-77d6-42b1-acd3-fc67287b61a2.png#averageHue=%23fbfbfb&clientId=u5879237c-167c-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u6379de1e&margin=%5Bobject%20Object%5D&originHeight=206&originWidth=638&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uc8ab0277-1f4b-436c-82ce-32b8d13e724&title=)
```
<!-- 有个小院-兴趣编程 -->
/* 整个页面的背景 */
body { background: #E9E5E2 ; }
/* 设置ul列表的样式 */
#skill { 
    /* 无列表项目符号 */
list-style: none;
    /* 设置列表的字体样式 */
font: 12px "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
    /* ul列表的宽度 */
width: 296px;
    /* 外边距:距离大盒子上为50px，左右自动，下为0 */
margin: 50px auto 0;
    /* 设置列表为相对定位,移动相对定位元素，但它原本所占的空间不会改变 */
position: relative;
    /* 父本字体的两倍作为行高 */
line-height: 2em;
    /* 内边距上下为30px，左右为0 */
padding: 30px 0;
}
/* ul列表的li标签 */
#skill li { 
    /* 外边距距离父本底部50px */
margin-bottom:50px; 
background:#e9e5e2;
    /* -webkit-gradient 是 webkit 引擎对渐变的实现参数
    第一个参数:线性渐变
    第二三个参数:渐变起点和渐变终点(从左上角->右下角)
    第四五个参数:渐变位置以及该点的颜色 */
background-image: -webkit-gradient(linear, left top, left bottom, from(#e1ddd9), to(#e9e5e2));
/* 从上到下线性渐变,颜色随意设定*/
height:20px; 
    /* 圆角的大小 */
border-radius:10px; 
    /* 设置多层阴影:水平阴影为0，垂直阴影为1px 模糊距离为0px 两个阴影颜色 内部阴影 */ 
box-shadow: 0 1px 0px #bebbb9 inset, 0 1px 0 #fcfcfc;  
}
/* 根据相对定位和距上的距离确定位置*/
#skill li h3 { 
position:relative; 
top:-25px;
}
/* 进度条边框的设置 */
.bar { 
height:18px; 
margin:1px 2px;  
    /* 绝对定位 */
position:absolute;
border-radius:10px;
    /* 设置双层阴影 */ 
box-shadow: 0 1px 0px #fcfcfc inset, 0 1px 0 #bebbb9;
}
/* 第一个Graphic Design进度条的设置 */
.graphic-design {
width:100%; 
    /* 设置动画:第一个参数:绑定的keyframe名称
            第二个参数:动画花费的时间为2s
            第三个参数:动画速度曲线：以低速结束 */
-webkit-animation:graphic-design 2s ease-out;
background-color: #f674a4;
      /* -webkit-gradient 是 webkit 引擎对渐变的实现参数
    第一个参数:线性渐变
    第二三个参数:渐变起点和渐变终点(从左上角->右下角)
    第四五个参数:渐变位置以及该点的颜色 */
    /* 任选其一即可 */
background-image: -webkit-gradient(linear, left top, left bottom, from(#f674a4), to(#e06995));
}
/* 第二个Html // Css进度条的设置 */
.html-css {
width:90%;
   /* 设置动画:第一个参数:绑定的keyframe名称
            第二个参数:动画花费的时间为2s
            第三个参数:动画速度曲线：以低速结束 */
-webkit-animation:html-css 2s ease-out;
    /* 该进度条的背景颜色 */
background-color: #f0bb4b;
background-image: -webkit-gradient(linear, left top, left bottom, from(#f0bb4b), to(#d9aa44));
}
/* 第三个jQuery // MoTools进度条的设置 */
.jquery {
    /* 进度条到达的位置 */
width:65%;
       /* 设置动画:第一个参数:绑定的keyframe名称
            第二个参数:动画花费的时间为2s
            第三个参数:动画速度曲线：以低速结束 */
-webkit-animation:jquery 2s ease-out;
background-color: #a1ce5b;
background-image: -webkit-gradient(linear, left top, left bottom, from(#a1ce5b), to(#91ba52));
}
/* 第四个Wordpress进度条的设置 */
.wordpress {
      /* 进度条到达的位置 */
width:80%;
-webkit-animation:wordpress 2s ease-out;
background-color: #66b3cc;
background-image: -webkit-gradient(linear, left top, left bottom, from(#66b3cc), to(#5da3ba));
}
/* 动画的名称可以和class标签一致，宽度由0%即0px加载到100% */
/* 设置每条进度条的关键帧动画 */
/* 其中0%和100%还可以使用关键词from和to来代表，其中0%对应的是from，100%对应的是to。 */
@-webkit-keyframes graphic-design       { 0%  { width:0px;} 100%{ width:100%;}  }
@-webkit-keyframes html-css        { 0%  { width:0px;} 100%{ width:90%;}  }
@-webkit-keyframes jquery      { 0%  { width:0px;} 100%{ width:65%;}  }
@-webkit-keyframes wordpress   { 0%  { width:0px;} 100%{ width:80%;}  }
```

<a name="cxUCH"></a>
# **总结思考**

**学习点**<br />1、**box-shadow**：box-shadow属性向box添加一个或多个阴影。<br />2、**@keyframes 规则**：规定动画模式。在规则中指定了 CSS 样式，动画将在特定时间逐渐从当前样式更改为新样式。要使动画生效，必须将动画绑定到某个元素。<br />3、**animation**：CSS 可用animation属性实现 HTML 元素的动画效果。在该属性里可以设置动画持续的次数，时长，以及样式的改变。

**问答**

1、box-shadow可以给图片添加阴影吗？<br />2、@keyframes 规则必须要和animation一起使用才可以实现动画吗？

关注我，跟着我每天学习一点点，让你不在枯燥，不在孤单..![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668993968315-321aee36-53e4-44d2-b2a3-012f54af7f58.png#averageHue=%23525252&clientId=u5879237c-167c-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u4a474c85&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uf472eaa3-60f3-48b5-8084-617c2b83bbb&title=)
