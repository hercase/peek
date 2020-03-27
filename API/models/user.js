const oMyConnection = require('../DB'),
      jwt = require('./jwt');
let oRespData = {};

module.exports = {

  SignIn: function (oData, oResponse) {
    let sSQLRead = 'CALL usp_get_login_user(?)';
    let data = [oData.value];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if(oError || oRows[0].length === 0) {
        console.log('Failed UID: ' + oData.value)
        oRespData = {
          error: true,
          error_object: oError
        };
      }
      else
      {       
        let token = jwt.generateToken(oData.value);
        let user = oRows[0][0].username;
        console.log('Logged: ' + user)
        data = {
          token: token
        }
        oRespData = {
          error: false,
          error_object: null,
          data: data
        };
      }
      oResponse.write(JSON.stringify(oRespData));
      oResponse.end();  
    });
  },
}