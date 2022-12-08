<a name="KeUGU"></a>
# 
<a name="lRHRX"></a>
# ![CSS层叠上下文修改版2-封面.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/34403478/1669956628162-cb82bf28-66a2-4d73-8578-d5b2b9c4f792.jpeg#averageHue=%23e7f9e8&clientId=u04255417-dd58-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=u131ffb7f&margin=%5Bobject%20Object%5D&name=CSS%E5%B1%82%E5%8F%A0%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%AE%E6%94%B9%E7%89%882-%E5%B0%81%E9%9D%A2.jpg&originHeight=1920&originWidth=1080&originalType=binary&ratio=1&rotation=0&showTitle=false&size=88283&status=done&style=none&taskId=u83120626-4040-487f-8ea9-cdc5aeeaab5&title=)
<a name="buBD9"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用div标签进行层叠上下文的案例讲解，2个父元素标签内部各有一个子元素标签，不同参数下位置不同来演示z-index的作用。
<a name="pizhg"></a>
# **案例演示**
z-index为默认值时<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669956528294-01bdd6c2-173a-4819-aae7-fba02e628bf1.png#averageHue=%23c8fbc8&clientId=u04255417-dd58-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uaab33ed7&margin=%5Bobject%20Object%5D&originHeight=254&originWidth=352&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ubc44ede6-2686-4fca-adb5-9edc7116c07&title=)<br />仅设置DIV2时<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669956528253-1cb17c94-ce91-49f4-bd94-c79ec8025c15.png#averageHue=%23c7f9c7&clientId=u04255417-dd58-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u82714f6f&margin=%5Bobject%20Object%5D&originHeight=255&originWidth=354&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ub35ce9b4-6313-479f-b933-d004e3a925b&title=)<br />设置DIV4的z-index值且大于DIV2。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1669956528452-fc623d0c-dac1-41c1-b86f-d093f9039f56.png#averageHue=%23c7f9c7&clientId=u04255417-dd58-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u96c64b9d&margin=%5Bobject%20Object%5D&originHeight=257&originWidth=353&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u12766bbd-80f8-435b-b0ad-157c8bd1bd5&title=)
<a name="kiFOp"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```html
<!-- 有个小院-兴趣编程 -->
<!-- 绿色框1 -->
<div id="div1">
  <br /><span class="bold">DIV #1</span>
  <br />position: relative;
  <!-- 红框 -->
  <div id="div2">
    <br /><span class="bold">DIV #2</span>
    <br />position: absolute;
    <br />z-index: 1;
  </div>
</div>
<br />
<!-- 绿色框2 -->
<div id="div3">
  <br /><span class="bold">DIV #3</span>
  <br />position: relative;
  <!-- 紫框 -->
  <div id="div4">
    <br /><span class="bold">DIV #4</span>
    <br />position: absolute;
    <br />z-index: 2;
  </div>
</div>
```
然后再让我们来看CSS核心代码，CSS代码较多在这里就不过多介绍。
```css
//有个小院-兴趣编程
.bold {
  /* 设置字体加粗 */
  font-weight: bold;
  font: 12px Arial;
}
#div1,
#div3 {
  height: 80px;
  /* 定位方式 */
  position: relative;
  /* 边框样式背景色 */
  border: 1px dashed #669966;
  background-color: #ccffcc;
  padding-left: 5px;
}
#div2 {
  opacity: 0.8;
  /* 设置元素的堆叠顺序 */
  z-index: 1;
  position: absolute;
  /* 设置宽高边距 */
  width: 150px;
  height: 200px;
  top: 20px;
  left: 170px;
  border: 1px dashed #990000;
  background-color: #ffdddd;
  /* 居中字体 */
  text-align: center;
  }
  #div4 {
  opacity: 0.8;
  z-index: 2;
  position: absolute;
  width: 200px;
  height: 140px;
  top: 65px;
  left: 50px;
  border: 1px dashed #000099;
  background-color: #ddddff;
  text-align: left;
  padding-left: 10px;
  }

```

记得关注我，每天学习一点点
<a name="Bc9ha"></a>
# **你觉得这个案例知识点可以应用在什么地方？**

**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
