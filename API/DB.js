var mysql = require('mysql');
var oMyConnection;

var db_config = {
	connectionLimit: 100,
	host: 'localhost',
	user: 'peek',
<<<<<<< HEAD
   	password: 'P33k',
   	database: 'autogestion'
=======
	password: 'P33k',
	database: 'autogestion'
>>>>>>> a99015b7e99459baa1818a6d6c5ae057fda5b660
}

oMyConnection = mysql.createPool(db_config); 

module.exports = oMyConnection;
