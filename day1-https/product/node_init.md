<!--
 * @FilePath: /l1/node_init.md
 * @Author: Florence
 * @Date: 2020-10-19 13:34:16
 * @Last Modified By: Florence
 * @LastEditTime: 2020-10-19 16:50:53
-->

### node的概念

- Node.js 是一个开源与跨平台的 JavaScript 运行时环境

语法：commonjs

### node特点

- 异步：setTimeout、setInterval、事件、ajax
- 单线程：
- 非阻塞I/O：input/out

### npm

- 包管理工具
- npm install（i） nodemon(包名) -g 安装nodemon包
- npm uninstall 包名 -g

### 创建http服务

```js
// 1. 引入http包
const http = require('http');

// 2. 创建端口号为3000的服务
http.createServer((req, res) => {
	// 向前端返回值
	res.end('hello world!');
}).listen(8080);
// 3. 监听端口号

```

// 4. 打开文件所在的终端执行以下命令
$ nodemon index.js(文件名)
