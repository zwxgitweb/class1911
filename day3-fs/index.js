const fs = require('fs');
const path = require('path');


// 读取文件  异步  
// fs.readFile('./a.js', (err, data) => {
//     console.log(data.toString());
// })

// 读取目录  异步
// fs.readdir('./fs', (err,data) => {
//     console.log(data);
// })

//打开文件
// fs.open('./a.js', 'r', (err,data) => {
//     console.log(data);
// })

//删除文件
// fs.unlink('./a.js', (err, data) => {
//     console.log(data);
// })

//文件重命名
// fs.rename('./a.js', './c.js', (err) => {
//     console.log(err);
// })

//