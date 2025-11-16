
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


// ngozi.celebrateBirthday(2025);
// obianuju.celebrateBirthday(2025);

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


class Product {
    constructor(name, price, category, stock) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.stock = stock;
        // console.log(this.price);

    }


    applyDiscount(percent) {
        this.price = this.price - (this.price * (percent / 100));
        // console.log(this.price);
    }

    isInStock() {
        if (this.stock > 0) {
            console.log('We have this product in stock.')
        } else {
            console.log('This product is out of stock.');
        }
    }
}

var firstProduct = new Product('Evening gown', 400, 'Bridal', 8);
// firstProduct.applyDiscount(5);
// firstProduct.isInStock();


var secondProduct = new Product('Casual wears', 250, 'Everyday', 0)
// secondProduct.applyDiscount(15);
// secondProduct.isInStock(0);




class Designer extends Person {
    constructor(name, yearOfBirth,brandName, catalog) {
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

var designer1 = new Designer('Obianuju', 2003, 'CrimsonAura', []);
designer1.addProduct(firstProduct);
designer1.addProduct(secondProduct); 
designer1.removeProduct('Casual wears');
designer1.listProduct();
console.log(designer1)







































