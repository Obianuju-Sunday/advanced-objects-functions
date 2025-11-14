
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


ngozi.celebrateBirthday(2025); 
obianuju.celebrateBirthday(2025); 

console.log(ngozi)

// Inheritance Personal Challenge
class FashionDesigner extends Person {
    constructor(name, yearOfBirth, brandName, yearsOfExperience, specialty, studioLocation, signatureColor) {
        super(name, yearOfBirth)
        this.brandName = brandName;
        this.yearsOfExperience = yearsOfExperience;
        this.specialty = specialty;
        this.studioLocation = studioLocation;
        this.signatureColor = signatureColor;
    }


    socialMediaHype(followers, platform) {
        console.log(`${this.name}, the designer of ${this.brandName}, with over ${followers} followers is slaying the game with ${this.specialty} on ${platform}`);
    }

    celebrateBirthday(currentYear) {
        var age = currentYear - this.yearOfBirth;
        this.age = age;
        console.log(`Happy Birthday ${this.name}! Designer ${this.brandName} is now ${age} and ready to slay the runway!`)
    }

    promoteBrand() {
        console.log(`Check out ${this.brandName}, the hottest ${this.specialty} designs straight from ${this.studioLocation}!`)
    }

    introduction() {
        console.log(`Hi! I'm ${this.name}, the designer behind ${this.brandName}. With ${this.yearsOfExperience} years of experience, I specialize in ${this.specialty}. My signature color is ${this.signatureColor} and my studio is based in ${this.studioLocation}.`)
    }
}


// Instance of FashionDesigner subclass
var ujuDesigner = new FashionDesigner(
    'Obianuju',
    2003,
    'CrimsonAura',
    5,
    'Bridal gowns',
    'Lagos',
    'Maroon'
);


ujuDesigner.socialMediaHype(2000, 'Instagram');
ujuDesigner.celebrateBirthday(2025);
ujuDesigner.promoteBrand();
ujuDesigner.introduction();

// Creating another instance of FashionDesigner subclass
var ngoziDesigner = new FashionDesigner(
    'Ngozi',
    2005,
    'AzureElegance',
    3,
    'Casual wears',
    'Abuja',
    'Blue'
);

ngoziDesigner.socialMediaHype(1500, 'TikTok');
ngoziDesigner.celebrateBirthday(2025);
ngoziDesigner.promoteBrand();
ngoziDesigner.introduction();


console.log(ngoziDesigner)
console.log(ujuDesigner)