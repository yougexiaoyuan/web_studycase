<a name="UsaHP"></a>
# 
![](https://cdn.nlark.com/yuque/0/2022/jpeg/34403478/1669362098046-8379349e-6caa-40b7-bce8-be0cd87f3952.jpeg#averageHue=%23e9f7eb&clientId=u1157b59d-b184-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u18d4dd97&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ud07584c4-f618-4297-ab95-93309f69e2b&title=)
<a name="VL5cN"></a>
# **案例介绍**
欢迎来的我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个鼠标爱心特效。鼠标在页面移动时会出现彩色爱心特效。通过实战我们将学会createElement方法、appendChild方法、setTimeout方法。
<a name="XiqSO"></a>
# **案例演示**
页面出现后，鼠标在页面上移动产生彩色爱心特效。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362097985-b3cf0e37-f407-4526-ab72-2118bb5302f5.png#averageHue=%230c0805&clientId=u1157b59d-b184-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u41012564&margin=%5Bobject%20Object%5D&originHeight=720&originWidth=1280&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue256a96a-2953-49c4-a321-28242fa0baf&title=)
<a name="rMISj"></a>
# **案例设计**
[JavaScript实战案例-鼠标特效](https://docs.qq.com/mind/DTFdxdGt0QmNpUHZk)<br />我们来看此案例的思维导图设计，包括需求描述，页面设计和技术架构。<br />其中架构设计包含了HTML，CSS，JavaScript 共三部分代码。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362098113-a7adf24c-80af-4821-8274-3abed63db374.png#averageHue=%23d6e6d0&clientId=u1157b59d-b184-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uf0b30543&margin=%5Bobject%20Object%5D&originHeight=420&originWidth=793&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ub7f61f61-941b-4388-b691-77b4291f11b&title=)
<a name="fXpER"></a>
# **源码学习**
进入核心代码学习，我们先来看CSS中的核心代码。
```css
@keyframes animate {
  0% {
    transform: translate(-50%, -50%);
    opacity: 1;
    filter: hue-rotate(0);
  }
  100% {
    transform: translate(-50%, -5000%);
    opacity: 0;
    filter: hue-rotate(720deg);
  }
}
```
然后我们来编写核心的JavaScript代码，通过offsetX和offsetY获取鼠标位置，在所获得的位置上创建一个span元素，使用random函数生成大小不等的爱心，使用appendChild向body中添加新创建的span元素，使用setTimeout设置爱心显示的间隔。
```javascript
<script>
  //有个小院-兴趣编程
  const bodyEI=document.querySelector("body");
bodyEI.addEventListener("mousemove",(event)=>{
  const xPos=event.offsetX;
  const yPos=event.offsetY;
  const spanEI=document.createElement("span");
  spanEI.style.left=xPos+"px";
  spanEI.style.top=yPos+"px";
  const size=Math.random()*100;
  spanEI.style.width=size+"px";
  spanEI.style.height=size+"px";
  bodyEI.appendChild(spanEI);
  setTimeout(()=>{
  spanEI.remove();
  },3000);
  });
</script>

```
<a name="fvWPk"></a>
# **总结思考**
**学习点**<br />1、createElement() 方法通过指定名称创建一个元素。<br />2、appendChild() 方法可向节点的子节点列表的末尾添加新的子节点。<br />3、setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。

**问答**<br />1、setTimeout() 方法指定的是秒数还是毫秒数？<br />2、createElement() 方法可以通过指定名称来创建一个元素吗？ 

关注我，跟着我每天学习一点点，让你不在枯燥，不在孤单..

**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
