<<<<<<< HEAD


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
||||||| merged common ancestors
=======


var fs = require('fs');
var express = require('express');
var app = express();
var server = app.listen(8080,'0.0.0.0');
var io = require('socket.io').listen(server);

// index.html
app.get('/', function(req, res) {
    fs.createReadStream('index.html').pipe(res);
});
app.disable('x-powered-by');
// sockets
io.sockets.on('connection', function(client){

    // when a message comes in from a client, re-emit it from the server to client(s)
    client.on('message:client', function(data) {
        client.broadcast.emit('message:server', {message: data.message, transdata: data.transdata});
    });

});
>>>>>>> 72e858e083ffd9909c7e9ba393edf60d04f09929
