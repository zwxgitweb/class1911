// const http = require('http');


// http.createServer((req,res) => {
//     // console.log(req + '+++++++++++++++')
//     // console.log(res+'---------------')
//     // let str = 'wert'
//     // res.end( str)    // 向客户端返回的数据
//     // res.end(req.url) // 返回端口号后面的路径

// }).listen(3000)


// ps:作业
//   1. 搭建本地开发环境，成功运行
//   2. 配置NODE_PATH环境变量将系统全局路径打印出来
//   3. 书写一段带有回调函数的代码逻辑，并执行  
//   1. 环境正确跑起来（20）
//   2. 可以修改NODE_PATH环境变量 （20）
//   3. 合理编写带有回调函数的代码逻辑，并且执行它	（60）

const http = require('http');
const path = require('path')
http.createServer((req, res) => {
    res.end(path.resolve(__dirname), () => {// 打印出这个文件所在的位置
        console.log('打印出这个文件所在的位置')
    }) 
}).listen(3000)