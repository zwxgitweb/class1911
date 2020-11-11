fetch('/add').then((req) => {
    return req.text()
}).then((req) => {
    req = JSON.parse(req)

    xunran(req)
    ncwedh(req)
})

function xunran(req) {
    let mfwdf = document.querySelector('.mfwdf');
    let str = '';
    req.forEach((i, ind) => {
        str += `
        <li>
        <span>${ind}</span>
        <span>${i.leixing}</span>
        <span>${i.jiage}</span>
        <span>${i.shijian}</span>
        <span>${i.beizhu}</span>
    </li>`
    })
    mfwdf.innerHTML = str;
}

function ncwedh(req) {
let income=document.querySelector('.income');
let expend=document.querySelector('.expend');
let subtotal=document.querySelector('.subtotal');
    let s = 0;
    let h = 0
    req.forEach((li, ind) => {

        if (li.jiage > 0) {
            s += +li.jiage
        } else {
            h += +li.jiage
        }
    })
    income.innerHTML=s;
    expend.innerHTML=h;
    subtotal.innerHTML=s + h;
}