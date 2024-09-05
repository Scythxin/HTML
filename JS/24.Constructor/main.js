// constructor = special method for defining the 
//               properties and methods of objects.

function Car(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = () => {console.log(`You drive the ${this.model}`)};

}

const car1 = new Car("Ford", "Mustang", 2024, "red");
