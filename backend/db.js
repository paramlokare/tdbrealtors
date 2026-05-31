const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Nokia@7230',
  database: 'luxurybuilders'
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('MySQL Connected');
  }
});

module.exports = db;