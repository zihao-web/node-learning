const { searchTwitter } = require('../service/search');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index');
  })

  app.get('/search', (req, res) => {
    searchTwitter(req.query.q, function(err, tweets) {
      if (err) return next(err);
      res.render('search', {
        result: tweets,
        search: req.query.q,
      });
    })
  })
}