// import './js/libs/weapp-adapter'
// import './js/libs/symbol'

// import Main from './js/main'

// new Main()

console.log("aaa");
const canvas = wx.createCanvas();
const context = canvas.getContext('2d') // 创建一个 2d context

function drawRect(context) {
  context.fillStyle = 'white' // 矩形颜色
  context.fillRect(rect1X, rect1Y, rect1W, rect1H);
}

//画第一个正方形
var rect1W = canvas.width;
var rect1H = canvas.width;
var rect1X = 0;
var rect1Y = canvas.height / 3;
drawRect(context);

var cycle1R = rect1W / 3;
var cycle2R = rect1W / 2 - 15;

var cycle1X = rect1X;
var cycle1Y = rect1Y + rect1H / 2;
var cycle2X = rect1W;
var cycle2Y = rect1Y + rect1H / 2;
var cycle3X = rect1X;
var cycle3Y = rect1Y + rect1H;
var cycle4X = rect1W;
var cycle4Y = rect1Y + rect1H;
var cycle3X = rect1X;
var cycle3Y = rect1Y + rect1H;
var cycle4X = rect1W;
var cycle4Y = rect1Y + rect1H;

function drawCycle1(context) {
  context.beginPath();
  context.moveTo(cycle1X, cycle1Y);
  context.arc(cycle1X, cycle1Y, cycle1R, 90 * Math.PI / 180, 270 * Math.PI / 180, true);
  context.closePath();
  context.stroke();
  context.fillStyle = 'pink';
  context.fill();
}

function drawCycle2(context) {
  context.beginPath();
  context.moveTo(cycle2X, cycle2Y);
  context.arc(cycle2X, cycle2Y, cycle1R, 90 * Math.PI / 180, 270 * Math.PI / 180, false);
  context.closePath();
  context.stroke();
  context.fillStyle = 'pink';
  context.fill();
}

function drawCycle3(context) {
  context.beginPath();
  context.moveTo(cycle3X, cycle3Y);
  context.arc(cycle3X, cycle3Y, cycle2R, 0 * Math.PI / 180, 270 * Math.PI / 180, true);
  context.closePath();
  context.stroke();
  context.fillStyle = 'pink';
  context.fill();
} 

function drawCycle4(context) {
  context.beginPath();
  context.moveTo(cycle4X, cycle4Y);
  context.arc(cycle4X, cycle4Y, cycle2R, 180 * Math.PI / 180, 270 * Math.PI / 180, false);
  context.closePath();
  context.stroke();
  context.fillStyle = 'pink';
  context.fill();
}
function drawCycle5(context) {
  context.beginPath();
  context.moveTo(cycle4X, cycle4Y);
  context.arc(cycle4X, cycle4Y, cycle2R, 180 * Math.PI / 180, 270 * Math.PI / 180, false);
  context.closePath();
  context.stroke();
  context.fillStyle = 'pink';
  context.fill();
}

function drawCycle6(context) {
  context.beginPath();
  context.moveTo(cycle4X, cycle4Y);
  context.arc(cycle4X, cycle4Y, cycle2R, 180 * Math.PI / 180, 270 * Math.PI / 180, false);
  context.closePath();
  context.stroke();
  context.fillStyle = 'pink';
  context.fill();
}


drawCycle1(context);
drawCycle2(context);

var image = wx.createImage()
var imgX = canvas.width / 2 - 12.5
let imgY = 500
image.onload = function () {
  context.drawImage(image, imgX, imgY)
}
image.src = 'assets/peep.png'

var door1X = canvas.width / 2 - 33;
var door2X = canvas.width / 2 - 33;
var door2Y = rect1Y + rect1W - Math.sqrt(cycle2R * cycle2R - (cycle2R + 15 - 20) * (cycle2R + 15- 20)) - 91;

function drawDoor1(canvas, context) {
  var door = wx.createImage()
  door.onload = function () {
    context.drawImage(door, door1X, rect1Y)
  }
  door.src = 'assets/door1.png'
}
function drawDoor2(canvas, context) {
  var door = wx.createImage()
  door.onload = function () {
    context.drawImage(door, door2X, door2Y)
  }
  door.src = 'assets/door1.png'
}
drawDoor1(canvas, context);

var keyX = canvas.width / 2 - 23.5;
var keyY = rect1Y + rect1H - 47;
function drawKey(canvas, context) {
  var door = wx.createImage()
  door.onload = function () {
    context.drawImage(door, keyX, keyY)
  }
  door.src = 'assets/key.png'
}
drawKey(canvas, context);

function isInDoor(imgX, imgY){
  console.log(imgX + "  " + imgY)
  if(imgY > rect1Y + 91){
    return false;
  }
  if (imgX < door1X -25) {
    return false;
  }
  if (imgX > door1X + 68) {
    return false;
  }
  return true;
}


function isInKey(imgX, imgY) {
  if (imgY < keyY - 50) {
    return false;
  }
  if (imgX < keyX - 25) {
    return false;
  }
  if (imgX > keyX + 47) {
    return false;
  }
  return true;
}

var positionList1 = []
var shouldMove = false;
var direction = null;
var keyExists = true;
wx.onTouchStart(function (res) {
  console.log("touch start")
  console.log("this.imgX(1):" +this.imgX)
  let touchX = res.changedTouches[0].clientX
  let touchY = res.changedTouches[0].clientY
  if (touchX >= rightX && touchX <= rightX + 33 && touchY >= rightY && touchY <= rightY + 25) {
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
    context.fillStyle = 'white' 
    context.fillRect(imgX, imgY, 25, 50);
    console.log(direction)
    console.log(imgX)
    console.log(imgY)
    if (direction == 'right') {
      imgX += 5;
      if (imgX >= (rect1W - 25)) {
        imgX = rect1W - 25;
      }
      var dis = Math.sqrt((imgX + 25 - cycle2X) * (imgX + 25 - cycle2X) + (imgY - cycle2Y) * (imgY - cycle2Y));
      while (dis <= cycle1R) {
        imgX--;
        dis = Math.sqrt((imgX + 25 - cycle2X) * (imgX + 25 - cycle2X) + (imgY - cycle2Y) * (imgY - cycle2Y));
      }
      var dis2 = Math.sqrt((imgX + 25 - cycle2X) * (imgX + 25 - cycle2X) + (imgY + 50 - cycle2Y) * (imgY + 50 - cycle2Y));
      while (dis2 <= cycle1R) {
        imgX--;
        dis2 = Math.sqrt((imgX + 25 - cycle2X) * (imgX + 25 - cycle2X) + (imgY + 50 - cycle2Y) * (imgY + 50 - cycle2Y));
      }
    }
    if (direction == 'left') {
      imgX -= 5;
      if (imgX <= rect1X) {
        imgX = rect1X;
      }
      var dis = Math.sqrt((imgX - cycle1X) * (imgX - cycle1X) + (imgY - cycle1Y) * (imgY - cycle1Y));
      while (dis <= cycle1R) {
        imgX++;
        dis = Math.sqrt((imgX - cycle1X) * (imgX - cycle1X) + (imgY - cycle1Y) * (imgY - cycle1Y));
      }
      var dis2 = Math.sqrt((imgX - cycle1X) * (imgX - cycle1X) + (imgY + 50 - cycle1Y) * (imgY + 50 - cycle1Y));
      while (dis2 <= cycle1R) {
        imgX++;
        dis2 = Math.sqrt((imgX - cycle1X) * (imgX - cycle1X) + (imgY + 50 - cycle1Y) * (imgY + 50 - cycle1Y));
      }
    }
    if (direction == 'up') {
      imgY -= 5; rect1X
      if (imgY <= rect1Y) {
        imgY = rect1Y;
      }
      var dis = Math.sqrt((imgX + 25 - cycle2X) * (imgX + 25 - cycle2X) + (imgY - cycle2Y) * (imgY - cycle2Y));
      while (dis <= cycle1R) {
        imgY++;
        dis = Math.sqrt((imgX + 25 - cycle2X) * (imgX + 25 - cycle2X) + (imgY - cycle2Y) * (imgY - cycle2Y));
      }
      var dis2 = Math.sqrt((imgX - cycle1X) * (imgX - cycle1X) + (imgY - cycle1Y) * (imgY - cycle1Y));
      while (dis2 <= cycle1R) {
        imgY++;
        dis2 = Math.sqrt((imgX - cycle1X) * (imgX - cycle1X) + (imgY - cycle1Y) * (imgY - cycle1Y));
      }
    }
    if (direction == 'down') {
      imgY += 5;
      if (imgY >= rect1Y + rect1H - 50) {
        imgY = rect1Y + rect1H - 50;
      }
      var dis = Math.sqrt((imgX + 25 - cycle2X) * (imgX + 25 - cycle2X) + (imgY + 50 - cycle2Y) * (imgY + 50 - cycle2Y));
      while (dis <= cycle1R) {
        imgY--;
        dis = Math.sqrt((imgX + 25 - cycle2X) * (imgX + 25 - cycle2X) + (imgY + 50 - cycle2Y) * (imgY + 50 - cycle2Y));
      }
      var dis2 = Math.sqrt((imgX - cycle1X) * (imgX - cycle1X) + (imgY + 50 - cycle1Y) * (imgY + 50 - cycle1Y));
      while (dis2 <= cycle1R) {
        imgY--;
        dis2 = Math.sqrt((imgX - cycle1X) * (imgX - cycle1X) + (imgY + 50 - cycle1Y) * (imgY + 50 - cycle1Y));
      }
    }
    positionList1.push({
      x: imgX,
      y: imgY
    })
    if (isInKey(imgX, imgY)){
      // TODO 播放声音
      keyExists = false;
      context.fillStyle = 'white'
      context.fillRect(keyX, keyY, 47, 28);
    }
    console.log("this:" + this)
    while (isInDoor(imgX, imgY)) {
      if (!keyExists) {
        context.fillRect(canvas.width / 2 - 12.5, rect1Y+2, 25, 95)
        context.drawImage(image, canvas.width / 2 - 12.5, rect1Y + 30);
        setTimeout(function(){
          context.clearRect(rect1X, rect1Y - 2, rect1W, rect1H + 4);
          drawRect(context)
          drawCycle3(context)
          drawCycle4(context)
        }, 1000)
        return;
      }
      else{
        if (direction == 'up'){
          imgY ++;
        }
        if (direction == 'down') {
          imgY --;
        }
        if (direction == 'left') {
          imgX ++;
        }
        if (direction == 'right') {
          imgX --;
        }
      }
    }
    context.drawImage(image, imgX, imgY);
  }
})
wx.onTouchEnd(function (res) {
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

function onTouch2(){

}