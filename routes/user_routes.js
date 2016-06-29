const express = require('express');
const jsonParser = require('body-parser').json();
const handleDBError = require(__dirname + '/../lib/handle_db_error');
const mysql = require('mysql');
const connection = require(__dirname + '/../models/users_model');

var usersRouter = module.exports = exports = express.Router();

usersRouter.get('/', function(req,res) {
  connection.query('SELECT * FROM test1.users', function(err, users) {
    if (err) return handleDBError(err, res);
    res.sendFile(__dirname + '/index.html');
    // res.status(200).json(users);
  });
});

usersRouter.post('/users', jsonParser, function(req, res) {
  connection.query('INSERT INTO users SET ?', req.body, function(err, result) {
    if (err) return handleDBError(err, res);
    res.status(200).json('User added to database with ID: ' + result.insertId);
  });
});

usersRouter.delete('/users/:id', function(req, res) {
  connection.query('DELETE FROM users WHERE ID=?', [req.params.id], function(err, res) {
    if (err) return handleDBError(err, res);
    res.status(200).json({msg: 'successfully deleted user'});
  });
});
