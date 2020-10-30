const mysql = require('mysql');
let connection = mysql.createConnection({
    port: 3306,
    password: 'root',
    user: 'root',
    database: 'userlist',
    host: 'localhost'
})
// 检测数据库链接状态
connection.connect(err => {
    if (err) {
        console.log(err)
    } else {
        console.log('connection is success')
    }
})

function selectLogin(params) {
    return new Promise((resolve, reject) => {
        params = JSON.parse(params);
        connection.query(`SELECT * FROM userinfo WHERE user LIKE '${params.user}' AND pwd LIKE '${params.pwd}'`,
            (err, result) => {
                console.log(result, '------------')
                if (err) {
                    reject({
                        code: 0,
                        msg: err
                    });
                } else {
                    resolve({
                        code: 1,
                        msg: result
                    });
                }
            })
    })

}


function registerUseer(params) {
    return new Promise((resolve, reject) => {
        // console.log(JSON.stringify(params))
        connection.query(`INSERT INTO userinfo (user, pwd) VALUES ('${params.user}', '${params.pwd}')`,
            (err, reslut) => {
                console.log(err, reslut, '===========')
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
    registerUseer
}

module.exports = obj