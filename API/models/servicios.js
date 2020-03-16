var oMyConnection = require('../DB');
// var mysql = require('mysql');

// var oMyConnection = mysql.createConnection({
//    host: 'localhost',
//    user: 'ecolanweb',
//    password: 'ecolanweb',
//    database: 'ecolanweb'
//    //port: 3306
// });

module.exports = { 

  Read: function (oResponse) {
    //var sSQLRead = "SELECT * FROM business";
    var sSQLRead = 'CALL usp_get_servicios';

    oMyConnection.query(sSQLRead, function(oError, oRows, oCols) {
      if(oError) {
        oResponse.write(JSON.stringify({
          error: true,
          error_object: oError
        }));
        oResponse.end();
        console.log('error', oError);  
      } else {
        oResponse.write(JSON.stringify(oRows[0]));
        oResponse.end();
        console.log('servicios Leidos');             
      }    
    });    
  }
}
