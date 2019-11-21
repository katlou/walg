var express = require('express');
var router = express.Router();
var Sentencer = require('sentencer');

var people = ["Lara", "Kat", "Sophie", "Chloe", "Sarah", "Nancy", "Rob"];

Sentencer.configure({
  actions: {
    person: function() {
      return people[Math.floor(Math.random() * 7)];
    }
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var lg = Sentencer.make("{{ person }} has {{ a_noun }} and {{ an_adjective }} {{ noun }}.");
  res.render('index', { out: lg });
});

module.exports = router;
