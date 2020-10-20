$.ajax({
	url: 'http://127.0.0.1:3000/api/data',
	type: 'get',
	success: function (a) {
		var aaa = JSON.parse(a).data1;

		var fl_l = document.querySelector('.fl_l ul');
		var fefed = document.querySelector('.fefed')
		var ffjq_1 = document.querySelector('.ffjq_1')
		var ffjq_2 = document.querySelector('.ffjq_2')
		var ffjq_3 = document.querySelector('.ffjq_3')
		var idfjdf = document.querySelector('.idfjdf');

		var str1 = '';
		for (var i in aaa) {
			str1 += ` <li>${aaa[i].mane}</li>`
		}
		fl_l.innerHTML = str1;

		fu()
		
		ndsuf()

		function fu() {
			var str2 = '';
			for (var i = 0; i < aaa.length; i++) {
				str2 += `<p class='cfddf'>${aaa[i].mane}</p>`
				for (var j in aaa[i].ufhfewf) {
					str2 += `
					<li>
                    <p><img src="${aaa[i].ufhfewf[j].imgs}" alt=""></p>
                    <div class="fsdfdf">
                        <p class="hb_cpl_b_1">${aaa[i].ufhfewf[j].nafds}</p>
                        <p class="hb_cpl_b_2">${aaa[i].ufhfewf[j].naffsd_l}</p>
                        <div class="hb_cpl_b_3">
                            <p><span class='dsfdsdf'>￥${aaa[i].ufhfewf[j].price_X}</span><span>/1人份</span></p>
                            <div class="vigvnid">
                                    <span class="jjj">-</span>
                                    <span class="sss">1</span>
                                    <span class="nnn">+</span>
                            </div>
                            <span class="vdsfvgsd">+</span>
                        </div>
                    </div>
                </li>
					`
				}
			}

			fefed.innerHTML = str2;
			var vigvnid = document.querySelectorAll('.vigvnid');
			var vdsfvgsd = document.querySelectorAll('.vdsfvgsd');
			var hb_cpl_b_1 = document.querySelectorAll('.hb_cpl_b_1');
			var jjj = document.querySelectorAll('.jjj');
			var sss = document.querySelectorAll('.sss');
			var nnn = document.querySelectorAll('.nnn');
			var dsfdsdf = document.querySelectorAll('.dsfdsdf');


			for (let i = 0; i < vdsfvgsd.length; i++) {
				vdsfvgsd[i].onclick = function () {
					var figf = document.querySelectorAll('.figf')
					var dsfdsdf = document.querySelectorAll('.dsfdsdf')
					var figf = document.querySelectorAll('.figf')
					var gffgdg = figf[0].innerHTML.slice(1);
					var vvcx = dsfdsdf[i].innerHTML.slice(1);
					var fgfd = +gffgdg + +vvcx;
					for (var t = 0; t < figf.length; t++) {
						figf[t].innerHTML = '￥' + fgfd.toFixed(2)
					}
					sss[i].innerHTML = 1;

					var ffjq_1_fyuehf = document.querySelector('.ffjq_1_fyuehffsf')
					var str3 = '';
					str3 += `
					<li>
                    <div class="mdgfdsjf">
                        <p class='fdfdfd'>${hb_cpl_b_1[i].innerHTML}</p>
                        <p>标椎(1人份)</p>
                    </div>
                    <div class="fguidhf">
                        <p class="dsfsdf">${dsfdsdf[i].innerHTML}</p>
                        <p class="vigvnid">
                            <span class="qqq">-</span>
                            <span class="www">1</span>
                            <span class="eee">+</span>
                        </p>
                    </div>
                </li>
					`;

					ffjq_1_fyuehf.innerHTML += str3;

					dsfdsdf[i].value = i

					var fig = document.querySelectorAll('.figf')
					if (fig[0].innerHTML.slice(1) > 20) {
						ffjq_1.style = 'display:none  !important;'
						ffjq_2.style = 'display:flex !important;'
					}

					vdsfvgsd[i].style = 'display: none !important'
					vigvnid[i].style = 'display: block !important';

					var qqq = document.querySelectorAll('.qqq');
					var www = document.querySelectorAll('.www');
					var eee = document.querySelectorAll('.eee');
					let ffjq_1_fyuehffsf_li = document.querySelectorAll('.ffjq_1_fyuehffsf li')


					for (let l = 0; l < eee.length; l++) {
						eee[l].onclick = function () {
							var nam = www[l].innerText;
							nam++;
							www[l].innerHTML = nam;

							sss[dsfdsdf[l].value].innerHTML = nam;

							var dfdfsdf = document.querySelectorAll('.dsfsdf')
							var figf = document.querySelectorAll('.figf')
							var fdasdfs = dfdfsdf[l].innerHTML.slice(1);
							var vvcx = figf[0].innerHTML.slice(1);
							var fggf = +vvcx + +fdasdfs;
							for (var t = 0; t < figf.length; t++) {
								figf[t].innerHTML = '￥' + fggf.toFixed(2);
							}
						}
					}
					for (let l = 0; l < qqq.length; l++) {
						qqq[l].onclick = function () {
							var nam = www[l].innerText;
							nam--;

							if (nam < 1) {
								nam = 0;
							}
							www[l].innerHTML = nam;



							sss[dsfdsdf[l].value].innerHTML = nam;

							if (nam == 0) {
								vdsfvgsd[l].style = 'display: block !important'
								vigvnid[l].style = 'display: none !important '

								var figf = document.querySelectorAll('.figf')
								var vvcx = figf[0].innerHTML.slice(1);
								for (var t = 0; t < figf.length; t++) {
									figf[t].innerHTML = '￥' + vvcx;
								}
							}

							var dfdfsdf = document.querySelectorAll('.dsfsdf')
							var figf = document.querySelectorAll('.figf')
							var fdasdfs = dfdfsdf[l].innerHTML.slice(1);
							var vvcx = figf[0].innerHTML.slice(1);
							var fggf = +vvcx - +fdasdfs;
							if (fggf < 0) {
								fggf = 0;
							}
							for (var t = 0; t < figf.length; t++) {
								figf[t].innerHTML = '￥' + fggf.toFixed(2);
							}

							if (nam == 0) {
								ffjq_1_fyuehffsf_li[l].style = 'display: none !important';
							}

							var ffjq_1_fyuehff_li = document.querySelectorAll('.figf');
							var vvcxds = ffjq_1_fyuehff_li[0].innerHTML.slice(1);


							if (vvcxds == 0) {
								ffjq_3.style = 'display:none  !important;'
							}



						}
					}
				}
			}

			//加
			for (let i = 0; i < nnn.length; i++) {
				nnn[i].onclick = function () {
					var nam = sss[i].innerText;
					nam++;
					sss[i].innerHTML = nam;



					var figf = document.querySelectorAll('.figf')
					var fdasdfs = dsfdsdf[i].innerHTML.slice(1);
					var vvcx = figf[0].innerHTML.slice(1);
					var fggf = +vvcx + +fdasdfs;
					for (var t = 0; t < figf.length; t++) {
						figf[t].innerHTML = '￥' + fggf.toFixed(2);
					}


					var fig = document.querySelectorAll('.figf')
					if (fig[0].innerHTML.slice(1) > 20) {
						ffjq_1.style = 'display:none  !important;'
						ffjq_2.style = 'display:flex !important;'
					}

					var www = document.querySelectorAll('.www');


					www[dsfdsdf[i].value].innerHTML = nam;

				}
			}

			//减
			for (let j = 0; j < jjj.length; j++) {
				jjj[j].onclick = function () {
					var nam = sss[j].innerText;
					nam--;
					if (nam < 0) {
						nam = 0;
					}

					if (nam == 0) {
						vdsfvgsd[j].style = 'display: block !important'
						vigvnid[j].style = 'display: none !important '

						var figf = document.querySelectorAll('.figf')
						var vvcx = figf[0].innerHTML.slice(1);
						for (var t = 0; t < figf.length; t++) {
							figf[t].innerHTML = '￥' + vvcx;
						}
					}
					sss[j].innerHTML = nam;


					var figf = document.querySelectorAll('.figf')
					var www = document.querySelectorAll('.www')

					var fdasdfs = dsfdsdf[j].innerHTML.slice(1);
					var vvcx = figf[0].innerHTML.slice(1);
					var fggf = +vvcx - +fdasdfs;
					for (var t = 0; t < figf.length; t++) {
						figf[t].innerHTML = '￥' + fggf.toFixed(2);
					}

					var fig = document.querySelectorAll('.figf')
					console.log(fig[0].innerHTML.slice(1))
					if (fig[0].innerHTML.slice(1) < 20) {
						ffjq_2.style = 'display:none  !important;'
						ffjq_1.style = 'display:flex !important;'
					}
					console.log(nam)
					www[dsfdsdf[j].value].innerHTML = nam;

				}
			}

			idfjdf.onclick = function () {

				if (ffjq_3.value == undefined || ffjq_3.value == 0) {
					ffjq_3.style = ' display: block !important;'
					ffjq_3.value = 1
				} else {
					ffjq_3.style = ' display: none !important;';
					ffjq_3.value = 0
				}
			}


		}

		function ndsuf() {
			var newbfgfd = new BScroll('.fl_l', {
				scrollY: true,
				click: true
			})
			var newb = new BScroll('.fl_r', {
				scrollY: true,
				click: true,
				probeType: 3,
			})
			// 获取标题距离顶部的距离
			var cfddf = document.querySelectorAll('.cfddf')
			let num = []
			for (var P = 0; P < cfddf.length; P++) {
				num.push(cfddf[P].offsetTop);
			}


			var fl_l_li = document.querySelectorAll('.fl_l ul li');
			fl_l_li[0].style = 'background-color: #fff;color: #000000;';
			for (let i = 0; i < fl_l_li.length; i++) {
				fl_l_li[i].onclick = function () {
					newb.scrollToElement(cfddf[i], 500, true, 0);
					kogk(i)
				}
			}


			// 滚动右
			newb.on('scroll', function (e) {
				// 返回下标
				let ind = num.findIndex(function (i) {
					return i > -e.y
				})
				kogk(ind)
				newbfgfd.scrollToElement(fl_l_li[ind], 500, true, true);
			});

			function kogk(abc) {
				for (var p = 0; p < fl_l_li.length; p++) {
					fl_l_li[p].style = 'background-color: #f6f6f6;color: #cecece;';
				}
				fl_l_li[abc].style = 'background-color: #fff;color: #000000;';
			}
		}
	}
})