const http = require('http');

const argv = process.argv // 获取node 传入的值

let play1 = argv[argv.length - 1] // 获取我写入的 // 玩家1

let play2 = ''; //玩家2

const num = Math.floor(Math.random() * 3); //随机数
//判断出玩家2出的是什么 石头 剪刀 布
if (num < 1) {
    play2 = 'rock'; //石头
} else if (num > 1) {
    play2 = 'cloth'; //布
} else {
    play2 = 'scissor'; //剪刀 
}

if (play1 === play2) { // 若是两者相同则平局

    console.log('平局');

} else if (play1 === 'scissor' && play2 === 'cloth') { // 剪刀 》 布

    console.log('you Win');

} else if (play1 === 'cloth' && play2 === 'rock') { // 布 》 石头

    console.log('you Win');

} else if (play1 === 'rock' && play2 === 'scissor') { // 石头 》 剪刀

    console.log('you Win');

} else {

    console.log('you Lose');
}