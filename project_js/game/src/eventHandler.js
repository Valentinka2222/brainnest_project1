const eventHandler = (playRound) => {
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
}
export default eventHandler
