import '../css/index.css';

let main = document.querySelector('main ul');
let sdiguds = document.querySelector('#sdiguds')
let ffud = document.querySelector('.ffud')
let jibvds = document.querySelector('.jibvds')

function zhong() {
	fetch('/add').then((req) => {
		return req.text();
	}).then((req) => {
		let aaa = JSON.parse(req).msg;;
		let str = '';
		for (let i = 0; i < aaa.length; i++) {
			str += `
				<li>
					<input type="checkbox"  ${aaa[i].pandui == "true" ? "checked" : ''} id="dsjkfnedf" class='sadsad' >
					<p><img src="${aaa[i].img}" alt=""></p>
					<div>
						<p class="hb_cpl_b_1">${aaa[i].mamet}</p>
						<p class="hb_cpl_b_2">${aaa[i].meiwjn}</p>
						<div>
							<p class="gphjfei">
								<span>￥${aaa[i].mjige}</span>
							</p>
							<p class="vigvnid">
								<span class="jjj">-</span>
								<span class="sss">${aaa[i].shulia}</span>
								<span class="nnn">+</span>
							</p>
						</div>
						<p class="sdsa">删除</p>
					</div>
				</li>
				`
		}
		main.innerHTML = str;

		let dsjkfnedf = document.querySelectorAll('#dsjkfnedf');
		let jjj = document.querySelectorAll('.jjj');
		let nnn = document.querySelectorAll('.nnn');
		let sdsa = document.querySelectorAll('.sdsa');

		dsjkfnedf = Array.from(dsjkfnedf);
		jjj = Array.from(jjj);
		nnn = Array.from(nnn);
		sdsa = Array.from(sdsa);


		chushihua(sdiguds, dsjkfnedf);//初始化
		jiage(dsjkfnedf, aaa); // 计算总价
		dianji(dsjkfnedf, aaa);//全选
		shangpin(dsjkfnedf, aaa); //选中每件商品
		jiajian(jjj, nnn, aaa); //点击加减
		sahnchu(sdsa, aaa);// 删除商品
	})
}
zhong()


//初始化
function chushihua(sdiguds, dsjkfnedf) {
	sdiguds.checked = dsjkfnedf.every(it => {
		return it.checked;
	})
}

//点击全选按钮
function dianji(dsjkfnedf, aaa) {
	sdiguds.onchange = () => {
		dsjkfnedf.forEach((i, ind) => {
			i.checked = sdiguds.checked;
		})

		jiage(dsjkfnedf, aaa)

		fetch('/add/aa?checked=' + sdiguds.checked).then(text => {
			return text.text();
		})
	}
}

//选中按钮
function shangpin(dsjkfnedf, aaa) {
	dsjkfnedf.forEach((i, ind) => {
		i.onchange = function () {

			let flag = dsjkfnedf.every(items => {
				return items.checked;
			});
			sdiguds.checked = flag;

			jiage(dsjkfnedf, aaa)
			fetch('/add/aa?id=' + aaa[ind].id + '&checked=' + i.checked).then(text => {
				return text.text();
			})
		}
	})
}

//点击加减
function jiajian(jjj, nnn, aaa) {
	//减
	jjj.forEach((item, index) => {
		item.onclick = function () {
			if (aaa[index].shulia > 1) {
				aaa[index].shulia--;
				fetch('/add/bb?id=' + aaa[index].id + '&num=' + aaa[index].shulia).then(text => {
					return text.text();
				}).then(res => {
					res = JSON.parse(res);
					if (res.code) {
						zhong();
					}
				})
			}
		}
	});
	//加
	nnn.forEach((item, index) => {
		item.onclick = function () {
			aaa[index].shulia++;
			fetch('/add/bb?id=' + aaa[index].id + '&num=' + aaa[index].shulia).then(text => {
				return text.text();
			}).then(res => {
				res = JSON.parse(res);
				if (res.code) {
					zhong();
				} 
			})
		}
	})
}

//点击删除
function sahnchu(sdsa, aaa) {
	sdsa.forEach((i, ind) => {
		i.onclick = function () {
			fetch('/add/cc?id=' + aaa[ind].id).then(text => {
				return text.text();
			}).then(res => {
				console.log(res);
				zhong();
			})
		}
	})
}

//计算总价
function jiage(ipts, data) {
	let sum = 0;
	ipts.map((its, ind) => {
		if (its.checked) {
			sum += data[ind].mjige * data[ind].shulia;
		}
	})
	jibvds.innerHTML = sum + '￥';
	let arr = ipts.filter(items => {
		return items.checked;
	});
	ffud.innerHTML = arr.length;
}