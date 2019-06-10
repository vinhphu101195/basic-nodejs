var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/contact", function(req, res) {
  res.send("this is the contact page");
});

//query strings
// /contact?dept=marketing&person=joe it will return {dept: marketing, person: joe}
app.get("/contact", function(req, res) {
  res.render("contact", { qs: req.query });
});
// app.get("/profile/:id", function(req, res) {
//   res.send("you request to see profile with the id of " + req.params.id);
// });

app.post("/contact", urlencodedParser, function(req, res) {
  console.log(req.body);
  res.render("contact-success", { data: req.body });
});

app.get("/profile/:name", function(req, res) {
  var data = {
    age: 24,
    job: "student",
    hobbie: ["eating", "gym", "basketball"]
  };
  res.render("profile", { person: req.params.name, data: data });
});

app.listen(3000);
