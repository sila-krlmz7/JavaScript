const fruits = ['elma', 'muz', 'çilek', 'kivi']
console.log(fruits[0])
console.log(fruits[fruits.length-1])
console.log(fruits[Math.floor((fruits.length-1)/2)])

const numbers = [5, 12, 8, 1, 9]
const index = numbers.indexOf(5)
if (index !== -1) {
    numbers[index] = 20;
}
console.log(numbers)


let script = 'JavaScript öğreniyorum'
console.log(script.split(' '))

const stack = ['a', 'b', 'c']
console.log(stack)

stack.push('d')
console.log(stack)

stack.shift()
console.log(stack)

stack.unshift('z')
console.log(stack)

const nums = [1, 2, 3, 4, 5, 6, 7, 8]
/*console.log(nums.slice(3,5))*/
nums.splice(2,2,100,200,300)
console.log(nums)

const cities = ['Ankara', 'İzmir', 'Bursa', 'Antalya']
let indexx = cities.indexOf('Bursa')
if (indexx === -1) {
    console.log('Not Found')
} else {
    console.log('Found indexx: ' + indexx)
}

let inx = cities.includes('Bursa')
if (inx === false) {
    console.log('Not Found')
} else {
    console.log('Found inx')
}


const ages = [23, 45, 12, 67, 34, 8, 90, 21]
ages.sort((a, b) => a - b)
console.log(ages)
console.log(Math.min(...ages))
console.log(Math.max(...ages))



const cart = ['Süt', 'Ekmek', 'Yumurta']
let sepet = cart.includes('Peynir')
if (sepet === false) {
    cart.unshift('Peynir')
    console.log(cart)
} else {
    console.log("already in the cart")
}
let basket = cart.indexOf('Ekmek')
cart.splice(basket, 1)

console.log(cart)
console.log(cart.join(', '))



const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(matrix[1][2])
console.log(matrix[0][1])

const a = [1, 2, 3]
const b = a // b = [1,2,3]
b.push(4) // b = [1,2,3,4]
console.log(a) // [1,2,3,4] because arrays are reference types
console.log(b) // [1,2,3,4]