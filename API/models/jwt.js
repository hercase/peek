const jwt = require('jsonwebtoken'),
			config = require('../config/config'),
			key_token = config.llave;
    

module.exports = {

	generateToken: function (user) {
	  let u = {
	   	username: user.username
	  }
	  return token = jwt.sign(u, key_token, {
	    expiresIn: 60 * 60 * 8 // expires in 8 hours
	    //expiresIn: 40 // expires in 1 hours
	  })
	},


	validateToken: function(req, res, next) {
		  let token = req.headers['authorization']
		  if (!token) {
		    res.status(401).send({
		      ok: false,
		      message: 'Toket inválido'
		    })
		  }
		 
		  token = token.replace('Bearer ', '');
		  jwt.verify(token, key_token, function(err, token) {
		    if (err) {
		    	console.log('err',err);
		      return res.status(401).send({
		        ok: false,
		        message: 'Tokett inválido'
		      });
		    } else {
		      req.token = token;
		      next();
		    }
		  });
		}
}