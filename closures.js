// A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.


// Persistent counter
function persistentCounter(){
    var count = 0;

    return function(){
        count += 1;
        console.log(count);
        return count;
    }
};

var mainCounter = persistentCounter();
mainCounter();
mainCounter();

// User session tracker
function sessionTracker(userName, lastLogin){
    var userName = userName;
    var lastLogin = lastLogin;

    return function(){
        console.log(`Welcome back ${userName}! Your last login was on ${lastLogin}.`);
    }
}

var userSession1 = sessionTracker("Chinelo", "2025-06-15");
userSession1();

var userSession2 = sessionTracker("Obianuju", "2024-11-27");
userSession2();

// Discount calculator

function discountCalculator(originalPrice, discountPercent) {
    var originalPrice = originalPrice;
    var discountPercent = discountPercent;

    return function() {
        var discountPrice = originalPrice - (originalPrice * discountPercent / 100);
        console.log(`After ${discountPercent}% discount, the new price at checkout is $${discountPrice}.`);
        return discountPrice;
    }
}

var discountForItem1 = discountCalculator(5000, 20);
discountForItem1();
