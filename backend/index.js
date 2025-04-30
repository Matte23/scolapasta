const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

const db = require('./db');

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // 🚨 INTENTIONALLY VULNERABLE TO SQLi
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: 'Error',
        query: query
      });
    }
    if (results.length > 0) {
      res.json({
        message: 'Login successful',
        query: query
      });
    } else {
      res.status(401).json({
        message: 'Invalid credentials',
        query: query
      });
    }
  });
});

app.listen(5000, () => console.log('Backend running on port 5000'));
