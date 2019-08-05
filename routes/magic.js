var express = require('express');
var router = express.Router();

router.get('/dinner-decider', function(req, res, next){
	var messages = [
		{message: "BBQ", tone: "bbq"},
		{message: "Chinese", tone: "chinese"},
		{message: "Mexican", tone: "mexican"},
		{message: "Southern", tone: "southern"},
		{message: "Cuban", tone: "cuban"},
		{message: "Italian", tone: "italian"},
		{message: "Indian", tone: "indian"},
		{message: "Japanese", tone:"japanese"}
	];

  res.locals.message = messages[Math.floor(Math.random() * messages.length)];
  res.locals.name = req.cookies.name;
  res.locals.question = req.cookies.question;

  res.render('magic/dinner-decider');
});

router.get('/question', function(req, res, next){
	res.clearCookie('question');
	res.render('magic/question' , {question: null, name: req.cookies.username});
});

router.post('/question', function(req, res, next){
	res.cookie('name', req.body.username);
	res.cookie('question', req.body.question);
	//res.render('magic/question', {question: req.body.question, name: req.body.name});
	res.redirect('/magic/dinner-decider');
});	

module.exports = router;
