const mysql = require('mysql');

let connection = mysql.createConnection({
    port: 3306,
    password: "root",
    user: "root",
    database: "userlist",
    host: "localhost"
})

// 检测与数据库连接状态
connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log("connection is success");
    }
})

// 登陆查找用户和密码
function selectLogin(params) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM userInfo WHERE user LIKE '${params.user}' AND pwd LIKE '${params.pwd}'`, (err, result) => {
            if (err) {
                reject({
                    code: 0,
                    msg: err
                });
            } else {
                resolve({
                    code: 1,
                    msg: result
                })
            }
        })
    })
}

// 注册接口的查询
function registerUser(params) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO userInfo (user, pwd) VALUES ('${params.user}', '${params.pwd}')`, (err, reslut) => {
            if (err) {
                reject({
                    code: 0,
                    msg: err
                })
            } else {
                resolve({
                    code: 1,
                    msg: reslut
                })
            }
        })
    })

}

let obj = {
    selectLogin,
    registerUser
};

module.exports = obj;