export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string.');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number.');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array.');
    }
    for (const student of students) {
      if (typeof student !== 'string') {
        throw new TypeError('Students must be an array of strings.');
      }
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getters and setters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value !== 'string') throw new TypeError('Name must be a string');
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') throw new TypeError('Length must be a number');
    this._length = value;
  }

  set students(value) {
    if (!(value instanceof Array)) throw new TypeError('Students must be an array of strings');
    for (const student of value) {
      if (typeof student !== 'string') throw new TypeError('Students must be an array of strings');
    }

    this._students = value;
  }
}
