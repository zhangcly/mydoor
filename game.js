// import './js/libs/weapp-adapter'
// import './js/libs/symbol'

// import Main from './js/main'

// new Main()

console.log("aaa");
const canvas = wx.createCanvas();
const context = canvas.getContext('2d') // 创建一个 2d context

//画第一个正方形
context.fillStyle = 'white' // 矩形颜色
var rect1W= canvas.width;
var rect1H = canvas.width;
var rect1X = 0;
var rect1Y = canvas.height/3;
context.fillRect(rect1X, rect1Y, rect1W, rect1H); 

var cycleR = rect1W / 3;

var cycle1X = rect1X;
var cycle1Y = rect1Y + rect1H/2;
context.moveTo(cycle1X, cycle1Y);
context.arc(cycle1X, cycle1Y, cycleR, 90 * Math.PI / 180, 270 * Math.PI / 180, true);
context.closePath();
context.stroke();
context.fillStyle = 'pink';
context.fill();

var cycle2X = rect1W;
var cycle2Y = rect1Y + rect1H / 2;
context.moveTo(cycle2X, cycle2Y);
context.arc(cycle2X, cycle2Y, cycleR, 90 * Math.PI / 180, 270 * Math.PI / 180, false);
context.closePath();
context.stroke();
context.fillStyle = 'pink';
context.fill();

var image = wx.createImage()
var imgX = canvas.width / 2 - 12.5
let imgY = 500
image.onload = function () {
  context.drawImage(image, imgX, imgY)
}
image.src = 'assets/peep.png'

var positionList = []
var shouldMove = false;
var direction = null;
wx.onTouchStart(function (res) {
  console.log("touch start")
  let touchX = res.changedTouches[0].clientX
  let touchY = res.changedTouches[0].clientY 
  if (touchX >= rightX && touchX <= rightX + 33 && touchY >= rightY && touchY <= rightY + 25 ){
    shouldMove = true;
    direction = 'right';
  }
  if (touchX >= leftX && touchX <= leftX + 33 && touchY >= leftY && touchY <= leftY + 25) {
    shouldMove = true;
    direction = 'left';
  }
  if (touchX >= upX && touchX <= upX + 25 && touchY >= upY && touchY <= upY + 33) {
    shouldMove = true;
    direction = 'up';
  }
  if (touchX >= downX && touchX <= downX + 25 && touchY >= downY && touchY <= downY + 33) {
    shouldMove = true;
    direction = 'down';
  }
  if (shouldMove) {
    context.clearRect(imgX, imgY, 25, 50);
    console.log(direction)
    console.log(imgX)
    console.log(imgY)
    if (direction == 'right') {
      imgX += 10;
      if (imgX >= (rect1W - 25)){        
        imgX = rect1W-25;
      }
      var dis = Math.sqrt((imgX - cycle2X) * (imgX - cycle2X) + (imgY - cycle2Y) * (imgY - cycle2Y));//Math.sqrt()求平方跟
      while (dis <= circleR) {
        return true;
      }
    }
    if (direction == 'left') {
      imgX -= 10;
      if (imgX <= rect1X) {
        imgX = rect1X;
      }
    }
    if (direction == 'up') {
      imgY -= 10; rect1X
      if (imgY <= rect1Y) {
        imgY = rect1Y;
      }
    }
    if (direction == 'down') {
      imgY += 10;
      if (imgY >= rect1Y + rect1H -50) {
        imgY = rect1Y + rect1H - 50;
      }
    }
    // positionList.put({
    //   x : imgX,
    //   y : imgY
    // })
    context.drawImage(up, upX, upY)
    context.drawImage(down, downX, downY)
    context.drawImage(right, rightX, rightY)
    context.drawImage(left, leftX, leftY)
    context.drawImage(image, imgX, imgY);
  }
})
wx.onTouchEnd(function(res){
  console.log("touch end")
  shouldMove = false;
  direction = null;
})

//画上箭头
var up = wx.createImage()
var upX = canvas.width / 2 - 12.5
let upY = 700
up.onload = function () {
  context.drawImage(up, upX, upY)
}
up.src = 'assets/up.png'

//画下箭头
var down = wx.createImage()
var downX = canvas.width / 2 - 12.5
let downY = 758
down.onload = function () {
  context.drawImage(down, downX, downY)
}
down.src = 'assets/down.png'

//画右箭头
var right = wx.createImage()
var rightX = 3 * canvas.width / 4 - 16.5
let rightY = 733
right.onload = function () {
  context.drawImage(right, rightX, rightY)
}
right.src = 'assets/right.png'

//画左箭头
var left = wx.createImage()
var leftX = canvas.width / 4 - 16.5
let leftY = 733
left.onload = function () {
  context.drawImage(left, leftX, leftY)
}
left.src = 'assets/left.png'