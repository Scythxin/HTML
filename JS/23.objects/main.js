// object = A collection of related properties and/or methods.
//          Can represent real world objects(people, product, places)
//          object = {key:value(properties),
//                    function()(methods)}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am spongebob")},
    eat: function(){console.log("I am eating a Krabby Patty")},
}

person1.sayHello();
person1.eat();

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => {console.log("Hey! I am Patrick...")},
    eat: () => {console.log("Pizzaaa!!")},
}

person2.sayHello();
person2.eat();

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);

//this = reference to the object where THIS is used
//       (the object depends on immediate context)
//       person.name == this.name

const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log(`Hi I am ${this.firstName}`)},
    eat: function(){console.log("I am eating a Krabby Patty")},
}