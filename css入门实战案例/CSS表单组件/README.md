<a name="zKEPU"></a>
# ![CSS表单组件.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/34403478/1670312719419-9c6a4cb7-3f67-4d57-9f65-4082274390b6.jpeg#averageHue=%23acd0bd&clientId=u9f7bfb9d-cd93-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=u363a753a&margin=%5Bobject%20Object%5D&name=CSS%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6.jpg&originHeight=1920&originWidth=1080&originalType=binary&ratio=1&rotation=0&showTitle=false&size=78271&status=done&style=none&taskId=uf8a62f07-5b45-4620-8631-a6e46314ddc&title=)
<a name="dw9Fx"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用CSS编程实战案例，使用<ul><li></li></ul>列表标签完成一个下拉菜单样式的表单部件。
<a name="oSnzb"></a>
# **案例演示**
运行代码后在浏览器弹出由<ul><li></li></ul>标签组成的下拉菜单样式的列表。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34403478/1670312676977-4be4b50d-d865-4062-9b86-49c03a0edc47.png#averageHue=%23227655&clientId=u9f7bfb9d-cd93-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u7e2966ca&margin=%5Bobject%20Object%5D&originHeight=405&originWidth=720&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u6d33ead9-fc3f-47d3-97b7-d8cb0c19b12&title=)
<a name="QiinR"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML模板中的代码。
```html
<!-- 有个小院-兴趣编程 -->
<div class="select active">
  <span class="value">Cherry</span>
  <ul class="optList">
    <li class="option highlight">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```
然后再让我们来看CSS核心代码。
```css
/* 有个小院-兴趣编程 */
*{
  padding: 0px;
  margin: 0px;
}
/* 设置背景色 */
body{
  background-color: #227755;
}
.select {
  /* 设置边框外边距 */
  margin-top: 200px;
  margin-left: 500px;
  /* div为相对定位 */
  position: relative;
  /* div设置为行内块元素 */
  display : inline-block;
}

/* 选择类名为.select元素内的所有类名为.optList的元素 */
.select .optList {
  position: absolute;
  top     : 100%;
  left    : 0;
}

.select .optList.hidden {
  max-height: 0;
  /* 元素不可见 */
  visibility: hidden;
}

/* 设置span标签样式及背景 */
.select {
  /* 字体样式设置 */
  font-size   : 0.625em; /* 10px */
  font-family : Verdana, Arial, sans-serif;

  /* -moz-box-sizing : border-box; */
  box-sizing : border-box;

  padding : 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width   : 10em; /* 100px */

  border        : 0.2em solid #000; /* 2px */
  /* 添加圆角边框 */
  border-radius : 0.4em; /* 4px */

  box-shadow : 0 0.1em 0.2em rgba(0, 0, 0, .45); /* 0 1px 2px */

  background : #F0F0F0;
  background : -webkit-linear-gradient(90deg, #E3E3E3, #fcfcfc 50%, #f0f0f0);
  background : linear-gradient(0deg, #E3E3E3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display  : inline-block;
  width    : 100%;
  /* 溢出隐藏 */
  overflow : hidden;
  /* 文本不进行换行 */
  white-space   : nowrap;
  text-overflow : ellipsis;
  vertical-align: top;
  }

  /* 设置下拉框三角标志样式 */
  .select:after {
  content : "▼";
  position: absolute;
  /* 设置元素的堆叠顺序 */
  z-index : 1;
  height  : 100%;
  width   : 2em; /* 20px */
  top     : 0;
  right   : 0;

  padding-top : .1em;

  -moz-box-sizing : border-box;
  box-sizing : border-box;

  text-align : center;

  border-left  : .2em solid #000;
  border-radius: 0 .1em .1em 0;

  background-color : #000;
  color : #FFF;
  }

  /* 设置列表背景样式 */
  .select .optList {
  z-index : 2;
  /* 设置列表项目样式为不使用项目符号，去掉默认样式黑点 */
  list-style: none;
  margin : 0;
  padding: 0;
  /* 设置背景色边框样式 */
  background: #f0f0f0;
  border: .2em solid #000;
  border-top-width : .1em;
  border-radius: 0 0 .4em .4em;

  box-shadow: 0 .2em .4em rgba(0,0,0,.4);

  -moz-box-sizing : border-box;
  box-sizing : border-box;

  min-width : 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
  }

  .select .option {
  padding: .2em .3em;
  }

  .select .highlight {
  background: #000;
  color: #FFF;
  }


```

记得关注我，每天学习一点点
<a name="Wb1N5"></a>
# **你觉得这个案例结果可以应用在什么地方？**


**全网可搜：小院里的霍大侠， 免费获取简单易懂的实战编程案例。编程/就业/副业/创业/资源。**<br />私微信：huodaxia_xfeater<br />二维码： [http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg](http://www.yougexiaoyuan.com/images/weixin_huodaxia.jpg)<br />公众号：有个小院（微信公众号：yougexiaoyuan）<br />github：yougexiaoyuan (视频源码免费获取)<br />（部分素材来源于互联网，如有保护请联系作者）
