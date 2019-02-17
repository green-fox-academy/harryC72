'use strict'
import { Person } from './person'

export class Sponsor extends Person {
  company: string;
  hiredStudents: number;
  goal: string; 

  constructor(sponsorName: string, sponsorAge: number, sponsorGender: string, sponsorCompany, hiredStudents: number = 0,
    goal: string = 'Hire brilliant junior software developers.' ){
    super(sponsorName, sponsorAge, sponsorGender, goal)
    this.company = sponsorCompany;
    this.hiredStudents = hiredStudents;
    this.goal = goal;
  }

  introduce(): void {
    console.log(`Hi, I',m ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and
    hired ${this.hiredStudents} students so far`);
  }

  hire(): void {
    this.hiredStudents += 1;
  }

}
  