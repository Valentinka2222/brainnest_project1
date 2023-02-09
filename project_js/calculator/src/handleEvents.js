import {clearScreen, clearCurrentNumber} from './clearScreen.js'
import displayNumbers from './displayNumbers.js'
import operate from './calculator.js'
import showResult from './showResult.js'
import {
  keyPressEventHandler,
  keyDownEventHandler,
} from './keyboardEventHandler.js'
import * as element from './units.js'

const handleEvents = () => {
  element.operatorsButtons.forEach((button) =>
    button.addEventListener('click', (e) => operate(e))
  )

  element.equalsButton.addEventListener('click', (e) => showResult(e))

  element.clearButton.addEventListener('click', clearScreen)

  element.clearCurrentNumberButton.addEventListener('click', clearCurrentNumber)

  element.numbersButtons.forEach((button) => {
    button.addEventListener('click', (e) => displayNumbers(e))
  })

  document.addEventListener('keypress', (e) => keyPressEventHandler(e))

  document.addEventListener('keydown', (e) => keyDownEventHandler(e))
}
export default handleEvents
72
