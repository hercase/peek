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
	user: 'coopset',
   password: 'c00ps3t',
   database: 'peek'
}
************
	user: 'peek',
   password: 'P33k',
   database: 'peek'

************

	user: 'ecoapp',
   password: '3C0L4N@pp',
	 database: 'ecoapp'
	 */
oMyConnection = mysql.createPool(db_config); 

module.exports = oMyConnection;
