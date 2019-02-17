'use strict'
import { Person } from './person'

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(studentName: string, studentAge: number, studentGender: string, studentsPrevOrganization: string, 
    studentSkippedDays: number = 0, goal: string = 'Be a junior software developer.' ){
    super(studentName, studentAge, studentGender, goal);
    this.previousOrganization = studentsPrevOrganization;
    this.skippedDays = studentSkippedDays;
    this.goal = goal;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization}
    who skipped ${this.skippedDays} days from the course already`);
  }
  
  skipDays(days: number): void {
    this.skippedDays =this.skippedDays + days;
  }
}