import axios from 'axios';

// CAMBIAR EL PUERTO Y LA IP DEPENDIENDO DONDE ESTA LA API
//baseURL: `http://192.168.77.13:4000/`,
export const api =  axios.create({
  baseURL: `http://192.168.0.59:4000/`,
  headers : { 'Content-Type': 'application/json' }
});