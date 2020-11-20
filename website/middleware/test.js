module.exports = function() {
  return function(req, res, next) {
    if (req.url !== '/favicon.ico') {
      console.log( 'aaaa', req.url, req.query, req.method );
    }
    next();
  }
}