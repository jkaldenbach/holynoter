var express = require('express')
var app = express()
var path = require('path')

var verses = require('./rest/verses')

app.set('view engine', 'html')

app.use(function(req, res, next) {
  var d = new Date()
  console.log(req.method, req.path, d.toUTCString())
  next()
})

app.use('/static', express.static('www'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use('/rest/verses', verses)

app.listen(3003, function(err) {
  if (err) console.log(err)
  console.log('server listening on port 3003')
})
