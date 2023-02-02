const findDiagonal = (lengthOfSide) => lengthOfSide * Math.sqrt(2)
console.log(findDiagonal(9))

const findTriangleArea = (a, b, c) => {
  const semiPerimeter = (a + b + c) / 2
  return Math.sqrt(
    semiPerimeter *
      (semiPerimeter - a) *
      (semiPerimeter - b) *
      (semiPerimeter - c)
  )
}
console.log(findTriangleArea(5, 6, 7))

const compareIntegers = (a, b) => (a > b ? console.log(a) : console.log(b))
compareIntegers(13, 7)

const checkIntegers = (number) =>
  number % 2 == 0
    ? console.log('The number is even')
    : console.log('The number is odd')
checkIntegers(7)
