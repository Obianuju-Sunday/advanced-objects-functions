// // Passing Functions as Arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2025 - el;
// }

// function isOfFullAge(el){
//   return el >= 18;
// }

// function maxHeartRate(el){
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// // Using the higher-order function to calculate ages and check for full age

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isOfFullAge);
// var maxHeartRates = arrayCalc(ages, maxHeartRate)


// // console.log('The ages array ' , ages);
// // console.log('The full ages array: ', fullAges);
// // console.log('The heart rates array: ', maxHeartRates);


// // Passing functions as arguments practice

// var firstNumber = Number(prompt("Enter the first number:"));
// var secondNumber = Number(prompt("Enter the second number:"));
// var userOperation = prompt("Enter the operation (add, multiply, subtract, divide):").toLowerCase();

// function addNumbers(a, b) {
//     return a + b;
// }

// function multiplyNumbers(a, b) {
//     return a * b;
// }

// function subtractNumbers(a, b) {
//     return a - b;
// }

// function divideNumbers(a, b) {
//     return Math.round(a / b);
// }

// function calculate(a,b,opsFn) {
//     return opsFn(a,b);
// }

// switch(userOperation) {
//     case 'add':
//         alert('Sum: ' + calculate(firstNumber, secondNumber, addNumbers));
//         break;
//     case 'multiply':
//         alert('Product: ' + calculate(firstNumber, secondNumber, multiplyNumbers));
//         break;
//     case 'subtract':
//         alert('Difference: ' + calculate(firstNumber, secondNumber, subtractNumbers));
//         break;
//     case 'divide':
//         alert('Quotient: '+ calculate(firstNumber, secondNumber, divideNumbers));
//         break;
//     default:
//         console.log('Invalid operation');
//         alert('Invalid operation');
//         break;
// }

// var sum = addNumbers(10, 5);
// var product = multiplyNumbers(10, 5);
// var difference = subtractNumbers(10, 5);
// var quotient = divideNumbers(10, 5);

// console.log('Sum: ', sum);
// console.log('Product: ', product);
// console.log('Difference: ', difference);
// console.log('Quotient: ', quotient);


// FUNCTIONS RETURNING FUNCTIONS

// Outer function will create reminder messages.
function funcStyle(strict, urgency){
  function funcMessage(name, goal){
    return(`Hello ${name}, here is a ${strict} message for you about your ${goal}. You should focus urgently this week!`)
  }
  return funcMessage;
}

var messageStrict = funcStyle('strict');
console.log(messageStrict('Joy', 'coding'));

function functionFriendly(friendly){
  function friendlyMessageFormat(name, goal){
    return(`Hello ${name}, here is a ${friendly} message for you about your ${goal}`)
  }
  return friendlyMessageFormat;
}

// var messageFriendly = functionFriendly('friendly');
// console.log(messageFriendly('Obianuju', 'financial growth.'));

console.log(functionFriendly('friendly')('Obianuju', 'financial growth'))


