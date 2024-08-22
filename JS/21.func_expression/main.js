// function declaration = define a reusable block of code
//                        that performs a specific task.

function hello(){
    console.log('Hello!');
}

//function expression = a way to define functions as
//                      values or variables

const hello = function(){
    console.log("hello");
}

hello();

setTimeout(hello, 3000);

setTimeout(function(){
    console.log("Hello");
},3000);

//
// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map(square);
// console.log(square)
// function square(element){
//     return Math.pow(element,2);
// }
//
const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function(element){
    return Math.pow(element,2);
});
console.log(squares);

