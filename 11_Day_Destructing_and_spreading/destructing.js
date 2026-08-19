const numbers = [1,2,3]
let [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree)

const names = ['Siley', 'Berke', 'Bilge', 'Sude']
let [firstPerson, secondPerson, thirdPerson, fourtPerson] = names
console.log(firstPerson, secondPerson, thirdPerson, fourtPerson)

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack
console.log(frontEnd)
console.log(backEnd)

// If we like to skip on of the values in 
// the array we use additional comma. 
// The comma helps to omit the value at that 
// specific index
const nums = [1, 2, 3]
let [numOnee, , numThreee] = nums //2 is omitted
console.log(numOnee, numThreee)

const namess = [undefined, 'Brook', 'David']
let [
  firstName = 'Asabeneh',
  secondName,
  thirdName,
  fourthName = 'John'
] = namess
console.log(firstName, secondName, thirdName, fourthName)

const numss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = numss

console.log(num1, num2, num3)
console.log(rest)