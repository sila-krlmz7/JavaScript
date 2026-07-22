let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3, 7))
console.log(challenge.substring(0, 2))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(','))
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
let word = 'You cannot end a sentence with because because because is a conjunction'
console.log(word.indexOf('because'))
console.log(word.lastIndexOf('because'))
console.log(word.search('because'))
console.log(challenge.trim())
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match('a'))
let stringg = '30 Days of'
console.log(stringg.concat(' JavaScript'))
console.log(challenge.repeat(2))
// Use console.log() and escape characters to print the following pattern.
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')