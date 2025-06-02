const mysql = require('mysql2');

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // set your MySQL password
  database: 'libraryDB'
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to libraryDB!');
});

module.exports = connection;

