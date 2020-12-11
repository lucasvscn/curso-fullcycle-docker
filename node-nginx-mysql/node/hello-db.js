var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'db',
  user     : 'root',
  password : 'root',
  database : 'nodedb'
});

connection.connect();

connection.query('SELECT * FROM people', function (error, results, fields) {
  if (error) throw error;
  console.log('Primeiro nome é: ', results[0].name);
});

connection.end();