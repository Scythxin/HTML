//string methods

let username = "BroCode";

console.log(username.charAt(0)); //Returns the character at that position.

console.log(username.indexOf("o"));//Returns the first index of that letter.

console.log(username.lastIndexOf("o"));//Returns the last index of that letter.

console.log(username.length);//Returns the length

username = username.trim(); //Removes white-space

username = username.toUpperCase();
username = username.toLowerCase();
username = username.repeat(3);

let result1 = username.startsWith(" ");//Checks if the string starts with " ".
let result2 = username.endsWith(" ");//Checks if the string ends with " ".
let result3 = username.includes(" ");//Checks if the string has a " ".

let phNo = "123-456-7890";
phNo = phNo.replaceAll("-", " "); //Replace a character.
console.log(phNo);

let phNo2 = "123-456-7890";
phNo = phNo.padStart(15, "0"); //Give a string size and add given number in the begining.
console.log(phNo);
let phNo3 = "123-456-7890";
phNo = phNo.padEnd(15, "0"); //Give a string size and add given number in the begining.
console.log(phNo);


//String Slicing = Create a substring from another string
// string.slice(start,end);

const fullName = "Bro Code";

// let firstName = fullName.slice(0,3);
// let lastName = fullName.slice(3,8);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")+1);

console.log(firstName);
console.log(lastName);