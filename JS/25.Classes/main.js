// class = provides a more structured and clever way to
//         work with objects compared to traditional constructor functions
//         ex: static keyword, encapsulation, inheritance

class Products{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Products("Shirt", 19.99);
const product2 = new Products("Pants", 29.99);
const product3 = new Products("Underware", 99.99);

product1.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price with tax: $${total.toFixed(2)}`);
