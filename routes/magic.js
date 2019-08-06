var express = require('express');
var router = express.Router();

router.get('/dinner-decider', function(req, res, next){
	var messages = [
		{message: "BBQ- Try, Blue Oak BBQ! Mid City", tone: "bbq", img: "/images/bbq.png"},
		{message: "Chinese- Try, Dian Xin! Downtown!", tone: "chinese", img: "/images/chinese.png" },
		{message: "Mexican- Try, Barracuda! Tchoup", tone: "mexican", img: "/images/mexican.png", },
		{message: "Southern- Try, Gus' World Famous Fried Chicken! Downtown", tone: "southern", img: "/images/southern.png" },
		{message: "Cuban- Try, Que Rico Cuban Cafe! Uptown", tone: "cuban", img: "/images/cuban.png" },
		{message: "Italian- Try, Oak Oven! Jefferson", tone: "italian", img: "/images/italian.png" },
		{message: "Indian- Try, Saffron Nola! Uptown", tone: "indian", img: "/images/indian.png" },
		{message: "Japanese- Try, Shogun! Metairie", tone:"japanese", img: "/images/japanese.png" }
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
