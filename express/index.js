var express = require('express');
var router = require('./router');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', { layout: false });

console.log( app.set('views') );

router(app);

app.listen(3000, () => {
  console.log( 'port: 3000' );
})