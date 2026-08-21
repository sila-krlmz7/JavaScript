const kisi = { isim: 'Ali', yas: 30 }
const jsonMetin = JSON.stringify(kisi)
console.log(jsonMetin)
console.log(typeof jsonMetin)


const metin = '{"isim":"Ayşe","yas":25}'
const obje = JSON.parse(metin)
console.log(obje.isim)


const urun = { ad: 'Laptop', fiyat: 15000, marka: 'Dell', stokta: true }
const filtreliMetin = JSON.stringify(urun, ['ad', 'fiyat'], 4)
console.log(filtreliMetin)

const girintiliMetin = JSON.stringify(urun, undefined, 4)
console.log(girintiliMetin)

