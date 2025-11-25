// Passing Functions as Arguments

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

function isOfFullAge(el){
  return el >= 18;
}

function maxHeartRate(el){
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

// Using the higher-order function to calculate ages and check for full age

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isOfFullAge);
var maxHeartRates = arrayCalc(ages, maxHeartRate)


console.log(ages);
console.log(fullAges);
console.log(maxHeartRates);


// Passing functions as arguments practice

function addNumbers(a, b) {
    return a + b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function divideNumbers(a, b) {
    return a / b;
}

function calculate(a,b,opsFn) {
    return opsFn(a,b);
}

var sum = addNumbers(10, 5);
var product = multiplyNumbers(10, 5);
var difference = subtractNumbers(10, 5);
var quotient = divideNumbers(10, 5);

console.log(sum);
console.log(product);
console.log(difference);
console.log(quotient);