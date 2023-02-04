// const computerPlay = () => {
//   const game = {
//     rock: 'rock',
//     paper: 'paper',
//     scissors: 'scissors',
//   }
//   const keys = Object.keys(game)
//   return game[keys[Math.trunc(keys.length * Math.random())]]
// }

const choice = {
  computerChoice: '',
  playerChoice: '',
}

const computerPlay = () => {
  const min = 1
  const max = 3
  const randonNumber = Math.floor(Math.random() * max) + min
  switch (randonNumber) {
    case 1: {
      return 'rock'
    }
    case 2: {
      return 'paper'
    }
    case 3: {
      return 'scissors'
    }
  }
}

const playRound = (playerSelection, computerSelection) => {
  if (computerSelection === playerSelection) {
    alert(`Computer chose ${computerSelection}. Tie. Nobody won.`)
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    alert(`Computer chose ${computerSelection}. You lose!`)
    return 'computer'
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    alert(`Computer chose ${computerSelection}. You win!`)
    return 'player'
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

const game = () => {
  for (
    let computerPoints = 0, playerPoints = 0;
    playerPoints, computerPoints < 5;

  ) {
    console.log(computerPoints, playerPoints)
    choice.computerChoice = computerPlay()

    choice.playerChoice = prompt(
      'Game:"Rock, Paper or Scissors". Please, enter your choice'
    ).toLowerCase()

    let res = playRound(choice.playerChoice, choice.computerChoice)

    switch (res) {
      case 'computer': {
        computerPoints++
        break
      }
      case 'player': {
        playerPoints++
        break
      }
    }
    displayResults(computerPoints, playerPoints)
  }
}

game()
