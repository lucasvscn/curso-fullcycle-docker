const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
});

db.connect(function(err) {
  if (err) throw err;
});

module.exports = db;