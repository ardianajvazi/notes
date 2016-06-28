const express = require("express");
const mysql = require("mysql");
const jsonParser = require('body-parser').json();
var PORT = 3000;

const usersRouter = require(__dirname + '/routes/notes');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: ''
});

const app = module.exports = exports = express();

connection.query('CREATE DATABASE IF NOT EXISTS test1', function(err) {
  if(err) throw err;
  connection.query('USE test1', function(err) {
    if(err) throw err;
    connection.query('CREATE TABLE IF NOT EXISTS users('
    + 'id INT NOT NULL AUTO_INCREMENT,'
    + 'PRIMARY KEY(id),'
    + 'name VARCHAR(30)'
    + ')', function(err) {
      if(err) throw err;
    });
  });
});

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.post('/users', jsonParser, function(req, res) {
  connection.query('INSERT INTO users SET ?', req.body, function(err, result) {
    if(err) throw err;
    res.send('User added to database with ID: ' + result.insertId);
  });
});

app.listen(PORT);
console.log("Express server listening on port:" + PORT);
