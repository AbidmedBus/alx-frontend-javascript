interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export const Director = class Director implements DirectorInterface {
  workFromHome() { return "Working from home"; }
  getCoffeeBreak() { return "Getting a coffee break"; }
  workDirectorTasks() { return "Getting to director tasks"; }
}

export const Teacher = class Teacher implements TeacherInterface {
  workFromHome() { return "Cannot work from home"; }
  getCoffeeBreak() { return "Cannot have a break"; }
  workTeacherTasks() { return "Getting to work"; }
}

export function createEmployee(salary: number | string): Director | Teacher {
  return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();
}

export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: Director | Teacher): string {
  return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
