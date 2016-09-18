var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jobcard Portal' });
});

/* GET Contact page*/
router.get('/contact', function(req, res, next){
	res.render('contact', {contact:"987765433234"});
});

/* GET Test page*/
router.get('/test',function(req, res, next){
	res.render('test', {title:"this is my first nodejs page"});
})

module.exports = router;
