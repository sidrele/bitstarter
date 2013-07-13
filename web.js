var express = require('express');

var app = express.createServer(express.logger());
var content = fs.readFile('index.html');

app.get('/', function(request, response) {
  response.send('Hello World! by Sid');
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
