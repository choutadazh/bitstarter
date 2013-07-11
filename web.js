var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/',function(request, response) {
    var content;
    fs.readFileSync('./index.html',function(err, data){
	if (err) throw err;
	console.log(content.toString('utf8'));
    });
    
    response.set('Content-Type', 'text/html');
    response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
