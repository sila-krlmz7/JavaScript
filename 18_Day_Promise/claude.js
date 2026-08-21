/* const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens

*/

// setTimeout kullanarak 1 saniye sonra resolve('Merhaba')
// çağıran basit bir Promise oluştur, 
// .then() ile sonucu yazdır.


const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const basarili = false
        if (basarili) {
            resolve('Merhaba') 
        } else { 
            reject('Bir hata oluştu')
        }

    }, 1000)
})

doPromise
  .then(result => {console.log(result)})
  .catch(error => console.log(error))