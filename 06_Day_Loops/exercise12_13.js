let newArr = []
const fruits = ['elma', 'muz', 'çilek', 'kivi']
for (let i = 3; i >= 0; i--) {
    newArr.push(fruits[i])
}
console.log(newArr)


for (let i = 0; i < 5; i++) {
  if (i === 2) continue
  if (i === 4) break
  console.log(i)
}
