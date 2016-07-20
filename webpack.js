var express = require('express')
var request = require('request')
var router = express.Router()

var webpackServerUrl = 'http://localhost:3004/';

// Proxy all requests through to the webpack server
router.get('/*', function(req, res) {
  request(webpackServerUrl.concat(req.baseUrl, req.url))
  .pipe(res)
});

module.exports = router
