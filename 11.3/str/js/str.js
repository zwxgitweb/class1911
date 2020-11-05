
function bhcnda() {
    let title = document.querySelector('#title');
    let todolist = document.querySelector('#todolist');

    //点击渲染
    title.onkeydown = (e) => {
        //判断成立条件
        if (e.keyCode == 13 && title.value !== '') {
            todolist.innerHTML += `<li draggable="true">
            <input type="checkbox" >
            <p id="p-1">${title.value}</p>
            <a href="javascript:remove(1)">-</a>
        </li>`
            //点击后input为空
            title.value = '';
            nfdsf()
        }
    }

    function nfdsf() {
        let todolists = document.querySelector('#todolist');
        let todolist_li = document.querySelectorAll('#todolist li');
        let todolist_inp = document.querySelectorAll('#todolist  li  input');
        let todolist_a = document.querySelectorAll('#todolist a');

        todolist_a.forEach((a, ind) => {
            a.onclick = () => {
                //点击删除
                todolists.removeChild(todolist_li[ind]);
                nda()
            }
        });
        //
        todolist_inp.forEach((b, ind) => {
            b.onclick = () => {
                //点击input，下渲染
                let donelists = document.querySelector('#donelist');
                let stew = todolist_li[ind].innerHTML;
                donelists.innerHTML += '<li>' + stew + '</li>';
                //点击删除
                todolists.removeChild(todolist_li[ind]);
                nda()
            }
        })

        function nda() {
            //让input，默认选中
            let donelist_inp = document.querySelectorAll('#donelist  li  input');
            donelist_inp.forEach((a, ind) => {
                a.checked = true;
            })

            //获取的个数
            let todolist_lix = document.querySelectorAll('#todolist li');
            let donelist_lix = document.querySelectorAll('#donelist li');
            let todocount = document.querySelector('#todocount');
            let donecount = document.querySelector('#donecount');
            todocount.innerHTML = todolist_lix.length;
            donecount.innerHTML = donelist_lix.length;

            mdofm()
        }

    }


    function mdofm() {
        let donelists = document.querySelector('#donelist');
        let todolists = document.querySelector('#todolist');
        let donelist_li = document.querySelectorAll('#donelist li');
        let donelist_inp = document.querySelectorAll('#donelist  li  input');
        let donelist_a = document.querySelectorAll('#donelist a');

        donelist_a.forEach((a, ind) => {
            a.onclick = () => {
                //点击删除
                donelists.removeChild(donelist_li[ind]);
                nda()
            }
        });
        donelist_inp.forEach((a, ind) => {
            donelist_inp[ind].onclick = () => {
                //点击input，上渲染
                let donelists = document.querySelector('#donelist');
                let stew = donelist_li[ind].innerHTML;
                todolists.innerHTML += '<li>' + stew + '</li>';
                //点击删除
                donelists.removeChild(donelist_li[ind]);
                nda()
            }
        })
        function nda() {

            //获取的个数
            let todolist_lix = document.querySelectorAll('#todolist li');
            let donelist_lix = document.querySelectorAll('#donelist li');
            let todocount = document.querySelector('#todocount');
            let donecount = document.querySelector('#donecount');
            todocount.innerHTML = todolist_lix.length;
            donecount.innerHTML = donelist_lix.length;
            nfdsf()
        }

    }
}
bhcnda()