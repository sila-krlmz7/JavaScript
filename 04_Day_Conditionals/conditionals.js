let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
} else {
    console.log(`${num} is a negative number`)
}

let isRaining = true
if (isRaining) {
    console.log('Remember to take your rain coat')
} else {
    console.log('No need for a rain coat')
}


let a = 0
if (a>0) {
    console.log(`${a} is a positive number`)
} else if (a<0) {
    console.log(`${a} is a negative number`)
} else if (a==0) {
    console.log(`${a} is zero`)
} else {
    console.log(`${a} is not a number`)
}

let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}

let weather1 = 'cloudy'
switch(weather1) {
    case 'rainy':
        console.log('You need a rain coat')
        break
    case 'cloudy':
        console.log('It might be cold, you need a jacket.')
        break
    case 'sunny':
        console.log('Go out freely.')
        break
    default :
        console.log('No need for rain coat.')
}

let isRainingg = true
console.log(isRainingg ? "You need a rain coat" : "No need for a rain coat")