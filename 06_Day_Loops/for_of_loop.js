/* for of loop
for (const element of arr) {code goes here}
*/
const numbers = [1,2,3,4,5]
for (const num of numbers) {
    console.log(num) // 1 2 3 4 5
}

for (const num of numbers) {
    console.log(num*num) //1 4 9 16 25
}

// addding all the numbers in the array
let sum = 0 
for (const num of numbers) {
    sum+= num
}
console.log(sum) // 15

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'   
]

for (const tech of webTechs) {
    console.log(tech.toUpperCase())
} // HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
    console.log(tech[0]) 
    // get only the first letter of each element,
    // H C J R N M
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countries) {
    newArr.push(country.toUpperCase())
}
console.log(newArr)

for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
} // 0 1 2

for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
} // 0 1 2 4 5