;
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "New York",
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "New York",
};
var studentsList = [student1, student2];
var arr = [];
arr.push([student1.firstName, student1.location]);
//arr.push([student2.firstName, student2.location]);
console.log(studentsList[0].firstName + " " + studentsList[0].location);
console.log(studentsList[1].firstName + " " + studentsList[1].location);
console.log(arr);
