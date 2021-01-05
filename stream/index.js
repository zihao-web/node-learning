const http = require('http');
const CountStream = require('./countStream');
const countStream = new CountStream('book');

http.get('http://www.manning.com', function(res) {
  res.pipe(countStream);
})

countStream.on('total', function(count) {
  console.log( count );
})