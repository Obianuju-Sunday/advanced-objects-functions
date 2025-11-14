
// Personal Challenge 
class Person {
  constructor(name, yearOfBirth){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
  }
  
  celebrateBirthday(currentYear){
    var age = currentYear - this.yearOfBirth;
    console.log(`Happy birthday ${this.name}. You are ${age} years old now.`);
    this.age = age;
  }
}

// Creating instances of Person
var obianuju = new Person('Obianuju', 2003);
var ngozi = new Person('Ngozi', 2005);

// Testing the celebrateBirthday method
ngozi.celebrateBirthday(2025); // Output: Happy birthday Ngozi. You are 20 years old now.
obianuju.celebrateBirthday(2025); // Output: Happy birthday Obianuju. You are 22 years old now.

console.log(obianuju);
console.log(ngozi);