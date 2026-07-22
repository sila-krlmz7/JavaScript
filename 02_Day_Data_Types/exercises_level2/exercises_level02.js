/*
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("The quote 'Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.' by Mother Teresa teaches us to love one another.")
console.log(typeof '10' == typeof 10)
console.log(parseFloat('9.8') == 10)
let word1 = 'python'
let word2 = 'jargon'
console.log(word1.includes('on') && word2.includes('on'))
let sentence = "I hope this course is not full of jargon."
console.log(sentence.includes('jargon'))

let randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)
let randomnumber2 = Math.floor((Math.random() * 51) + 50)
console.log(randomnumber2)
let randomnumber3 = Math.floor(Math.random() * 256)
console.log(randomnumber3)
*/

const js = 'JavaScript'
console.log(js.length)
console.log(js[0], js[4], js[10])

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const salary = text.match(/\d+/g).map(Number)