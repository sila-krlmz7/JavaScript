const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

countries.forEach (n => console.log(n))
const newArr = countries.map(n => n.toUpperCase())
console.log(newArr)
const ciftler = numbers.filter (n => n % 2 === 0)
console.log(ciftler)

const ilkBeştenBüyükSayı = numbers.find(n => n > 5)
console.log(ilkBeştenBüyükSayı)
const ilkBeştenBüyükSayıı = numbers.filter(n => n > 5)
console.log(ilkBeştenBüyükSayıı)

console.log(countries.some (n => n.includes('land')))
console.log(countries.every (n =>n.includes('land')))

const sum = numbers.reduce((acc, n) => acc + n, 0)
console.log(sum)

