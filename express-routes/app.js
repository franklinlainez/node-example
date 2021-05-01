const express = require("express");

const app = express(); // Instance of express
// next, is the way to tell express that we finished the processing
// We can specify a route to work with this middleWare
app.use("/example", (req, res, next) => {
  req.lol = "lol";
  next();
});

const people = require("./routes/people");
app.use("/people", people);

app.get("/", (req, res) => {
  res.send("hola mundo");
});

// set the port
app.listen(3000);
