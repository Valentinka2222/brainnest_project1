let choice = {
  computerChoice: '',
  playerChoice: '',
}
let points = {
  computerPoints: 0,
  playerPoints: 0,
}

const buttonScissors = document.createElement('button')
const buttonRock = document.createElement('button')
const buttonPaper = document.createElement('button')
const divShowResults = document.createElement('div')
const divContainer = document.createElement('div')
const spanComputerPoints = document.createElement('span')
const spanPlayerPoints = document.createElement('span')
const span = document.createElement('span')
const spanComputerChoice = document.createElement('span')
const h1 = document.createElement('h1')

const createElements = () => {
  document.body.appendChild(divContainer)
  document.body.insertBefore(divShowResults, divContainer)

  divContainer.append(buttonScissors)
  divContainer.append(buttonRock)
  divContainer.append(buttonPaper)
  divShowResults.append(h1)
  divShowResults.append(h1)
  h1.append(spanComputerPoints)
  h1.append(span)
  h1.append(spanPlayerPoints)

  divContainer.classList.add('container')
  divShowResults.classList.add('show')
  buttonScissors.classList.add('btn', 'scissors')
  buttonRock.classList.add('btn', 'rock')
  buttonPaper.classList.add('btn', 'paper')

  buttonScissors.setAttribute('data-item', 'scissors')
  buttonRock.setAttribute('data-item', 'rock')
  buttonPaper.setAttribute('data-item', 'paper')

  spanPlayerPoints.textContent = `Player ${points.computerPoints}`
  span.textContent = ' : '
  spanComputerPoints.textContent = `Computer ${points.playerPoints}`
}
createElements()

const computerPlay = () => {
  let nameOfChoice = ['rock', 'paper', 'scissors']
  let randonNumber = Math.floor(Math.random() * nameOfChoice.length)
  switch (randonNumber) {
    case 0: {
      return 'rock'
    }
    case 1: {
      return 'paper'
    }
    case 2: {
      return 'scissors'
    }
  }
}
const displayResults = (computerPoints, playerPoints) => {
  if (computerPoints === 5) {
    alert('Computer win')
    playerPoints = 0
    computerPoints = 0
    game()
  } else if (playerPoints === 5) {
    alert('Player win')
    playerPoints = 0
    computerPoints = 0
    game()
  }
}

const playRound = (e) => {
  let {computerChoice, playerChoice} = choice
  computerChoice = computerPlay()

  const copmputerElement = divContainer.getElementsByClassName(computerChoice)
  console.log(copmputerElement)

  playerChoice = e.target.dataset.item
  const element = document.querySelectorAll(`.${playerChoice}`)
  // for (let i = 0; i < element.length; i++) {
  //   // проходим циклом по всем элементам объекта
  //   element[i].style.color = 'red' // устанавливаем красный цвет текста каждому элементу
  // }
  // removeClass(element)

  // addClass(element)
  if (computerChoice === playerChoice) {
    alert(`Computer chose ${computerChoice}. Tie. Nobody won.`)
  } else if (
    (playerChoice === 'rock' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'rock')
  ) {
    alert(`Computer chose ${computerChoice}. You lose!`)

    points.computerPoints++
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    alert(`Computer chose ${computerChoice}. You win!`)

    points.playerPoints++
  }

  // divShowResults.classList.add('btn', computerChoice)
  // divShowResults.textContent = computerChoice
  spanPlayerPoints.textContent = `Player ${points.computerPoints}`

  spanComputerPoints.textContent = `Computer ${points.playerPoints}`
  console.log(points)
}

const countPoints = (res) => {
  do {
    switch (res) {
      case 'computer': {
        break
      }
      case 'player': {
        break
      }
    }
  } while ((points.computerPoints < 5, points.playerPoints < 5))
  console.log(points.computerPoints, points.playerPoints)
  displayResults(points.computerPoints, points.playerPoints)
}

const game = () => {
  console.log(choice)
  // while (true) {
  //   choice.playerChoice = prompt(
  //     'Game:"Rock, Paper or Scissors". Please, enter your choice',
  //     ''
  //   )
  //   if (!choice.playerChoice) break
  //   let res = playRound(
  //     choice.playerChoice.toLowerCase(),
  //     choice.computerChoice
  //   )
  //   countPoints(res)
  // }
}

game()
const btns = Array.from(document.querySelectorAll('button'))

btns.forEach((item) => {
  item.addEventListener('click', function () {
    btns.forEach((elem) => elem.classList.remove('blue'))
    item.classList.add('blue')
  })
})
btns.forEach((btn) => {
  btn.addEventListener('click', playRound)
})
