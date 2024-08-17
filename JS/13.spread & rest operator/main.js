//spread o[erator = ... allows an iterable such as an
//                  array or string to be expanded
//                  into separate elements
//                  (unpacks the elements)

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum)

let username = "Bro Code";
let letters = [...username].join("-");

console.log(letters);

let fruits = ["apple","orange","banana"];
let vegetables = ["carrot", "celery", "potatoes"];

let food = [...fruits, ...vegetables, "eggs", "milk"];

console.log(food);

//rest parameters = (...rest) allow a function work with a variable
//                  number of arguments by bundling them into an array

//spread = expands an array into separate elements.
//rest   = bundles separate elements into an array.

// function openFridge(...foods){ //rest parameter used as parameter
//     console.log(...foods);     //spread operator used when there is an array
// }
//Ex-1:
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5)

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

//Ex-2:

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

// const total = sum(1,2,3,4,5);

// console.log(`Your total is ${total}`);

function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result/numbers.length;
}

const total =getAverage(75, 100, 85, 90, 60);

console.log(total);

//Ex-3:

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants");

console.log(fullName);
