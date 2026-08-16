function sumArrayValues(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

const numbers = [1, 2, 3, 4, 5]

console.log(sumArrayValues(numbers))

const areOfCircle = (radius) => {
    let area = Math.PI * radius * radius
    return area
 }
console.log(areOfCircle(10))