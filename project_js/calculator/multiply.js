const currentNumber = document.querySelector('.currentNumber')

const previousNumber = document.querySelector('.previousNumber p')

const mathSign = document.querySelector('.mathSign')

const numbersButtons = document.querySelectorAll('.number')

const operatorsButtons = document.querySelectorAll('.operator')

const equalsButton = document.querySelector('.equals')

const clearButton = document.querySelector('.clear')

let result = ''

function displayNumbers() {
  //Adding maximum 1 comma at the display
  if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return
  //Clicking comma first adding 0 on the beginning
  if (this.textContent === '.' && currentNumber.innerHTML === '')
    return (currentNumber.innerHTML = '0.')

  //displayNumbers
  currentNumber.innerHTML += this.textContent
}

function operate() {
  //Creating only 1 operator, making '-' a negative number
  if (currentNumber.innerHTML === '' && this.textContent === '-') {
    currentNumber.innerHTML = '-'
    return
  } else if (currentNumber.innerHTML === '') {
    return
  }

  if (mathSign.innerHTML !== '') {
    showResult()
  }
  previousNumber.innerHTML = currentNumber.innerHTML
  mathSign.innerHTML = this.textContent
  currentNumber.innerHTML = ''
}

function showResult() {
  if (previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return

  let x = Number(currentNumber.innerHTML)
  let y = Number(previousNumber.innerHTML)
  let opr = mathSign.innerHTML

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
  }

  currentNumber.innerHTML = result
  previousNumber.innerHTML = ''
  mathSign.innerHTML = ''
}

function clearScreen() {
  result = ''
  currentNumber.innerHTML = ''
  mathSign.innerHTML = ''
  previousNumber.innerHTML = ''
}

//Setting click Eventlisteners
operatorsButtons.forEach((button) => button.addEventListener('click', operate))

equalsButton.addEventListener('click', showResult)

clearButton.addEventListener('click', clearScreen)

numbersButtons.forEach((button) => {
  button.addEventListener('click', displayNumbers)
})
