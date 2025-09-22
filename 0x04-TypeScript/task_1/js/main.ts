interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [property: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}

function printTeacher( firstName, lastName ) {
    return return `${firstName}. ${lastName}`;
}

interface StudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface printTeacherFunction {
    new (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements StudentClass {
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}



console.log(printTeacher('john', 'ward'));
