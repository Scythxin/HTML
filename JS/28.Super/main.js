// super = keyword is used in classes to call the constructor or
//         access the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

class Animal{
    
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}kmph`);
    }
}

class Rabbit extends Animal{
    
    constructor(name,age,runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run.`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    
    constructor(name,age,swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim.`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    
    constructor(name,age,flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly.`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("Rabbit", 1, 25);
const fish = new Fish("Fish", 1, 35);
const hawk = new Hawk("Hawk", 1, 45);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();