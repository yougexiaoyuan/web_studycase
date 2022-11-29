<a name="E6uyD"></a>
# 
![](https://cdn.nlark.com/yuque/0/2022/jpeg/34403478/1669362009313-829b97db-5069-4d5f-826d-8d02b8d43e78.jpeg#averageHue=%23ebf9ed&clientId=u066a28e8-7e21-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ubbc939fa&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uaa1b68fc-6266-428a-824b-7c1db25fef3&title=)
<a name="ufph4"></a>
# **案例介绍**
欢迎来的我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个粘性导航。移动页面导航仍在页面上方。通过实战我们将学会scrollY属性、offsetTop和offsetHeight属性。
<a name="j0bvj"></a>
# **案例演示**
运行程序后，页面上方出现导航栏，向下移动导航栏仍在页面上方，当移动到一定位置时，导航栏变色。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362009305-0ee6a5f5-546d-46eb-92e9-dffaa27a8450.png#averageHue=%237a8291&clientId=u066a28e8-7e21-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u80daa596&margin=%5Bobject%20Object%5D&originHeight=936&originWidth=1862&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u99ac458c-1ebb-450b-8f2a-eee485623ef&title=)<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362009300-f9882d0b-20e5-4e3a-b261-f804e9d270b2.png#averageHue=%23e6e6e5&clientId=u066a28e8-7e21-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u451652be&margin=%5Bobject%20Object%5D&originHeight=936&originWidth=1862&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u9c34fa08-00fc-4b3a-ab3e-c49d7c8909f&title=)
<a name="QWqVI"></a>
# **案例设计**
[JavaScript实战案例-粘性导航](https://docs.qq.com/mind/DTEVzWG5jS0NhbU5x)<br />我们来看此案例的思维导图设计，包括需求描述，页面设计和技术架构。<br />其中架构设计包含了HTML，CSS，JavaScript 共三部分代码。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362009432-d163731b-4b68-42fc-8943-1c54eff2024c.png#averageHue=%23d6e7d0&clientId=u066a28e8-7e21-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u58aec566&margin=%5Bobject%20Object%5D&originHeight=627&originWidth=783&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u280f4cae-2024-4a10-bdae-cb4b3617fdb&title=)
<a name="Afwya"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<!-- 有个小院-兴趣编程 -->
<div class="navbar">
  <a href="#"><img src="logo.png"/></a>
  <ul>
    <li><a href="#">课程</a></li>
    <li><a href="#">项目</a></li>
    <li><a href="#">关于我们</a></li>
  </ul>
</div>
<div class="top-container">
  <h1>欢迎来到我的小院</h1>
</div>
<div class="bottom-container">
  <p class="text">
    有个小院是一个兴趣编程的学习社群，旨在帮助对编程感兴趣的朋友，
    可以帮助学习者，找到编程开发工作，掌握编程技能等等。
  </p>
  <p class="text">
    霍大侠从事多年的互联网产品开发和教育工作，希望通过兴趣编程的方法，
    教大家学习编程开发。 通过上手开发有趣项目的形式，产生一个迭代开发学习的过程。
  </p>
  <!-- 多个<p>元素以下省略 -->
</div>
```
然后我们来编写核心的JavaScript代码，使用querySelector获取导航和底部文字信息，添加滚动事件，让导航栏滚动过顶部图片后就变成黑色，如果没有滚过或返回顶部就变回白色。
```javascript
<script>
  //有个小院-兴趣编程
  const navbarEI=document.querySelector(".navbar");
const bottomContainerEI=document.querySelector(".bottom-container");
addEventListener("scroll",()=>{
  if(scrollY>bottomContainerEI.offsetTop-navbarEI.offsetHeight-50){
    navbarEI.classList.add("active");
  }else{
    navbarEI.classList.remove("active");
  }
});
</script>

```
<a name="y92KD"></a>
# **总结思考**
**学习点**<br />1、scrollY属性：返回当前页面或者文档向向上滚动的尺寸<br />2、offsetTop属性：返回当前元素相对于 offsetParent 节点顶部边界的偏移像素值<br />返回值包含:<br />元素顶部偏移的像素值，元素的外边距（margin）<br />offsetParent 元素的顶部内边距（padding）、边框（border）及滚动条<br />3、offsetHeight属性：返回该元素的像素高度，高度包含内边距（padding）和边框（border）

**问答**<br />1、offsetTop的返回值包不包含margin？<br />2、offsetHeight的返回值包含padding和border吗？

关注我，跟着我每天学习一点点，让你不在枯燥，不在孤单..

**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
