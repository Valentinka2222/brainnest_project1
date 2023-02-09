'use strict'
import showResult from './showResult.js'
import {clearScreen, clearCurrentNumber} from './clearScreen.js'
import displayNumbers from './displayNumbers.js'
import * as element from './units.js'

//Creating elements from document

const operate = (e) => {
  if (element.currentNumber.textContent === '' && e.target.dataset.id === '-') {
    element.currentNumber.textContent = '-'
    return
  } else if (element.currentNumber.textContent === '') {
    return
  }

  if (element.mathSign.textContent !== '') {
    showResult()
  }
  element.previousNumber.textContent = element.currentNumber.textContent
  element.mathSign.textContent = e.target.dataset.id
  element.currentNumber.textContent = ''
}

element.operatorsButtons.forEach((button) =>
  button.addEventListener('click', (e) => operate(e))
)

element.equalsButton.addEventListener('click', (e) => showResult(e))

element.clearButton.addEventListener('click', clearScreen)

element.clearCurrentNumberButton.addEventListener('click', clearCurrentNumber)

element.numbersButtons.forEach((button) => {
  button.addEventListener('click', (e) => displayNumbers(e))
})
