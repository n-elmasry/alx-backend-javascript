// http server
const http = require('http');

const app = http.createServer((req, resp) => {
  /* eslint-disable no-param-reassign */
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');

  resp.end('Hello Holberton School!');
});

const port = 1245;
app.listen(port, () => {

});
module.exports = app;
