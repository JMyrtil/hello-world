'use strict'

console.log('Hello Wolrd');

let x = 10;
console.log(x);

let usersChoice = prompt('Do you have an air fryer?')
let message;

if (usersChoice == 'Yes'){
    message = 'Well do I have the product for you!!'
} else if (usersChoice == 'No'){
    message = "Then Please Visit Our Food Advisors";
} else if (usersChoice == 'yes'){
    message = "Well do I have the product for you!!";
} else if (usersChoice == 'no'){
    message = "Then Please Visit Our Food Advisors";
} else {
    message = "Please View our Product and don't hesitate to Purchase"
}

document.write(message)
