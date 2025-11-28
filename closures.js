// // A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.


// // Persistent counter
// function persistentCounter(){
//     var count = 0;

//     return function(){
//         count += 1;
//         console.log(count);
//         return count;
//     }
// };

// var mainCounter = persistentCounter();
// // mainCounter();
// // mainCounter();

// // User session tracker
// function sessionTracker(userName, lastLogin){
//     var userName = userName;
//     var lastLogin = lastLogin;

//     return function(){
//         console.log(`Welcome back ${userName}! Your last login was on ${lastLogin}.`);
//     }
// }

// var userSession1 = sessionTracker("Chinelo", "2025-06-15");
// userSession1();

// var userSession2 = sessionTracker("Obianuju", "2024-11-27");
// userSession2();

// // Discount calculator

// function discountCalculator(originalPrice, discountPercent) {
//     var originalPrice = originalPrice;
//     var discountPercent = discountPercent;

//     return function() {
//         var discountPrice = originalPrice - (originalPrice * discountPercent / 100);
//         console.log(`After ${discountPercent}% discount, the new price at checkout is $${discountPrice}.`);
//         return discountPrice;
//     }
// }

// var discountForItem1 = discountCalculator(5000, 20);
// discountForItem1();

// // Personalized greeting generator
// function greet(name) {
//     function notify(item) {
//         console.log(`Hey ${name}, check out this ${item}!`);
//     }
//     return notify;
// }

// var greetAnna = greet("Anna"); 
// // greetAnna("hat"); 
// // greetAnna("dress"); // still remembers Anna

// // closure in a lay man term
// var number = 10;

// function outerFunction() {
//     var outerVariable = 20;

//     function innerFunction() {
//         var innerVariable = 30;
//         console.log("Sum:", number + outerVariable + innerVariable);
//     }

//     return innerFunction;
// }

// var closureFunction = outerFunction();
// // closureFunction();



// Create a wallet with closure
function createWallet(startingAmount) {
    let balance = startingAmount;

    function addMoney(amountAdded) {
        balance += amountAdded;
    }

    function spendMoney(amountSpent) {
        balance -= amountSpent;
    }

    function checkBalance() {
        console.log(`Current balance: $${balance}`);
        return balance;
    }

    return {
        addMoney,
        spendMoney,
        checkBalance
    };
}

var myWallet = createWallet(100);
myWallet.checkBalance();
myWallet.addMoney(50);
myWallet.checkBalance();
myWallet.spendMoney(30);
myWallet.checkBalance();



// Interview Question Closure Example

// One way of doing it
function interviewQuestions(job) {
    function interviewTeacher(name) {
        console.log(`Hello ${name}, what subject do you teach?`)
    }

    function interviewDesigner(name) {
        console.log(`Hello ${name}, can you please explain what UX design is?`)
    }

    return {
        interviewTeacher,
        interviewDesigner
    }
}

var mainInterview1 = interviewQuestions('Teacher');
mainInterview1.interviewTeacher('Joy');

var mainInterview2 = interviewQuestions('Designer');
mainInterview2.interviewDesigner('Faith');


// A better way of doing it and less code
function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(`Hello ${name}, can you please explain what UX design is?`);
        } else if (job === 'teacher') {
            console.log(`Hello ${name}, what subject do you teach?`);
        } else {
            console.log(`Hello ${name}, what do you do for a living?`);
        }
    }
}

interviewQuestion('designer')('Anna');
interviewQuestion('teacher')('John');
interviewQuestion('engineer')('Mike');


// Closure + IIFE Example
(function greetPerson(name){
  return function(){
    console.log(`Hello ${name}, good morning!`)
  }
})('Joy')();

