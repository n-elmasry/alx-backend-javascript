const fs = require('fs').promises;

function readDatabase(filePath) {
  return fs.readFile(filePath, 'utf-8')
    .then((data) => {
      const students = data.split('\n').filter(line => line); // Splitting and filtering empty lines
      const fields = {};

      // Skip the header row by using slice(1)
      students.slice(1).forEach((student) => {
        const [firstname, field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      return fields;
    })
    .catch((error) => {
      return Promise.reject(new Error('Cannot load the database'));
    });
}

module.exports = readDatabase;
