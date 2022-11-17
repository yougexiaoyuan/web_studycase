
JavaScript实战案例，编写监测鼠标移动小程序，Web入门适合初学者。<br />#Web入门 #JavaScript #实战案例 #编程 #初学者 #程序员<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668670703216-6be97598-ad04-491f-b715-1bf6de5e9abc.png#averageHue=%2300008b&clientId=u649e984a-bca0-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u8cf7c67d&margin=%5Bobject%20Object%5D&originHeight=1089&originWidth=1787&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue2836150-0167-48bc-b3c5-612d25751c8&title=)
<a name="MI3Cs"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个鼠标移动案例。通过鼠标在桌面上的移动可以改变两个盒子里显示的鼠标所处X,Y坐标的数值。通过实战我们将学会innerHTML属性、点击事件addEventListener以及querySelector()方法。
<a name="X5m6N"></a>
# **案例演示**
运行程序后，我们通过移动鼠标在桌面上的位置可以清楚的看到显示鼠标X,Y坐标位置的数字发生变化。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668670703358-2ddb4ddd-bba1-4cd2-9f89-7a20eba4cb69.png#averageHue=%2300008b&clientId=u649e984a-bca0-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u895a778e&margin=%5Bobject%20Object%5D&originHeight=1106&originWidth=1892&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ua82d2043-cb70-4d45-865a-5fbaef73b1b&title=)<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668670703623-c8297b73-028f-4032-9ade-87328c3a2898.png#averageHue=%2300008b&clientId=u649e984a-bca0-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u8707a8be&margin=%5Bobject%20Object%5D&originHeight=1104&originWidth=1894&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue9dee1da-e89a-41d3-b718-5750bf9c7ac&title=)
<a name="NHjJ8"></a>
# **案例设计**
[JavaScript实战案例-鼠标点击](https://docs.qq.com/mind/DZWtKY1l3S0NPU1Jz?u=0286baac112a4ebeaf462d8cd990b8bc&newPad=1&newPadType=clone)<br />我们来看此案例的思维导图设计，包括需求描述，页面设计和设计架构。<br />其中架构设计包含了HTML，CSS，JavaScript 共三部分代码。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668670703181-74dffef8-1dad-4f79-80c9-8d9858abf706.png#averageHue=%23d6e7d0&clientId=u649e984a-bca0-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u1ec39b0d&margin=%5Bobject%20Object%5D&originHeight=629&originWidth=946&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u1fd3aa66-a409-4b93-a9d8-136b9d6c100&title=)
<a name="eAbNe"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。主要是对两个盒子的编码。
```
<div class="container">
      <div class="mouse-event">
        20
        <h4>Mouse X Prosition(px)</h4>
      </div>
      <div class="mouse-event">
        20
        <h4>Mouse Y Prosition(px)</h4>
      </div>
    </div>
```
通过querySelector() 方法返回文档中与指定选择器或选择器组匹配的第一个 Element对象。通过addEventListener添加mousemove事件，通过调用innerHTML将当前元素的内容替换为新的内容进而将旧的坐标替换成新获取的坐标。
```
const containerEl = document.querySelector(".container");
window.addEventListener("mousemove", (event) => {
  containerEl.innerHTML = `
        <div class="mouse-event">
        ${event.clientX}
        <h4>Mouse X Prosition(px)</h4>
      </div>
      <div class="mouse-event">
        ${event.clientY}
        <h4>Mouse Y Prosition(px)</h4>
      </div>
  `;
});
```

<a name="ePjV2"></a>
# **总结思考**

**学习点**<br />1、**innerHTML**：可以用来检查当前页面自最初加载到当前的 HTML 源码的变化，将当前元素的内容替换为新的内容。如果要向一个元素中插入一段 HTML，而不是替换它的内容，那么请使用<br />insertAdjacentHTML()方法。<br />2、**addEventListener**：可以实现监听事件功能。<br />3、**querySelector**：仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。

**问答**<br />1、要插入一段 HTML使用insertAdjacentHTML()方法？<br />2、addEventListener可以实现监听事件功能？<br />3、querySelector返回匹配指定选择器的第一个元素？


关注我，跟着我每天学习一点点，让你不在枯燥，不在孤单..![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668670703193-c78046d3-77d2-4756-aae0-3c0a77792dd7.png#averageHue=%23525252&clientId=u649e984a-bca0-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u2ab15739&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u01e6e7c0-6661-4911-8389-d289564a8d9&title=)
