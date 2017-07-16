var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use(express.static('public'));

http.listen(process.env.PORT || 3000, function() {
    console.log('listening on *:' + process.env.PORT);
});

io.on('connection', function(socket) {
    socket.on('addItem', function(data) {
        io.emit('addItem', data);
    });
    socket.on('removeItem', function(data) {
        io.emit('removeItem', data);
    });
    socket.on('disconnect', function() {
        console.log('connection closed');
    });
});
