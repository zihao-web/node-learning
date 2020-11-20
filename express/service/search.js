// const { request } = require('express');
const request = require('request');

module.exports = {
  searchTwitter(query, fn) {
    const url = `http://search.twitter.com/search.json?q=${query}`;
    request.get(url, (res) => {
      console.log( res );
      if (res.body && Array.isArray(res.body.results)) {
        return fn(null, res.body.results);
      }
      fn(new Error('Bad twitter'));
    });
  }
}