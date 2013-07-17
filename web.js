var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var content= fs.readFileSync("index.html");
app.get('/', function(request, content.toString("utf8") {
  response.send(content);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
