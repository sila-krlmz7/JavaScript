// join: It is used to join the elements of the array, 
// the argument we passed in the join method will be 
// joined in the array and return as a string. 
// By default, it joins with a comma, but we can pass different 
// string parameter which can be joined between the items.

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join())

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.join())
console.log(names.join(''))
console.log(names.join(' '))
console.log(names.join(', '))
console.log(names.join(' # '))

// Slice: To cut out a multiple items in range. 
// It takes two parameters:starting and ending position. 
// It doesn't include the ending position.
const nums = [1, 2, 3, 4, 5]

console.log(nums.slice())                  // [ 1, 2, 3, 4, 5 ]
console.log(nums.slice(0))                 // [ 1, 2, 3, 4, 5 ]
console.log(nums.slice(0, numbers.length)) // [ 1, 2, 3, 4, 5 ]
console.log(nums.slice(1,4)) // [ 2, 3, 4 ]

// Splice: It takes three parameters:Starting position, 
// number of times to be removed and number of items 
// to be added.

const sayilar = [1, 2, 3, 4, 5]
sayilar.splice(0,1) // [ 2, 3, 4, 5 ]
console.log(sayilar)

const sayilarr = [1, 2, 3, 4, 5, 6]
sayilarr.splice(3, 3, 7, 8, 9)
console.log(sayilarr) // [ 1, 2, 3, 7, 8, 9 ]