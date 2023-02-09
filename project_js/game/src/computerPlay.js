'use strict'
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
export default computerPlay
