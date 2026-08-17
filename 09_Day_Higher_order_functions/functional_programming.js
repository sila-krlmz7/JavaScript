/* forEach: Iterate an array elements. We use forEach 
only with arrays. It takes a callback function with 
elements, index parameter and array itself. 
The index and the array optional. */
/*
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})

// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
*/

// for each
const numbers1 = [1, 2, 3]
numbers1.forEach(n => console.log(n))   // 1, 2, 3 yazdırır, return değeri undefined
// map
const numbers2 = [1, 2, 3]
const kareler = numbers2.map(n => n * n)
console.log(kareler) // [ 1, 4, 9 ]
// filter
const numbers3 = [1, 2, 3, 4, 5, 6]
const ciftler = numbers3.filter(n => n % 2 ===0)
console.log(ciftler) // [2, 4, 6]
//find
const numbers4 = [1, 3, 4, 7, 8]
const ilkCift = numbers4.find (n => n % 2 === 0)
console.log(ilkCift) // 4
// every
const numbers5 = [2, 4, 6, 8]
console.log(numbers5.every(n => n % 2 === 0))   // true, hepsi çift
// some
const numbers6 = [1, 3, 5, 8]
console.log(numbers6.some(n => n % 2 === 0))    // true, en az bir tane (8) çift var