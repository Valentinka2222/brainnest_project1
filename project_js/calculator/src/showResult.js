import * as element from './units.js'
import {result} from './units.js'
import checkLength from './checkLength.js'

const showResult = (e) => {
  let {previousNumber, currentNumber, mathSign} = element

  if (
    (e.target.dataset.id === 'equals' && previousNumber.textContent === '') ||
    (e.key === '=' && previousNumber.textContent === '') ||
    currentNumber.textContent === ''
  ) {
    mathSign.textContent = 'error'
  }
  if (previousNumber.textContent === '' || currentNumber.textContent === '')
    return

  let a = Number(currentNumber.textContent)
  let b = Number(previousNumber.textContent)
  let opr = mathSign.textContent

  switch (opr) {
    case '+':
      result.result = a + b
      break
    case '-':
      result.result = b - a
      break
    case '*':
      result.result = a * b
      break
    case '/':
      if (a === 0) {
        previousNumber.textContent = ''
        mathSign.textContent = 'error'
        return
      }
      result.result = b / a
      break
    case 'x^':
      result.result = b ** a
      break
    case '%':
      result.result = ((a / 100) * b).toFixed(2)
      break
  }

  currentNumber.textContent = result.result
  checkLength(currentNumber.textContent)
  previousNumber.textContent = ''
  mathSign.textContent = ''
}
export default showResult
