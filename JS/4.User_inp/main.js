//How to accept user input

//1. Window prompt
//2. HTML textbox

let username;

// username = window.prompt("What is your username?");

// console.log(username);

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myh1").textContent = `Hello ${username}`;
}

//const : Used as a constant, its value never changes
//Ex- const PI = 3.14
