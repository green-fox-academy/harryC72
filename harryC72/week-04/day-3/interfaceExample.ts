'use strict'

    // Interface-example
    // We are building a super cool car-game. In the game we have a car class with rather 
    // many fields so instead of passing in all the properties seperately we put the in a object.
    // There is a red squiggly line underneath the instantiation of the car bellow. If you start by filling
    // the constructor and continues filling the property-object you see the benefits of the interface.
    // It helps the developer see the intention of the Code, so to speak. 

    // You can experiment by taking away the reference to the interface in the constructor. Gone is all the 
    // help!

    
    // let properties = {
    // carName: '',
    // carColor: '',
    // carAccelleration: undefined,
    // carSpeed: undefined,
    // carHealth: undefined,
    // carFuelLevel: 10,
    // carTankSize: undefined
    // };

    interface carProperties{
      carName:string;
    carColor:string;
    carAccelleration: number;
    carSpeed:number;
    carHealth:number;
    carFuelLevel:number;
    carTankSize:number;
    }

  
    
    


class Car{
  name:string;
  color:string;
  accelleration: number;
  speed:number;
  health:number;
  fuelLevel:number;
  tankSize:number;

  constructor(propertiesObj: carProperties){
    this.name = propertiesObj.carName;
    this.color = propertiesObj.carColor;
    this.accelleration = propertiesObj.carAccelleration;
    this.speed = propertiesObj.carSpeed;
    this.health = propertiesObj.carHealth;
  }


}

let porsche = new Car();

