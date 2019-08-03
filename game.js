// import './js/libs/weapp-adapter'
// import './js/libs/symbol'

// import Main from './js/main'

// new Main()

console.log("aaa");
const canvas = wx.createCanvas();
const context = canvas.getContext('2d') // 创建一个 2d context
context.fillStyle = '#1aad19' // 矩形颜色

context.fillRect(0, 0, 100, 100); // 矩形左上角顶点为(0, 0)，右下角顶点为(100, 100)
const ca = wx.createCanvas();
const c = canvas.getContext('2d') // 创建一个 2d context
c.fillStyle = '#1aad19' // 矩形颜色

var image = wx.createImage()
var imgX = canvas.width / 2 - 12.5
let imgY = 500
image.onload = function () {
  context.drawImage(image, imgX, imgY)
}
image.src = 'assets/peep.png'

wx.onTouchMove(function (res) {
  context.clearRect(imgX, imgY, 25, 50); // 清除画布上原有的飞机
  imgX = res.changedTouches[0].clientX // 重新判断当前触摸点x坐标
  imgY = res.changedTouches[0].clientY // 重新判断当前触摸点x坐标
  context.drawImage(image, imgX, imgY);
})


var up = wx.createImage()
var upX = canvas.width / 2 - 12.5
let upY = 700
up.onload = function () {
  context.drawImage(up, upX, upY)
}
up.src = 'assets/up.png'

var down = wx.createImage()
var downX = canvas.width / 2 - 12.5
let downY = 758
down.onload = function () {
  context.drawImage(down, downX, downY)
}
down.src = 'assets/down.png'

var right = wx.createImage()
var rightX = 3 * canvas.width / 4 - 16.5
let rightY = 733
right.onload = function () {
  context.drawImage(right, rightX, rightY)
}
right.src = 'assets/right.png'

var left = wx.createImage()
var leftX = canvas.width / 4 - 16.5
let leftY = 733
left.onload = function () {
  context.drawImage(left, leftX, leftY)
}
left.src = 'assets/left.png'