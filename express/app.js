const express = require("express");
const path = require("path"); // Path builder
const bodyParser = require("body-parser"); //process data
const Joi = require("joi"); // Validate data from request

const app = express(); // Instance of express

// middleWares
// This middleware will turn all the content of the "static" folder and will show it in the explorer as "public"
app.use("/public", express.static(path.join(__dirname, "static")));
// This middelware parses the data and attaches it to our request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve a static file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

// serve a static file
app.get("/send_json", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index_post_json.html"));
});

//Define a route
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get("/example", (req, res) => {
  res.send("Hitting the example route");
});

// Route parameters
// Request.params = the ones separated by /
// Request query = the ones passed by get ?
app.get("/example/:name/:age", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  response.send(req.params.name + ":" + req.params.age);
});

// Handle a post request (url encoded data)
app.post("/post", (req, res) => {
  console.log(req.body);
  // Rules that we want for validate the data
  // Set the rules (blueprint)
  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(5).max(10).required(),
  });

  const validation = schema.validate(req.body);
  res.send(validation);
});

// Handle a post request (JSON)
app.post("/post_json", (req, res) => {
  console.log(req.body);
  // database work here

  // database work done

  res.json({ success: true });
});

// set the port
app.listen(3000);
