namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingReact?: number;
  }

  export class Subject {
    teacher: Teacher;
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }

  export class Cpp extends Subject {
    getRequirements() { return "Here is the list of requirements for Cpp"; }
    getAvailableTeacher() {
      return this.teacher.experienceTeachingC > 0
        ? `Available Teacher: ${this.teacher.firstName}`
        : "No available teacher";
    }
  }
}
