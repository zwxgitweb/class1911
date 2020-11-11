let inp = document.querySelector('.val');
let inProgress = document.querySelector('.inProgress dd');
let haveFinished = document.querySelector('.haveFinished dd');
// 添加1
inp.onkeydown = function (e) {
    if (e.keyCode === 13) {
        let val = inp.value;
        if (val) {
            drawing(val)
        }
        inp.value = ''
    }
}

drawing()
// 渲染1
function drawing(val) {
    fetch('/api/sendval?val=' + val).then(text => {
        return text.text()
    }).then(res => {
        data = JSON.parse(res).data;
        res = JSON.parse(res);
        let str = '';
        if (res.code) {
            data.map(i => {
                str += `
                    <p>
                        <input type="checkbox">
                        <span>${i.value}</span>
                        <span class="delTodo">x</span>
                    </p>`
            })
        }
        inProgress.innerHTML = str;
        let checked = document.querySelectorAll('.inProgress p input');
        checkbox(checked)
        let btns = document.querySelectorAll('.delTodo');
			delList(btns, res.data);
    })
}
// 已经完成
function checkbox(checkbox) {
    checkbox.forEach((i, ind) => {
        i.onchange = function () {
            rendFinshed(ind, data)
        }
    })
}
// 选中1
function rendFinshed(ind, data) {
    fetch('/api/del?id=' + data[ind].id).then(text => {
        return text.text()
    }).then(res => {
        drawing()
        getFinished()
    })
}
// 请求已经完成事项接口2
function getFinished() {
    fetch('/api/findFinish').then(text => {
        return text.text()
    }).then(res => {
        res = JSON.parse(res);
        if (res.code) {
            let str = '';
            res.data.map(i => {
                str += `
                        <p>
                            <input type="checkbox" checked>
                            <span>${i.value}</span>
                            <span class="delFinish">x</span>
                        </p>`
            })
            haveFinished.innerHTML = str;
            let btns = document.querySelectorAll('.delFinish');
			delList(btns, res.data);
        }
    })
}

// 点击删除按钮 删除本条数据
function delList(btns, data) {
	btns.forEach((item, index) => {
		item.onclick = function () {
			fetch('/api/delList?id=' + data[index].id).then(text => {
				return text.text();
			}).then(res => {
				drawing();
				getFinished();
			})
		}
	})
} 
getFinished()