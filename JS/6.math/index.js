//Math = built-in object that provides a  
//       collection of properties and methods

// console.log(Math.PI);
// console.log(Math.E);

// let x = 3.21;
// let y = 2;
// let z = 1;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x,y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);
// z = Math.max(x,y,z);
// z = Math.min(x,y,z);

// console.log(z)

//Random Number Generator

// let randomNum = Math.floor(Math.random()*100) + 1; //Between 1-100

// console.log(randomNum);

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max-min)) + min;

// console.log(randomNum);

//Die Roll

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 0;
const max = 9;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max)+min;
    randomNum2 = Math.floor(Math.random() * max)+min;
    randomNum3 = Math.floor(Math.random() * max)+min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}