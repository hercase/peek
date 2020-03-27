const api = require('express').Router(),
  telefonia = require('../models/telefonia'),
  users = require('../models/user'),
  jwt = require('../models/jwt');

api.post('/sign_in', function(oReq, oRes) {
  let oData = {};
  
  oData = oReq.body;

  users.SignIn(oData, oRes);
});

//jwt.validateToken,
api.post('/read_users', jwt.validateToken, function(oReq, oRes) {
   let oData = {};
   oData = oReq.body; 
   telefonia.ReadUsers(oData, oRes);
});

api.post('/read_users_nro_nom', jwt.validateToken, function(oReq, oRes) {
  let oData = {};
  oData = oReq.body; 
  telefonia.ReadUsersNroNom(oData, oRes);
 
});

api.post('/read_datos_tec', jwt.validateToken, function(oReq, oRes) {
  let oData = {};
  oData = oReq.body;
  telefonia.ReadDatosTecnicos(oData, oRes);
});

api.post('/read_cable_pares', jwt.validateToken, function(oReq, oRes) {
  let oData = {};

  oData = oReq.body; 
  telefonia.ReadCablePares(oData, oRes);
});

api.post('/read_ports', jwt.validateToken, function(oReq, oRes) {
  let oData = {};

  oData = oReq.body; 
  telefonia.ReadPorts(oData, oRes);
});

api.post('/read_reclamos_zona', jwt.validateToken, function(oReq, oRes) {

  telefonia.ReadReclamosZona(oRes);
});

api.post('/read_reclamos_linea', jwt.validateToken, function(oReq, oRes) {
  let oData = {};

  oData = oReq.body; 
  telefonia.ReadReclamosLinea(oData, oRes);
});

api.post('/read_orden_linea', jwt.validateToken, function(oReq, oRes) {
  let oData = {};

  oData = oReq.body; 
  telefonia.ReadOrdenLinea(oData, oRes);
});

api.post('/read_servicios_linea', jwt.validateToken, function(oReq, oRes) {
  let oData = {};

  oData = oReq.body; 
  telefonia.ReadServiciosLinea(oData, oRes);
});

api.get('/', function(oReq, oRes) {
  //let oData = {};
  oRes.send('Hola soy la Api');

  //oData = oReq.body; 
  //telefonia.ReadServiciosLinea(oData, oRes);
});





module.exports = api;
