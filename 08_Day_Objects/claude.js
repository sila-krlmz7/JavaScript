// not:
// JavaScript, fonksiyonların kendi dışındaki üst kapsamlardaki 
// (scope) değişkenlere erişebildiği Lexical Scoping (Sözcüksel Kapsam) 
// ve Closure mantığıyla çalışan dinamik bir dildir. 

/*
const kopek = {}
kopek.isim = 'Çomar'
kopek.yas = 4
kopek.renk = 'Boz'    


console.log(kopek.isim)
*/
const kopek = {
    isim: 'çomar',
    yas: 4,
    renk: 'Boz',
    havla: function() {
        return 'Hav hav!';
    },
}

console.log(kopek['isim'])


let x = 10 // global scope
function testScope() {
  console.log(x) // 10 local scope
  if (true) { 
    let x = 20
    console.log(x) // 20
  }
  console.log(x) //10 fonksiyondayken üst katmana bakıyor 
}
testScope()
console.log(x) //10

const ogrenci = { 
    ad: 'Ali', 
    not: 85,
    bilgiVer: function() {
        return `${this.ad}'nin notu ${this.not}`;
  }
}
console.log(ogrenci.bilgiVer()) // Ali'nin notu 85

console.log(Object.keys(ogrenci))  //  [ 'ad', 'not' ]
console.log(Object.values(ogrenci)) // [ 'Ali', 85 ]
console.log(ogrenci.hasOwnProperty('not'))  // true
console.log(ogrenci.hasOwnProperty('yas'))  // false

const kullanicilar = {
  Ali: { puan: 30, girisYapti: false },
  Veli: { puan: 55, girisYapti: true },
  Ayse: { puan: 50, girisYapti: true },
  Can: { puan: 40, girisYapti: false }
}

let sayac = 0
for (const isim in kullanicilar) {
  if (kullanicilar[isim].puan >= 50) {
    sayac++
  }
}
console.log(sayac)

let girisYapanlar = []
for (const isim in kullanicilar) {
  if (kullanicilar[isim].girisYapti === true) {
    girisYapanlar.push(isim)
  }
}
console.log(girisYapanlar)   // ["Veli", "Ayse"]

