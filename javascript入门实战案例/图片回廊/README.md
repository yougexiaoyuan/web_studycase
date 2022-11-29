<a name="odXf6"></a>
# 
![](https://cdn.nlark.com/yuque/0/2022/jpeg/34403478/1669362984742-34dc9907-c922-40dd-9960-aa4c0f2cb162.jpeg#averageHue=%23e9f8ec&clientId=u37f6f4fe-573d-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u709bcd1b&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u0527eda6-542c-4fd8-a8bc-89aaf2695ee&title=)
<a name="JbXME"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个图片回廊。图片展示在页面上，用户可通过按钮手动旋转。通过实战我们将学会事件和EventListener知识。
<a name="o31Bn"></a>
# **案例演示**
图片立体展示在页面上，每隔3秒自动轮换图片，用户可通过按钮手动查看图片。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362984720-452756f4-72ea-4c3d-b7b7-e9a348fb7809.png#averageHue=%2326211c&clientId=u37f6f4fe-573d-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u0ecb58ed&margin=%5Bobject%20Object%5D&originHeight=727&originWidth=1371&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u64c8a732-93f3-44e5-aeee-bdccd4b5c9b&title=)
<a name="beCGx"></a>
# **案例设计**
[JavaScript实战案例-图片回廊](https://docs.qq.com/mind/DTGNJeElRZGxocXVH)<br />我们来看此案例的思维导图设计，包括需求描述，页面设计和技术架构。<br />其中架构设计包含了HTML，CSS，JavaScript 共三部分代码。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362984783-b7c89787-e34a-41f1-adb9-0c0bc126a7b5.png#averageHue=%23d6e7d0&clientId=u37f6f4fe-573d-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u839f828f&margin=%5Bobject%20Object%5D&originHeight=466&originWidth=754&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ubc565b85-9efe-47ac-931f-e2b08c418c9&title=)
<a name="bld9P"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<!-- 有个小院-兴趣编程 -->
<div class="image-container">
  <span style="--i: 1">
    <img src="1.jpg" />
  </span>
  <!-- 中间省略 -->
  <span style="--i: 8">
    <img src="8.jpg" />
  </span>
</div>
<div class="btn-container">
  <button class="btn" id="prev">前一个</button>
  <button class="btn-next" onclick="nextEvent()">下一个</button>
</div>
```
然后我们来编写核心的JavaScript代码，通过querySelector和getElementById获取HTML元素的信息；设置前一个按钮的点击事件，设置图片展示角度，点击按钮时停止自动转换，展示图片；编写下一个按钮的事件函数，设置图片展示角度，点击按钮时停止自动转换，展示图片；编写更新图片回廊的函数，设置图片3d转换属性值，设置图片每个3秒自动轮换。
```javascript
//有个小院-兴趣编程
const imageContainerEl=document.querySelector(".image-container");
const prevEl=document.getElementById("prev");
const nextEl = document.getElementById("next");
let x=0;
let timer;
prevEl.addEventListener("click",()=>{
  x=x+45;
  clearTimeout(timer);
  updateGallery();
});
                        function nextEvent(){
                        x=x-45;
                        clearTimeout(timer);
                        updateGallery();
                        }
                        function updateGallery(){
                        imageContainerEl.style.transform=`perspective(1000px) rotateY(${x}deg)`;
                        timer=setTimeout(()=>{
                        x=x-45;
                        updateGallery();
                        },3000);
                        }
                        updateGallery();

```
<a name="t3FTb"></a>
# **总结思考**
**学习点**<br />1、 事件：HTML 4 的新特性之一是可以使 HTML 事件触发浏览器中的行为，在事件触发时 JavaScript 可以执行一些代码。常见的事件：

| 事件 | 描述 |
| --- | --- |
| onchange | HTML 元素改变 |
| onclick | 用户点击 HTML 元素 |
| onmouseover | 鼠标指针移动到指定的元素上时发生 |
| onmouseout | 用户从一个 HTML 元素上移开鼠标时发生 |
| onkeydown | 用户按下键盘按键 |
| onload | 浏览器已完成页面的加载 |

2、EventListener：监听事件，可以添加和移除事件句柄

| 方法 | 描述 |
| --- | --- |
| addEventListener()  | 用于向指定元素添加事件句柄，且不会覆盖已存在的事件句柄 |
| removeEventListener()  | 移除由 addEventListener() 方法添加的事件句柄 |



**问答**<br />1、addEventListener() 会覆盖已存在的事件句柄吗？<br />2、onclick在用户点击HTML 元素时生效对吗？

关注我，跟着我每天学习一点点，让你不再枯燥，不再孤单..

**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
