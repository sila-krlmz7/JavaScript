let a = 'JavaScript'
let b = 10

function letsLearnScope() {
    console.log(a, b) // JavaScript 10
    let value = false

    if (true) {
        let a = 'Python'
        let b = 20
        let c = 30
        let d = 40
        value = !value
        console.log(a, b, c, value) // Python 20 30 40 true
    }
    console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10