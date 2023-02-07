import {points} from './units.js'
import {spanComputerChoice} from './createElements.js'

const showResults = (computerPoints, playerPoints) => {
  if (computerPoints == 5) {
    points.computerPoints = 0
    points.playerPoints = 0
    spanComputerChoice.textContent = `Computer win!`
  }
  if (playerPoints == 5) {
    points.computerPoints = 0
    points.playerPoints = 0
    spanComputerChoice.textContent = `Player win!`
  }
}
export default showResults
