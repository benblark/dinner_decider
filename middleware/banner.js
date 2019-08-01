module.exports = function(request, response, next){
	var banners = { truthSeeker: false, quizmaster: false};

	if (request.query.ref && request.query.ref === 'truthseeker'){
  		banners.truthSeeker = true;
	}else if(request.query.ref && request.query.ref === 'quizmaster'){
  		banners.quizMaster = true;
	}

	response.locals.banners = banners;
	
	next();
};


