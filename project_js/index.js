const choice = {
  computerChoice: '',
  playerChoice: '',
}
const points = {
  computerPoints: 0,
  playerPoints: 0,
}

const divContainer = document.createElement('div')
const spanComputerPoints = document.createElement('span')
const spanPlayerPoints = document.createElement('span')
const spanComputerChoice = document.createElement('span')

const createElements = () => {
  const divShowResults = document.createElement('div')
  const buttonScissors = document.createElement('button')
  const buttonRock = document.createElement('button')
  const buttonPaper = document.createElement('button')
  const spanGameInfo = document.createElement('span')
  const span = document.createElement('span')
  const h1 = document.createElement('h1')

  document.body.appendChild(divContainer)
  document.body.insertBefore(divShowResults, divContainer)

  divContainer.append(buttonScissors)
  divContainer.append(buttonRock)
  divContainer.append(buttonPaper)
  divShowResults.append(spanComputerChoice)
  divShowResults.append(h1)
  divShowResults.append(spanGameInfo)
  h1.append(spanComputerPoints)
  h1.append(span)
  h1.append(spanPlayerPoints)

  divContainer.classList.add('container')
  divShowResults.classList.add('show')
  spanComputerChoice.classList.add('showChoice')
  buttonScissors.classList.add('btn', 'scissors')
  buttonRock.classList.add('btn', 'rock')
  buttonPaper.classList.add('btn', 'paper')

  buttonScissors.setAttribute('data-item', 'scissors')
  buttonRock.setAttribute('data-item', 'rock')
  buttonPaper.setAttribute('data-item', 'paper')

  spanPlayerPoints.textContent = `Player ${points.computerPoints}`
  span.textContent = ' : '
  spanComputerPoints.textContent = `Computer ${points.playerPoints}`
  spanGameInfo.textContent = `Playing to: 5 wins!`
}
createElements()

const computerPlay = () => {
  const nameOfChoice = ['rock', 'paper', 'scissors']
  const randonNumber = Math.floor(Math.random() * nameOfChoice.length)
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

const showResult = (computerPoints, playerPoints) => {
  if (computerPoints == 5) {
    points.computerPoints = 0
    points.playerPoints = 0
    spanComputerChoice.textContent = `Computer win!`
  }
  if (playerPoints == 5) {
    points.computerPoints = 0
    points.playerPoints = 0
    spanComputerChoice.textContent = `Player win!`
  }
}

const playRound = (e) => {
  let {computerChoice, playerChoice} = choice
  let {computerPoints, playerPoints} = points
  playerChoice = e.target.dataset.item
  computerChoice = computerPlay()

  if (
    (playerChoice === 'rock' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'rock')
  )
    points.computerPoints++
  else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  )
    points.playerPoints++

  spanPlayerPoints.textContent = `Player ${playerPoints}`
  spanComputerPoints.textContent = `Computer ${computerPoints}`
  spanComputerChoice.textContent = `Computer chose ${computerChoice}!`
  showResult(points.computerPoints, points.playerPoints)
}

const btns = Array.from(document.querySelectorAll('button'))

btns.forEach((item) => {
  item.addEventListener('click', function () {
    btns.forEach((elem) => elem.classList.remove('red'))
    item.classList.add('red')
  })
})
btns.forEach((btn) => {
  btn.addEventListener('click', playRound)
})
