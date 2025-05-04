// db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'sql7.freesqldatabase.com',
  user: 'sql7776142',
  password: 'etSxEQTvi1',
  database: 'sql7776142',
  port: 3306,
});

module.exports = pool;



// const mysql = require('mysql2');

// const db = mysql.createConnection({
//   host: 'sql7.freesqldatabase.com',
//   user: 'sql7776142',
//   password: 'etSxEQTvi1',
//   database: 'sql7776142',
//   port: 3306
// });

// db.connect(err => {
//   if (err) throw err;
//   console.log('Connected to the database.');
// });

// module.exports = db;
