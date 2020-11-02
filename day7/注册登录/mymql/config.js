//  连接mysql 数据库
const mysql = require('mysql');
let connection = mysql.createConnection({
    port:3306,
    user:'root',
    password:'root',
    database:'classuser',  // 写数据的表单名字
    host:'localhost',
})
// 判断数据库有没有连接成功
connection.connect( err => {
    if(err){
        console.log('没有连接成功', err)
    }else{
        console.log('数据库连接成功------------')

    }
})
// 后台与mysql数据库的连接方式
    //   实现 增删改查
function selectData(mingzi){
    // mysql 数据库里的 user / pwd
   return new Promise( (resolve,reject) => {
        connection.query(`select * from userinfo where user="${mingzi.user}" and pwd="${mingzi.pwd}"`,(err,result) => {
            if(err){
                reject({
                    code:0,
                    msg:err,
                })
            }else{
                resolve({
                    code:1,
                    msg:result,
                })
            }
        })
    })
    
}

function zhuceData(mingzi){
    // mysql 数据库里的 user / pwd
   return new Promise( (resolve,reject) => {
        connection.query(`insert into userinfo (user,pwd) values ("${mingzi.user}","${mingzi.pwd}")`,(err,result) => {
            if(err){
                reject({
                    code:0,
                    msg:err,
                })
            }else{
                resolve({
                    code:1,
                    msg:result,
                })
            }
        })
    })
    
}
let obj = {
    selectData,
    zhuceData
}
module.exports = obj;
