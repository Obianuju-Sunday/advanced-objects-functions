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