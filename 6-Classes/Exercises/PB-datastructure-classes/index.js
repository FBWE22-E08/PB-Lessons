//  1

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return `${this.name}, ${this.age} years old`;
  }
}

const person = new Person("Max", 31);

console.log(person.describe()); // Max, 31 years old

/********************************************************/

// 2
class Cylinder {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }
  getVolume() {
    // V = π r^2 h
    return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
  }
}

const cylinder = new Cylinder(4, 6);

console.log(cylinder.getVolume()); // 452.3893

/********************************************************/

// 3
class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }
}

const clock = new Clock({ template: "h:m:s" });
clock.render();

/********************************************************/

// 4

class TV {
  constructor(brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
  }
  increaseVolume() {
    if (this.volume < 100) {
      this.volume += 1;
    }
  }
  decreaseVolume() {
    if (this.volume >= 0) {
      this.volume -= 1;
    }
  }
  getNewChannel() {
    this.channel = Math.floor(Math.random() * 51);
    console.log(this.channel);
  }

  resetTV() {
    this.channel = 1;
    this.volume = 50;
  }

  getTVstatus() {
    console.log(
      `${this.brand} at channel ${this.channel}, volume ${this.volume}`
    );
  }
}

const tv = new TV("Samsung");

tv.getTVstatus(); // Samsung at channel 1, volume 50

tv.increaseVolume();
tv.increaseVolume();
tv.getNewChannel();

tv.getTVstatus();
