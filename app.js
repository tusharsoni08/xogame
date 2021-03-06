
var fs = require('fs');
var express = require('express');
var app = express();
var server = app.listen(process.env.PORT);
var io = require('socket.io').listen(server);

// index.html
app.get('/', function(req, res) {
    fs.createReadStream('index.html').pipe(res);
});
//app.disable('x-powered-by');
// sockets
io.sockets.on('connection', function(client){


    client.on('message:client', function(data) {
        client.broadcast.emit('message:server', {message: data.message, transdata: data.transdata});
    });

});
