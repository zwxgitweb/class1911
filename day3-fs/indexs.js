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

fs.mkdirSync(appdir, () => {

})
fs.mkdirSync(aurl, () => {

})
fs.mkdirSync(burl, () => {

})
fs.mkdirSync(curl, () => {

})
fs.writeFileSync(apps, `console.log('hello world')`, () => {

})

try {
    fs.accessSync(path.join(aurl, '/a.js'), fs.constants.F_OK);
} catch (err) {
    fs.writeFile(path.join(aurl, '/a.js'), `console.log('我是a')`, () => {

    })
}
fs.readFile(path.join(aurl, '/a.js'), (err, data) => {
    let str = data.toString();
    fs.writeFile(path.join(burl, '/b.js'), str, () => {

    })
    fs.writeFile(path.join(curl, '/c.js'), str, () => {

    })
})