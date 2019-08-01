module.exports = function (request, response, next) {
    if (request.path === '/login' || request.path === '/') {
      return next(); 
  }

  var authentication = request.session.authentication || {};
    if (!authentication.username || !authentication.password) {
      return response.redirect('/login');
  }

  response.locals.currentUser = authentication;

  next();

}

