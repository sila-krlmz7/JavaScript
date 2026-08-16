function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}
square() // 4

//function without parameter 
function addTwoNumbers() {
    let numOne  = 10
    let numTwo = 20
    let sum = numOne + numTwo
    console.log(sum)
}

addTwoNumbers() // a function has to be called by its name to be executed

function printFullName() {
    let firstName = 'Sila'
    let lastName = 'Kirilmaz'
    let space = ''
    let fullName = firstName + space + lastName
    console.log(fullName)
}
printFullName()
