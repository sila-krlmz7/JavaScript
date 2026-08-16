function selamVer () {
    console.log('Selam Siley')
}
selamVer()

function topla (a, b) {
    let sum = a + b
    return sum
}
console.log(topla(3,5))

function dikdortgenAlani(uzunluk, genislik){
    let space = uzunluk * genislik
    return space
}
console.log(dikdortgenAlani(5,3))


function kareV1(n) {
   let alan = n * n
   return alan
}

const kareV2 = (n) => {
    let alan = n * n 
    return alan
}

const kareV3 = (n) => n * n

console.log(kareV1(5), kareV2(5), kareV3(5))

function selamla(isim = 'Misafir'){
    console.log("İsim " + isim)
}
selamla()
selamla('Ahmet')


function enBuyuk(a,b,c){     
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else if (c > a && c > b) {
        return c
    }
}
console.log(enBuyuk(3,6,1))

function diziYazdir(arr) {
    for (let eleman of arr) {
        console.log(eleman)
    }
}

let arabalar = ['BMW', 'Audi', 'Tesla']
diziYazdir(arabalar)

// 8-) Sınırsız sayıda parametre alabilen bir 
// toplamHepsi(...sayilar) fonksiyonu yaz 
// (rest operatör ... kullanarak, arrow function şeklinde).

const toplamHepsi = (...sayilarr) => {
    let toplam = 0
    for (let sayii of sayilarr) {
        toplam +=sayii;
    }
    return toplam
}
console.log(toplamHepsi(5,10))
console.log(toplamHepsi(100))
console.log(toplamHepsi(1, 2, 3, 4, 5))

// 9-) bmiHesapla(kilo, boy) fonksiyonu yaz — 
// BMI formülü: kilo / (boy * boy). 
// Sonucuna göre şu kategorilerden birini string olarak return etsin:
// 18.5'ten az → "Zayıf"
// 18.5-24.9 → "Normal"
// 25-29.9 → "Fazla kilolu"
// 30 ve üzeri → "Obez"

function bmiHesapla(kilo, boy) {
    let bmiFormül = kilo / (boy * boy)
    if (bmiFormül < 18.5) {
        return "Zayıf"
    } else if (bmiFormül <= 24.9) {
        return "Normal"
    } else if (bmiFormül <= 29.9) {
        return "Fazla kilolu"
    } else if (bmiFormül >= 30) {
        return "Obez"
    }
}
console.log(bmiHesapla(87, 1.73))


// 10-) tersCevir(arr) fonksiyonu yaz — bir diziyi parametre alsın, 
// reverse() metodunu kullanmadan (Day6'da yaptığın mantığı hatırla) 
// ters çevrilmiş yeni bir dizi döndürsün, orijinal diziyi değiştirmesin.
const arr = ['BMW', 'Audi', 'Tesla', 'Hyundai', 'Toyota']
function tersCevir(arr){
    let newArrr = []
    for (let i = arr.length -1; i>=0; i--) {
        newArrr.push(arr[i])
    }
    return newArrr
}
console.log(tersCevir(arr))
