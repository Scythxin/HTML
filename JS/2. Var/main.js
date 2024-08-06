// variable = A container that stores a value. 
//             Behaves as if it were the value it contains. 

// 1. declaration let x;
// 2. assignment x=100;            

// let x;
// x = 123;

// console.log(x);


// number
// let age = 25;
// let price = 10.99;
// let cgpa = 8.36;

// console.log(age);
// console.log(price);

// console.log(`You are ${age} years old.`);
// console.log(`The price is $${price}`);
// console.log(`Your cgpa is ${cgpa}`);

//string
// let firstName = "Bro";
// let favouriteFood = "Pizza";

// console.log(firstName);
// console.log(`Your name is ${firstName}`);
// console.log(`You like ${favouriteFood}`);

//Boolean
// let online = true;

// console.log(typeof online);
// console.log(`Bro is online: ${online}`);

let fullNmae = "Bro Code";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullNmae}`;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
