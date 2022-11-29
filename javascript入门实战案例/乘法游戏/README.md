<a name="VpKYm"></a>
# 
![](https://cdn.nlark.com/yuque/0/2022/jpeg/34403478/1669361946685-496744b6-218a-4dcc-b916-bc47acb7b24a.jpeg#averageHue=%23e8f8eb&clientId=ue7553a62-f539-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u7430a371&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u522a4caf-af5e-498b-a769-fdfcf25a971&title=)
<a name="x5rJo"></a>
# **案例介绍**
欢迎来的我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个乘法积分游戏。乘法游戏主要通过用户输入的数值和程序计算的数值进行对比，正确积一分，错误扣一分。通过实战我们将学会JSON.parse方法、JSON.stringify方法、localStorage.setItem方法和localStorage.getItem方法。
<a name="lrdrw"></a>
# **案例演示**
运行程序后用户根据题目在输入框内输入结果，点击提交后，系统判定，正确得分加一分，错误得分扣一分。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669361946643-d313987d-b1d1-41ce-8845-f3bcb6b7fea1.png#averageHue=%23fafa9f&clientId=ue7553a62-f539-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uaa0cebce&margin=%5Bobject%20Object%5D&originHeight=487&originWidth=663&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ubbb49713-288e-4292-8910-fa982df2c9f&title=)
<a name="GAFaq"></a>
# **案例设计**
[JavaScript实战案例-乘法游戏](https://docs.qq.com/mind/DTHRXUEhRcW9wbGFx)<br />我们来看此案例的思维导图设计，包括需求描述，页面设计和技术架构。<br />其中架构设计包含了HTML，CSS，JavaScript 共三部分代码。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669361946616-8076e473-4c5a-4edd-90ff-c064d3209499.png#averageHue=%23d6e7d0&clientId=ue7553a62-f539-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uafc1b475&margin=%5Bobject%20Object%5D&originHeight=735&originWidth=965&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ucaefe278-b31d-41b9-af8c-cf185182cd9&title=)
<a name="lq0hF"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<form class="form" id="form">
  <h4 class="score" id="score">得分</h4>
  <h1 id="question">1x1=?</h1>
  <input type="text"
    class="input"
    id="input"
    placeholder="输入你的答案"
    autofocus
    autocomplete="off"/>
  <button type="submit" class="btn">提交</button>
</form>
```
然后我们来编写核心的JavaScript代码，通过math随机生成数字，自由组成题目。通过getElementById获得指定id的对象，使用innerText将题目、得分设置在页面上。当用户点击提交时，将用户提交的结果和程序计算的结果进行比较，两者一样得分+1，两者不同得分-1。
```javascript
const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const questionEI=document.getElementById("question");
const inputEI=document.getElementById("input");
const formEI=document.getElementById("form");
const scoreEI=document.getElementById("score");
let score=JSON.parse(localStorage.getItem("score"));
  if(!score){
  score=0;
  }
  scoreEI.innerText=`得分：${score}`;
  questionEI.innerText=`${num1} X ${num2} = ?`;
  const correctAns=num1*num2;
  formEI.addEventListener("submit",()=>{
  const userAns=+inputEI.value;
  if(userAns===correctAns){
  score++;
  updateLocalStorage();
  }else{
  score--;
  updateLocalStorage();
  }
  });
  function updateLocalStorage() {
  localStorage.setItem("score",JSON.stringify(score));
  }

```
<a name="ovAUk"></a>
# **总结思考**
**学习点**<br />1、JSON.parse：将数据转换为 JavaScript 对象。<br />2、JSON.stringify：将 JavaScript 对象转换为字符串。<br />3、localStorage.setItem：将value存储到key字段<br />4、localStorage.getItem：获取指定key本地存储的值

**问答**<br />1、localStorage.setItem将什么存储到key字段？<br />2、JSON.stringify是将对象转换为字符串吗？<br />3、JSON.parse：将数据转换为什么对象？

关注我，跟着我每天学习一点点，让你不再枯燥，不再孤单..

**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
