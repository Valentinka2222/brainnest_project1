import * as element from './units.js'
import {result} from './units.js'

export const clearScreen = () => {
  result.result = ''
  element.currentNumber.textContent = '0'
  element.mathSign.textContent = ''
  element.previousNumber.textContent = ''
}
export const clearCurrentNumber = () =>
  (element.currentNumber.textContent = element.currentNumber.textContent.slice(
    0,
    -1
  ))
