import * as element from './units.js'
import {result} from './units.js'
import checkLength from './checkLength.js'

const showResult = (e) => {
  if (
    (e.target.dataset.id === 'equals' &&
      element.previousNumber.textContent === '') ||
    element.currentNumber.textContent === ''
  ) {
    element.mathSign.textContent = 'error'
  }
  if (
    element.previousNumber.textContent === '' ||
    element.currentNumber.textContent === ''
  )
    return

  let x = Number(element.currentNumber.textContent)
  let y = Number(element.previousNumber.textContent)
  let opr = element.mathSign.textContent

  switch (opr) {
    case '+':
      result.result = x + y
      break
    case '-':
      result.result = y - x
      break
    case '*':
      result.result = x * y
      break
    case '/':
      if (x === 0) {
        element.previousNumber.textContent = ''
        element.mathSign.textContent = 'error'
        return
      }
      result.result = y / x
      break
    case 'x^':
      result.result = y ** x
      break
    case '%':
      result.result = ((x / 100) * y).toFixed(2)
      break
  }
  console.log(Number(result.result).toFixed(2))
  element.currentNumber.textContent = result.result
  checkLength(element.currentNumber.textContent)
  element.previousNumber.textContent = ''
  element.mathSign.textContent = ''
}
export default showResult
