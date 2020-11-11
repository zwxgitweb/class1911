let oll = document.querySelector('main div ol');
let ull = document.querySelector('main div ul');
let swiper_wrapper = document.querySelector('.swiper-wrapper');


import "./index.css";
import Axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
Axios.get('/api/list').then(res => {
    let list = res.data.list;
    let imgs = res.data.img;
    let str = '',str3='';
    list.map((i, ind) => {
        str += `
        <li>${i.name}</li>
        `
    })
    oll.innerHTML = str;
    function fu(i) {
        let str2 = '';
        str2 += `
        <li>${list[i].text}</li>
        `
        ull.innerHTML = str2
    }
    fu(0);

    let ol_li = document.querySelectorAll("ol li");
    ol_li.forEach((i, ind) => {
        i.onclick = function () {
            // console.log(ind)
            fu(ind);

        }
    })

    imgs.map((i)=>{
        str3+=`
        <div class="swiper-slide"><img src="${i.img}"></div>
        `
    })
    swiper_wrapper.innerHTML=str3;

	new Swiper('.swiper-container', {
		autoplay: true,
		loop: true
	})
})