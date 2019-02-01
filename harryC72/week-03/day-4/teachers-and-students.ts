
// Teacher Student

// Create Student and Teacher classes
// Student
//     learn()
//     question(teacher) -> calls the teachers answer method
// Teacher
//     teach(student) -> calls the students learn method
//     answer()

class Student {
  knowledge: number;

  teacher: Teacher;

  constructor(startKnowledge = 0) {

    this.knowledge = startKnowledge;
  }


  learn() {
    this.knowledge++
  }

  question() {
          return this.teacher.answer();
  }

}

class Teacher{

   student: Student;

  teach(){
      return this.student.learn();
  }

  answer(){
    console.log('Here is your answer');
    
  }

}


let Harry: Student = new Student();


let George: Teacher = new Teacher();

Harry.teacher = George;

George.student = Harry;

Harry.learn();

George.teach();

Harry.question();
