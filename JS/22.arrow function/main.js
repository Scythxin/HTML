// arrow function = a consice way to write function expressions
//                  good for simple functons that you use only once
//                  (parameters) => some code

function hello1(){
    console.log("hello");
}

hello1();
//
const hello2 = function(){
    console.log("hello");
}

hello2();
//
const hello3 = (name) => console.log(`hello ${name}`);

hello3("bro");
//

setTimeout(() => {
    console.log("hello");
},3000);

//
const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element,2));

console.log(squares);