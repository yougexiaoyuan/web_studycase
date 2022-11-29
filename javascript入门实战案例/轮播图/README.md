<a name="fkKM7"></a>
# 
![](https://cdn.nlark.com/yuque/0/2022/jpeg/34403478/1669362254893-f8893c27-31bf-416f-b14c-b5e67b3c0abe.jpeg#averageHue=%23ebfbee&clientId=u6d16c574-0002-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u8af8652b&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ua53b8971-2edb-4ddc-80ba-deee16d18d8&title=)
<a name="XEeWt"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个轮播图。图片每3秒自动轮换，也可以点击左右按键轮播图片，当图片到达最左端或最右端时，再点击左右键图片弹回最初始的图片或最末尾的图片。通过实战我们将学会clearTimeout方法、object.style.transform方法。
<a name="KdJxX"></a>
# **案例演示**
图片每隔3秒会自动轮播，用户也可以点击左右键轮播图片。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362254843-a3aaa78b-e3f5-4769-8bf3-db00fd490f14.png#averageHue=%23d2bba7&clientId=u6d16c574-0002-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u9d1f8068&margin=%5Bobject%20Object%5D&originHeight=402&originWidth=654&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u128883e9-c0e1-41eb-ab8d-93dbb6b9a08&title=)
<a name="HuHRU"></a>
# **案例设计**
[JavaScript实战案例-轮播图](https://docs.qq.com/mind/DTEZ3cWJadXFKUVJh)<br />我们来看此案例的思维导图设计，包括需求描述，页面设计和技术架构。<br />其中架构设计包含了HTML，CSS，JavaScript 共三部分代码。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362254998-b8c58964-5acc-462e-86c3-6d82b55a8c81.png#averageHue=%23d6e7d0&clientId=u6d16c574-0002-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u1bc6f975&margin=%5Bobject%20Object%5D&originHeight=519&originWidth=797&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uaa5c4f80-b3be-404e-9e20-62c3f01fbf4&title=)
<a name="rr7OH"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<!-- 有个小院-兴趣编程 -->
<div class="slider-container">
  <div class="image-container">
    <img src="https://picsum.photos/id/237/500/300" alt="image" />
    <img src="https://picsum.photos/id/1/500/300" alt="image" />
    <img src="https://picsum.photos/id/10/500/300" alt="image" />
    <img src="https://picsum.photos/id/20/500/300" alt="image" />
    <img src="https://picsum.photos/id/200/500/300" alt="image" />
  </div>
  <i class="fas fa-angle-double-left btn prev"></i>
  <i class="fas fa-angle-double-right btn next"></i>
</div>
```
然后我们来编写核心的JavaScript代码，通过querySelector获取HTML元素的信息；设置初始图片位置；添加下一个按键的点击事件，点击后图片向后更换，并暂停自动轮播；添加前一个按键的点击事件，点击后图片向前更换，并暂停自动轮播；编写自动轮播函数，如果图片到底，就返回初始图片，图片在最开始，仍向前查看则返回最末尾图片，设置图片轮播动画。
```javascript
//有个小院-兴趣编程
const nextEl=document.querySelector(".next");
const prevEl=document.querySelector(".prev");
const imgsEl=document.querySelectorAll("img");
const imageConatinerEl=document.querySelector(".image-container");
let currentImg=1;
let timeout;
nextEl.addEventListener("click",()=>{
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});
prevEl.addEventListener("click",()=>{
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});
updateImg();
function updateImg() {
  if(currentImg>imgsEl.length){
    currentImg=1;
  }else if(currentImg<1){
    currentImg=imgsEl.length;
  }
  imageConatinerEl.style.transform=`translateX(-${(currentImg-1)*500}px)`;
  timeout=setTimeout(()=>{
    currentImg++;
    updateImg();
  },3000);
}

```
<a name="iBe3P"></a>
# **总结思考**
**学习点**<br />1、clearTimeout() 方法可取消由 setTimeout() 方法设置的 timeout，以阻止setTimeout()方法执行函数。<br />2、object.style.transform设置transform 属性应用2D或3D转换。

**问答**<br />1、clearTimeout() 可以阻止setTimeout()方法执行函数吗？<br />2、object.style.transform是设置transform 属性的吗？

关注我，跟着我每天学习一点点，让你不再枯燥，不再孤单..

**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
