class Person {
    constructor (name,year_of_birth,height){
        this.name = name;
        this.yaer_of_birth = year_of_birth;
        this.height = height
    }

    age(){
        let currentDate = new Date();
        return currentDate.getFullYear() - this.year_of_birth;
    }


profile() {
    return{
        name: this.name,
        age:this.age(),
        height: this.height
    
    }
}

}


var puomo = new Person("Puomo", 1999,6.8);
// console.log(puomo.age());
console.log(puomo.profile());

var cletus = new Person("Cletus", 2005, 5.5);

console.log(cletus.profile());



class Car{
    constructor (wheels, doors, seats) {
        this.wheels = wheels;
        this.doors = doors;
        this.seats = seats;
    }

    numberOfwheels() {
        return this.wheels;
    }

    numberOfDoors(){
        return this.doors;
    }

    numberOfSeat(){
        return this.seats;
    }


}

class Bus extends Car {
    constructor (){
        super(4,3,18);
    }
}

var benz = new Car(4,4,5);
console.log(benz.numberOfDoors());

var toyotaBus = new Bus();

console.log(toyotaBus.numberOfDoors());



class Car1{
    constructor (name){
        this.name = name
    }

    get carName() {
        return this.name;
    }

    set carName(newName){
        this.name = newName;
    }
}

var myCar = new Car1('Ford');

console.log(myCar.carName)

myCar.carName = 'IVM';

console.log(myCar.carName);





class someClass {
    static someName(x){
        console.log(x);
    }
}

someClass.someName('The quick brown fox....');



