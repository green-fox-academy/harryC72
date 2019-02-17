'use strict'

export class Person {
  name: string;
  age: number;
  gender: string;
  goal: string;

  constructor(personName: string, personAge: number, personGender, goal: string = 'Live for the moment!') {
    this.name = personName;
    this.age = personAge;
    this.gender = personGender;
    this.goal = goal;
  }

introduce(): void {
  console.log(`Hi, I'm ${this.name} a ${this.age} year old ${this.gender}`);
}

getGoal() :void {
  console.log(`My goal is: ${this.goal}`);
}

}

