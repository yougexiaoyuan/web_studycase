
CSS实战案例，编写提示信息的小程序，适合CSS入门初学者。<br />该案例可以很好的帮助初学者理解css的属性信息，可以更直观地看出效果展示。<br />#CSS #实战案例 #编程 #初学者 #程序员<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668994170280-683a38fe-eff2-46f5-9ca1-c7877183eab7.png#averageHue=%23f3f2f2&clientId=u1365a54d-94cd-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u3e9ff39a&margin=%5Bobject%20Object%5D&originHeight=382&originWidth=761&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u00a07345-3ae7-4e67-a794-39db3a5af80&title=)
<a name="EEuOb"></a>
# **案例介绍**

欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用CSS相关属性知识，做一个提示信息的案例。根据文字指示，将鼠标放到指定的位置，就可以弹出提示信息。鼠标离开后，提示信息隐藏。通过实战我们将学会z-index、opacity、visibility、transition属性。
<a name="umf3O"></a>
# **案例演示**

运行程序后，根据提示信息将鼠标移动到指定位置，弹出提示信息，离开则提示信息隐藏。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668994170287-c2ae8a6b-3dc9-475b-a533-062a1509563f.png#averageHue=%23fcfbfb&clientId=u1365a54d-94cd-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u044f1d3c&margin=%5Bobject%20Object%5D&originHeight=394&originWidth=876&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u5e5dad84-0080-410b-8b87-b1e5c9cd124&title=)<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668994170382-5b1b68ca-4744-4ba3-93e2-3f107b8fe6eb.png#averageHue=%23f3f3f3&clientId=u1365a54d-94cd-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u0e135b58&margin=%5Bobject%20Object%5D&originHeight=380&originWidth=803&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u5c985f78-bcd7-4f6e-aabe-d833b48540d&title=)
<a name="BHkrn"></a>
# **案例设计**

[CSS实战案例-提示信息](https://docs.qq.com/mind/DZUhId2NWaUZCSlpT?newPad=1&newPadType=clone&u=5b5b2034cd76415cbeb8cf858e2776c2)<br />我们来看此案例的思维导图设计，包括需求描述，页面设计和设计架构。<br />其中架构设计包含了HTML，CSS 共两部分代码。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668994170246-855563a1-edbc-4e79-8480-81f3176cbec3.png#averageHue=%23d8e9d2&clientId=u1365a54d-94cd-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ua49edea4&margin=%5Bobject%20Object%5D&originHeight=1191&originWidth=2379&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u2330f057-dfb3-4270-9fce-bb298d54402&title=)
<a name="b2WH9"></a>
# **源码学习**

进入核心代码学习，我们先来看HTML中的核心代码。主要是对指示信息以及父本样式的设置。
```
<!-- 有个小院-兴趣编程 -->
<body style="text-align: center;">
    <h2>提示工具</h2>
    <p style="font-size: 18px;">鼠标移动到以下文本:</p>

    <div class="tip">鼠标移动到这里
     <a class="tiptext">你真棒,继续保持!</a>
    </div>
</body>
```

接下来是核心的css代码，该部分主要是对部件样式的改变，首先设置盒子的样式，设置盒子为相对定位，并为其设置下划虚线。然后对弹出的信息部分在鼠标未经过的情况下进行设置，position为绝对定位，这样设置visibility为隐藏的时候，不会出现空位。z-index的数值为1，默认为0，数越大弹出的时候越在上面。设置元素为opacity=0完全透明，并进行transition设置动画效果。鼠标经过时设置为不透明且提示信息可见。

```
<!-- 有个小院-兴趣编程 -->
/* 盒子样式 */
.tip{
    /* 设置定位为相对定位:移动后原来的地方不动 */
    position: relative;
    width: 150px;
    font-size: 16px;
    /*内边距:上下为4px 左右自动*/
    margin: 4px auto;
    /* 字体下边1px黑色虚线 */
    border-bottom: 1px dotted black;
}
/* 弹出的部分 */
.tiptext{
    /* 设置该部分隐藏 */
    visibility: hidden;
    background-color: #555;
    text-align: center;
    width: 150px;
    color: #fff;
    /* 圆角的大小 */
    border-radius: 6px;
    /* 绝对定位:移动位置后原来位置可以被占 */
    position: absolute;
    /* 到盒子左侧60px处 */
    margin-left: -60px;
    /* 内边距上下5px，左右自动 */
    padding: 5px 0;
    /* 当元素之间重叠的时候，z-index 较大的元素会覆盖较小的元素在上层进行显示。 */
    z-index: 1;
    bottom: 125%;
    left: 40%;
    /* 元素完全透明 (即元素不可见). */
    opacity: 0;
    /* 动画效果:opacity效果保持1s */
    transition: opacity 1s;
}
/*鼠标经过时样式的展示*/
.tip:hover .tiptext{
    /* 元素完全不透明 (即元素后面的背景不可见). */
    opacity: 1;
    /* 元素可见 */
    visibility: visible;
```

<a name="W9Can"></a>
# **总结思考**

**学习点**<br />1、** visibility属性**：显示或隐藏元素而不更改文档的布局。该属性还可以隐藏 <table> 中的行或列。<br />2、**z-index属性**：当元素之间重叠的时候，z-index 较大的元素会覆盖较小的元素在上层进行显示。<br />3、** opacity属性**：指定了一个元素的不透明度，当属性值不为 1 时，会把元素放置在一个新的层叠上下文中。

**问答**

1、 z-index属性是值越大越在上层进行显示吗？<br />2、 opacity属性是用来指定了一个元素的不透明度的吗？<br />关注我，跟着我每天学习一点点，让你不在枯燥，不在孤单..![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668994170323-2dd72276-a4e2-486f-8f23-d4bc1d617f7a.png#averageHue=%23525252&clientId=u1365a54d-94cd-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ua5581b28&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u0722fdd4-0c60-4f77-9a49-632f260838f&title=)
