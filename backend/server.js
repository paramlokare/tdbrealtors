const express = require('express');
const cors = require('cors');
const db = require('./db');
const path = require('path');
const app = express();
const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db");
const app = express();

app.use(cors());
app.use(express.json());

app.use(cors());
app.use(express.json());

app.post('/api/enquiry', (req, res) => {
  console.log('Received enquiry:', req.body);


  app.use(express.static(path.join(__dirname, '../dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });


  const { name, email, phone, message } = req.body;


  db.query(
    'INSERT INTO enquiries(name,email,phone,message) VALUES(?,?,?,?)',
    [name, email, phone, message],
    (err, result) => {
      if (err) {
        console.log('DB Error:', err);
        return res.status(500).json({
          success: false,
          error: err.message
        });
      }

      console.log('Inserted ID:', result.insertId);

      res.json({
        success: true,
        message: 'Enquiry submitted successfully'
      });
    }
  );
});
app.get('/', (req, res) => {
  res.send('Backend Working');
});
app.get('/api/enquiries', (req, res) => {
  db.query(
    'SELECT * FROM enquiries',
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.json(results);
    }
  );
});
app.delete('/api/enquiries/:id', (req, res) => {
  db.query(
    'DELETE FROM enquiries WHERE id = ?',
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ success: true });
    }
  );
});
app.use(
  express.static(
    path.join(__dirname, "../dist")
  )
);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../dist/index.html")
  );
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});