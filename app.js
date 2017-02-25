var express = require('express');
var bodyParser = require('body-parser');

var flipText = require('flip-text');

var app = new express();
app.set('views', './views');
app.set('view engine', 'jade');
app.use('/public',express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res, next) {
  res.send("App started")  
});
app.get('/index', function(req, res, next) {
  const inputStr = req.query.inputText || '';
  const outputStr = flipText(inputStr);
  res.render('index', {inputStr: inputStr, outputStr: outputStr});
});
console.log("[Info] App starting")
app.listen(3000, function() {
  console.log("[Info] App started")
});
