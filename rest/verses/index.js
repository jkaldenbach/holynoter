var router = require('express').Router()
var request = require('request')
var himalaya = require('himalaya')

process.env.BIBLES_ORG_API_KEY = 'Nc3ti6XgBZ61APgro2m3ZLfO8pw8Svu1GylrodZr'

router.get('/', function(req, res, next) {
  //conver to: http://bibles.org/pages/api/documentation/verses
  console.log(req.query)
  var query = {}
  query['version'] = req.query.v || 'eng-ESV'
  query['q[]'] = req.query.p
  var url = [
    'https://',
    process.env.BIBLES_ORG_API_KEY,
    ':@bibles.org/v2/passages.js'
  ].join('')
  console.log(url);
  request({
    url: url,
    qs: query,
    // auth: {
    //   user: process.env.BIBLES_ORG_API_KEY,
    //   pass: 'X'
    // }
  }, function(err, resp, body) {
    console.log(err)
    try {
      body = JSON.parse(body)
    }
    catch (e) {
      res.json([])
      return
    }
    console.log('body', body.response.search.result);
    if (body.response.search.result.passages.length) {
      var text = body.response.search.result.passages[0].text
      console.log(text);
      var passageJSON = himalaya.parse(text)
      console.log(passageJSON);
      res.json(passageJSON);
    } else {
      res.json([]);
    }
    // res.send(body.response.search.result.passages)
  })
})

router.get('/getbible', function(req, res, next) {
  request({
    url: 'https://getbible.net/json',
    qs: req.query
  }, function(err, resp, body) {
    console.log(err, body)
    res.send(body)
  })
})

router.get('/esv', function(req, res, next) {
  req.query.key = 'TEST'
  request({
    url: 'http://www.esvapi.org/v2/rest/',
    qs: req.query
  }, function(err, resp, body) {
    console.log(err, body)
    res.send(body)
  })
})

module.exports = router;
