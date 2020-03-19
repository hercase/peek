var mysql = require('mysql');
var oMyConnection;

var db_config = {
	connectionLimit: 100,
	host: 'localhost',
	user: 'peek',
   password: 'P33k',
   database: 'peek'
}
/*
	host: 'localhost',
	user: 'coopset',
   password: 'c00ps3t',
   database: 'ecoapp'
	 */
oMyConnection = mysql.createPool(db_config); 

module.exports = oMyConnection;
