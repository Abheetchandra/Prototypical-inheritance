
CreateProduct.prototype.getPrice = function () {
    return this.price;
},

CreateProduct.prototype.increasePrice = function (amount) {
    this.price += amount;
    return this.price;
},

CreateProduct.prototype.decreasePrice = function (amount) {
    this.price -= amount;
    return this.price;
}

CreateProduct.prototype.isExpensive = function () {
return this.price >= 1000;
}




function CreateProduct(product_name, brand, reviews, price, rating) {
    let obj = {};
    Object.setPrototypeOf(obj,CreateProduct.prototype);
    obj.product_name = product_name,
        obj.brand = brand,
        obj.reviews = reviews,
        obj.price = price,
        obj.rating = rating


    return obj;

}

let product1 = CreateProduct(
    "Black Pure Cotton Formal Shirt",
    "Peter England Elite",
    224,
    1799,
    4.3
);
console.log(product1);
console.log(product1.getPrice()); // 1799
console.log(product1.increasePrice(301)); // 2100
console.log(product1.isExpensive()); // true
console.log(product1.decreasePrice(1200)); // 900
console.log(product1.isExpensive()); // false

function electronics(product_name, brand, reviews, price, rating, warranty) {
    let electronObj = CreateProduct(product_name, brand, reviews, price, rating)
    electronObj.warranty = warranty,


        electronObj.bill = function () {
            return this.price * 0.9;

        }

    electronObj.details = function () {
        return `ProductName: ${this.product_name},Brand-Name: ${this.brand}, reviews: ${this.reviews}, price: ${this.price}, rating: ${this.rating}`

    }
    return electronObj
}
let electronics1 = electronics("LED TV", "LG", 100, 5000, 4.2, 2);
console.log(electronics1);
console.log(electronics1.getPrice()); // 5000
console.log(electronics1.increasePrice(400)); // 5400
console.log(electronics1.isExpensive()); // true
console.log(electronics1.decreasePrice(500)); // 4900
console.log(electronics1.isExpensive()); // true
console.log(electronics1.bill()); // 4410
console.log(electronics1.details()); // LED TV of brand LG with warranty of 2 years at a price 4410 having a discount of 10%



Crockery.prototype.bill = function () {
    return this.price*0.85
}

Crockery.prototype.details = function () {
return `ProductName: ${this.product_name},Brand-Name: ${this.brand}, reviews: ${this.reviews}, price: ${this.price}, rating: ${this.rating}`
}
Object.setPrototypeOf(Crockery.prototype,CreateProduct.prototype)

function Crockery(product_name, brand, reviews, price, rating, warranty, material) {
    let CrockeryObj = CreateProduct(product_name, brand, reviews, price, rating)
    Object.setPrototypeOf(CrockeryObj,Crockery.prototype)

    CrockeryObj.material = material

        
    return CrockeryObj
}

let crockery1 = Crockery(
    "21 Piece Dinnerware",
    "Diva",
    104,
    16000,
    4.5,
    "ceramic"
);
console.log(crockery1);
console.log(crockery1.getPrice()); // 16000
console.log(crockery1.increasePrice(700)); // 16700
console.log(crockery1.isExpensive()); // true
console.log(crockery1.decreasePrice(200)); // 16500
console.log(crockery1.isExpensive()); // true
console.log(crockery1.bill()); // 14025
console.log(crockery1.details()); // 21 Piece Dinnerware of brand Diva of material ceramic at a price 14025 having a discount of 15%


