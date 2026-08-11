let num = 7
if (num > 0) {
    console.log("positive")
} else if (num == 0) {
    console.log("zero")
} else {
    console.log("negative")
}

let number = 0
if (number % 2 ===0 ) {
    console.log("even")
} else {
    console.log("odd")
}
/*
let age = prompt('Enter your age:')

if (age >= 18) {
    console.log("You can take the license")
} else {
    console.log("Wait " + (18-age) + " years.")
}
*/
let score = 75
if (score >= 90 ) {
    console.log("A")
} else if (score >=80) {
    console.log("B")
} else if (score >=70) {
    console.log("C")
} else if (score >=60) {
    console.log("D")
} else {
    console.log("F")
}

let point = 75
switch(true) {
    case point >=90 :
        console.log("A")
        break;
    case point >= 80 :
        console.log("B")
        break;
    case point >= 70 :
        console.log("C")
        break;
    case point >= 60 :
        console.log("D")
        break;
    default:
        console.log("F")
}

let month = prompt('Month: ')
switch (month.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    console.log("Seaoson: Winter")
    break;
  case "march":
  case "april":
  case "may":
    console.log("Seaoson: Spring")
    break;
  case "june":
  case "july":
  case "august":
    console.log("Seaoson: Summer")
    break; 
  case "september":
  case "october":
  case "november":
    console.log("Seaoson: Autumn")
    break;
  default:
    console.log("It's not a month")
}

