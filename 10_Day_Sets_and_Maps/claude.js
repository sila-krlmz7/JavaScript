const meyveler = new Set()
meyveler.add('Elma')
meyveler.add('Portakal')
meyveler.add('Kiraz')
console.log(meyveler.size)

const sayilar = [1, 2, 2, 3, 3, 3, 4]
const newSayilar = new Set(sayilar)
console.log(newSayilar)

const dizii = [newSayilar]
console.log(dizii)// [ Set(4) { 1, 2, 3, 4 } ]

const dizi = [...newSayilar] 
console.log(dizi) // [ 1, 2, 3, 4 ]

newSayilar.delete(3)
console.log(newSayilar.has(3))

const map = new Map()
map.set('Türkiye', 'Ankara')
map.set('Almanya', 'Berlin')
map.set('Fransa', 'Paris')
console.log(map.get('Türkiye'))

for(const item of map) {console.log(item)}

for(const [key, value] of map) {console.log(key, value)}