const express = require('express');
const jsonParser = require('body-parser').json();
const handleDBError = require(__dirname + '/../lib/handle_db_error');

var usersRouter = module.exports = exports = express.Router();

// usersRouter.get('/', (req, res) => {
//   Users.find({}, (err, data) => {
//     if(err) return handleDBError(err, res);
//     res.status(200).json(data);
//   });
// });
