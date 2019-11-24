var express = require('express');
var router = express.Router();
var Sentencer = require('sentencer');

var people = ["Lara", "Kat", "Sophie", "Chloe", "Sarah", "Nancy", "Rob"];
var places = require('../public/data/places.json');
var verbs = require('../public/data/verb.json');
var adjs = require('../public/data/adjs.json');
var times = require('../public/data/time.json');
var isms = require('../public/data/art.json');

Sentencer.configure({
  actions: {
    person: function() {
      return people[Math.floor(Math.random() * 7)];
    },
    place: function() {
      return places.places[Math.floor(Math.random() * places.places.length)];
    },
    verb_present: function() {
      return verbs.verbs[Math.floor(Math.random() * verbs.verbs.length)].present;
    },
    verb_past: function() {
      return verbs.verbs[Math.floor(Math.random() * verbs.verbs.length)].past;
    },
    adj: function() {
      return adjs.adjs[Math.floor(Math.random() * adjs.adjs.length)];
    },
    time: function() {
      return times.time[Math.floor(Math.random() * times.time.length)];
    },
    number: function() {
      return Math.floor(Math.random() * 100) + 1;
    },
    art: function() {
      return isms.isms[Math.floor(Math.random() * isms.isms.length)];
    }
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var lg = "Uh-oh something went wrong..."

  function sentenceType() {
    var types = [1, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 8, 9, 9, 10, 10];
    return types[Math.floor(Math.random() * types.length)];
  }

  // switch (Math.floor(Math.random() * 3) + 1) {
  switch (sentenceType()) {
    case 1:
      lg = Sentencer.make("{{ person }} has {{ a_noun }} and {{ an_adjective }} {{ noun }}.");
      break;
    case 2:
      lg = Sentencer.make("There are no {{ noun }}s in {{ place }}.");
      break;
    case 3:
      lg = Sentencer.make("{{ person }} would rather {{ verb_present }} than {{ verb_present }}.");
      break;
    case 4:
      lg = Sentencer.make("{{ person }} has never {{ verb_past }} before.");
      break;
    case 5:
      lg = Sentencer.make("{{ person }} doesn't {{ verb_present }} very well.");
      break;
    case 6:
      lg = Sentencer.make("All of the {{ nouns }} in {{ place }} are {{ adj }}.");
      break;
    case 7:
      lg = Sentencer.make("People named {{ person }} have {{ nouns }}.");
      break;
    case 8:
      lg = Sentencer.make("None of the {{ nouns }} in {{ place }} are {{ adj }}.");
      break;
    case 9:
      lg = Sentencer.make("It takes {{ number }} {{ time }}s for {{ person }} to {{ verb_present }} {{ nouns }}.");
      break;
    case 10:
      lg = Sentencer.make("{{ person }} likes {{ art }} from {{ place }} more than {{ art }} from {{ place }}.");
      break;
  }
  res.render('index', { out: lg });
});

module.exports = router;
