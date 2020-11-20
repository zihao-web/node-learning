module.exports = function() {
  return function(req, res, next) {
    next();
    const url = req.url;
    req.query = {}
    if (url.indexOf('?') !== -1) {
      var queryStr = url.split('?')[1];
      if (queryStr.indexOf('&') === -1) {
        let [key, value] = queryStr.split('=');
        req.query[key] = value;
      } else {
        queryStr.split('&').forEach(item => {
          let [key, value] = item.split('=');
          req.query[key] = value;
        })
      }
    }
    console.log( req.query);
  }
}