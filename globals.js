const colors = {
    red: '#f00',
    green: '#0f0',
    blue: '#00f',
    yellow: '#CDFF00',
    purple: '#2d016b',
    orange: '#FFB300'
}
const [rows, cols] = [10, 4]
let answer = []
const classPegHidden = 'peg-hidden'

let [currRow, currCol] = [0, 0]
let gameOver = false
let winner = false
let gameOverMsg = 'The GAME IS OVER!!!'
let winnerMsg = '\nYou WON!!'
let looserMsg = '\nYou LOST!!!'
let playAgainMsg = '\nWanna play again?'

