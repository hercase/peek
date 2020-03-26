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
	database: 'peek'
>>>>>>> ae4d5a7bd3661d2a1995bb9e478cd9d8206f9c40
}

oMyConnection = mysql.createPool(db_config); 

module.exports = oMyConnection;
