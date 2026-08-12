// Push: adding item in the end. To add item to 
// the end of an existing array we use the push method.
const arr = ['item1', 'item2', 'item3']
console.log(arr)

arr.push('new item')
console.log(arr)

// pop: Removing item in the end.
arr.pop()
console.log(arr)

// shift: Removing one array element 
// in the beginning of the array.
arr.shift()
console.log(arr)

// unshift: Adding array element 
// in the beginning of the array.
arr.unshift('item1')
console.log(arr)

// reverse: reverse the order of an array.
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.reverse())
console.log(numbers.reverse())

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
console.log(webTechs.sort())
console.log(webTechs.reverse())
