const fs = require('fs')
const path = require('path')
//同步删除
// fs.unlinkSync('./a.js');
//异步删除
// fs.unlink('./a.js',err=>{
//     console.log('删除成功');
// });

// //读取文件 异步 第一个参数为要读取文件的路径，第二个参数为字符编码，第三个参数为回调函数
// fs.readFile('./a.js','utf8', (err, data) => {
//     console.log(data);
// })
// fs.readFile('./a.js', (err, data) => {
//     console.log(data.toString());
// })
// //读取文件 通步
// let data = fs.readFileSync(path.join(__dirname, '/a.js'))
// console.log(data.toString());


//读取写入
// fs.readFile(path.join(__dirname, '/a.js'), (err, data) => {
//     let str = data.toString()
//     str += 'asddd'
//     console.log(str);

//     fs.writeFileSync('./a.js',str)
// })

//写入文件 异步 第一个参数为要写入文件的路径，第二个参数为写入文件的内容，第三个参数为回调函数
//writeFile 如果没有文件的路径则会给你创建出来
// fs.writeFile('./a.js','12345678909876432',()=>{
//     console.log('添加');
// })


//----------------------------
fs.access('app', (err) => {
    if (err) {
        fs.mkdir("app", function (err) {
            if (err) {
                return console.log(err);
            }

            fs.mkdir("./app/a", function (err) {
                if (err) {
                    return console.log(err);
                }
            });
            fs.mkdir("./app/b", function (err) {
                if (err) {
                    return console.log(err);
                }
            });
            fs.mkdir("./app/c", function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        });
        fs.writeFile('./app/app.js', 'console.log("hello");', () => {
            console.log('1');
        })
        fs.access('./app/a/a.js', (err) => {
            if (err) {
                fs.open('./app/a', () => {
                    fs.writeFile('./app/a/a.js', '12323', (err) => {
                        console.log('创建成功', 'aaaaaaaa');
                        function copy(source, target) {
                            fs.readFile(source, (err, data) => {
                                fs.writeFile(target, data, err => {
                                    console.log('拷贝成功')
                                })
                            })
                        }
                        copy('./app/a/a.js', './app/b/b.js')
                    })
                })

            } else {
                console.log('存在');
            }
        });
    } else {
        console.log('文件夹已存在');
    }
})




