class Car {
  
  static getSpecs(car){
    return `Max speed: ${car.maxSpeed}: Speed: ${car.speed}; isOn: ${car.isOn}; Distance: ${car.distance}; Price: ${car.price}`;
  }
  
  constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0}) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price
  }

  set price(price){
    return this._price = price;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value < this.maxSpeed){
      this.speed += value;
    } else {
      this.speed = this.maxSpeed;
    }
  }

  decelerate(value) {
    if (this.speed - value > 0){
      this.speed = this.speed - value;
    } else {
      this.speed = 0;
    }
  }

  drive(hours) {
    if(this.isOn === true){
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({maxSpeed: 200, price: 2000});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
console.log(Car.getSpecs(mustang));

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
console.log(Car.getSpecs(mustang));

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);