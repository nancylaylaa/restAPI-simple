const mysql = require("mysql");

const db = mysql.createConnection({
   host: "34.30.130.69",
   user: "root",
   password: "laylana",
   database: "capstone_v1",
});

module.exports = db;
