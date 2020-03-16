const oMyConnection = require('../DB'),
      jwt = require('./jwt');
let oRespData = {};

module.exports = {

  SignIn: function (oData, oResponse) {
    let sSQLRead = 'CALL usp_get_login_user(?,?)';
    let data = [oData.user, oData.pass];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if(oError) {
        oRespData = {
          error: true,
          error_object: oError
        };
      }
      else
      {
        if( oRows[0].length === 0)
        {
          oRespData = {
            error: true,
            error_object: oError
          };
        }
        else
        {       
          let user = oRows[0];
          let token = jwt.generateToken(user);
          data = {
            token: token
          }
          oRespData = {
            error: false,
            error_object: null,
            data: data
          };
        }
      }
      oResponse.write(JSON.stringify(oRespData));
      oResponse.end();  
    });
  },
}