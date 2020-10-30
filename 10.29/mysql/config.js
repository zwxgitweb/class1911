const mysql = require('mysql');

let connection = mysql.createConnection({
	port: 3306,
	password: "root",
	user: "root",
	database: "test",
	host: "localhost"
})

connection.connect(err => {
	if (err) {
		console.log(err);
	} else {
		console.log("没有");
	}
})

function selectLogin(params) {
	return new Promise((a, b) => {
		connection.query(`SELECT * FROM aaa WHERE user LIKE '${params.user}' AND pwd LIKE '${params.pwd}'`,
			(err, result) => {
				if (err) {
					b({
						code: 0,
						msg: err
					});
				} else {
					a({
						code: 1,
						msg: result
					})
				}
			})
	})
}

function registerUser(params) {
	return new Promise((a, b) => {
		connection.query(`INSERT INTO aaa (user, pwd)  VALUES('${params.user}','${params.pwd}')`,
			(err, reslut) => {
				if (err) {
					b({
						code: 0,
						msg: err
					})
				} else {
					a({
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

