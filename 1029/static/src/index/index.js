
$('#login').click(function () {
    fetch('http://localhost:8080/user/login', {
        method: 'post',
        body: JSON.stringify({ username: $('#user').val(), password: $('#pad').val() }),
        headers: {
            'content-type': 'application/json'
        },
    }).then(res => {
        return res.text()
    }).then(res => {
        res = JSON.parse(res)
        if (res.code == 1) {
            alert(res.msg)
            location.href = 'http://localhost:8080'
        } else {
            alert(res.msg)
        }
    })
})


$('#register').click(function () {
    fetch('http://localhost:8080/user/register', {
        method: 'post',
        body: JSON.stringify({ username: $('#user').val(), password: $('#pad').val() }),
        headers: {
            'content-type': 'application/json'
        },
    }).then(res => {
        return res.text()
    }).then(res => {
        console.log(res);
        res = JSON.parse(res)
        if (res.code == 1) {
            alert(res.msg)
        } else {
            alert(res.msg)
        }

    })
}) 