const eventHandler = (playRound) => {
  const btns = Array.from(document.querySelectorAll('button'))

  btns.forEach((item) => {
    item.addEventListener('click', function () {
      item.addEventListener('click', playRound)
      btns.forEach((elem) => elem.classList.remove('red'))
      item.classList.add('red')
    })
  })
}
export default eventHandler
