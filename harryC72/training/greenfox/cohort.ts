'use strict'

import { Mentor } from './mentor'
import { Student } from './student'
import { Sponsor } from './sponsor'
import { Person } from './person'

export class Cohort{
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(cohortName: string){
    this.name = cohortName;
    this.students = [];
    this.mentors = [];
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addMentor(mentor: Mentor): void {
    this.mentors.push(mentor);
  }

  info(): void {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors`);
  }

}


let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person('Jane', 22, 'female');
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student('anonymous', 22, 'male', 'BMW');
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor('Harry', 33, 'male', 3);
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor('Agatha', 44, 'female', 'Google');
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

console.log('elon', elon.hiredStudents);

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();