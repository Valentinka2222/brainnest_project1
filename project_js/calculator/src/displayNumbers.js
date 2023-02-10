import checkLength from './checkLength.js'

import * as element from './units.js'

const displayNumbers = (e) => {
  const id = e.target.dataset.id || e.key
  let {currentNumber} = element

  if (id === '.' && currentNumber.textContent.includes('.')) return

  if (id === '.' && currentNumber.textContent === '')
    return (currentNumber.textContent = '0.')

  currentNumber.textContent += id

  checkLength(currentNumber.textContent)
}
export default displayNumbers
