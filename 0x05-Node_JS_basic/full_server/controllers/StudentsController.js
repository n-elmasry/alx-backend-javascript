// StudentsController

const readDatabase = require('../utils.js');

class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = process.argv[2];

    try {
      const students = await readDatabase(filePath);
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      res.write('This is the list of our students\n');
      fields.forEach((field) => {
        res.write(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`);
      });
      res.end();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const filePath = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(filePath);
      res.send(`List: ${students[major].join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = StudentsController;
