const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: ''
});

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

module.exports = exports = connection;
