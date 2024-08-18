// callback = a function that is passed as an argument
//            to another function.

//            used to handle asynchronous operations;
//            1.Reading a file
//            2.Network requests
//            3.Interacting with databases

//            "Hey, when you're done, call this next."

hello(goodbye); //goodbye is a callback so it will only execute after hello
hello(leave); //leave is a callback so it will only execute after hello
hello(wait);

function hello(callback){
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}

//Ex-2

sum(displayConsole, 1, 2);

function sum(callback,x,y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}