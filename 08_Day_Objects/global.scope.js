let a = 'JavaScript'
let b = 10
function letsLearnScope() {
    console.log(a, b) // JavaScript 10, accessible
    if (true) {
        let a = 'Python'
        let b = 100
        console.log(a, b) // Python 100
    }
    console.log(a, b) // JavaScript 10, accessible
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible