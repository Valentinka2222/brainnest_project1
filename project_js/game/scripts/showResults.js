'use strict'
import {points} from './units.js'
import {spanComputerChoice} from './createElements.js'

const showResults = (computerPoints, playerPoints) => {
  const h1 = document.querySelector('h1')
  if (computerPoints == 5) {
    points.computerPoints = 0
    points.playerPoints = 0
    spanComputerChoice.textContent = `Computer win!`
    h1.classList.add('hidden')
  }
  if (playerPoints == 5) {
    points.computerPoints = 0
    points.playerPoints = 0
    spanComputerChoice.textContent = `Player win!`
    h1.classList.add('hidden')
  }
}
export default showResults
