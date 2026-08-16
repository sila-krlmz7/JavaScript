// Anonymous function or without name
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}

console.log(anonymousFun)

// Expression Function
const square = function(n) {
    return n * n
}

console.log(square(2))

// Self Invoking Functions

(function(n) {
    console.log(n * n)
}) (2)

// but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n) {
  return n * n
}) (10)

console.log(squaredNum)


