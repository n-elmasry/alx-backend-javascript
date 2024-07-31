interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;

}



interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction = (firstName: string, lastName: string) =>{
    return `${firstName[0]}. ${lastName}`
}


interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass{
    firstName: string;
    lastName: string;

    constructor(firstName: string,lastName: string){
        this.firstName = firstName;
        this.lastName = lastName
    }

    workOnHomework = (): string => 'Currently working'


    displayName = (): string => this.firstName

}

const StudentClassConstructor: StudentClassConstructor = StudentClass;


const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework());
console.log(student.displayName());
