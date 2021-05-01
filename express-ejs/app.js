const express = require("express");
const path = require("path"); // Path builder

const app = express(); // Instance of express
app.use("/public", express.static(path.join(__dirname, "static")));
app.set("view engine", "ejs");

// serve a rendered view with data
app.get("/:userQuery", (req, res) => {
  const r = path.join(__dirname, "views", "index");
  res.render(r, {
    data: {
      userQuery: req.params.userQuery,
      searchResults: ["book1", "book2", "book3"],
      loggedIn: true,
      userName: "lolcin",
    },
  });
});

// set the port
app.listen(3000);
