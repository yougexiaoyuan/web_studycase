
JavaScript实战案例，编写练习打字速度的小游戏，Web入门适合初学者。<br />#Web入门 #Javascript #实战案例 #编程 #初学者 #程序员
<a name="oNypq"></a>
# **案例介绍**
欢迎来到我的小院，我是霍大侠，恭喜你今天又要进步一点点了！<br />我们来用JavaScript编程实战案例，制作提高打字速度的小游戏-调皮的字母。点击与屏幕上字母相对应的按键，若按键与出现的字母一致，则可以获得相应的分数。
<a name="g4Vok"></a>
# **案例演示**
根据屏幕上随机出现的字母来点击键盘上对应的按键，可自行调节字母下落的速度以及时间间隔，还会有分数统计。<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668992911191-1a9961ce-e625-4c79-88e2-99af0a815a65.png#averageHue=%238db790&clientId=u9730b67d-ea9e-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u630b376a&margin=%5Bobject%20Object%5D&originHeight=1769&originWidth=3198&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u706a3f93-c225-4808-87e6-2ee2fa7b533&title=)<br />![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668992911083-f2a656c7-b9d7-493f-9268-5b20f1cab034.png#averageHue=%2335d462&clientId=u9730b67d-ea9e-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ue514dabc&margin=%5Bobject%20Object%5D&originHeight=1774&originWidth=3190&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u5b9aae4b-21e0-49c7-ac79-55bccca5a97&title=)
<a name="EuMCM"></a>
# **源码学习**
进入核心代码学习，我们先来看HTML中的核心代码。
```
<!-- 有个小院-兴趣编程 -->
<body>
    <!-- onkeydown 事件会在用户按下一个键盘按键时发生keydown()事件 -->
    <input type="text" id="input" onkeydown="keydown()">
    <div id="ground">
        <label for="interval">生成间隔:</label>
        <input type="number" id="interval" value="100">
        <br>
        <label for="speed">下落速度:</label>
        <input type="number" id="speed" value="5">
        <input type="button" value="重新开始" onclick="gameStart()">
        <input type="button" value="重置时间" onclick="location.reload()">
        <p id="hint">3</p>
        <p id="score">分数: <span id="scorenum">0</span></p>
    </div>
    <!-- 主体部分 -->
    <div id="container"></div>
    <script src="../js/调皮的字母.js"></script>
</body>
```
然后再让我们来看CSS核心代码，CSS主要是对要页面部件的样式进行设置。
```
*{
    margin: 0;
    padding: 0;
    overflow: hidden;
}
#input{
    display:block;
    width: 100%;
    height: 100%;
    position:absolute;
    cursor: default;
    background: rgb(156, 83, 83);
}
/* 底部的显示 */
#ground{
    width: 100%;
    height:200px;
    position:absolute;
    padding-top: 80px;
    bottom:0;
    background-color: #4d292c;
}
/* 下落的字母 */
.stone{
    background-size: 100% 100%;
    position:absolute;
    bottom:1200px;
    width: 80px;
    height:80px;
    text-align: center;
    line-height:80px;
    font-size: 40px;
    color:white;
    overflow:hidden;
    transform-origin: center;
}
label{
    color: white;
    margin-left: 20px;
}
input[type="number"] {
    width:100px;
    height: 40px;
    font-size: 30px;
    margin-top: 30px;
}
input[type="button"] {
    padding-left:10px;
    width: 200px;
    padding-right: 10px;
    height: 50px;
    font-size: 18px;
    margin-left: 300px;
}
/* 提示 */
#hint{
    position: absolute;
    top:10px;
    right: 10px;
    font-size: 35px;
    color:red;
}
/* 分数的显示 */
#score{
    position: absolute;
    top:60px;
    left:50%;
    text-align: center;
    font-size: 30px;
    color:white;
}
```

让我们来编写核心的JavaScript代码，首先声明相关的变量。通过countdown()方法设置时间倒计时，分数初始化为0。getElementById()方法获取id对应的组件。设置定时器，并在每次游戏重新开始前对定时器进行清除。random()方法获取随机字母以及随机位置，并将字母添加到容器里。for()循环遍历每一个字母修改属性，设置游戏结束的位置。removeChild()方法移除最前面的字母，更新分数。
```
//有个小院-兴趣编程
// 生成字母的间隔
var interval = 50;
// 计数，如果和间隔一样就下落
var time = interval;
// 下落的速度
var speed = 5;
// 判断游戏是否结束
var gameOver = false;
// 生成的字符从这里随机取
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 作为setInterval的返回值
var down;
// 分数
var score = 0;
// 开始倒计时
function countdown() {
    score = 0;
    document.getElementById('scorenum').innerHTML = score;
    // 倒计时3，2，1
    let hint = document.getElementById('hint');
    // 倒计时
    var countTime = 3;
    // 设置定时器
    let count = setInterval(() => {
        hint.innerHTML = countTime;
        if (!countTime) {
            clearInterval(count);
            hint.innerHTML = '游戏开始！';
            document.getElementById('input').focus();
            down = setInterval(fall, 20);
        }
        countTime -= 1;
    }, 500);
}
countdown();
// 字母下降
function fall() {
    let stones = document.getElementsByClassName('stone');
    // 如果次数达到设定的值，生成一个新的字母
    if (time == interval) {
        let newStone = document.createElement('div');
        newStone.setAttribute('class', 'stone');
        // 随机字符
        newStone.innerHTML = str[Math.round(Math.random() * 25)];
        // 随机位置
        newStone.style.left = `${Math.round(Math.random() * 80) + 10}%`
        // 获取容器
        let container = document.getElementById('container');
        // 把生成的字母添加到容器里
        container.appendChild(newStone);
        time = 0;
    }
    // 遍历每一个字母，修改属性，实现下落
    for (let i = 0; i < stones.length; i++) {
             // 计算下落的距离，赋值给style.bottom
        let distance = parseInt(getComputedStyle(stones[i]).bottom) - speed;
        stones[i].style.bottom = `${distance}px`;
        // 距离小于 150px 表示接触到地板，游戏结束
        if (distance < 260) {
            document.getElementById('hint').innerHTML = '游戏结束！'
            gameOver = true;
            clearInterval(down);
        }
    }
    time ++;
}
// 按下按键触发的事件
function keydown() {
    // 晚1ms清空input里的字符，不然有可能清空失败
    setTimeout(() => {
        document.getElementById('input').value = '';
    }, 1);
    // 如果游戏结束，停止触发
    if (gameOver)
        return;
    // 遍历所有的字母，如果和键盘输入的值相同则移除最前面的字母
    let stones = document.getElementsByClassName('stone');
    for (let i = 0; i < stones.length; i++) {
        // 判断字母的值是否和键盘输入的值相同
        if (arguments.callee.caller.arguments[0].key.toUpperCase() == stones[i].textContent) {
            let die = stones[i];
            die.innerHTML = '';
            setTimeout(() => {
                die.parentElement.removeChild(die);
                die = null;
            }, 300);
            // 更新分数
            score ++;
            document.getElementById('scorenum').innerHTML = score;
            break;
        }
    }
}
// 按下 重新开始键 触发的事件
function gameStart() {
    // 如果游戏没结束则不能重新开始，防止下落抖动
    if (!gameOver)
        return;
    // 从输入框获取各项参数
    interval = document.getElementById('interval').value;
    time = interval;
    speed = document.getElementById('speed').value;
    // 清空容器里的字母
    let container = document.getElementById('container');
    while (container.children.length) {
        container.children[0].remove();
    }
    gameOver = false;
    countdown();
}
```

记得关注我，每天学习一点点
<a name="w07qs"></a>
# **你觉得这个游戏，最吸引你的地方在哪里？**
![](https://cdn.nlark.com/yuque/0/2022/png/34388852/1668992911134-71ad0228-ca3f-468f-b95d-d013bc4cc318.png#averageHue=%23525252&clientId=u9730b67d-ea9e-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u0953bdf5&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1920&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u9dd8fc87-3255-4659-8c52-6f66542dfc1&title=)
