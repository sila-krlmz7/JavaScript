const meyveler = ['elma', 'muz', 'kivi']
console.table(meyveler)

const kisi = { isim: 'Ahmet', yas: 25, sehir: 'İzmir' }
console.table(kisi)
console.warn("warning")
console.error("Error")


console.group('Kullanıcı Bilgisi')
console.log("1")
console.log("iki")
console.log("üç ve son")
console.groupEnd()

function tikla() {
    console.log('tıklama')
}
tikla()
tikla()
tikla()

console.assert(5 > 10, "5, 10'dan büyük değil")
console.assert(10 > 5, "10, 5'ten büyük değil")