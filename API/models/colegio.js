var oMyConnection = require('../DB');
var path = require('path');
const fs = require('fs');
var jwt = require('./jwt');

module.exports = {

ReadComprobantes: function (oData, oResponse) {
    var sSQLRead = 'CALL usp_get_colegio_comprobantes_by_id(?)';
    var data = [oData.account_id];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if( oRows[0].length === 0)
      {

        oResponse.write(JSON.stringify(0));
        oResponse.end();
         console.log('error No existe');
      }
      else
      {
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
        }
      }
    });
  },

ReadComprobantesPdf: function(req, res) {
      res.sendFile(path.resolve(__dirname,'../files/'+req.body.filename));
    },
    
ReadUser: function (oData, oResponse) {
    var sSQLRead = 'CALL usp_get_colegio_alumnos_ctas_by_id(?)';
    var data = [oData.account_id];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if( oRows[0].length === 0)
      {
        oResponse.write(JSON.stringify(oError));
        oResponse.end();
        console.log('error No existe');      
      }
      else
      {
        if(oError) {
          oResponse.write(JSON.stringify(oError));
          oResponse.end();
          console.log('error', oError);
        } else {
          oResponse.write(JSON.stringify(oRows[0][0]));
          oResponse.end();
        }
      }
    });
  },

LogIn: function (oData, oResponse) {
    var sSQLRead = 'CALL usp_get_colegio_alumnos_ctas_by_id(?)';
    var data = [oData.account_id];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if( oRows[0].length === 0)
      {
        oResponse.write(JSON.stringify(oError));
        oResponse.end();
         console.log('error No existe');
      }
      else
      {
        if(oError) {
          oResponse.write(JSON.stringify({
            error: true,
            error_object: oError
          }));
          oResponse.end();
          console.log('error Buscar Usuario para login', oError);
        } else {
           console.log('ecolan id: ', oRows[0][0].id_cta);
             var id = oRows[0][0].id;
          if(id > 0) {
            var sSQLRead = 'CALL usp_create_login_log(?,?,?)';
            var fecha = new Date();
            var data = [id, oData.servicio_id, fecha];
            var oResp = oRows;
            oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
              if(oError) {
                oResponse.write(JSON.stringify({
                  error: true,
                  error_object: oError
                }));
                oResponse.end();
                console.log('error Login', oError);
              } else {
                let data = {};
                let user = oResp[0][0];
                let servicio_id = oData.servicio_id;
                let token = jwt.generateToken(user, servicio_id);
                data = {
                  user: user,
                  token: token
                }
                oResponse.write(JSON.stringify(data));
                oResponse.end();
                console.log('Logeado');
              }
            });
          } else {
            oResponse.write(JSON.stringify(0));
            oResponse.end();
            console.log('No Logeado');
          }
        }
      }
    });
  },

  AddEmail: function(oData, oResponse) {  
      var sSQLCreate = "CALL usp_create_colegio_alumnos_ctas_email(?,?)";
      var data = [oData.account_id, oData.email];
    oMyConnection.query(sSQLCreate, data, function(oError, oRows, oCols) {
    if(oError) {
      oResponse.write(JSON.stringify({
        error: true,
        error_object: oError
      }));
      oResponse.end();
       console.log('error', oError);       
    } else {
         console.log('actualizado');
         oResponse.write(JSON.stringify(0));
         oResponse.end();    
      }    
    });
  },

  ReadEmails: function (oData, oResponse) {
    var sSQLRead = 'CALL usp_get_colegio_alumnos_ctas_email_by_id(?)';
    var data = [oData.account_id];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if( oRows[0].length === 0)
      {
        oResponse.write(JSON.stringify(oError));
        oResponse.end();
        console.log('error No existe');      
      }
      else
      {
        if(oError) {
          oResponse.write(JSON.stringify(oError));
          oResponse.end();
          console.log('error', oError);
        } else {
          oResponse.write(JSON.stringify(oRows[0]));
          oResponse.end();
        }
      }
    });
  },

  UpdateEmail: function (oData, oResponse) {
    var sSQLRead = 'CALL usp_update_colegio_alumnos_ctas_email_by_id(?,?,?,?)';
    var data = [oData.email_id, oData.account_id, oData.email, oData.activo];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if(oError) {
        oResponse.write(JSON.stringify(oError));
        oResponse.end();
        console.log('error', oError);
      } else {
        oResponse.write(JSON.stringify(0));
        oResponse.end();
      }
    });
  },

  UpdateUser: function (oData, oResponse) {
    var sSQLRead = 'CALL usp_update_colegio_alumnos_cta_by_id(?,?)';
    var data = [oData.account_id, oData.via_mail];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if(oError) {
        oResponse.write(JSON.stringify(oError));
        oResponse.end();
        console.log('error', oError);
      } else {
        oResponse.write(JSON.stringify(0));
        oResponse.end();
      }
    });
  },
}