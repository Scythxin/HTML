// = assignment operator
// == comparison operator
// === strict equality operator(compare if data type and value are equal)
// != inequality operator
// !== strict inequality operator

// const PI = "3.14";

// if (PI === "3.14"){
//     console.log("That is Pi.");
// }
// else{
//     console.log("That is Pi.");
// }

//Number gussing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum-minNum + 1)+minNum);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum}-${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess< minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too Low! Try Again");
        }
        else if(guess > answer){
            window.alert("Too High! Try Again");
        }
        else{
            window.alert(`CORRECT! The answe is ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }
    }
}