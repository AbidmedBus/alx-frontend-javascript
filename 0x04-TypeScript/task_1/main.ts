interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    contract?: boolean
}

interface Directors extends Teacher {
    numberOfReports: number
}

let teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
};

console.log(teacher3);

let director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "New York",
    fullTimeEmployee: true,
    numberOfReports: 17
};

console.log(director1);