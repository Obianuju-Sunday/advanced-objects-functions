class Question {
    constructor(question, possibleAnswers, correctAnswer) {
        this.question = question;
        this.possibleAnswers = possibleAnswers;
        this.correctAnswer = correctAnswer;
    }
}

var question1 = new Question('What does a closure allow a function to do?', '\n A. Access variables from its outer function even after that outer function has finished running \n B. Remove variables from memory \n C. Create global variables \n D. Stop the call stack', 'A');

var question2 = new Question('Which method can be used to borrow a function from another object?', ['\n A. call() \n B. bind() \n C. apply() \n D. All of the above'], 'D');

var question3 = new Question('What is a higher-order function?', ['\n A. A function that returns another function or takes a function as an argument \n B. A function that is called more than once \n C. A function that is defined inside another function \n D. A function that has more than two parameters'], 'A');

var question4 = new Question('What is the main purpose of using IIFE (Immediately Invoked Function Expression)?', ['\n A. To create a new scope and avoid polluting the global namespace \n B. To delay the execution of a function \n C. To make functions reusable \n D. To define functions without names'], 'A');

var question5 = new Question('Which of the following is NOT a characteristic of JavaScript functions?', ['\n A. First-class citizens \n B. Can be assigned to variables \n C. Cannot be passed as arguments \n D. Can return other functions'], 'C');

var questionsix = new Question('Which method permanently locks the value of this for a function?', ['\n A. call() \n B. apply() \n C. bind() \n D. freeze()'], 'C');

var question7 = new Question('What is the output of the following code snippet?\n\n(function() {\n  var x = 10;\n  return function() {\n    console.log(x);\n  };\n})();\n', ['\nA. undefined \nB. 10 \nC. Error \nD. null'], 'B');

var question8 = new Question('What fashion era is known for bold shoulders, bright colors, and statement power suits?', ['A. 80s \nB. 50s \nC. 2000s \nD. 20s'], 'A');

var question9 = new Question('Which fabric is known for its soft, luxurious feel and slight sheen?', ['A. Silk \nB. Denim \nC. Cotton \nD. Wool'], 'A');

var question10 = new Question('What is the term for a fashion style that combines elements from different cultures?', ['A. Fusion \nB. Vintage \nC. Bohemian \nD. Minimalist'], 'A');

var question11 = new Question('Which brand is famous for its red-soled heels?', ['A. Christian Louboutin \nB. Jimmy Choo \nC. Manolo Blahnik \nD. Gucci'], 'A');

var question12 = new Question('What is the name of the fashion event held annually in New York City?', ['A. New York Fashion Week \nB. Paris Fashion Week \nC. Milan Fashion Week \nD. London Fashion Week'], 'A'); 

var question13 = new Question('What is monochrome fashion?', ['A. Wearing different shades of a single color \nB. Wearing black and white only \nC. Wearing patterns and prints \nD. Wearing bright colors'], 'A'); 


// An array to hold all questions
var questionBank = [
    question1, 
    question2, 
    question3, 
    question4, 
    question5, 
    questionsix,
    question7,
    question8,
    question9,
    question10,
    question11,
    question12,
    question13
];