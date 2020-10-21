


const fs = require('fs');    
fs.mkdir('app',(err,data)=>{   //mkdir() 创建文件夹
    

})


fs.mkdir('./app/a', (err,data) =>{
    
})

fs.mkdir('./app/b',(err,data) =>{

})

fs.mkdir('./app/c',(err,data) =>{
    
})

fs.writeFile('./app/app.js','console.log(hello)',(err,data) =>{

})


fs.access('./app/a/a.js',(err,data) =>{  //access() 判断纯在不存在
    if(err){
        fs.open('.app/a',() =>{
            fs.writeFile('./app/a/a.js','王尊',(err,data) =>{
                console.log(err)
            })
        })
    }else{
        console.log('文件已存在')
    }


})

fs.copyFile('./app/a/a.js', './app/b/b.js', (err,data) =>{   //copyFile() 复制

});







 