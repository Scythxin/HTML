// .reduce() = reduce the elements of an array
//             to a single value.

const prices = [5,20,10,25,15,30];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}

const grades = [75,50,90,80,65,95];

const maximum = grades.reduce(getMax);

function getMax(accumulator, element){
    return Math.max(accumulator,element);
}