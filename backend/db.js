const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'vulnapp',
});

connection.connect(err => {
  if (err) {
    console.error('DB connection failed:', err.stack);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});

module.exports = connection;
