'use strict'

//Creating elements from document
const currentNumber = document.querySelector('.currentNumb')

const previousNumber = document.querySelector('.previousNumb')

const mathSign = document.querySelector('.mathSign')

const numbersButtons = document.querySelectorAll('.number')

const operatorsButtons = document.querySelectorAll('.operator')

const equalsButton = document.querySelector('.equals')

const clearButton = document.querySelector('.clear')

let result = ''

function displayNumbers() {
  //Adding maximum 1 comma at the display
  if (this.textContent === '.' && currentNumber.textContent.includes('.'))
    return
  //Clicking comma first adding 0 on the beginning
  if (this.textContent === '.' && currentNumber.textContent === '')
    return (currentNumber.textContent = '0.')

  //displayNumbers
  currentNumber.textContent += this.textContent
  console.log(this.textContent)
}

const operate = (e) => {
  console.log(e.target.dataset.id)
  //Creating only 1 operator, making '-' a negative number
  let curNumber = Number(currentNumber.textContent)
  let prevNumber = Number(previousNumber.textContent)
  let opr = mathSign.textContent
  if (currentNumber.textContent === '' && this.textContent === '-') {
    currentNumber.textContent = '-'
    return
  } else if (currentNumber.textContent === '') {
    return
  }

  if (mathSign.textContent !== '') {
    showResult(opr, curNumber, prevNumber)
  }
  previousNumber.textContent = currentNumber.textContent
  mathSign.textContent = e.target.dataset.id
  currentNumber.textContent = ''
}
const showResult = () => {
  if (previousNumber.textContent === '' || currentNumber.textContent === '')
    return

  let x = Number(currentNumber.textContent)
  let y = Number(previousNumber.textContent)
  let opr = mathSign.textContent

  switch (opr) {
    case '+':
      result = x + y
      break
    case '-':
      result = y - x
      break
    case '×':
      result = x * y
      break
    case '/':
      result = y / x
      break
    case 'x^':
      result = y ** x
      break
    case '%':
      result = ((x / 100) * y).toFixed(2)
      break
  }

  currentNumber.textContent = result
  previousNumber.textContent = ''
  mathSign.textContent = ''
}

const clearScreen = () => {
  result = ''
  currentNumber.textContent = ''
  mathSign.textContent = ''
  previousNumber.textContent = ''
}

//Setting click Eventlisteners
operatorsButtons.forEach((button) =>
  button.addEventListener('click', (e) => operate(e))
)

equalsButton.addEventListener('click', showResult)

clearButton.addEventListener('click', clearScreen)

numbersButtons.forEach((button) => {
  button.addEventListener('click', displayNumbers)
})
