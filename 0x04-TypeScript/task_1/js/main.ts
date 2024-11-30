// Define Teacher interface
interface Teacher {
    readonly firstName: string; // readonly - modified during intialization
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // optional property
    location: string;
    [key: string]: any; // any other properties
}

// Example of a teacher object
const teacher3: Teacher = {
    firstName: 'Simon',
    fullTimeEmployee: true,
    lastName: 'Kamau',
    location: 'Mombasa',
    contract: 'full-time'
};

// Define Directors interface
interface Directors extends Teacher {
    numberOfReports: number;
}

// Example of a director object
const director1: Directors = {
    firstName: 'Bob',
    lastName: 'Collymore',
    location: 'Nairobi',
    fullTimeEmployee: true,
    numberOfReports: 17
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// Interface for the constructor
interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Implementing the class
class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) { }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
