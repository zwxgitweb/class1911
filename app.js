console.log('hello world!!!');
const fs = require('fs');
fs.mkdir('a',()=>{

});
fs.mkdir('b',()=>{

});
fs.mkdir('c',()=>{

});
// fs.writeFile('./app.js',)
fs.readFile('./a/a.js', function (err, data) {
    if(err){
        fs.writeFile('./a/a.js','hello  world!!!',(err,data)=>{

        });
    }else{
        console.log('文件已存在');
    }
    console.log(err)
 });
 fs.readFile('./b/b.js', function (err, data) {
    if(err){
        fs.writeFileSync('./b/b.js');
    }else{
        console.log('文件已存在');
    }
 });
 fs.copyFile('./b/b.js','./a/a.js',(err,data)=>{
    console.log('复制成功');
 })