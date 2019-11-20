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
var originImgY = 500;
//画第一个正方形
var rect1W = canvas.width;
var rect1H = canvas.width;
var rect1X = 0;
var rect1Y = canvas.height / 3;
var step = 20
drawRect(context);

var cycle1R = rect1W / 3;
var cycle2R = rect1W / 2 - 15;
var cycle3R = rect1W / 4 - 45;
var cycle4R = 2 * rect1W / 5;

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
var cycle5X = rect1W / 2 - cycle3R;
var cycle5Y = rect1Y + rect1W / 3;
var cycle6X = rect1W / 2 + cycle3R;;
var cycle6Y = rect1Y + rect1W / 3;
var cycle7X = rect1W / 2;
var cycle7Y = rect1Y + cycle4R;

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
  context.moveTo(cycle5X, cycle5Y);
  context.arc(cycle5X, cycle5Y, cycle3R, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
  context.closePath();
  context.stroke();
  context.fillStyle = 'pink';
  context.fill();
}

function drawCycle6(context) {
  context.beginPath();
  context.moveTo(cycle6X, cycle6Y);
  context.arc(cycle6X, cycle6Y, cycle3R, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
  context.closePath();
  context.stroke();
  context.fillStyle = 'pink';
  context.fill();
}
function drawCycle7(context) {
  context.beginPath();
  context.moveTo(cycle7X, cycle7Y);
  context.arc(cycle7X, cycle7Y, cycle4R, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
  context.closePath();
  context.stroke();
  context.fillStyle = 'pink';
  context.fill();
}

drawCycle1(context);
drawCycle2(context);

var image = wx.createImage()
var imgX = canvas.width / 2 - 12.5
var imgY = originImgY;
image.onload = function () {
  context.drawImage(image, imgX, imgY)
}
image.src = 'assets/peep.png'

var door1X = canvas.width / 2 - 33;
var door2X = canvas.width / 2 - 33;
var door2Y = rect1Y + rect1W - Math.sqrt(cycle2R * cycle2R - (cycle2R + 15 - 20) * (cycle2R + 15 - 20)) - 91;
var door3X = canvas.width - 64;
var door3Y = rect1Y;

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
function drawDoor3(canvas, context) {
  var door = wx.createImage()
  door.onload = function () {
    context.drawImage(door, door3X, door3Y)
  }
  door.src = 'assets/door1.png'
}
drawDoor1(canvas, context);

var key1X = canvas.width / 2 - 23.5;
var key1Y = rect1Y + rect1H - 47;
var key2X = canvas.width / 2 - 23.5;
var key2Y = cycle5Y - Math.sqrt(cycle3R * cycle3R - (cycle3R - 23.5) * (cycle3R - 23.5)) - 20;
function drawKey1(canvas, context) {
  var key = wx.createImage()
  key.onload = function () {
    context.drawImage(key, key1X, key1Y)
  }
  key.src = 'assets/key.png'
}
function drawKey2(canvas, context) {
  var key = wx.createImage()
  key.onload = function () {
    context.drawImage(key, key2X, key2Y)
  }
  key.src = 'assets/key.png'
}
drawKey1(canvas, context);

function isInDoor(imgX, imgY) {
  if (imgY > rect1Y + 91) {
    return false;
  }
  if (imgX < door1X - 25) {
    return false;
  }
  if (imgX > door1X + 68) {
    return false;
  }
  return true;
} 
function isInDoor2(imgX, imgY) {
  if (imgY < originImgY) {
    return false;
  }
  if (imgX < door1X - 10) {
    return false;
  }
  if (imgX > door1X + 55) {
    return false;
  }
  return true;
}

function isNearDoor2(imgX, imgY) {
  if (imgY < door2Y - 47) {
    return false;
  }
  if (imgX < door2X - 23) {
    return false;
  }
  if (imgX > door2X + 62) {
    return false;
  }
  return true;
}


function isInKey(imgX, imgY) {
  if (imgY < key1Y - 50) {
    return false;
  }
  if (imgX < key1X - 25) {
    return false;
  }
  if (imgX > key1X + 47) {
    return false;
  }
  return true;
} 
function nearKey2(imgX, imgY) {
  if (imgY < key2Y - 50) {
    return false;
  }
  if (imgX < key2X - 25) {
    return false;
  }
  if (imgX > key2X + 47) {
    return false;
  }
  return true;
}
function isInKey2(imgX, imgY) {
  if (imgY < key2Y - 30) {
    return false;
  }
  if(imgY > cycle5Y){
    return false;
  }
  if (imgX < key2X - 5) {
    return false;
  }
  if (imgX > key2X + 25) {
    return false;
  }
  return true;
}

var positionList1 = []
var shouldMove = false;
var direction = null;
var keyExists = true;
var scene = 1;
wx.onTouchStart(function (res) {
  console.log("touch start")
  let touchX = res.changedTouches[0].clientX
  let touchY = res.changedTouches[0].clientY
  if (scene == 1) {
    onTouch1(touchX, touchY);
  }
  if (scene == 2) {
    onTouch2(touchX, touchY);
  }
  if (scene == 3) {
    onTouch3(touchX, touchY);
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

function onTouch2(touchX, touchY) {
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
    // if ((!isInKey2(imgX, imgY)) && nearKey2(imgX, imgY) && keyExists) {
    //   drawKey2(canvas, context);
    // } 
    if (isNearDoor2(imgX, imgY) && keyExists) {
      drawDoor2(canvas, context);
    }
    if (direction == 'right') {
      imgX += step;
      if (imgX >= (rect1W - 25)) {
        imgX = rect1W - 25;
      }
      var dis = Math.sqrt((imgX + 25 - cycle4X) * (imgX + 25 - cycle4X) + (imgY + 50 - cycle4Y) * (imgY + 50 - cycle4Y));
      while (dis <= cycle2R) {
        imgX--;
        dis = Math.sqrt((imgX + 25 - cycle4X) * (imgX + 25 - cycle4X) + (imgY + 50 - cycle4Y) * (imgY + 50 - cycle4Y));
      }
      var dis2 = Math.sqrt((imgX + 25 - cycle5X) * (imgX + 25 - cycle5X) + (imgY + 50 - cycle5Y) * (imgY + 50 - cycle5Y));
      while (dis2 <= cycle3R) {
        imgX--;
        dis2 = Math.sqrt((imgX + 25 - cycle5X) * (imgX + 25 - cycle5X) + (imgY + 50 - cycle5Y) * (imgY + 50 - cycle5Y));
      }
      var dis3 = Math.sqrt((imgX + 25 - cycle5X) * (imgX + 25 - cycle5X) + (imgY - cycle5Y) * (imgY - cycle5Y));
      while (dis3 <= cycle3R) {
        imgX--;
        dis3 = Math.sqrt((imgX + 25 - cycle5X) * (imgX + 25 - cycle5X) + (imgY - cycle5Y) * (imgY - cycle5Y));
      }
      var dis4 = Math.sqrt((imgX + 25 - cycle6X) * (imgX + 25 - cycle6X) + (imgY + 50 - cycle6Y) * (imgY + 50 - cycle6Y));
      while (dis4 <= cycle3R) {
        imgX--;
        dis4 = Math.sqrt((imgX + 25 - cycle6X) * (imgX + 25 - cycle6X) + (imgY + 50 - cycle6Y) * (imgY + 50 - cycle6Y));
      }
      var dis5 = Math.sqrt((imgX + 25 - cycle6X) * (imgX + 25 - cycle6X) + (imgY - cycle6Y) * (imgY - cycle6Y));
      while (dis5 <= cycle3R) {
        imgX--;
        dis5 = Math.sqrt((imgX + 25 - cycle6X) * (imgX + 25 - cycle6X) + (imgY - cycle6Y) * (imgY - cycle6Y));
      }
      if ((imgY < cycle5Y) && (imgY + 50 > cycle5Y) && (imgX + 25 + cycle3R > cycle5X) && (imgX < cycle5X)) {
        console.log(11111)
        imgX = cycle5X - cycle3R - 26;
      }
    }
    if (direction == 'left') {
      imgX -= step;
      if (imgX <= rect1X) {
        imgX = rect1X;
      }
      var dis = Math.sqrt((imgX - cycle3X) * (imgX - cycle3X) + (imgY + 50 - cycle4Y) * (imgY + 50 - cycle3Y));
      while (dis <= cycle2R) {
        imgX ++
        dis = Math.sqrt((imgX - cycle3X) * (imgX - cycle3X) + (imgY + 50 - cycle3Y) * (imgY + 50 - cycle3Y));
      }
      var dis2 = Math.sqrt((imgX - cycle5X) * (imgX - cycle5X) + (imgY + 50 - cycle5Y) * (imgY + 50 - cycle5Y));
      while (dis2 <= cycle3R) {
        imgX ++;
        dis2 = Math.sqrt((imgX - cycle5X) * (imgX - cycle5X) + (imgY + 50 - cycle5Y) * (imgY + 50 - cycle5Y));
      }
      var dis3 = Math.sqrt((imgX - cycle5X) * (imgX - cycle5X) + (imgY - cycle5Y) * (imgY - cycle5Y));
      while (dis3 <= cycle3R) {
        imgX++;
        dis3 = Math.sqrt((imgX - cycle5X) * (imgX - cycle5X) + (imgY - cycle5Y) * (imgY - cycle5Y));
      }
      var dis4 = Math.sqrt((imgX - cycle6X) * (imgX - cycle6X) + (imgY + 50 - cycle6Y) * (imgY + 50 - cycle6Y));
      while (dis4 <= cycle3R) {
        imgX++;
        dis4 = Math.sqrt((imgX - cycle6X) * (imgX - cycle6X) + (imgY + 50 - cycle6Y) * (imgY + 50 - cycle6Y));
      }
      var dis5 = Math.sqrt((imgX - cycle6X) * (imgX - cycle6X) + (imgY - cycle6Y) * (imgY - cycle6Y));
      while (dis5 <= cycle3R) {
        imgX++;
        dis5 = Math.sqrt((imgX - cycle6X) * (imgX - cycle6X) + (imgY - cycle6Y) * (imgY - cycle6Y));
      }
    }
    if (direction == 'up') {
      imgY -= step;
      if (imgY <= rect1Y) {
        imgY = rect1Y;
      }
      var dis = Math.sqrt((imgX - cycle5X) * (imgX - cycle5X) + (imgY - cycle5Y) * (imgY - cycle5Y));
      while (dis <= cycle3R) {
        imgY++
        dis = Math.sqrt((imgX - cycle5X) * (imgX - cycle5X) + (imgY - cycle5Y) * (imgY - cycle5Y));
      }
      var dis2 = Math.sqrt((imgX + 25 - cycle5X) * (imgX + 25 - cycle5X) + (imgY - cycle5Y) * (imgY - cycle5Y));
      while (dis2 <= cycle3R) {
        imgY++
        dis2 = Math.sqrt((imgX + 25 - cycle5X) * (imgX + 25 - cycle5X) + (imgY - cycle5Y) * (imgY - cycle5Y));
      }
      var dis3 = Math.sqrt((imgX - cycle6X) * (imgX - cycle6X) + (imgY - cycle6Y) * (imgY - cycle6Y));
      while (dis3 <= cycle3R) {
        imgY++
        dis3 = Math.sqrt((imgX - cycle6X) * (imgX - cycle6X) + (imgY - cycle6Y) * (imgY - cycle6Y));
      }
      var dis4 = Math.sqrt((imgX + 25 - cycle6X) * (imgX + 25 - cycle6X) + (imgY - cycle6Y) * (imgY - cycle6Y));
      while (dis4 <= cycle3R) {
        imgY++
        dis4 = Math.sqrt((imgX + 25 - cycle6X) * (imgX + 25 - cycle6X) + (imgY - cycle6Y) * (imgY - cycle6Y));
      }
    }
    if (direction == 'down') {
      imgY += step;
      if (imgY <= rect1Y) {
        imgY = rect1Y;
      }
      var dis = Math.sqrt((imgX - cycle5X) * (imgX - cycle5X) + (imgY + 50 - cycle5Y) * (imgY + 50 - cycle5Y));
      while (dis <= cycle3R) {
        imgY--
        dis = Math.sqrt((imgX - cycle5X) * (imgX - cycle5X) + (imgY + 50 - cycle5Y) * (imgY + 50 - cycle5Y));
      }
      var dis2 = Math.sqrt((imgX + 25 - cycle5X) * (imgX + 25 - cycle5X) + (imgY + 50 - cycle5Y) * (imgY + 50 - cycle5Y));
      while (dis2 <= cycle3R) {
        imgY--
        dis2 = Math.sqrt((imgX + 25 - cycle5X) * (imgX + 25 - cycle5X) + (imgY + 50 - cycle5Y) * (imgY + 50 - cycle5Y));
      }
      var dis3 = Math.sqrt((imgX - cycle6X) * (imgX - cycle6X) + (imgY + 50  - cycle6Y) * (imgY + 50 - cycle6Y));
      while (dis3 <= cycle3R) {
        imgY--
        dis3 = Math.sqrt((imgX - cycle6X) * (imgX - cycle6X) + (imgY + 50 - cycle6Y) * (imgY + 50 - cycle6Y));
      }
      var dis4 = Math.sqrt((imgX + 25 - cycle6X) * (imgX + 25 - cycle6X) + (imgY + 50 - cycle6Y) * (imgY + 50 - cycle6Y));
      while (dis4 <= cycle3R) {
        imgY--
        dis4 = Math.sqrt((imgX + 25 - cycle6X) * (imgX + 25 - cycle6X) + (imgY + 50 - cycle6Y) * (imgY + 50 - cycle6Y));
      }
      var dis5 = Math.sqrt((imgX - cycle3X) * (imgX - cycle3X) + (imgY + 50 - cycle3Y) * (imgY + 50 - cycle3Y));
      while (dis5 <= cycle2R) {
        imgY--
        dis5 = Math.sqrt((imgX - cycle3X) * (imgX - cycle3X) + (imgY + 50 - cycle3Y) * (imgY + 50 - cycle3Y));
      }
      var dis6 = Math.sqrt((imgX + 25 - cycle4X) * (imgX + 25 - cycle4X) + (imgY + 50 - cycle4Y) * (imgY + 50 - cycle4Y));
      while (dis6 <= cycle2R) {
        imgY--
        dis6 = Math.sqrt((imgX + 25 - cycle4X) * (imgX + 25 - cycle4X) + (imgY + 50 - cycle4Y) * (imgY + 50 - cycle4Y));
      }
    }
    if (isInKey2(imgX, imgY) && keyExists) {
      context.fillStyle = 'white'
      context.fillRect(key2X, key2Y, 48, 29);
      drawCycle5(context);
      drawCycle6(context);
      keyExists = false;
      console.log("inkey")
    }else{
      if(nearKey2(imgX, imgY) && keyExists){
        drawKey2(canvas, context);
        console.log("nearKey")
      }
    }
    if(isInDoor2(imgX, imgY) && (!keyExists)){
      scene = 3;
      context.fillStyle = 'white'
      context.fillRect(door2X + 21, door2Y, 26, 96);
      imgX = door2X + 21;
      imgY = door2Y
      setTimeout(function(){
        drawScene3();
      }, 1000)
      return;
    }else{
      if(isNearDoor2(imgX, imgY)){
        drawDoor2(canvas, context)
      }
    }
    context.drawImage(image, imgX, imgY);
  }
}
function onTouch1(touchX, touchY) {

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
      imgX += step;
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
      imgX -= step;
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
      imgY -= step; rect1X
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
      imgY += step;
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
    if (isInKey(imgX, imgY)) {
      // TODO 播放声音
      keyExists = false;
      context.fillStyle = 'white'
      context.fillRect(key1X, key1Y, 47, 28);
    }
    console.log("this:" + this)
    while (isInDoor(imgX, imgY)) {
      if (!keyExists) {
        context.fillRect(canvas.width / 2 - 12.5, rect1Y + 2, 25, 95)
        context.drawImage(image, canvas.width / 2 - 12.5, rect1Y + 30);
        setTimeout(function () {
          scene = 2;
          drawScene2();
        }, 1000)
        return;
      }
      else {
        if (direction == 'up') {
          imgY++;
        }
        if (direction == 'down') {
          imgY--;
        }
        if (direction == 'left') {
          imgX++;
        }
        if (direction == 'right') {
          imgX--;
        }
      }
    }
    context.drawImage(image, imgX, imgY);
  }
  function drawScene2(){
    context.clearRect(rect1X, rect1Y - 2, rect1W, rect1H + 4);
    drawRect(context)
    drawCycle3(context)
    drawCycle4(context)
    drawCycle5(context)
    drawCycle6(context)
    drawDoor2(canvas, context)
    drawKey2(canvas, context)
    keyExists = true;
    var image2 = wx.createImage()
    imgX = canvas.width / 2 - 12.5
    imgY = originImgY
    image2.onload = function () {
      context.drawImage(image, imgX, imgY)
    }
    image2.src = 'assets/peep.png'
  }
  function drawScene3() {
    context.clearRect(rect1X, rect1Y - 2, rect1W, rect1H + 4);
    drawRect(context)
    drawCycle7(context)
    drawDoor3(canvas, context)
    drawKey1(canvas, context)
    keyExists = true;
    var image2 = wx.createImage()
    imgX = rect1X +10
    imgY = rect1Y + 10
    image2.onload = function () {
      context.drawImage(image, imgX, imgY)
    }
    image2.src = 'assets/peep.png'
  }
}