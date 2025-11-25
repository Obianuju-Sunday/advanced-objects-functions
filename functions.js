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


