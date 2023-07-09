const express = require("express");

let app = express();

app.use(express.static('public'))
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});


module.exports = app;
