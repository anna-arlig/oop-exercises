class Product{

    constructor(name, price, salesRatio){
        this.name = name
        this.price = price
        this.salesRatio = salesRatio
    }

getName(){
    console.log(this.name)
}

setName(newName){
    this.name = newName
}

getPrice(){
    console.log(this.price)
}

setPrice(newPrice){
    this.price = newPrice
}

getSalesRatio(){
    console.log(this.salesRatio)
}

setSalesRation(ratio){
    this.salesRatio = ratio
}

getSalesPrice(){
    this.price = this.price * (1 - this.salesRatio/100)
}

}

const myProduct = new Product("äpple", 352, 17)

myProduct.setName("päron")

myProduct.getSalesPrice()

console.log(myProduct)

