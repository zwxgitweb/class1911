<<<<<<< HEAD
// const http = require('http');
// http.createServer((req, res) => {
//     res.setHeader('Content-Type','text/plain;charset=UTF-8');
//     res.end('粘合度')
// }).listen(3000);
// const http = require('http');
// // http.createServer((req, res) => {
// //     if (req.url == '/api/list') {
// //         res.end({ name: 'za' })
// //     } else if (req.url == '/api/add') {
// //         res.end('ncjdj')
// //     } else {
// //         res.end('{}')
// //     }
// // }).listen(3000);
// http.createServer((req, res) => {
// 	if (req.url == '/api/list') {
// 		res.end(JSON.stringify({name: "zs"}));
// 	} else if (req.url == '/api/add') {
// 		res.end('add-------');
// 	} else {
// 		res.end('{}');
// 	}
// }).listen(3000);

// // let but = new Buffer('nnnnnn');
// // console.log(but,'-----------');

// let opt = {
//     port: 3000,
//     host: "localhost",
//     method: "get",
//     path: '/api/add'
// };
// let body = '';

// let req = http.request(opt, (req, res) => {
//     req.on('data', (data) => {
//         body += data.toString();
//         console.log(body);
//     });
//     req.on('end', (data) => {
//         console.log('end------', data);
//     })
//     req.on('error', (err) => {
//         console.log('error:' + err);
//     })
// })

=======
// const http = require('http');
// http.createServer((req, res) => {
//     res.setHeader('Content-Type','text/plain;charset=UTF-8');
//     res.end('粘合度')
// }).listen(3000);
// const http = require('http');
// // http.createServer((req, res) => {
// //     if (req.url == '/api/list') {
// //         res.end({ name: 'za' })
// //     } else if (req.url == '/api/add') {
// //         res.end('ncjdj')
// //     } else {
// //         res.end('{}')
// //     }
// // }).listen(3000);
// http.createServer((req, res) => {
// 	if (req.url == '/api/list') {
// 		res.end(JSON.stringify({name: "zs"}));
// 	} else if (req.url == '/api/add') {
// 		res.end('add-------');
// 	} else {
// 		res.end('{}');
// 	}
// }).listen(3000);

// // let but = new Buffer('nnnnnn');
// // console.log(but,'-----------');

// let opt = {
//     port: 3000,
//     host: "localhost",
//     method: "get",
//     path: '/api/add'
// };
// let body = '';

// let req = http.request(opt, (req, res) => {
//     req.on('data', (data) => {
//         body += data.toString();
//         console.log(body);
//     });
//     req.on('end', (data) => {
//         console.log('end------', data);
//     })
//     req.on('error', (err) => {
//         console.log('error:' + err);
//     })
// })

>>>>>>> 79b0768f3f7b277559c8bc6e7da90456328a0b8b
// req.end();