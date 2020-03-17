import { api } from './apiPoint';

export const dataService = {
    getAllLineas,
    getLineas, 
    getReclamosZona,
    getReclamosLinea,
    getDatosTecnicos,
    getCablePares,
    getPorts,
    getOrdenLinea,
    getServiciosLinea,
    getSigIn, 
    getLinea
};

async function getSigIn(user, pass) {
  //let data;
    let req = {
      user: user,
      pass: pass
    }
    await api.post('sign_in', req)
    .then(res => {
      data = res.data;
    })
    .catch((error) => console.warn("fetch error:", error))
    return data;
}

async function getAllLineas() {
    //let res = '';
    let data;
    await api.post('read_users')
    .then(res => {
        data = res.data;
    })
    return data;
}

 async function getLineas(value) {
  let data;
    let req = {
      value: value
    }
    await api.post('read_users_nro_nom', req)
    .then(res => {
        data = res.data;
    })
    .catch((error) => console.warn("fetch error:", error))
    return data;
}

async function getLinea(value) {
  let data;
    let req = {
      value: value
    }
    await api.post('read_user', req)
    .then(res => {
        data = res.data;
    })
    .catch((error) => console.warn("fetch error:", error))
    return data;
}

async function getDatosTecnicos(value) {
  let data;
    let req = {
      value: value
    }
    await api.post('read_datos_tec', req)
    .then(res => {
        data = res.data;
    })
    .catch((error) => console.warn("fetch error:", error))
    return data;
}

async function getCablePares(value) {
  let data;
    let req = {
      value: value
    }
    await api.post('read_cable_pares', req)
    .then(res => {
        data = res.data;
    })
    .catch((error) => console.warn("fetch error:", error))
    return data;
}

async function getPorts(value) {
  let data;
    let req = {
      value: value
    }
    await api.post('read_ports', req)
    .then(res => {
        data = res.data;
    })
    .catch((error) => console.warn("fetch error:", error))
    return data;
}

async function getReclamosZona() {
  let data;
  await api.post('read_reclamos_zona')
  .then(res => {
      data = res.data;
  })
  .catch((error) => console.warn("fetch error:", error))
  return data;
}

async function getReclamosLinea() {
  let data;
  await api.post('read_reclamos_linea')
  .then(res => {
      data = res.data;
  })
  .catch((error) => console.warn("fetch error:", error))
  return data;
}


async function getServiciosLinea(value) {
  let data;
    let req = {
      value: value
    }
    await api.post('read_servicios_linea', req)
    .then(res => {
        data = res.data;
    })
    .catch((error) => console.warn("fetch error:", error))
    return data;
}

async function getOrdenLinea(value) {
  let data;
    let req = {
      value: value
    }
    await api.post('read_orden_linea', req)
    .then(res => {
        data = res.data;
    })
    .catch((error) => console.warn("fetch error:", error))
    return data;
}
