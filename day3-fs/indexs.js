const {
    diffieHellman
} = require('crypto');
const fs = require('fs');
const path = require('path');

//拷贝A文件

// function copy(a, b) {
//     //读取目录
//     fs.readdir(a, (err, data) => {
//         //循环目录里面的每一项文件
//         data.forEach(item => {
//             //拼接文件名
//             let url = path.join(a, item);
//             //获取文件信息
//             fs.stat(url, (err, data) => {
//                 //判断是不是文件
//                 let istrue = data.isFile();
//                 if(istrue){
//                     //是文件就拷贝到b文件
//                     fs.copyFile(url,path.join(b,item),()=>{});
//                 }else{
//                     //是文件夹就创建文件夹
//                     fs.mkdir(path.join(b,item),()=>{});
//                     //递归调用  
//                     copy(path.join(a,item),path.join(b,item))
//                 }
//             })
//         });
//     })
// }
// copy('./A', './B')


// 文件夹以及文件路径
let appdir = path.join(__dirname, 'apps'); 
let aurl = path.join(__dirname, 'apps/a');
let burl = path.join(__dirname, 'apps/b');
let curl = path.join(__dirname, 'apps/c');
let apps = path.join(__dirname, '/apps/app.js');

function app(a, b, c, app,appdir) {
    fs.mkdir(appdir, () => {});  //创建apps文件夹
    fs.mkdir(a, () => {}); // 创建a文件夹
    fs.mkdir(b, () => {}); // 创建b文件夹
    fs.mkdir(c, () => {}); // 创建c文件夹
    fs.writeFile(app, `conlsole.log('hello')`, () => {}); //创建app.js文件
    //读取a文件查看有没有a.js文件 没有就添加
    fs.readdir(a, (err, data) => {
        for (let i = 0; i <= data.length; i++) {
            if(data[i] !== 'a.js'){
                fs.writeFile(path.join(a, '/a.js'), `conlsole.log('我是a')`, () => {}); // 没有a.js文件就创建a.js文件
            }else{
                console.log('a文件已存在'); // 有就返回已存在
            }
        }
    })
    // 拷贝a.js文件内容
    fs.copyFile(path.join(a, '/a.js'), path.join(b, '/b.js'), () => {})
}
app(aurl, burl, curl, apps,appdir)