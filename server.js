const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./connection.js");
const response = require("./response");

// routes / URL / endpoint utama kita methor GET
app.use(bodyParser.json());

// localhost:3000
app.get("/", (req, res) => {
   const sql = "SELECT * FROM information";
   db.query(sql, (error, result) => {
      //hasil data dari mysql
      response(200, result, "get all information", res);
   });
});

// localhost:3000/find?name=jeruk
app.get("/find", (req, res) => {
   const sql = `SELECT benefit FROM information WHERE name = ${req.query.name}`;
   db.query(sql, (error, result) => {
      response(200, result, "find benefit", res);
   });
});

// localhost:3000/buah/jeruk
app.get("/buah/:name", (req, res) => {
   const name = req.params.name;
   response(200, `spesifik buah dengan nama ${name}`, "params", res);
});

app.post("/body", (req, res) => {
   console.log({ requestFromOutside: req.body });
   res.send("BERHASIL NGEPOST!");
});

// server:3000/
app.listen(port, () => {
   console.log(`Server berhasil berjalan pada port ${port}`);
});
