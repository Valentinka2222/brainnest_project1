import {createElements} from './createElements.js'
import {points, choice} from './units.js'
import {
  spanComputerChoice,
  spanPlayerPoints,
  spanComputerPoints,
} from './createElements.js'
import showResults from './showResults.js'
import computerPlay from './computerPlay.js'

createElements()

const playRound = (e) => {
  let {computerChoice, playerChoice} = choice
  let {computerPoints, playerPoints} = points
  playerChoice = e.target.dataset.item
  computerChoice = computerPlay()

  if (
    (playerChoice === 'rock' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'rock')
  )
    points.computerPoints++
  else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  )
    points.playerPoints++

  spanPlayerPoints.textContent = `Player ${playerPoints}`
  spanComputerPoints.textContent = `Computer ${computerPoints}`
  spanComputerChoice.textContent = `Computer chose ${computerChoice}!`
  showResults(points.computerPoints, points.playerPoints)
}

const btns = Array.from(document.querySelectorAll('button'))

btns.forEach((item) => {
  item.addEventListener('click', function () {
    btns.forEach((elem) => elem.classList.remove('red'))
    item.classList.add('red')
  })
})
btns.forEach((btn) => {
  btn.addEventListener('click', playRound)
})
