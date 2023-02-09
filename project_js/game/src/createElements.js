'use strict'
import {points} from './units.js'

export const divContainer = document.createElement('div')
export const spanComputerPoints = document.createElement('span')
export const spanPlayerPoints = document.createElement('span')
export const spanComputerChoice = document.createElement('span')

export const createElements = () => {
  const divShowResults = document.createElement('div')
  const buttonScissors = document.createElement('button')
  const buttonRock = document.createElement('button')
  const buttonPaper = document.createElement('button')
  const spanGameInfo = document.createElement('span')
  const span = document.createElement('span')
  const h1 = document.createElement('h1')

  document.body.appendChild(divContainer)
  document.body.insertBefore(divShowResults, divContainer)

  divContainer.append(buttonScissors)
  divContainer.append(buttonRock)
  divContainer.append(buttonPaper)
  divShowResults.append(spanComputerChoice)
  divShowResults.append(h1)
  divShowResults.append(spanGameInfo)
  h1.append(spanComputerPoints)
  h1.append(span)
  h1.append(spanPlayerPoints)

  divContainer.classList.add('container')
  divShowResults.classList.add('show')
  spanComputerChoice.classList.add('showChoice')
  buttonScissors.classList.add('btn', 'scissors')
  buttonRock.classList.add('btn', 'rock')
  buttonPaper.classList.add('btn', 'paper')

  buttonScissors.setAttribute('data-item', 'scissors')
  buttonRock.setAttribute('data-item', 'rock')
  buttonPaper.setAttribute('data-item', 'paper')

  spanPlayerPoints.textContent = `Player ${points.computerPoints}`
  span.textContent = ' : '
  spanComputerPoints.textContent = `Computer ${points.playerPoints}`
  spanGameInfo.textContent = `Playing to: 5 wins!`
}
