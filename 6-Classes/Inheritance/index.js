class Vehicle {
  constructor(_type, _speed) {
    this.type = _type;
    this.speed = _speed;
  }

  move() {
    console.log(`The vehicle of type ${this.type} is moving at ${this.speed}`);
  }

  stop() {
    console.log(`The vehicle of type ${this.type} stopped moving`);
  }
}

const rustyCar = new Vehicle("car", 70);
rustyCar.move();
rustyCar.stop();

// Class inheritance - is a way for one class to extend another class

class Car extends Vehicle {
  constructor(speed) {
    super("car", speed);
    this.jet = false;
  }

  emergencyStop() {
    console.log("This is an emergency stop for the car");
    this.stop();
  }
}

const fiat = new Car(120);
const audi = new Car(230);
fiat.move();
fiat.stop();
audi.move();

console.log(fiat);

console.clear();

fiat.emergencyStop();

class SuperCar extends Vehicle {
  constructor(speed) {
    super("supercar", speed);
    this.jet = true;
  }

  //   Override the method from the super class by using the same name
  move() {
    console.log(`The supercar is moving at ${this.speed}`);

    super.move();
  }
}

const ferrari = new SuperCar(440);
console.clear();
ferrari.stop();
ferrari.move();
// ferrari.stop();
