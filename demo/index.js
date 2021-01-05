const http = require('http');
const qs = require('querystring');

const server = http.createServer(function(req, res) {
  let body = '';
  req.on('data', function(chunk) {
    body += chunk;
  });
  req.on('end', function(err) {
    if (err) {
      console.log( err );
    }
    res.writeHead(200);
    res.end('Done');
    console.log( qs.parse(body).name || '' );
  });
})

server.listen(3001, function() {
  console.log( 'port 3001 3001' );
})
