import displayNumbers from './displayNumbers.js'
import operate from './calculator.js'
import showResult from './showResult.js'
import {clearCurrentNumber, clearScreen} from './clearScreen.js'

export const keyPressEventHandler = (event) => {
  {
    let uniqueKey = event.key
    if (uniqueKey == '=' || uniqueKey == 'Enter') showResult(event)
    if (
      uniqueKey == '1' ||
      uniqueKey == '2' ||
      uniqueKey == '3' ||
      uniqueKey == '4' ||
      uniqueKey == '5' ||
      uniqueKey == '6' ||
      uniqueKey == '7' ||
      uniqueKey == '8' ||
      uniqueKey == '9' ||
      uniqueKey == '0' ||
      uniqueKey == '.'
    )
      displayNumbers(event)
    if (
      uniqueKey == '-' ||
      uniqueKey == '+' ||
      uniqueKey == '*' ||
      uniqueKey == '/' ||
      uniqueKey == '%'
    )
      operate(event)
  }
}

export const keyDownEventHandler = (e) => {
  if (e.code === 'Backspace') clearCurrentNumber()
  else if (e.code === 'Delete') clearScreen()
}
