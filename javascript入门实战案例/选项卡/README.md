<a name="qtuP2"></a>
# 
<a name="FzjyC"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个选项卡。选项卡展示内容，可以放置多个选项卡，展示多个内容。
<a name="jGIox"></a>
# **案例演示**
运行程序后，页面出现3个选项卡，每个可展示不同内容。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1668672726711-7b6fef8f-10a4-4976-af2c-e2391d72aa8d.png#averageHue=%23b5c6ed&clientId=u4603240d-6dd8-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u214f1ef8&margin=%5Bobject%20Object%5D&originHeight=500&originWidth=1000&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u7a9ee010-bf6e-4344-819b-1c9dad5aced&title=)
<a name="zjjox"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<!-- 有个小院-兴趣编程 -->
<div class="section-center">
  <div class="tabs">
    <div class="btn-container">
      <button class="button live" data-id="step1">卡片1</button>
      <button class="button" data-id="step2">卡片2</button>
      <button class="button" data-id="step3">卡片3</button>
    </div>
    <div class="tabs-content">
      <div class="content live" id="step1">
        <h3>卡片1</h3>
        <p>欢迎来到我的小院</p>
      </div>
      <div class="content" id="step2">
        <h3>卡片2</h3>
        <p>每天学习一点点</p>
      </div>
      <div class="content" id="step3">
        <h3>卡片3</h3>
        <p>让你不再枯燥，不再孤单</p>
      </div>
    </div>
  </div>
</div>
```
然后再让我们来看CSS代码，由于CSS代码不是重点且数量较多在这里就不做过多介绍。
```css
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #f5abc9;
  color: grey;
}

img {
  display: block;
  width: 100%;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  min-width: 340px;
  padding: 5rem 0;
}

.image {
  margin-bottom: 2rem;
}
img {
  border-radius: 0.5rem;
  object-fit: cover;
  height: 30rem;
}
.tabs {
  background: #ffe5e2;
  border-radius: 0.5rem;
  grid-template-rows: auto 1fr;
}
.btn-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.button:nth-child(1) {
  border-top-left-radius: 0.5rem;
}
.button:nth-child(3) {
  border-top-right-radius: 0.5rem;
}
.button {
  padding: 1rem 0;
  border: none;
  font-size: 1rem;
  background: #b6c9f0;
  cursor: pointer;
  transition: all 0.3s linear;
  letter-spacing: 0.25rem;
}
.button:hover:not(.live) {
  background: #e93b81;
  color: white;
}
.tabs-content {
  padding: 2rem 1.5rem;
}
/* hide content */
.content {
  display: none;
}
.button.live {
  background: #ffe5e2;
}
.content.live {
  display: block;
}

@media (min-width: 992px) {
.image {
margin-bottom: 0;
}

.section-center {
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 2rem;
}
}

```
让我们来编写核心的JavaScript代码，通过querySelector和querySelectorAll绑定HTML元素；设置选项卡的点击事件，获取点击时的选项卡id，如果id存在，从其他按钮中删除所选内容，给id所在添加内容，使用foreach循环隐藏其他文章，通过getElementById绑定id的HTML元素，给所在的HTML元素添加内容。
```javascript
//有个小院-兴趣编程
const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");
tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });
    e.target.classList.add("live");
    articles.forEach(function (article) {
      article.classList.remove("live");
    });
    const element = document.getElementById(id);
    element.classList.add("live");
  }
});

```

记得关注我，每天学习一点点
<a name="CHz8J"></a>
# **你觉得这个案例还能使用什么方法实现？**


**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
