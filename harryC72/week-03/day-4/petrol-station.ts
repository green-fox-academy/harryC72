// Petrol Station

//     Create a Station and a Car classes
//     Station
//         gasAmount
//         refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
//     Car
//         gasAmount
//         capacity
//         create constructor for Car where:
//             initialize gasAmount -> 0
//             initialize capacity -> 100


class Station{
  gasAmount: number;
  car: Car;

  constructor(gas: number){
    this.gasAmount = gas;
  }

  refill(car){
    car.gasAmount += car.capacity;
    this.gasAmount -= car.capacity;
  }

}

class Car{

  gasAmount: number;
  capacity: number;

  constructor(gas: number = 0, tankCap = 100){
    this.gasAmount = gas;
    this.capacity = tankCap;
  }

}