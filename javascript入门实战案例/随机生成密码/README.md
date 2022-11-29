<a name="iLd3F"></a>
# 
![](https://cdn.nlark.com/yuque/0/2022/jpeg/34403478/1669362174717-a84e2dd8-99fa-493a-9c82-2a1588fcbbcb.jpeg#averageHue=%23e3f7ea&clientId=u323ee5ec-f1bd-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uc90ffb1c&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue6014791-fb27-4e90-b5e9-877081f90b3&title=)
<a name="YJ9pd"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个随机密码生成器。用户点击生成，输入框内就会生成一个由数字、大小写字母、特殊符号随机组合而成的密码。通过实战我们将学会Math.floor方法、substring方法、clipboard.writeText方法。
<a name="LG41u"></a>
# **案例演示**
点击生成后，输入框内会随机生成一串密码，点击复制，会弹出复制成功的消息框。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362174744-5130b442-6b50-4e0d-9e36-5c61a68d837e.png#averageHue=%238bd38e&clientId=u323ee5ec-f1bd-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ue790bef4&margin=%5Bobject%20Object%5D&originHeight=720&originWidth=1280&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u1f464fdb-8381-4a72-a935-def8f1aeb33&title=)
<a name="SN59a"></a>
# **案例设计**
[JavaScript实战案例-随机生成密码](https://docs.qq.com/mind/DTG9UQmlsSlJwSkhZ)<br />我们来看此案例的思维导图设计，包括需求描述，页面设计和技术架构。<br />其中架构设计包含了HTML，CSS，JavaScript 共三部分代码。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669362174786-fa82eb3d-3661-42cb-87f5-49313d49af92.png#averageHue=%23d6e7d0&clientId=u323ee5ec-f1bd-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u0d3c7c4a&margin=%5Bobject%20Object%5D&originHeight=627&originWidth=903&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ud3ce94fc-2a2a-4c9e-9369-5797eb14caf&title=)
<a name="V4qvE"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<div class="password-container">
  <h2>随机生成密码</h2>
  <div class="input-container">
    <input type="text" id="input" class="input" placeholder="生成密码" readonly/>
    <i class="far fa-copy fa-2x"></i>
  </div>
  <button class="btn">生成</button>
</div>
<div class="alert-container active">复制密码</div>
```
然后我们来编写核心的JavaScript代码，通过querySelector获取HTML元素的信息；添加生成按钮的点击事件，点击生成按钮时创建密码；添加复制按钮的点击事件，点击复制按钮时复制密码，若输入框内不空则弹出复制成功的提示框；生成密码，密码内容从字符串中提取，密码长度12，循环生成密码，使用Math的floor和random方法获得随机数字，使用subString截取字符组成密码，将已生成的密码值设置为输入框和弹出框的内容；复制代码使用select和setSelectionRange让用户可以使用鼠标复制，或使用Clipboard接口的 writeText() 方法将密码写入操作系统的剪切板中。
```javascript
<script>
  //有个小院-兴趣编程
  const btnEl=document.querySelector(".btn");
const inputEl=document.getElementById("input");
const copyIconEl=document.querySelector(".fa-copy");
const alertContainerEl=document.querySelector(".alert-container");
btnEl.addEventListener("click",()=>{
  createPassword();
});
copyIconEl.addEventListener("click",()=>{
  copyPassword();
  if(inputEl.value){
    alertContainerEl.classList.remove("active");
    setTimeout(()=>{
      alertContainerEl.classList.add("active");
        },2000);
        }
        });
        function createPassword() {
        const chars="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const passwordLength=12;
        let password="";
        for(let index=0;index<passwordLength;index++){
        const randomNum=Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNum,randomNum+1);
        }
        inputEl.value=password;
        alertContainerEl.innerText=password+"已复制";
        }
        function copyPassword() {
        inputEl.select();
        inputEl.setSelectionRange(0,9999);
        navigator.clipboard.writeText(inputEl.value);
        }    </script>

```
<a name="aaIJQ"></a>
# **总结思考**
**学习点**<br />1、math.floor(x)返回小于参数x的最大整数。<br />2、substring(start,stop)：start是检索的开始位置,stop是检索的终止位置,返回结果中不包括stop所指字符。<br />3、Clipboard接口的 writeText() 方法可以写入特定字符串到操作系统的剪切板。

**问答**<br />1、math.floor(x)返回的整数吗？<br />2、substring返回结果中包不包括stop所指的字符？<br />3、writeText() 方法可以将特定字符写入操作系统的剪切板吗？

关注我，跟着我每天学习一点点，让你不再枯燥，不再孤单..

**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
