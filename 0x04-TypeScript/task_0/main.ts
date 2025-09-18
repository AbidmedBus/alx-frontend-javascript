interface student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
};

let student1: student = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "New York",
};

let student2: student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "New York",
};

let studentsList: student[] = [student1, student2];
let arr: [string, string][] = [];
arr.push([student1.firstName, student1.location]);
//arr.push([student2.firstName, student2.location]);
console.log(studentsList[0].firstName + " " + studentsList[0].location);
console.log(studentsList[1].firstName + " " + studentsList[1].location);
console.log(arr);