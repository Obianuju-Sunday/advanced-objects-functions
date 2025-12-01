var shoeProduct = {
    brand: 'Nike Shoes',
    price: 800,
    calculateDiscount: function (discountPercent) {
        var discountPrice = this.price - (this.price * discountPercent / 100);
        console.log(`After ${discountPercent}% discount, the new price for the ${this.brand} is $${discountPrice}.`);
        this.discount = discountPrice
        return discountPrice;
    }
}

shoeProduct.calculateDiscount(20); // Using method normally

var bagProduct = {
    brand: 'Gucci Bag',
    price: 1500
}

shoeProduct.calculateDiscount.call(bagProduct, 30); // Using call to borrow method for bagProduct

var watchProduct = {
    brand: 'Rolex Watch',
    price: 5000
}

shoeProduct.calculateDiscount.apply(watchProduct, [25]); // Using apply to borrow method for watchProduct

var tvProduct = {
    brand: 'Samsung TV',
    price: 2000
}

var tvDiscount = shoeProduct.calculateDiscount.bind(tvProduct, 15); // Using bind to create a new function for tvProduct
tvDiscount(); // Calling the bound function








var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2025 - el;
}

function isOfFullAge(limit, el){
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
console.log('Ages:', ages);

var fullNigeria = arrayCalc(ages, isOfFullAge.bind(this, 18));
console.log('Full ages in Nigeria (18+):', fullNigeria);