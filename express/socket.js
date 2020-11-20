var bodyParser = require('body-parser');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(require('express').static(__dirname + '/public'));

io.on('connection', socket => {
  console.log( 'some ok' );

  socket.on('join', function(name) {
    socket.nickname = name;
    socket.broadcast.emit('announcement', `${name} joined the chat.`);
  })

  socket.on('text', function(msg, fn) {
    socket.broadcast.emit('text', socket.nickname, msg);
    fn(Date.now());
  })
});

server.listen(3000);
console.log( 'port 3000' );