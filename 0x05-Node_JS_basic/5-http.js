// small http server
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, resp) => {
  /* eslint-disable no-param-reassign */
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    resp.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    resp.write('This is the list of our students\n');

    countStudents(process.argv[2])
      .then((output) => {
        resp.end(output); // Directly end with the output
      })
      .catch(() => {
        resp.statusCode = 404; // Set 404 for error
        resp.end('Cannot load the database');
      });
  } else {
    resp.statusCode = 404; // Handle undefined routes
    resp.end('Not Found');
  }
});

const port = 1245;
app.listen(port, () => {

});

module.exports = app;
