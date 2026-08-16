function greetings(name = 'Peter') {
    let message = `${name}, welcome`
    return message
}
console.log(greetings())
console.log(greetings('Siley'))

function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))