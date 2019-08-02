// import './js/libs/weapp-adapter'
// import './js/libs/symbol'

// import Main from './js/main'

// new Main()
import "./js/Key.js"

console.log("aaa");
const canvas = wx.createCanvas();
const context = canvas.getContext('2d') // 创建一个 2d context
context.fillStyle = '#1aad19' // 矩形颜色

context.fillRect(0, 0, 100, 100); // 矩形左上角顶点为(0, 0)，右下角顶点为(100, 100)
const ca = wx.createCanvas();
const c = canvas.getContext('2d') // 创建一个 2d context
c.fillStyle = '#1aad19' // 矩形颜色

c.fillRect(100, 100, 100, 100); // 矩形左上角顶点为(0, 0)，右下角顶点为(100, 100)
context.clearRect(0, 0, 100, 100);