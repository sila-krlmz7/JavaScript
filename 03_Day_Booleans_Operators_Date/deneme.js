console.log(5=="5")
console.log(5==="5")

let a = 3
console.log(a++, a, ++a ) // 3 , 4, 5

console.log(true && false || true) // true

let age = prompt('Yaşını gir:')

age >= 18
    ? console.log("reşitsin")
    : console.log("reşit değil")



const now = new Date()
const date = now.getDate()
const month = now.getMonth()
const year = now.getFullYear()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)



console.log(NaN === NaN)
console.log(1 + "1"); // 11
console.log(1 + true); // 2
console.log("5" - 2); // ?
console.log("5" + 2); // 52


console.log(isNaN("merhaba)"))
console.log(Number.isNaN("merhaba"))
console.log(Numner.isNaN(NaN))