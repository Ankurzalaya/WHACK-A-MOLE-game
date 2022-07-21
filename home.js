const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeleft= document.querySelector('#time-left')
const score = document.querySelector('#score')


let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomsquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomsquare = squares[Math.floor(Math.random() *9)] 
    randomsquare.classList.add('mole')

    hitPosition = randomsquare.id
}


squares.forEach(square => {
    square.addEventListener('mousedown' , () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result 
            hitPosition = null
        }
    })
})



function moveMole(){
    let timerId = null
    timerId = setInterval(randomsquare, 1000)

}
moveMole()

function countDown() {
    currentTime--
    timeleft.textContent = currentTime
   
    if (currentTime == 0) {
      clearInterval(countDownTimerId)
      clearInterval(timerId)
      alert('GAME OVER! Your final score is ' + result)
    }
   
   }
   
   let countDownTimerId = setInterval(countDown, 1000)