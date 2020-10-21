const fs = require('fs');
const path = require('path');

function copy(a, b) {
    //读取目录
    fs.readdir(a, (err, data) => {
        //循环目录里面的每一项文件
        data.forEach(item => {
            //拼接文件名
            let url = path.join(a, item);
            //获取文件信息
            fs.stat(url, (err, data) => {
                //判断是不是文件
                let istrue = data.isFile();
                if(istrue){
                    //是文件就拷贝到b文件
                    fs.copyFile(url,path.join(b,item),()=>{});
                }else{
                    //是文件夹就创建文件夹
                    fs.mkdir(path.join(b,item),()=>{});
                    //递归调用  
                    copy(path.join(a,item),path.join(b,item))
                }
            })
        });
    })
}
copy('./A', './B')