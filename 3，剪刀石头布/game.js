module.exports = function (player1) {
    // let argv = process.argv;
    // let player1 = argv[argv.length - 1];
    let player2 = '';
    let result = '';
    let ramdom = Math.random() * 3;

    if (ramdom < 1) {
        player2 = 'rock';
    } else if (ramdom > 2) {
        player2 = 'paper'
    } else {
        player2 = 'scissors';
    }

    if (player1 == player2) {
        result = '平局';
    } else if (player1 === 'rock' && player2 === 'scissors') {
        result = '恭喜你赢了'
    } else if (player1 === 'paper' && player2 === 'rock') {
        result = '恭喜你赢了'
    } else if (player1 === 'scissors' && player2 === 'paper') {
        result = '恭喜你赢了'
    } else {
        result = '很遗憾输了'
    }
    return result 
}