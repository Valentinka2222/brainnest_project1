const checkLength = (number) => {
  let display = document.querySelector('.currentNumb')

  if (number.length > 17)
    display.textContent = "Calculator doesn't work with big numbers!"

  if (number.length > 7 && number.length < 11) display.style.fontSize = '40px'
  else if (number.length >= 11) display.style.fontSize = '30px'
  else display.style.fontSize = '55px'
}

export default checkLength
