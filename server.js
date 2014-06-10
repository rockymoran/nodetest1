var express = require('express');
var app = express();

app.get('/ping', function(req,res) {
	res.send({ping:'hello, this is server. i am life.'});
});

app.get('/ping/:id', function(req,res) {
	res.send({ping:'hello, this is server and I am got '+req.params.id});
});

app.listen(8080);
console.log('Listening on port 8080');