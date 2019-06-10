var express = require("express");

var app = express();

app.set("view engine", "ejs");

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/contact", function(req, res) {
  res.send("this is the contact page");
});

// app.get("/profile/:id", function(req, res) {
//   res.send("you request to see profile with the id of " + req.params.id);
// });

app.get("/profile/:name", function(req, res) {
  var data = {
    age: 24,
    job: "student",
    hobbie: ["eating", "gym", "basketball"]
  };
  res.render("profile", { person: req.params.name, data: data });
});

app.listen(3000);
