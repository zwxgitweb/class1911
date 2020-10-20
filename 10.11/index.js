$(function () {
    var num = [];

    $('.t').click(function () {
        djc($('.aaa').val(), $('.bbb').val())

        //点击删除
        bdshf()

        //点击全部删除
        nsjfj()

        //重置
        jfkeri()

    })


    $('.c').click(function () {
        jfkeri()
    })


    function bdshf() {
        var tiajidcf = document.querySelectorAll('.tiajidcf li')
        var san = document.querySelectorAll('.san')
        console.log(tiajidcf)
        for (let i = 0; i < san.length; i++) {
            san[i].onclick = function () {
                tiajidcf[i].style = 'display: none;';
                num.pop()
            }
        }
    }

    function nsjfj() {
        $('.quanbu').click(function () {
            num = [];
            $('.tiajidcf').html(function () {
                str = '暂无信息...'
                return str;
            })
        })
    }

    function jfkeri() {
        $('.aaa').val('');
        $('.bbb').val('');
    }

    function djc(iphone, passwords) {
        if (iphone == '' || passwords == '') {
            alert('不能为空')
        } else {
            //添加
            cfd($('.aaa').val(), $('.bbb').val())
        }
    }

    function cfd(iphone, passwords) {
        var user = {
            username: iphone,
            password: passwords
        }
        num.push(user)
        var str = ''
        for (var i = 0; i < num.length; i++) {
            $('.tiajidcf').html(function () {
                str += `
                <li>
                <span>${i+1}</span>
                <span>${num[i].username}</span>
                <span>${num[i].password}</span>
                <span><button class="san">删除</button></span>
            </li>
                `
                return str;
            })
        }
    }
})