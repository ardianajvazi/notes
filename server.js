const express = require("express");
const jsonParser = require('body-parser').json();
var PORT = 3000;

const usersRouter = require(__dirname + '/routes/user_routes');

const app = module.exports = exports = express();

app.use('/', usersRouter);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  next();
});

app.listen(PORT);
console.log("Server listening on port:" + PORT);
