const http = require('http');
const qs = require('querystring');

function send(name) {
  http.request({
    // host: '127.0.0.1',
    host: 'http://search.twitter.com',
    port: 80,
    url: '/search.json?q=blue+angels',
    method: 'get'
  }, function(res) {
    console.log( res.data );
    res.setEncoding('utf8');
    res.on('end', function() {
    });
    console.log( '\n request complete' );
    process.stdout.write('\n your name: ');
  }).end(qs.stringify({ name }));
}

process.stdout.write('\n your name: ');
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(name) {
  send(name.replace('\n', ''));
});