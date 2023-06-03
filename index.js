const express = require("express");

let app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);

module.exports = app;
