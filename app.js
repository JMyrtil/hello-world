'use strict'

console.log('Hello Wolrd');

let x = 10;
console.log(x);

let nicu;

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

let usersClean = prompt('Do you Clean it?')
let nofilth;

if (usersClean == 'Yes'){
    usersClean = alert('Great!!')
} 
else if (usersClean == 'No'){
    usersClean = alert('Yikes!!');
} else if (usersClean == 'yes'){
    usersClean = alert('Great!!');
} else if (usersClean == 'no'){
    usersClean = alert('Yikes!!');
} else {
    usersClean = alert("Please Don't be Funny")
}

 function intro(){
    let usersChoice = prompt('Are you?');
    if (usersChoice == 'yes'){
        alert ('Yay lets get ready to clean!!')}
        else if(usersChoice == 'Yes'){
        alert ('Yay lets get ready to clean!!')}
        else if (usersChoice == 'No'){
        alert ('YOU ARE QUITE FILTHY')}
        else if(usersChoice == 'no'){
        alert ('YOU ARE QUITE FILTHY')}
        else {
        alert ('Refresh and type yes or no')}
    }

function good(){
    while(true){
        nicu = prompt('1-10 Would you buy our product!!, 10 being highly likely.');

        if (nicu > 10){alert('Please enter a number from 1-10');}
        else if (nicu < 1){alert('Please enter a number from 1-10');}
        else{break;}
    }
    for (let i = 1; i <= nicu; i++){
        document.write('<img src="https://i.pinimg.com/564x/44/5d/67/445d6736b7051f59e0d829e1bad612c3.jpg" alt="nice" class="nice"/>');
    }
}
