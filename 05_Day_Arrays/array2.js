/*
// fill: Fill all the array elements with a static value
const arr = Array()
console.log(arr)

const eightXValues = Array(8).fill('X')
console.log(eightXValues)

const eight0Values = Array(8).fill(0)
console.log(eight0Values)

const four4Values = Array(4).fill(4)
console.log(four4Values)

// concat:To concatenate two arrays.
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)

const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegatables = ['Tomato', 'Potato', 'Cabbage', 'Onion']
const fruitsAndVegetables = fruits.concat(vegatables)
console.log(fruitsAndVegetables)
*/

// Length:To know the size of the array
// indexOf:To check if an item exist in an array. 
// If it exists it returns the index else it returns -1.
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length)
console.log(numbers.indexOf(0)) // -1 because doesn' exist
console.log(numbers.indexOf(1)) // 0
console.log(numbers.indexOf(2)) // 1
console.log(numbers.indexOf(3)) // 2
console.log(numbers.indexOf(4)) // 3

// check items in a list
// let us check if a banana exist in the array

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// let us check if an avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
if(indexOfAvocado === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does not exist in the array