/*
 * @FilePath: /l3/http.js
 * @Author: Florence
 * @Date: 2020-10-21 08:53:04
 * @Last Modified By: Florence
 * @LastEditTime: 2020-10-21 09:08:18
 */

const http = require('http'); // 创建服务
const url = require('url'); // 
const qs = require('querystring');

http.createServer((req, res) => {
	let data = url.parse(req.url);
	if (data.pathname == '/api/add') {
		let str = qs.parse(data.query);
		res.end(str.tit);
	} else {
		res.end("1");
	}
}).listen(3000);

// /list
// /add
// /edit
// /del
