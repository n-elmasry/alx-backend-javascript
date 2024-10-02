const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const students = {};
      const lines = data.trim().split('\n').slice(1); // Skip the header row

      for (const line of lines) {
        const [firstName, , , field] = line.split(','); // Only take the necessary fields
        if (field) {
          students[field] = students[field] || [];
          students[field].push(firstName.trim());
        }
      }

      const totalStudents = Object.values(students).flat().length;
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, names] of Object.entries(students)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
