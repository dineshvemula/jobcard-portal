var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jobcard Portal' });
});

/* GET Contact page*/
router.get('/contact', function(req, res, next){
	res.render('contact', {contact:"987765433234"})
})

module.exports = router;
