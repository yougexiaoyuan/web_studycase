<a name="UkuHB"></a>
# 
**案例介绍**<br />欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个推荐滑块。推荐滑块展示内容，每隔3秒自动变换。
<a name="GOXDu"></a>
# **案例演示**
运行程序后，出现推荐卡片，卡片上方有圆形头像，下方卡片进行介绍，每隔3秒自动变换。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1668597486690-3207be48-22b2-4faf-99e2-da7d86279a1a.png#averageHue=%23f2f5f4&clientId=u6896c7bb-f5c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u015d4b22&margin=%5Bobject%20Object%5D&originHeight=500&originWidth=806&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u3c6aa830-017e-4bee-aba7-db0c1019e6b&title=)![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1668597486669-24eb8350-5334-46df-bc32-51cd24867bb7.png#averageHue=%2399d5ce&clientId=u6896c7bb-f5c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uc12056c2&margin=%5Bobject%20Object%5D&originHeight=500&originWidth=806&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u64ecb54f-0b27-4c7c-a2a3-b07210bf09c&title=)
<a name="c6dZT"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<!-- 有个小院-兴趣编程 -->
<div class="testimonial-container">
  <img src="logo.png" alt="user-image"/>
  <p class="text">
    欢迎来到我的小院
  </p>
  <h4 class="username">有个小院</h4>
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
  font-family: cursive;
}

.testimonial-container {
  width: 500px;
  height: 100px;
  background-color: slateblue;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  min-width: 400px;
  padding: 70px 20px;
  margin: 5px;
  color: white;
  position: relative;
  }

  img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -50px;
  }

  .username {
  font-size: 13px;
  font-weight: 100;
  }

```
让我们来编写核心的JavaScript代码，编写推荐卡片的内容，name是下方显示的名字，photoUrl是图片地址，text是下方显示介绍；通过querySelector绑定HTML元素；设置索引为0，更新推荐；编写更新图片函数，获取名字、图片地址、介绍，将根据获取到的信息设置HTML的相应元素，索引+1；如果到最末尾，索引归0返回到最开始，每隔3秒更新。
```javascript
//有个小院-兴趣编程
const testimonials = [
  {
    name: "有个小院",
    photoUrl: "logo2.jpg",
    text: "欢迎来到我的小院",
  },
  {
    name: "小院里的霍大侠",
    photoUrl: "logo.png",
    text: "每天学习一点点，让你不再枯燥，不再孤单",
  }
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");
let idx = 0;
updateTestimonial();
function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
idx++;
if (idx === testimonials.length) {
idx = 0;
}
setTimeout(() => {
updateTestimonial();
}, 3000);
}
```


记得关注我，每天学习一点点
<a name="reXRd"></a>
# **你觉得这个案例还有什么地方能改进？**
![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1668597486784-313e91c6-14da-4276-87c5-ef3fb54fb057.png#averageHue=%23525252&clientId=u6896c7bb-f5c4-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uecbdb167&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u0fa4b6c1-e7d8-430b-9c8e-a57c928e91b&title=)
