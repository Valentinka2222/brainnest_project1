import checkLength from './checkLength.js'
import * as element from './units.js'

const displayNumbers = (e) => {
  if (
    e.target.dataset.id === '.' &&
    element.currentNumber.textContent.includes('.')
  )
    return

  if (e.target.dataset.id === '.' && element.currentNumber.textContent === '')
    return (element.currentNumber.textContent = '0.')

  element.currentNumber.textContent += e.target.dataset.id
  checkLength(element.currentNumber.textContent)
  console.log(e.target.dataset.id)
}
export default displayNumbers
