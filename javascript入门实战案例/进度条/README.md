<a name="DuC8a"></a>
# 
![](https://cdn.nlark.com/yuque/0/2022/jpeg/34403478/1669362473535-22c0f367-943c-4a9b-8c83-62953d28f4ab.jpeg#averageHue=%23ebfaed&clientId=u16aec5a8-c1c2-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u29695b13&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ucbe133ea-21d9-4d36-88b8-345f89ba553&title=)
<a name="kCpze"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个进度条。进度条数字自动增加，条状图片动画演示进度完成度。通过实战我们将学会函数function，作用域。
<a name="TWWdx"></a>
# **案例演示**
进度条自动变化，数字自动增加，条状图片动画演示进度完成度。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362473549-eac288ab-1ef3-4189-baa9-e0aa594910a9.png#averageHue=%23020101&clientId=u16aec5a8-c1c2-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u5015883e&margin=%5Bobject%20Object%5D&originHeight=720&originWidth=1280&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u2fe479af-4e82-426f-af47-32696c82e42&title=)
<a name="kl4eV"></a>
# **案例设计**
[JavaScript实战案例-进度条](https://docs.qq.com/mind/DTFdidXBlSXlJSWNa)<br />我们来看此案例的思维导图设计，包括需求描述，页面设计和技术架构。<br />其中架构设计包含了HTML，CSS，JavaScript 共三部分代码。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362473435-dc6ead84-090f-4f35-9d83-75f247da23f0.png#averageHue=%23d6e7d0&clientId=u16aec5a8-c1c2-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=udda9af05&margin=%5Bobject%20Object%5D&originHeight=412&originWidth=709&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u2c438056-a5b2-401c-a630-827109c7e79&title=)
<a name="aBjhn"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<!-- 有个小院-兴趣编程 -->
<div class="container">
  <h1>有个小院-进度条</h1>
  <div class="counter">0%</div>
  <hr class="loading-bar-back"/>
  <hr class="loading-bar-front"/>
</div>
```
然后我们来编写核心的JavaScript代码，通过querySelector获取HTML元素的信息；设置初始进度为0；编写更新进度数字函数，设置HTML元素为进度数字+%，进度数字+1，如果进度数字小于101，则每隔20毫秒刷新数字。
```javascript
//有个小院-兴趣编程
const counterEl=document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");
let idx=0;
updateNum();
function updateNum(){
  counterEl.innerText=idx+"%";
  barEl.style.width=idx+"%";
  idx++;
  if(idx<101){
    setTimeout(updateNum,20);
  }
}

```
<a name="VmljL"></a>
# **总结思考**
**学习点**<br />1、函数就是包裹在花括号中的代码块，前面使用了关键词 function，具体结构如下：
```javascript
function functionname()
{
    // 执行代码
}

```
当调用该函数时，会执行函数内的代码。<br />可以在某事件发生时直接调用函数（比如当用户点击按钮时），并且可由 JavaScript 在任何位置进行调用。<br />2、作用域是可访问变量的集合，变量在函数内声明，变量为局部变量，具有局部作用域。<br />局部变量如下：
```javascript
// 此处不能调用 Name 变量
function myFunction() {
    var Name = "test";
    // 函数内可调用 Name 变量
}

```
全局变量如下：
```javascript
var Name = "test";
 
// 此处可调用 Name 变量
function myFunction() {
    // 函数内可调用 Name 变量
}

```


**问答**<br />1、创建函数使用关键词 function对吗？<br />2、作用域是可访问变量的集合对吗？

关注我，跟着我每天学习一点点，让你不再枯燥，不再孤单..

**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
