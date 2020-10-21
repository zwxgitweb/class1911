/*
 * @FilePath: /l3/fs.js
 * @Author: Florence
 * @Date: 2020-10-21 09:11:51
 * @Last Modified By: Florence
 * @LastEditTime: 2020-10-21 10:16:11
 */

const fs = require('fs');
const path = require('path');


// const filea = require('./a');

// console.log(filea, 'files+++++++++++++');

// 同步删除文件
// fs.unlinkSync('./a.js');

// 异步删除文件
// fs.unlink('./b.js', () => {
// 	console.log('文件被删除');
// })

let data = fs.readFileSync(path.join(__dirname, 'a.js'))
// console.log(data.toString(), 'sync---------')

// console.log(path.join(__dirname, 'a.js'))

// console.log(path.join('/目录1', '目录2', '目录3/目录4', '/目录5', '/aaaa'))

// fs.readFile(path.join(__dirname, 'a.js'), (err, data) => {
// 	let str = data.toString();
// 	str+= 'hello!hhhhhhhh';
// 	console.log(str);
// 	fs.writeFileSync('./a.js', str);
// })

// fs.writeFile('./a.js', 'hhh', () => {
	
// })

// let str = 'hello!hhhhhhhh';
// fs.writeFileSync('./a.js', str);

fs.appendFileSync(path.join(__dirname, 'a.js'), 'hello', 'utf8')
