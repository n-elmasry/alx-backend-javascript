// server Express

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, resp) => {
  resp.send('Hello Holberton School!');
});

app.listen(port, () => {

});
module.exports = app;
