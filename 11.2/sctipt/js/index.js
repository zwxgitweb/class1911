import '../css/index.css'
import Axios from 'axios';
import 'swiper/css/swiper.css';

Axios.get('/api/list').then(res => {
    let lib = res.data.luinsd;
    let data = res.data.listac;
    dsnkd(lib, data)
    dfda(data)
})

function dsnkd(lib, data) {
    let swiper_wrapper = document.querySelector('.swiper-wrapper');
    let usacsu = document.querySelector('.usacsu');
    let dfuinhdwufv = document.querySelector('.dfuinhdwufv');

    let scr_1='';
    lib.forEach((item, index)=>{
        scr_1 +=`<div class="swiper-slide"><img src="${item.imgs}" alt=""></div>`;
    })
    swiper_wrapper.innerHTML=scr_1

    let scr_2='';
    data.forEach((item, index)=>{
        scr_2 +=`<li>${item.namejn}</li>`;
    })
    usacsu.innerHTML=scr_2

   
    dfuinhdwufv.innerHTML=data[0].dcbdu
}

function dfda(data){
    let usacsu_li = document.querySelector('.usacsu li');
    let dfuinhdwufvs = document.querySelector('.dfuinhdwufv');
    usacsu_li[0].style='font-weight: 900;color: red;'

    usacsu_li.forEach((item, index)=>{
        item.onclick=function(){
            usacsu_li.forEach((item, index)=>{
                item.style='';
            })
            item[0].style='font-weight: 900;color: red;';

            dfuinhdwufvs.innerHTML=data[index].dcbdu;
        }
    })
    new Swiper('.swiper-container', {
		autoplay: true,
		loop: true
	})
}