var express = require('express');
var router = express.Router();
var Sentencer = require('sentencer');

/* GET home page. */
router.get('/', function(req, res, next) {
  var lg = Sentencer.make("This sentence has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it.");
  res.render('index', { out: lg });
});

module.exports = router;
