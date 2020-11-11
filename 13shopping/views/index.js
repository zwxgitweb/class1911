// const { text } = require("body-parser");

let total = document.querySelector('.total');//删除
let all = document.querySelector('.all');//全选

let main = document.querySelector('main');
function m() {
    let str = '';
    fetch('/api/apply').then(text => {
        return text.text()
    }).then(res => {
        res = JSON.parse(res)
        if (res.code) {
            res.data.forEach(i => {
                str += `
           <dl>
                <dt>
                    <input type="checkbox" class = 'radio' ${i.ischecked == "true" ? "checked" : ''}>
                    <img src="${i.img}" alt="">
                </dt>
                <dd>
                    <p>${i.text}</p>
                    <div class="p">
                        <p>
                            ￥<span>${i.unit}</span>
                        </p>
                        <p>
                            <button class='sub'>-</button>
                            <span class='num'>${i.num}</span>
                            <button class='add'>+</button>
                        </p>
                    </div>
                    <span class='ss'>删除</span>
                </dd>
            </dl>
           `
            })
            main.innerHTML = str;
            let ss = document.querySelectorAll('.ss');//删除
            let add = document.querySelectorAll('.add');//加
            let sub = document.querySelectorAll('.sub');//减
            let radio = document.querySelectorAll('.radio');//单选框
            // 同步全选
            radio=Array.from(radio)
            all.checked= radio.every(item => {
                return item.checked
            })
            fn(ss, res.data)//删除
            oclick(add, res.data, radio)//加
            oclick(sub, res.data, radio)//减
            checked(radio, res.data)//全选同步单选框;
            ochecked(radio, res.data)//单选同步全选框
            countTotal(radio, res.data)//合计
        }
    })
}
m()
// 删除
function fn(s, data) {
    s.forEach((i, index) => {
        i.onclick = function () {
            fetch('/api/delShop?id=' + data[index].id).then(text => {
                return text.text();
            }).then(res => {
                m()
            })
        }
    })
}
// 加减
function oclick(item, d, radio) {
    item.forEach((i, ind) => {
        i.onclick = function () {
            // 加
            if (this.innerHTML === '+') {
                d[ind].num++
            } else if (this.innerHTML === '-') {
                // 减
                if (d[ind].num > 1) {
                    d[ind].num--;
                }
            }
            fetch('/api/num?id=' + d[ind].id + '&num=' + d[ind].num).then(text => {
                return text.text()
            }).then(res => {
                res = JSON.parse(res)
                if (res.code === 1) {
                    m()
                }
            })
            // countTotal(radio, d)
        }
    })
}

// 全选
function checked(radio, data) {
    all.onchange = function () {
        // 全选
        radio.forEach(i => {
            i.checked = all.checked
        });
        countTotal(radio, data)
    }
}
// 单选
function ochecked(radio, data) {
    radio = Array.from(radio)
    radio.forEach((i, ind) => {
        i.onchange = function () {
            let rad = radio.every(item => {
                return item.checked
            })
            all.checked = rad
            countTotal(radio, data);
            console.log(i.checked, data[ind].id)
            fetch('/api/checked?ischecked=' + i.checked + '&id=' + data[ind].id)
            .then(text=>{
                return text.text()
            }).then(res=>{
                m()
            })
        }
    })
}


// 合计
function countTotal(radio, data) {
    let sum = 0;
    radio.forEach((i, ind) => {
        if (i.checked) {
            sum += data[ind].num * data[ind].unit;
        }
    })

    total.innerHTML = sum;
}