<a name="AbLcj"></a>
# 
![](https://cdn.nlark.com/yuque/0/2022/jpeg/34403478/1669361863070-f310b507-70c9-4ad8-b371-bbf07ee29ec1.jpeg#averageHue=%23e0f4e9&clientId=u853a8fcc-3c7b-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ubb772c9d&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uce5e4fec-3f21-4d57-8054-02594f609ef&title=)
<a name="ESy26"></a>
# **案例介绍**
欢迎来的我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个小日历。小日历主要展示年份、月份、星期和日期。通过实战我们将学会getElementById方法、toLocaleString方法和innerText属性。
<a name="VPQyr"></a>
# **案例演示**
运行程序后会在页面出现一个小日历，日历的月份和星期是由汉字显示，日历的年份和日期是由阿拉伯数字显示。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669361863097-cedafa1d-df78-4c5f-949f-6ff20142e4b0.png#averageHue=%23edede4&clientId=u853a8fcc-3c7b-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u4f30d773&margin=%5Bobject%20Object%5D&originHeight=472&originWidth=563&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u665d29fb-5eb4-42a0-9b39-23c7dbb3fb9&title=)
<a name="iDHRe"></a>
# **案例设计**
[JavaScript实战案例-小日历](https://docs.qq.com/mind/DTERJTmFjZ2ZNTmVI)<br />我们来看此案例的思维导图设计，包括需求描述，页面设计和技术架构。<br />其中架构设计包含了HTML，CSS，JavaScript 共三部分代码。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669361863246-8a102939-06c2-47b7-ae8d-d041f5052e1b.png#averageHue=%23d6e7d0&clientId=u853a8fcc-3c7b-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uab28ff90&margin=%5Bobject%20Object%5D&originHeight=627&originWidth=837&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u71318d59-dfb0-4bc4-a7cc-3b34b028a51&title=)
<a name="HgQCQ"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<div class="calendar-container">
  <p class="month-name" id="month-name">月份</p>
  <p class="day-name" id="day-name">星期</p>
  <p class="day-number" id="day-number">日</p>
  <p class="year" id="year">2022</p>
</div>
```
然后我们来编写核心的JavaScript代码，通过getElementById获得指定id的对象，也就是当点击三个按钮时，触发增加减少的逻辑功能。
```javascript
const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthNameEl.innerText = date.toLocaleString("zh", {
  month: "long",
  });

  dayNameEl.innerText = date.toLocaleString("zh", {
  weekday: "long",
  });

  dayNumEl.innerText = date.getDate();

  yearEl.innerText = date.getFullYear();

```
<a name="SNfok"></a>
# **总结思考**
**学习点**<br />**getElementById**：根据指定的 id 属性值得到对象。<br />**toLocaleString**：用于返回格式化对象后的字符串。<br />**innerText**：获取或设置指定元素标记内的文本的值。

**问答**<br />1、 getElementById获取对象需要指定什么？<br />2、toLocaleString返回的是什么？<br />3、innerText可以设置指定元素标记内的文本的值吗？

关注我，跟着我每天学习一点点，让你不在枯燥，不在孤单..

**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
