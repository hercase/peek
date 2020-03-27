const oMyConnection = require('../DB');
    //jwt = require('./jwt');
let oRespData = {};

module.exports = {


  ReadUsersNroNom: function (oData, oResponse) {
    let sSQLRead = 'CALL usp_get_tele_linea_by_num_razon(?)';
    let data = [oData.value];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if(oError || oRows[0].length === 0) {
        oRespData = {
          error: true,
          error_object: oError
        };
      }
      else
      {
        oRespData = {
          error: false,
          error_object: null,
          data: oRows[0]
        };
      }
      oResponse.write(JSON.stringify(oRespData));
      oResponse.end();  
    });
  },

  ReadUser: function (oData, oResponse) {
    let sSQLRead = 'CALL usp_get_tele_linea_by_id(?)';
    let data = [oData.value];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if(oError || oRows[0].length === 0) {
        oRespData = {
          error: true,
          error_object: oError
        };
      }
      else
      {
        oRespData = {
          error: false,
          error_object: null,
          data: oRows[0]
        };
      }
      oResponse.write(JSON.stringify(oRespData));
      oResponse.end();  
    });
  },

ReadDatosTecnicos: function (oData, oResponse) {
    let sSQLRead = 'CALL usp_get_datos_tecnicos_by_linea_id(?)';
    let data = [oData.value];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if(oError || oRows[0].length === 0) {
        oRespData = {
          error: true,
          error_object: oError
        };
      }
      else
      {
        oRespData = {
          error: false,
          error_object: null,
          data: oRows[0][0]
        };
      }
      oResponse.write(JSON.stringify(oRespData));
      oResponse.end();  
    });
  },

  ReadCablePares: function (oData, oResponse) {
  
    let sSQLRead = 'CALL usp_get_cable_pares_by_dt(?)';
    let data = [oData.value];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if(oError || oRows[0].length === 0) {
        oRespData = {
          error: true,
          error_object: oError
        };
      }
      else
      {
        oRespData = {
          error: false,
          error_object: null,
          data: oRows[0][0]
        };
      }
      oResponse.write(JSON.stringify(oRespData));
      oResponse.end();  
    });
  },

  ReadPorts: function (oData, oResponse) {
  
    let sSQLRead = 'CALL usp_get_tele_port_by_dt(?)';
    let data = [oData.value];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if(oError || oRows[0].length === 0) {
        oRespData = {
          error: true,
          error_object: oError
        };
      }
      else
      {
        oRespData = {
          error: false,
          error_object: null,
          data: oRows[0][0]
        };
      }
      oResponse.write(JSON.stringify(oRespData));
      oResponse.end();  
    });
  },


  ReadReclamosZona: function (oResponse) {
  
    let sSQLRead = 'CALL usp_get_tele_reclamos_by_zona';
    //var data = [oData.account_id];
    oMyConnection.query(sSQLRead, function(oError, oRows, oCols) {
      if(oError || oRows[0].length === 0) {
        oRespData = {
          error: true,
          error_object: oError
        };
      }
      else
      {

        oRespData = {
          error: false,
          error_object: null,
          data: oRows[0]
        };
      }
      oResponse.write(JSON.stringify(oRespData));
      oResponse.end();  
    });
  },

  ReadReclamosLinea: function (oData, oResponse) {
  
    let sSQLRead = 'CALL usp_get_tele_reclamos_by_linea(?)';
    let data = [oData.value];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if(oError || oRows[0].length === 0) {
        oRespData = {
          error: true,
          error_object: oError
        };
      }
      else
      {
        oRespData = {
          error: false,
          error_object: null,
          data: oRows[0]
        };
      }
      oResponse.write(JSON.stringify(oRespData));
      oResponse.end();  
    });
  },

  ReadOrdenLinea: function (oData, oResponse) {
  
    let sSQLRead = 'CALL usp_get_tele_orden_by_linea(?)';
    let data = [oData.value];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if(oError || oRows[0].length === 0) {
        oRespData = {
          error: true,
          error_object: oError
        };
      }
      else
      {
        oRespData = {
          error: false,
          error_object: null,
          data: oRows[0]
        };
      }
      oResponse.write(JSON.stringify(oRespData));
      oResponse.end();  
    });
  },

  ReadServiciosLinea: function (oData, oResponse) {
  
    let sSQLRead = 'CALL usp_get_tele_servicios_by_linea(?)';
    let data = [oData.value];
    oMyConnection.query(sSQLRead, data, function(oError, oRows, oCols) {
      if(oError || oRows[0].length === 0) {
        oRespData = {
          error: true,
          error_object: oError
        };
      }
      else
      {
        oRespData = {
          error: false,
          error_object: null,
          data: oRows[0]
        };
      }
      oResponse.write(JSON.stringify(oRespData));
      oResponse.end();  
    });
  },
}