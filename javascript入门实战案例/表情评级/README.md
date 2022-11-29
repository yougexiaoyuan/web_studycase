

<a name="Addy6"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个表情评价程序。用户打星进行评价，表情会根据具体星星数量发生变化。
<a name="m1Ojr"></a>
# **案例演示**
点击星星可以进行满意程度评价，星星数量变换表情也会随之变换。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1668672299202-aa44c46e-796c-4bf6-a380-8448a7a29bd6.png#averageHue=%23feef01&clientId=ua2e0f713-8a7b-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u8c72144b&margin=%5Bobject%20Object%5D&originHeight=720&originWidth=1280&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u7ccf78a3-da07-454e-832e-48813946e11&title=)
<a name="iwKRU"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<!-- 有个小院-兴趣编程 -->
<div class="feedback-container">
  <div class="emoji-container">
    <i class="far fa-angry fa-3x"></i>
    <i class="far fa-frown fa-3x"></i>
    <i class="far fa-meh fa-3x"></i>
    <i class="far fa-smile fa-3x"></i>
    <i class="far fa-laugh fa-3x"></i>
  </div>
  <div class="rating-container">
    <i class="fas fa-star fa-2x active"></i>
    <i class="fas fa-star fa-2x"></i>
    <i class="fas fa-star fa-2x"></i>
    <i class="fas fa-star fa-2x"></i>
    <i class="fas fa-star fa-2x"></i>
  </div>
</div>
```
让我们来编写核心的JavaScript代码，通过querySelector和querySelectorAll绑定HTML元素；<br />设置表情变换的颜色数组；设置表情初始为索引为0的表情；利用forEach循环添加星星的点击事件，点击星星更新表情；编写更新表情的函数，利用forEach循环将星星和表情联系在一起；编写表情变化的代码，使用transform让表情进行横向转换，设置表情颜色。
```javascript
  //有个小院-兴趣编程
  const starsEl = document.querySelectorAll(".fa-star");
  const emojisEl = document.querySelectorAll(".far");
  const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];
  updateRating(0);
  starsEl.forEach((starEl, index) => {
  starEl.addEventListener("click", () => {
  updateRating(index);
  });
  });
  function updateRating(index) {
  starsEl.forEach((starEl, idx) => {
  if (idx < index + 1) {
  starEl.classList.add("active");
  } else {
  starEl.classList.remove("active");
  }
  });
  emojisEl.forEach((emojiEl) => {
  emojiEl.style.transform = `translateX(-${index * 50}px)`;
  emojiEl.style.color = colorsArray[index];
  });

  }

```

记得关注我，每天学习一点点
<a name="aOozS"></a>
# **你觉得面试时，会问这里面的技术点吗？**


**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
