<a name="wnDhE"></a>
# 
<a name="elGBM"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个问题模块。展示问题，点击按钮可看到问题答案。
<a name="YwUfM"></a>
# **案例演示**
运行程序后，页面出现问题卡片，点击加号按钮，卡片延伸看到问题的答案。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1668672641264-70cbd0ae-b25e-43b7-827b-0565279048b0.png#averageHue=%23f5f4f4&clientId=u6c155c18-d026-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u9b6effa3&margin=%5Bobject%20Object%5D&originHeight=391&originWidth=896&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uc556e198-a0c2-4ffb-a714-d14427a4c79&title=)
<a name="vND50"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<!-- 有个小院-兴趣编程 -->
<section class="questions">
  <div class="section-center">
    <article class="question">
      <div class="question-title">
        <p>你想学习编程吗？</p>
        <button type="button" class="question-btn">
          <span class="plus-icon">
            <i class="far fa-plus-square"></i>
          </span>
          <span class="minus-icon">
            <i class="far fa-minus-square"></i>
          </span>
        </button>
      </div>
      <div class="question-text">
        <p>
          欢迎来到我的小院。
          有个小院是一个兴趣编程的学习社群，
          旨在帮助对编程感兴趣的朋友，
          可以帮助学习者，找到编程开发工作，
          掌握编程技能等等。
          霍大侠从事多年的互联网产品开发和教育工作，
          希望通过兴趣编程的方法，教大家学习编程开发。 
          通过上手开发有趣项目的形式，产生一个迭代开发学习的过程。
        </p>
      </div>
    </article>
  </div>
</section>
```
然后再让我们来看CSS代码，由于CSS代码不是重点且数量较多在这里就不做过多介绍。
```css
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #ebebeb;
}

p {
  margin-bottom: 1.25rem;
  color: grey;
}

.section-center {
  width: 90vw;
  margin: 50px auto 0;
  max-width: 620px;
}
.question {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 1.5rem 0 1.5rem;
  margin-bottom: 2rem;
}
.question-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  padding-bottom: 1rem;
}

.question-title p {
  letter-spacing: 0.1rem;
  color: yellowgreen;
  font-weight: bolder;
}
.question-btn {
  font-size: 1.5rem;
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  color: yellowgreen;
}

.question-text {
  padding: 1rem 0 1.5rem 0;
  border-top: 1px solid grey;
}

/* hide text */
.question-text {
  display: none;
}
.show-text .question-text {
  display: block;
}
.minus-icon {
  display: none;
}
.show-text .minus-icon {
  display: inline;
}
.show-text .plus-icon {
  display: none;
}

```
让我们来编写核心的JavaScript代码，通过querySelectorAll绑定HTML元素；使用forEach循环<br />设置按钮的点击事件，如果点击按钮则展示文字。
```javascript
//有个小院-兴趣编程
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    question.classList.toggle("show-text");
  });
});

```

记得关注我，每天学习一点点
<a name="WxgeX"></a>
# **你觉得这个案例除了使用在问题及回答上还能应用在什么地方？**


**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
