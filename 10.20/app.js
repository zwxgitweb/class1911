/*
 * @FilePath: /l1/app.js
 * @Author: Florence
 * @Date: 2020-10-19 13:47:10
 * @Last Modified By: Florence
 * @LastEditTime: 2020-10-19 14:30:21
 */

// require

// 引入http包
const http = require('http');

// 创建端口号为3000的服务
let app = http.createServer((req, res) => {
	// 向前端返回值
	res.end('hello world!');
})

app.listen(8080);
