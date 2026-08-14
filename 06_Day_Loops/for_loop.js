for(let i=0; i<=5; i++) {
    console.log(i)
} // 0 1 2 3 4 5

for(let i= 5; i>=0; i--) {
    console.log(i)
} // 5 4 3 2 1 0

for(let i=0; i<=5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
} // 0 * 0 = 0 
  // 1 * 1 = 1
  // 2 * 2 = 4
  // 3 * 3 = 9
  // 4 * 4 = 16 
  // 5 * 5 = 25

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr)


// Adding all elements in the array
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i=0; i<numbers.length; i++){
    sum = sum + numbers[i]
    //sum+= numbers[i]
}
console.log(sum) // 1->3->6->10-->>15

// Creating a new array based on the existing array
const nums = [1, 2, 3, 4, 5]
const newwArr = []
for(let i = 0; i < nums.length; i++){
    newwArr.push (nums[i] **2)
}
console.log(newwArr) // [1, 4, 9, 16, 25]
