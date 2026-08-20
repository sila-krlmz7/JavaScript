try {
  console.log(name)
} catch (err) {
  console.log(err.name)    // ReferenceError
  console.log(err.message) // "fistName is not defined"
} finally {
    console.log('İşlem tamamlandı')
}



try {
    let yas = prompt('Yaşını gir: ')
    if (isNaN(yas)) {
        throw 'Geçersiz yaş'
    }
    console.log('Yaşın:', yas)
} catch (err) {
  console.log(err)    // ReferenceError
}


try {
  const arr = ['a', 'b']
  console.log(arr[5].toUpperCase())
} catch (err) {
  console.log(err.name)      // TypeError
  console.log(err.message)   // "Cannot read properties of undefined (reading 'toUpperCase')"
}