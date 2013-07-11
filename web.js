var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());

var content;
fs.readFile("index.html",'utf8',function(err, data){
    if (err) throw err;
    //response.send(data);   	
    //console.log(data);
    content = data;
});


app.get('/',function(request, response) {
    response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
