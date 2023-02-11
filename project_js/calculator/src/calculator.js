'use strict'

import showResult from './showResult.js'
import * as element from './units.js'
import handleEvents from './handleEvents.js'

const operate = (e) => {
  // get unique id of current element or key after pressing button on keyboard
  let id = e.target.dataset.id || e.key

  if (element.currentNumber.textContent === '' && id === '-') {
    element.currentNumber.textContent = '-'
    return
  } else if (element.currentNumber.textContent === '') return
  // if you chose operator the code will execute
  if (element.mathSign.textContent !== '') showResult(e)

  element.previousNumber.textContent = element.currentNumber.textContent
  element.mathSign.textContent = id
  element.currentNumber.textContent = ''
}

handleEvents()
export default operate
