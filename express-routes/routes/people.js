const express = require("express");
const route = express.Router();

// Using a middleWare

route.use((req, res, next) => {
  console.log("se uso");
  next();
});

route.get("/", (req, res) => {
  res.send("estas en el /");
});

route.get("/example", (req, res) => {
  res.send("estas en el /example");
});

module.exports = route;
