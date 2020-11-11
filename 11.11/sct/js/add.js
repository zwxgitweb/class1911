setInterval(function () {
    date()
}, 60000)

function date() {
    let dattea = document.querySelector('.dattea')
    let t = new Date()
    let nian = t.toLocaleDateString();
    let shi = t.getHours();
    let fen = t.getMinutes()
    fen < 10 ? fen = '0' + fen : fen;
    let shiji = nian + ' ' + shi + ':' + fen;
    dattea.innerHTML = `
    ${shiji}
    `
}
date()

fetch('/add').then((req) => {
    return req.text()
}).then((req) => {
    req = JSON.parse(req)
    let preserve = document.querySelector('.preserve');
    let abolish = document.querySelector('.abolish');

    dianji(preserve, abolish)

})

function dianji(preserve, abolish) {
    preserve.onclick = () => {
        baochun()
    }
    abolish.onclick = () => {
        kong()
    }
}

function baochun() {
    let accounts = document.querySelector('.accounts').value;
    let cost = document.querySelector('.cost').value;
    let dattea = document.querySelector('.dattea').innerText;
    let textarea = document.querySelector('textarea').value;

    if(accounts =='' || cost=='' || dattea=="" || textarea==""){
        alert('不能为空哦！！！');
        return;
    }
    let obj = [
        leixing = accounts,
        jiage = cost,
        shijian = dattea,
        beizhu = textarea,
    ]
    console.log(obj)

    fetch('/tian?text=' + obj).then((req) => {
        return req.text()
    }).then((req) => {
        req = JSON.parse(req)
    })

    kong()
}
    
function kong() {
    let accounts = document.querySelector('.accounts');
    let cost = document.querySelector('.cost');
    let dattea = document.querySelector('.dattea');
    let textarea = document.querySelector('textarea');

    accounts.value = '';
    cost.value = '';
    dattea.value = '';
    textarea.value = '';
}

