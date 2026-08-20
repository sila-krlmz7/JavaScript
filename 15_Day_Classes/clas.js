class Araba {
    constructor(marka, model, yil){
        this.marka = marka
        this.model = model
        this.yil = yil
    }
    bilgiVer() {
        return `${this.yil} model ${this.marka}`
    }
    get yasi() {
        const şuAnkiYil = new Date().getFullYear()
        return şuAnkiYil- this.yil
    }
}
const araba1 = new Araba('tesla', 'X1', 2020)
console.log(araba1)
console.log(araba1.bilgiVer())
console.log(araba1.yasi)