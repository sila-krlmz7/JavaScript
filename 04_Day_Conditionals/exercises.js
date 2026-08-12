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
/*
let month = prompt('Month: ')
switch (month.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    console.log("Season: Winter")
    break;
  case "march":
  case "april":
  case "may":
    console.log("Season: Spring")
    break;
  case "june":
  case "july":
  case "august":
    console.log("Season: Summer")
    break; 
  case "september":
  case "october":
  case "november":
    console.log("Season: Autumn")
    break;
  default:
    console.log("It's not a month")
}

let day = prompt('Day: ')
switch (day.toLowerCase()) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("Weekday")
    break;
  case "saturday":
  case "sunday":
    console.log("Weekend")
    break;
  default:
    console.log("It's not a day")
}
*/

let x = "5"
if (x) {
  console.log("truthy")
} else {
  console.log("falsy")
}

switch (x) {
  case 5:
    console.log("sayı 5")
    break;
  case "5":
    console.log("string 5")
    break;
  default:
    console.log("eşleşme yok")
}


let month = prompt('Month: ')
switch (month.toLowerCase()) {
    case "april":
    case "june":
    case "september":
    case "november":
        console.log("This month has 30 days.")
        break;
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log("This month has 31 days.")
        break;
    case "february":
        let year = new Date().getFullYear()
        let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
        console.log(isLeap ? "This month has 29 days." : "This month has 28 days.")
        break;
    default:
        console.log("It's not a valid month.")
}