<a name="EBd1m"></a>
# 
![](https://cdn.nlark.com/yuque/0/2022/jpeg/34403478/1669362388322-c059c703-4944-4a60-8111-e17d60c9ae91.jpeg#averageHue=%23ecfaee&clientId=u42e99ca7-7fc4-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u9d33f331&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u2be93533-961c-4ae2-a854-3b3f53264c6&title=)
<a name="BpjhQ"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个计数器。点击按钮数字改变，点击重置数字归0。<br />通过实战我们将学会forEach循环、contains方法、textContent属性。
<a name="ASBbo"></a>
# **案例演示**
点击加号按钮数字增加，点击减号数字减少，数字可为负数，点击重置数字归0。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362388270-d31e373f-35cf-4cc8-9019-2633a66f807e.png#averageHue=%23fafaf9&clientId=u42e99ca7-7fc4-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u06f7eb5b&margin=%5Bobject%20Object%5D&originHeight=383&originWidth=423&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ua7338b5b-4fb3-4e13-836e-ca7959a9d0a&title=)
<a name="Tp0J9"></a>
# **案例设计**
[JavaScript实战案例-计数器](https://docs.qq.com/mind/DTG9JRFdPSVpaZVRF)<br />我们来看此案例的思维导图设计，包括需求描述，页面设计和技术架构。<br />其中架构设计包含了HTML，CSS，JavaScript 共三部分代码。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362388288-4e741533-d912-4e72-9ed7-d980f11aab3b.png#averageHue=%23d6e7d0&clientId=u42e99ca7-7fc4-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u5199aa96&margin=%5Bobject%20Object%5D&originHeight=520&originWidth=785&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u1e5bef24-e859-46cf-92f9-54880785df1&title=)
<a name="ncpjV"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<!-- 有个小院-兴趣编程 -->
<main>
  <div class="set">
    <h2>有个小院-计数器</h2>
    <span class="value">0</span>
    <div>
      <button class="btn btn-danger decrease"><i class="fa fa-minus" aria-hidden="true"></i> </button>
      <button class="btn btn-secondary reset">重置</button>
      <button class="btn btn-success increase"><i class="fa fa-plus" aria-hidden="true"></i> </button>
    </div>
  </div>
</main>
```
然后我们来编写核心的JavaScript代码，设置数字初始值为0；通过querySelector获取HTML元素信息；使用forEach循环获得点击按钮情况，添加按钮点击事件，如果点击减少按钮则数字减少，如果点击增加按钮则数字增加，反之数字归0；设置HTML文本内容为数字，当数字大于0时，文本颜色为绿色；当数字小于0时，文本颜色为红色；当数字等于0时，文本颜色为黑色。
```javascript
//有个小院-兴趣编程
let num=0;
const value=document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
btns.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    const styles=e.currentTarget.classList;
    if(styles.contains("decrease")){
      num--;
    }else if(styles.contains("increase")){
      num++;
    }else{
      num=0;
    }
    value.textContent=num;
      if(num>0){
      value.style.color="green";
      }else if(num<0){
      value.style.color="red";
      }else{
      value.style.color="black";
      }
      });
      });

```
<a name="fHkge"></a>
# **总结思考**
**学习点**<br />1、foreach 语句为数组或对象集合中的每个元素重复一个嵌入语句组。foreach 语句用于循环访问集合以获取所需信息，但不应用于更改集合内容以避免产生不可预知的副作用。<br />2、contains() 方法用于判断字符串中是否包含指定的字符或字符串。<br />3、textContent 属性设置或者返回指定节点的文本内容。

**问答**<br />1、foreach 语句只适用于数组或对象集合中吗？<br />2、contains() 方法可以用于判断字符串中是否包含指定的字符串吗？<br />3、textContent 属性可以设置指定节点的文本内容吗？

关注我，跟着我每天学习一点点，让你不再枯燥，不再孤单..

**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
