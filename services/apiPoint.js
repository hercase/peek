import axios from 'axios';

// CAMBIAR EL PUERTO Y LA IP DEPENDIENDO DONDE ESTA LA API
export const api =  axios.create({
  baseURL: `http://192.168.0.11:4000/`,
  headers : { 'Content-Type': 'application/json' }
});