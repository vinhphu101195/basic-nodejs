var http = require("http");
var fs = require("fs");

//create server
var server = http.createServer(function(req, res) {
  console.log("requesr was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  myReadStream.pipe(res);
  //   res.end("hello Phu");
});

server.listen(3000, "127.0.0.1");
console.log("hi, now listening to port 3000");

// //Readable Stream

// var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + "filename.txt", "utf8");

// myReadStream.on("data", function(chunk) {
//   console.log("new chunk received");
//   console.log(chunk);
// });
