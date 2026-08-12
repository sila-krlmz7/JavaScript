// lastIndexOf: It gives the position of the last item in the array. 
// If it exist, it returns the index else it returns -1.
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers.lastIndexOf(2)) //  7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6
console.log(numbers.lastIndexOf(4)) //  3
console.log(numbers.lastIndexOf(6)) // -1

// includes:To check if an item exist in an array. 
// If it exist it returns the true else it returns false.
const nums = [1, 2, 3, 4, 5]
console.log(nums.includes(5)) // true
console.log(nums.includes(0)) // false
console.log(nums.includes(1)) // true
console.log(nums.includes(6)) // false

// Array.isArray:To check if the data type is an array
console.log(Array.isArray(nums)) // true
const numss = 100
console.log(Array.isArray(nums)) // false

// toString:Converts array to string
const numsss = [1, 2, 3, 4, 5]
console.log(numsss.toString()) // 1,2,3,4,5
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook




