var express = require('express');

var app = express.createServer(express.logger());

var res = fs.readFileSync("index.html");

app.get('/', function(request, response) {
  response.send(res.toString("utf8");

//app.get('/', function(request, response) {
 // response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
