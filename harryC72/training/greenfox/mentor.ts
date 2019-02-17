'use strict'

import { Person } from './person'


export class Mentor extends Person {
  level: string;

  constructor(mentorName: string, mentorAge: number, mentorGender: string, mentorLevel,
    goal: string = 'Educate brilliant junior software developers.'){
    super(mentorName, mentorAge, mentorGender, goal);
    this.level = mentorLevel;
    this.goal = goal;
  }

  introduce(){
    console.log(`Hi, I'm ${this.name}, a ${this.age} old ${this.gender} ${this.level} mentor`)
  }

}