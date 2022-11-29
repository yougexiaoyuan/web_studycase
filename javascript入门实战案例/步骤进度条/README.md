<a name="wLXji"></a>
# 
<a name="sZPWs"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个步骤进度条。进度条展示步骤进度情况。
<a name="aVKdL"></a>
# **案例演示**
运行程序后，步骤进度条，点击箭头向前或向后展示进行步骤，同时上方图标变化。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1668673052253-e4de8d48-5da5-43f1-a751-ac5825d2eb04.png#averageHue=%23feef01&clientId=u3c2e12f6-44b8-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u239bb7d7&margin=%5Bobject%20Object%5D&originHeight=720&originWidth=1000&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue056baa6-422a-47c7-8069-faf8f708d3f&title=)
<a name="eBlGu"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<!-- 有个小院-兴趣编程 -->
<div class="container">
  <div class="progress-container">
    <hr class="progress-bar-back" />
    <hr class="progress-bar-front" />
    <div class="step checked">
      <i class="fas fa-check"></i>
      <small>开始</small>
    </div>
    <div class="step">
      <i class="fas fa-times"></i>
    </div>
    <div class="step">
      <i class="fas fa-times"></i>
    </div>
    <div class="step">
      <i class="fas fa-times"></i>
    </div>
    <div class="step">
      <i class="fas fa-times"></i>
    </div>
  </div>
  <button class="btn" id="prev" disabled>
    <i class="fas fa-arrow-left"></i>
  </button>
  <button class="btn" id="next"><i class="fas fa-arrow-right"></i></button>
</div>
```
然后再让我们来看CSS代码，由于CSS代码不是重点且数量较多在这里就不做过多介绍。
```css
body {
  margin: 0;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: yellow;
}

.container {
  text-align: center;
}

.progress-container {
  width: 500px;
  display: flex;
  position: relative;
  justify-content: space-between;
}

.progress-bar-back {
  position: absolute;
  height: 4px;
  width: 100%;
  background-color: lightgray;
  border: none;
  z-index: -1;
  margin: 0;
  top: 50%;
  transform: translateY(-50%);
}
.progress-bar-front {
  position: absolute;
  height: 4px;
  width: 0%;
  background-color: green;
  border: none;
  z-index: -1;
  margin: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.4s linear width;
  }

  .step {
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid lightgray;
  color: lightgray;
  }

  .step.checked {
  color: green;
  border-color: green;
  transition: all 0.4s linear;
  transition-delay: 0.3s;
  }

  .step.checked small {
  position: absolute;
  bottom: -20px;
  font-family: cursive;
  }

  .btn {
  background-color: slateblue;
  border: none;
  color: white;
  padding: 10px 20px;
  margin: 70px 10px 0;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .btn:hover {
  opacity: 0.9;
  }

  .btn:active {
  transform: scale(0.97);
  }

  .btn:disabled {
  background-color: lightgray;
  }

  @media (max-width: 500px) {
  .progress-container {
  width: 90vw;
  }
  }

```
让我们来编写核心的JavaScript代码，绑定html元素；设置初始索引为1，添加下一个按钮的点击事件，索引+1，如果索引超出进度条长度则停留在最末尾，更新进度条；添加上一个按钮的点击事件，索引-1，如果索引小于进度条长度则停留在最前端，更新进度条；编写更新函数，使用foreach循环设置图标和图标下文字，如果在最前端则显示开始，如果在最后端则显示结束，都不是则显示步骤+索引；设置进度条的图标变化。
```javascript
//有个小院-兴趣编程
const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const progressEl = document.querySelector(".progress-bar-front");
const stepsEl = document.querySelectorAll(".step");
let currentChecked = 1;
nextEl.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepsEl.length) {
    currentChecked = stepsEl.length;
  }
  updateStepProgress();
});

prevEl.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  stepsEl.forEach((stepEl, idx) => {
    if (idx < currentChecked) {
      stepEl.classList.add("checked");
      stepEl.innerHTML = `
      <i class="fas fa-check"></i>
      <small>${
      idx === 0
      ? "开始"
      : idx === stepsEl.length - 1
      ? "结束"
      : "步骤 " + idx
      }</small>
      `;
      } else {
      stepEl.classList.remove("checked");
      stepEl.innerHTML = `
      <i class="fas fa-times"></i>
      `;
      }
      });

      const checkedNumber = document.querySelectorAll(".checked");

      progressEl.style.width =
      ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100 + "%";

      if (currentChecked === 1) {
      prevEl.disabled = true;
      } else if (currentChecked === stepsEl.length) {
      nextEl.disabled = true;
      } else {
      prevEl.disabled = false;
      nextEl.disabled = false;
      }
      }
```

记得关注我，每天学习一点点
<a name="LWHby"></a>
# **你觉得这个案例还能再精简吗？**


**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
