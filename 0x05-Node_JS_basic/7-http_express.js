// Express server
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

// Route for the root path
app.get('/', (req, resp) => {
  resp.send('Hello Holberton School!');
});

// Route for /students
app.get('/students', (req, resp) => {
  const databasePath = process.argv[2]; // Get the database path from command line arguments

  resp.write('This is the list of our students\n');
  countStudents(databasePath)
    .then((output) => {
      resp.end(output); // Send the output received from countStudents
    })
    .catch(() => {
      resp.status(404).send('Cannot load the database'); // Set 404 for error and send message
    });
});

// Start the server
app.listen(port, () => {
});

module.exports = app;
