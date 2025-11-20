// Personal Challenge 
class Person {
    constructor(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    celebrateBirthday(currentYear) {
        var age = currentYear - this.yearOfBirth;
        console.log(`Happy birthday ${this.name}. You are ${age} years old now.`);
        this.age = age;
    }
}
// Creating instances of Person superclass
var obianuju = new Person('Obianuju', 2003);
var ngozi = new Person('Ngozi', 2005);



// Product class
class Product {
    constructor(name, price, category, stock) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.stock = stock;
    }


    applyDiscount(percent) {
        this.price = this.price - (this.price * (percent / 100));
        console.log(`The new price after ${percent}% discount is $${this.price}`);
    }

    isInStock() {
        if (this.stock > 0) {
            console.log('We have this product in stock.')
        } else {
            console.log('This product is out of stock.');
        }
    }
}
// Creating instances of Product class
var firstProduct = new Product('Evening gown', 400, 'Bridal', 10);
var secondProduct = new Product('Casual wears', 250, 'Everyday', 7);


// Designer subclass that extends Person superclass
class Designer extends Person {
    constructor(name, yearOfBirth, brandName,) {
        super(name, yearOfBirth)
        this.brandName = brandName;
        this.catalog = [];
    }

    // adds a new Product
    addProduct(product) {
        this.catalog.push(product)
    }

    // removes a product by its name
    removeProduct(productName) {
        var found = false;
        for (var i = 0; i < this.catalog.length; i++) {
            if (this.catalog[i].name == productName) {
                this.catalog.splice(i, 1);
                console.log('Product Removed Successfully')
                found = true;
                break;
            }
        }

        if (!found) {
            console.log('Product not found')
        }
    }

    // loops through catalog and logs details of products
    listProduct() {
        for (var i = 0; i < this.catalog.length; i++) {
            console.log(` Product Name: ${this.catalog[i].name} \n Price: ${this.catalog[i].price}, \n Category: ${this.catalog[i].category}, \n Number of Stocks: ${this.catalog[i].stock}
      `)
        }
    }

}
// Instances of Designer subclass
var designer1 = new Designer('Obianuju', 2003, 'CrimsonAura', []);
var designer2 = new Designer('Ngozi', 2005, 'AzureElegance', []);

// Adding and removing products from designer's catalog
// designer1.addProduct(firstProduct);
// designer1.addProduct(secondProduct);
// designer1.removeProduct('Casual wears');
// designer1.listProduct();
// console.log(designer1);



// Customer subclass that extends Person superclass

class Customer extends Person {
    constructor(name, wallet) {
        super(name)
        this.cart = [];
        this.wallet = wallet;
    }


    addToCart(product, quantity) {

        var found = false;
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].product.name === product.name) {
                this.cart[i].quantity += quantity;
                found = true;
                break
            }
        }
        if (!found) {
            this.cart.push({ product: product, quantity: quantity });
            console.log(`${product.name} has been added to your cart.`)
        }
    }

    removeFromCart(productName) {
        var found = false;
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].product.name === productName) {
                this.cart.splice(i, 1);
                found = true;
                console.log('Product found and removed.');
                break;
            }
        }
        if (!found) {
            console.log('Product not found.')
        }
    }

    viewCart() {
        var total = 0;
        if (this.cart.length === 0) {
            console.log('Cart is empty.');
            return;
        } else {
            for (var i = 0; i < this.cart.length; i++) {
                total += this.cart[i].product.price * this.cart[i].quantity;
                console.log(`Name:${this.cart[i].product.name}, Category: ${this.cart[i].product.category}, Price:$${this.cart[i].product.price}, Quantity: ${this.cart[i].quantity}, Subtotal: $${this.cart[i].product.price * this.cart[i].quantity}`)
            }
        }
        console.log(`Total price: $${total}`)
    }

    checkout() {

        var total = 0;

        if (this.cart.length === 0) {
            console.log('You have no product in your cart.');
            return;
        }
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].product.stock >= this.cart[i].quantity) {
                console.log('Item is in stock, proceeding to checkout.');
            } else {
                console.log(`Sorry, ${this.cart[i].product.name} is out of stock.`);
            }
            total += this.cart[i].product.price * this.cart[i].quantity;

        }
        console.log(`Total amount to be paid is $${total}`);

        if (this.wallet >= total) {
            this.wallet -= total;
            for (var i = 0; i < this.cart.length; i++) {
                this.cart[i].product.stock -= this.cart[i].quantity;
            }
            this.cart = [];
            console.log(`Checkout successful. Your remaining balance is $${this.wallet}`);
        } else {
            console.log('Insufficient balance.');
        }
    }
}


















// FULL IMPLEMENTATION OF CUSTOMER SUBCLASS METHODS AND TESTING IT'S METHODS


// Instances of Customer subclass
var firstCustomer = new Customer('Joy', 4000);
// var secondCustomer = new Customer('Ada', 1500);


// Adding, removing and viewing items in customer's cart
firstCustomer.addToCart(firstProduct, 4);
firstCustomer.addToCart(firstProduct, 44);
firstCustomer.addToCart(secondProduct, 2);
firstCustomer.viewCart();
firstCustomer.checkout();


































































































// Inheritance Personal Challenge
// class FashionDesigner extends Person {
//     constructor(name, yearOfBirth, brandName, yearsOfExperience, specialty, studioLocation, signatureColor) {
//         super(name, yearOfBirth)
//         this.brandName = brandName;
//         this.yearsOfExperience = yearsOfExperience;
//         this.specialty = specialty;
//         this.studioLocation = studioLocation;
//         this.signatureColor = signatureColor;
//     }


//     socialMediaHype(followers, platform) {
//         console.log(`${this.name}, the designer of ${this.brandName}, with over ${followers} followers is slaying the game with ${this.specialty} on ${platform}`);
//     }

//     celebrateBirthday(currentYear) {
//         var age = currentYear - this.yearOfBirth;
//         this.age = age;
//         console.log(`Happy Birthday ${this.name}! Designer ${this.brandName} is now ${age} and ready to slay the runway!`)
//     }

//     promoteBrand() {
//         console.log(`Check out ${this.brandName}, the hottest ${this.specialty} designs straight from ${this.studioLocation}!`)
//     }

//     introduction() {
//         console.log(`Hi! I'm ${this.name}, the designer behind ${this.brandName}. With ${this.yearsOfExperience} years of experience, I specialize in ${this.specialty}. My signature color is ${this.signatureColor} and my studio is based in ${this.studioLocation}.`)
//     }
// }


// // Instance of FashionDesigner subclass
// var ujuDesigner = new FashionDesigner(
//     'Obianuju',
//     2003,
//     'CrimsonAura',
//     5,
//     'Bridal gowns',
//     'Lagos',
//     'Maroon'
// );


// ujuDesigner.socialMediaHype(2000, 'Instagram');
// ujuDesigner.celebrateBirthday(2025);
// ujuDesigner.promoteBrand();
// ujuDesigner.introduction();

// // Creating another instance of FashionDesigner subclass
// var ngoziDesigner = new FashionDesigner(
//     'Ngozi',
//     2005,
//     'AzureElegance',
//     3,
//     'Casual wears',
//     'Abuja',
//     'Blue'
// );

// ngoziDesigner.socialMediaHype(1500, 'TikTok');
// ngoziDesigner.celebrateBirthday(2025);
// ngoziDesigner.promoteBrand();
// ngoziDesigner.introduction();