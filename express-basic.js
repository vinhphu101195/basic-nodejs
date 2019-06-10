var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("this is the homepage");
});

app.get("/contact", function(req, res) {
  res.send("this is the contact page");
});

app.get("/profile/:id", function(req, res) {
  res.send("you request to see profile with the id of " + req.params.id);
});

app.listen(3000);
