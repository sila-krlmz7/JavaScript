const renkler = ['kırmızı', 'mavi', 'yeşil']
let [renk1, renk2, renk3] = renkler
console.log(renk1, renk2, renk3)

const kisi = { isim: 'Mehmet', yas: 28, sehir: 'İzmir' }
let {isim, yas, sehir} = kisi
console.log(isim, yas, sehir)

let {isim: ad, yas: yıl} = kisi
console.log(ad, yıl)

const sayilar = [10, 20, 30, 40, 50]
let [ilkElaman, , , , sonEleman] = sayilar
console.log(ilkElaman, sonEleman)

const ayarlar = { tema: 'koyu' }
let {tema, dil='Türkçe'} = ayarlar
console.log(tema, dil)

const dersler = ['Matematik', 'Fizik', 'Kimya', 'Biyoloji', 'Tarih']
let [first, second, ...digerDersler] = dersler
console.log(first, second)
console.log(...digerDersler)
console.log(digerDersler)