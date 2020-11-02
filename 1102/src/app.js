import "./style.css"
import Axios from 'axios'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

let uls = document.querySelector('ul')
let ols = document.querySelector('ol')
let swiperEl = document.querySelector('.swiper-wrapper')
Axios.get('/list').then(res => {
    console.log(res);
    let data = res.data.list
    let html = ''
    data.map((item) => {
        html += `
        <li>${item.name}</li>`
    })
    uls.innerHTML = html
    ols.innerHTML = `<li>${data[0].children[0].name}</li>`
    swiperRender(data)
    renderClick(data)


})
function renderClick(data) {
    let lis = document.querySelectorAll('ul li')
    lis.forEach((it, i) => {
        it.onclick = function () {
            ols.innerHTML = data[i].children[0].name
        }
    })
}
function swiperRender(data) {
    console.log(data);
    let html = ''
    data.map(it => {
        html += ` <div class="swiper-slide">
            <img src="${it.img}" alt="">
        </div>`
    })
    swiperEl.innerHTML = html
    new Swiper('.swiper-container',{
        autoplay:true,
        loop:true
    })
}
