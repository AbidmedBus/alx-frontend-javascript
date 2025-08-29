interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: "John", lastName: "Doe", age: 20, location: "Accra" };
const student2: Student = { firstName: "Jane", lastName: "Smith", age: 22, location: "Kumasi" };

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(row);
});

document.body.appendChild(table);
