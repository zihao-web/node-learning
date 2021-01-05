var http = require('http');

const server = http.createServer(function(req, res) {
  if (req.url === '/') {
    res.writeHead(200);
    res.end('hello');
  }

  if (req.url == '/list') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    // res.end("{name:'luke'}");
    res.end({name:'luke'});
  }
})

server.listen(3000, function() {
  console.log( 'port 3000' );
})