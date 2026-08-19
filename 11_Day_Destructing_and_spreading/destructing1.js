const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
for(const [country, city] of countries) {
    console.log(country, city)
}

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for(const [first, second, third] of fullStack) {
    console.log(first, second, third)
}


// Destructuring Object
const rectangle = {
    width: 20,
    height: 10, 
    area: 200
}
let{width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)
// 20 10 200 undefined

// Renaming during structuring
const rectanglee = {
    widthh: 20,
    heightt: 10, 
    areaa: 200
}
let{widthh: w, heightt:h, areaa: a, perimeter: p} = rectanglee
console.log(w, h, a, p)