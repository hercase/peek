var mysql = require('mysql');
var oMyConnection;

var db_config = {
	connectionLimit: 100,
	host: 'localhost',
	user: 'coopset',
   password: 'c00ps3t',
   database: 'ecoapp'
}
/*
	user: 'ecoapp',
   password: '3C0L4N@pp',
	 database: 'ecoapp'
	 */
oMyConnection = mysql.createPool(db_config); 

module.exports = oMyConnection;
