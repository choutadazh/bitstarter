var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

//app.get('/', function(request, response) {
//  response.send('Hello World 2!');
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

app.get('/',function(request, response) {
    var content;
    fs.readFileSync('./index.html', function(err, data){
	if (err) throw err;
	content = data;
	console.log(content);
    });
    response.send(data.toString('ascii'));
});
