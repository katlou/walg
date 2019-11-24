var express = require('express');
var router = express.Router();
var Sentencer = require('sentencer');

var people = ["Lara", "Kat", "Sophie", "Chloe", "Sarah", "Nancy", "Rob"];
var places = require('../public/data/places.json');

Sentencer.configure({
  actions: {
    person: function() {
      return people[Math.floor(Math.random() * 7)];
    },
    place: function() {
      return places.places[Math.floor(Math.random() * places.places.length)];
    }
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var lg = "Uh-oh something went wrong..."
  switch (Math.floor(Math.random() * 2) + 1) {
    case 1:
      lg = Sentencer.make("{{ person }} has {{ a_noun }} and {{ an_adjective }} {{ noun }}.");
      break;
    case 2:
      lg = Sentencer.make("There are no {{ noun }}s in {{ place }}.");
      break;
  }
  res.render('index', { out: lg });
});

module.exports = router;
