// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10)) // 23


// Let us see were we use call back functions. 
// For instance the forEach method uses call back.

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
    let sum = 0
    const callback = function(element) {
        sum += element
    }
    arr.forEach(callback)
    /*
    işte asıl olay burada. forEach, dizinin her elemanı 
    için, sana verilen fonksiyonu (callback) otomatik 
    olarak çağırır, o elemanı argüman olarak o 
    fonksiyona geçirir. Yani forEach arka planda şunu 
    yapıyor gibi düşün:

    callback(1)   // element = 1, sum = 0+1 = 1
    callback(2)   // element = 2, sum = 1+2 = 3
    callback(3)   // element = 3, sum = 3+3 = 6
    callback(4)   // element = 4, sum = 6+4 = 10
    callback(5)   // element = 5, sum = 10+5 = 15
    */
    return sum
}
console.log(sumArray(numbers))
