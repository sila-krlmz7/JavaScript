try {
  let lastName = 'Yetayeh'
  let fullName = firstName + ' ' + lastName
} catch (err) {
  console.log(err.name)    // ReferenceError
  console.log(err.message) // "fistName is not defined"
}

try {
  let x = Number(prompt('Sayı gir:'))
  if (isNaN(x)) throw 'Bu bir sayı değil'
  if (x < 5) throw 'Çok düşük'
  if (x > 10) throw 'Çok yüksek'
} catch (err) {
  console.log(err)
}