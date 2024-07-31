var printTeacher = function (firstName, lastName) {
    return firstName[0] + ". " + lastName;
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        var _this = this;
        this.workOnHomework = function () { return 'Currently working'; };
        this.displayName = function () { return _this.firstName; };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return StudentClass;
}());
var StudentClassConstructor = StudentClass;
var student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework());
console.log(student.displayName());
