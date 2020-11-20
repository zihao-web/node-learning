var http = require('http');
var fs = require('fs');
var test = require('./middleware/test');
var time = require('./middleware/request-time');
var queryString = require('./middleware/querystring')
var connect = require('connect');

// var server = http.createServer(function(req, res) {
//   res.writeHead(200);
//   res.end('hello');
// })
var server = connect();
// server.use(test());
// server.use(queryString());
// server.use(time({ time: 500 }));

server.use(function(req, res, next) {
  if (req.url === '/') {
    res.writeHead(200);
    res.end('hello');
  }
})

server.listen(3000, function() {
  console.log( 'port 3000' );
});