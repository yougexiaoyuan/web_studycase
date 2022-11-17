
JavaScript实战案例，编写大转盘，解决选择带来的烦恼，Web入门适合初学者。<br />#Web入门 #JavaScript #实战案例 #编程 #初学者 #程序员
<a name="jEFHg"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，做一个大转盘。当你难以抉择的时候不妨用这个案例来帮你做选择。通过编程实战我们可以学到按钮的点击事件onclick()以及定时器的使用.
<a name="IK0e8"></a>
# **案例演示**
每个选择都展示在不同的盒子里，通过点击中间的开始选择按钮，系统就会在5s内自动为您做出选择。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668667869702-11965963-cb47-46e2-9e8a-66258a840533.png#averageHue=%23f7f0f0&clientId=uf2f6b736-f645-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u5a45182e&margin=%5Bobject%20Object%5D&originHeight=1261&originWidth=1257&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u89b6b608-755c-42e3-bcf0-99cc58876a5&title=)![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668667869671-e1cd773d-171d-4601-9d8c-f1fd8ed24778.png#averageHue=%23f7e6d3&clientId=uf2f6b736-f645-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u1c39ecee&margin=%5Bobject%20Object%5D&originHeight=1260&originWidth=1263&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ud6e9c8bb-ba61-470c-9915-d72eb571370&title=)
<a name="UJYD9"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```
<!-- 有个小院-兴趣编程 -->
  <div class=big>
        <div class="option">大盘鸡</div>
        <div class="option">麻辣香锅</div>
        <div class="option">酸辣粉</div>
        <div class="option">兰州拉面</div>
        <div id="start">开始选择</div>
        <div class="option">疙瘩汤</div>
        <div class="option">鱼香肉丝</div>
        <div class="option">麻辣烫</div>
        <div class="option">咸菜</div>
    </div>
```
然后再让我们来看CSS核心代码，CSS代码主要是对盒子的大小等进行布局。
```
.big{
            width: 600px;
            height: 600px;
            border: 1px solid red;
        }
        .big>div{
            width:33%;
            height: 33%;
            border: 1px solid red;
            float: left;
            line-height: 200px;
            text-align: center;
            font-size: 30px;
            font-weight: bold;
        }
        #start{
            cursor: pointer;
            background-color: rgb(160, 110, 119);
        }
```

接下来进行核心的JavaScript代码编写，首先根据id和className获取对象。通过onclick设置中间按钮的点击事件，触发一个定时器setInterval()。然后通过random获取0-7的随机数作为索引，并据此将其索引对应的盒子设为选中的目标，设置选中的背景颜色。利用for循环取消之前盒子的选定，设置时间点timer用于停止定时器。
```
//有个小院-兴趣编程
        let but=document.getElementById("start");
        let options=document.getElementsByClassName("option");
        let timer=null;
        but.onclick=function(){
            let num=0;
            if(timer==null){
            timer=setInterval(()=>{
                num++;
           let ran= Math.round(Math.random()*(7-0)+0);
        for(let i=0;i<options.length;i++){
            options[i].style.backgroundColor='white';
        }
           options[ran].style.backgroundColor='orange';
            if(num>=50){
                clearInterval(timer);
                timer=null;
            }
        },100);
    }          
 }
```

记得关注我，每天学习一点点
<a name="oQiTU"></a>
# **你觉得大转盘还能用在什么地方？**
![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668667869702-44c96677-e729-424c-9cc2-0069770e7f65.png#averageHue=%23525252&clientId=uf2f6b736-f645-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ud663ac12&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u9bddf855-a33f-4466-95f8-4d01e2d3a0f&title=)
