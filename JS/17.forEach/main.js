//forEach() = method used to iterate over the elements
//            of an array and apply a specified function (callback)
//            to each element

//            array.forEach(callback)
//            element, index,array are provided

let numbers = [1,2,3,4,5];

numbers.forEach(display);

numbers.forEach(double);

function double(element, index, array){
    array[index] = element * 2;
}

function display(element){
    console.log(element);
}

// Ex-2
let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(display);
fruits.forEach(upperCase);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function display(element){
    console.log(element);
}