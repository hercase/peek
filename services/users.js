import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const dataService = {
    //getAllLineas,
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
const api = 'http://192.168.0.59:4000'

async function getSigIn(value) {
  //let data;
  let data;
  let req = {
    value: value
  }
  const options = {
      method: 'post',
      url: `${api}/sign_in`,
      headers: { 'Content-Type': 'application/json'},
      data : req
  }
  await axios(options)  
  .then(res => {
    data = res.data;
  })
  .catch((error) => console.warn("fetch error:", error))

  return data;
/*
    let req = {
      value: value,
    }
    await api.post('sign_in', req)
    .then(res => {
      data = res.data;
    })
    .catch((error) => console.warn("fetch error:", error))
    return data;*/
}

 async function getLineas(value) {
  const token = await AsyncStorage.getItem('token');
  let data;
  let req = {
    value: value
  }
  const options = {
      method: 'post',
      url: `${api}/read_users_nro_nom`,
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      data : req
  }
  await axios(options)  
  .then(res => {
    data = res.data;
  })
  .catch((error) => console.warn("fetch error:", error))

  return data;

 /*let data;
    let req = {
      value: value
    }
    await api.post('read_users_nro_nom', req)
    .then(res => {
        data = res.data;
    })
    .catch((error) => console.warn("fetch error:", error))
    return data;*/
}

async function getLinea(value) {
  const token = await AsyncStorage.getItem('token');
  let data;
  let req = {
    value: value
  }
  const options = {
      method: 'post',
      url: `${api}/read_user`,
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      data : req
  }
  await axios(options)  
  .then(res => {
    data = res.data;
  })
  .catch((error) => console.warn("fetch error:", error))

  return data;

 /* let data;
    let req = {
      value: value
    }
    await api.post('read_user', req)
    .then(res => {
        data = res.data;
    })
    .catch((error) => console.warn("fetch error:", error))
    return data;*/
}

async function getDatosTecnicos(value) {
  const token = await AsyncStorage.getItem('token');
  let data;
  let req = {
    value: value
  }
  const options = {
      method: 'post',
      url: `${api}/read_datos_tec`,
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      data : req
  }
  await axios(options)  
  .then(res => {
    data = res.data;
  })
  .catch((error) => console.warn("fetch error:", error))

  return data;

  /*let data;
    let req = {
      value: value
    }
    await api.post('read_datos_tec', req)
    .then(res => {
        data = res.data;
    })
    .catch((error) => console.warn("fetch error:", error))
    return data;*/
}

async function getCablePares(value) {
  const token = await AsyncStorage.getItem('token');
  let data;
  let req = {
    value: value
  }
  const options = {
      method: 'post',
      url: `${api}/read_cable_pares`,
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      data : req
  }
  await axios(options)  
  .then(res => {
    data = res.data;
  })
  .catch((error) => console.warn("fetch error:", error))

  return data;

/*  let data;
    let req = {
      value: value
    }
    await api.post('read_cable_pares', req)
    .then(res => {
        data = res.data;
    })
    .catch((error) => console.warn("fetch error:", error))
    return data;*/
}

async function getPorts(value) {
  const token = await AsyncStorage.getItem('token');
  let data;
  let req = {
    value: value
  }
  const options = {
      method: 'post',
      url: `${api}/read_ports`,
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      data : req
  }
  await axios(options)  
  .then(res => {
    data = res.data;
  })
  .catch((error) => console.warn("fetch error:", error))

  return data;
  /*let data;

    await api.post('read_ports', req)
    .then(res => {
        data = res.data;
    })
    .catch((error) => console.warn("fetch error:", error))
    return data;*/
}

async function getReclamosZona() {
  /*api.headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }

  
  await api.post('read_reclamos_zona')
  .then(res => {
      data = res.data;
  })
  .catch((error) => console.warn("fetch error:", error))
  return data;*/
  const token = await AsyncStorage.getItem('token');
  let data;
  const options = {
      method: 'post',
      url: `${api}/read_reclamos_zona`,
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
  }
  await axios(options)  
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
  const token = await AsyncStorage.getItem('token');
  let data;
  let req = {
    value: value
  }
  const options = {
      method: 'post',
      url: `${api}/read_servicios_linea`,
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      data : req
  }
  await axios(options)  
  .then(res => {
    data = res.data;
  })
  .catch((error) => console.warn("fetch error:", error))

  return data;
/*
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
    */
}

async function getOrdenLinea(value) {
  const token = await AsyncStorage.getItem('token');
  let data;
  let req = {
    value: value
  }
  const options = {
      method: 'post',
      url: `${api}/read_orden_linea`,
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      data : req
  }
  await axios(options)  
  .then(res => {
    data = res.data;
  })
  .catch((error) => console.warn("fetch error:", error))

  return data;
  /*
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
    */
}
