var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'photo'
});

connection.connect();

module.exports = connection;