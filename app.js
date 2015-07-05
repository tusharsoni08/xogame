

var fs = require('fs');
var express = require('express');
var app = express();
var port = process.env.PORT || 443;
var server = app.listen(port);
var io = require('socket.io').listen(server);

// index.html 
app.get('/', function(req, res) {
    fs.createReadStream('index.html').pipe(res);
});
app.disable('x-powered-by');
// sockets
io.sockets.on('connection', function(client){

    
    client.on('message:client', function(data) {
        client.broadcast.emit('message:server', {message: data.message, transdata: data.transdata});
    });

});
