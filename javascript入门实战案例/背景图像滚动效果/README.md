<a name="MLkCX"></a>
# 
![](https://cdn.nlark.com/yuque/0/2022/jpeg/34403478/1669362316147-49d45816-36c4-4ccf-8fa3-ae2e43263d7c.jpeg#averageHue=%23e9f8ec&clientId=u843d84de-55c7-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u33b6118f&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u38b5c8f7-8d74-4d64-880e-2ea525c0208&title=)
<a name="XjgUg"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个背景图像滚动效果。滚动鼠标背景图像缩小，下方滑动出现文字。通过实战我们将学会obj.opacity方法、pageYOffset属性、obj.style.backgroundSize方法。
<a name="yYFGR"></a>
# **案例演示**
向下滚动鼠标，背景图片缩小显示文字。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362316140-0911b029-681d-41aa-bd1a-2d596cf7a74e.png#averageHue=%23f9f8f7&clientId=u843d84de-55c7-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u89bdc4e6&margin=%5Bobject%20Object%5D&originHeight=941&originWidth=1860&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ufeabb0e8-cea4-4843-bee4-25c715dcc41&title=)
<a name="PBJG3"></a>
# **案例设计**
[JavaScript实战案例-背景图像滑动](https://docs.qq.com/mind/DTEp5ek9uc0lLWkZr)<br />我们来看此案例的思维导图设计，包括需求描述，页面设计和技术架构。<br />其中架构设计包含了HTML，CSS，JavaScript 共三部分代码。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362316135-09938251-9bcb-455d-8cb2-c099de301cdd.png#averageHue=%23d6e7d0&clientId=u843d84de-55c7-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ud8e007f8&margin=%5Bobject%20Object%5D&originHeight=466&originWidth=910&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u5eb259e0-4d71-4efc-b16e-60bb4ec8b0b&title=)
<a name="Ziy4a"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<!-- 有个小院-兴趣编程 -->
<div class="bg-image" id="bg-image"></div>
<div class="container">
  <h1>有个小院-兴趣编程</h1>
  <p>
    有个小院是一个兴趣编程的学习社群，旨在帮助对编程感兴趣的朋友，可以帮助学习者，
    找到编程开发工作，掌握编程技能等等。
  </p>
  <p>
    霍大侠从事多年的互联网产品开发和教育工作，希望通过兴趣编程的方法，教大家学习编程开发。
    通过上手开发有趣项目的形式，产生一个迭代开发学习的过程。
  </p>
  <!-- 多个p元以下省略 -->
</div>
```
然后我们来编写核心的JavaScript代码，通过getElementById获取背景图片信息，添加滑动事件，设置背景图片的透明度，设置背景图片的大小。
```javascript
//有个小院-兴趣编程
const bgImageEl=document.getElementById("bg-image");
addEventListener("scroll",()=>{
  updateImage();
});
function updateImage() {
  bgImageEl.opacity=1-pageYOffset/900;
  bgImageEl.style.backgroundSize=160-pageYOffset/12+"%";
}

```
<a name="KDC8P"></a>
# **总结思考**
**学习点**<br />1、obj.opacity：设置透明度。<br />2、pageYOffset：pageYOffset 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。pageYOffset属性相等于scrollY属性。这些属性是只读的。<br />3、obj.style.backgroundsize：设置背景图片的大小。

**问答**<br />1、pageYOffset是只读的吗？<br />2、obj.style.backgroundsize是用来设置背景图片的大小的吗？

关注我，跟着我每天学习一点点，让你不再枯燥，不再孤单..

**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
