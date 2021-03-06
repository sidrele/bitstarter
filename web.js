var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var content = new Buffer(256);
content = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(content.toString());
//  response.send(content.toString());;
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
