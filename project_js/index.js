// const computerPlay = () => {
//   const game = {
//     rock: 'rock',
//     paper: 'paper',
//     scissors: 'scissors',
//   }
//   const keys = Object.keys(game)
//   return game[keys[Math.trunc(keys.length * Math.random())]]
// }
let computerChoice = ''
let playerChoice = ''

const computerPlay = () => {
  const min = 1
  const max = 3

  const randonNumber = Math.floor(Math.random() * (max - min) + min)
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
    return 'tie'
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    alert(`Computer chose ${computerSelection}. You lose ! Paper beats Rock.`)
    return 'computer'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    alert(`Computer chose ${computerSelection}. You win ! Rock beats Scissors.`)
    return 'player'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    alert(
      `Computer chose ${computerSelection}. You lose ! Scissors beat Paper.`
    )
    return 'computer'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    alert(`Computer chose ${computerSelection}. You win ! Paper beats Rock.`)
    return 'player'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    alert(
      `Computer chose ${computerSelection}. You lose ! Rock beats Scissors.`
    )
    return 'computer'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    alert(`Computer chose ${computerSelection}. You win ! Scissors beat Paper.`)
    return 'player'
  }
}

const game = () => {
  for (
    let computerPoints = 0, playerPoints = 0;
    playerPoints, computerPoints < 5;

  ) {
    console.log(computerPoints, playerPoints)
    computerChoice = computerPlay()
    playerChoice = prompt(
      'Game:"Rock, Paper or Scissors". Please, enter your choice'
    ).toLowerCase()

    let res = playRound(playerChoice, computerChoice)

    switch (res) {
      case 'tie': {
        console.log("It's a tie! \n")
        break
      }
      case 'computer': {
        computerPoints++
        console.log('Computer wins! \n')
        break
      }
      case 'player': {
        playerPoints++
        console.log('Player wins! \n')
        break
      }
    }
  }
}

game()
