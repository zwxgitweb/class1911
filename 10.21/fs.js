const fs = require('fs');
fs.mkdir('app', (err, data) => { //mkdir() 创建文件夹


})


fs.mkdir('./app/a', (err, data) => {

})

fs.mkdir('./app/b', (err, data) => {

})

fs.mkdir('./app/c', (err, data) => {

})

fs.writeFile('./app/app.js', 'console.log("hello")', (err, data) => {

})


fs.access('./app/a/a.js', (err, data) => { //access() 判断纯在不存在
    if (err) {
        fs.open('.app/a', () => {
            fs.writeFile('./app/a/a.js', '我在了', (err, data) => {
                fs.copyFile('./app/a/a.js', './app/b/b.js', (err, data) => { //copyFile() 复制
                    console.log('err')
                });
            })
        })
    } else {
        console.log('文件已存在')
    }
})


// fs.writeFile('./app/b/b.js', '是我', (err, data) => {
//     // console.log(err);
// })


// fs.access('./app/b/b.js', (err, data) => {
//     if (err) {
//         fs.open('.app/b', () => {
//             fs.writeFile('./app/a/a.js', '是我', (err, data) => {
//                 // console.log(err);
//                 fs.copyFile('./app/a/a.js', './app/b/b.js', (err, data) => { //copyFile() 复制
//                     console.log('err')
//                 });
//             })
//         })
//     }
// })