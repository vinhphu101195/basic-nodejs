var http = require("http");
var fs = require("fs");

//create server
var server = http.createServer(function(req, res) {
  console.log("requesr was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  var myReadStream = fs.createReadStream(__dirname + "/json");
  var myobj = {
    name: "Phu",
    job: "student",
    age: 24
  };
  res.end(JSON.stringify(myobj));
});

server.listen(3000, "127.0.0.1");
console.log("hi, now listening to port 3000");
