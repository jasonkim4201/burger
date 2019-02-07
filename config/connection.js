// create connection
require('dotenv').config()

const mysql = require("mysql");

let db;

if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.user,
    password: process.env.pass,
    database: "burgers_db"
  });
}

db.connect(error =>{
  if (error) throw error;
  console.log("🍔 connected to the database 🌮");
});

module.exports = db;
