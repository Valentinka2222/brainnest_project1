'use strict'

import {createElements} from './createElements.js'
import {points, choice} from './units.js'
import {
  spanComputerChoice,
  spanPlayerPoints,
  spanComputerPoints,
} from './createElements.js'
import showResults from './showResults.js'
import computerPlay from './computerPlay.js'
import eventHandler from './eventHandler.js'

// create DOM elements
createElements()

//
const playRound = (e) => {
  // hide results board  after finishing the game
  const h1Element = document.querySelector('h1')
  h1Element.classList.remove('hidden')

  let {computerChoice, playerChoice} = choice

  playerChoice = e.target.dataset.item
  computerChoice = computerPlay()

  if (
    (playerChoice === 'rock' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'rock')
  ) {
    points.computerPoints++
    spanPlayerPoints.textContent = `Player ${points.playerPoints}`
    spanComputerPoints.textContent = `Computer ${points.computerPoints}`
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    points.playerPoints++
    spanPlayerPoints.textContent = `Player ${points.playerPoints}`
    spanComputerPoints.textContent = `Computer ${points.computerPoints}`
  }
  // visualization  computer choice
  spanComputerChoice.textContent = `Computer chose ${computerChoice}!`
  showResults(points.computerPoints, points.playerPoints)
}

eventHandler(playRound)
export default createElements
