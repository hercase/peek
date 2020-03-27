var mysql = require('mysql');
var oMyConnection;

var db_config = {
	connectionLimit: 100,
	host: 'localhost',
	user: 'peek',
   	password: 'P33k',
   	database: 'autogestion'
}

oMyConnection = mysql.createPool(db_config); 

module.exports = oMyConnection;
