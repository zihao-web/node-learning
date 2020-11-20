var express = require('express');
var wsio = require('websocket.io');

var app = express();

var ws = wsio.attach(app);

app.use(express.static('public'));

ws.on('connections', function(socket) {
  console.log( socket );
})

app.listen(3001, () => {
  console.log( 'port: 3001' );
});

