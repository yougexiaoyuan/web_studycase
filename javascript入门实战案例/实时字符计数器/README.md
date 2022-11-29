<a name="Ny91Y"></a>
# 
<a name="UDG6t"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个实时字符计数器。用户在指定位置打字，程序实时显示字符数量。
<a name="WdOhD"></a>
# **案例演示**
在编辑框内输入字符，下方实时记录数字，且输入有数量限制，输入超出限制的字符后就无法再继续输入。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1668672479994-baf2efdf-fd04-4a9b-a410-9ab6e7e0d483.png#averageHue=%23f88577&clientId=u2d446ef8-d163-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u523af349&margin=%5Bobject%20Object%5D&originHeight=852&originWidth=1682&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u403c6645-5584-4cb6-8ed0-c6afbd02771&title=)
<a name="KNAYr"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>小院里的霍大侠</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- 有个小院-兴趣编程 -->
    <div class="container">
      <h2>有个小院-实时字符计数器</h2>
      <textarea
        id="textarea"
        class="textarea"
        placeholder="请在这里输入"
        maxlength="50"
        ></textarea>
      <div class="counter-container">
        <p>
          字符数：
          <span class="total-counter" id="total-counter"></span>
        </p>
        <p>
          字符总数:
          <span class="remaining-counter" id="remaining-counter"></span>
        </p>
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
```
然后再让我们来看CSS代码，由于CSS代码不是重点且数量较多在这里就不做过多介绍。
```css
body {
  margin: 0;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: salmon;
  font-family: cursive;
}

.container {
  background-color: lightpink;
  width: 400px;
  padding: 20px;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .textarea {
  resize: none;
  width: 100%;
  height: 100px;
  font-size: 18px;
  font-family: sans-serif;
  padding: 10px;
  box-sizing: border-box;
  border: solid 2px darkgray;
  }

  .counter-container {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  }

  .counter-container p {
  font-size: 18px;
  color: gray;
  }

  .total-counter {
  color: slateblue;
  }

  .remaining-counter {
  color: orangered;
  }

```
让我们来编写核心的JavaScript代码，通过getElementById绑定HTML元素；编写键盘事件，当用户敲击键盘输入字符，则更新字符数量；编写更新字符数量函数，设置字符数为文本框的输入字符长度，设置字符总数为文本框最大长度-字符数。
```javascript
//有个小院-兴趣编程
const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}


```

记得关注我，每天学习一点点
<a name="QU7Ed"></a>
# **你觉得这个案例还能应用到什么地方？**


**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
