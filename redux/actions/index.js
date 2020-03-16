/* 
Es el que gestiona las acciones y los datos que se van a enviar al reducer
para que este gestione en el store, 
estas acciones son llamadas desde el componente, 
en mapDispatchToProps ahi se instancia de forma global en el componente
y dependiendo el caso de uso se hace el llamado
*/

//import {fetchSchedule, fetchPeople} from '../api'

export const SET_LINEAS = 'SET_LINEAS';
export const SET_LINEA = 'SET_LINEA';
export const SET_RECLAMO = 'SET_RECLAMO';

export const SET_HIDE = 'SET_HIDE';
export const SET_TOKEN = 'SET_TOKEN';
export const DATA_PENDING = 'DATA_PENDING';
export const DATA_SUCCESS = 'DATA_SUCCESS';

export function setToken(token){
    return {
        type: SET_TOKEN,
        payload: token,
    }
  };

export function dataPending(){
    return {
        type: DATA_PENDING
    }
};

export function dataSuccess(){
    return {
        type: DATA_SUCCESS
    }
};

export function setHide(hide){
    return {
        type: SET_HIDE,
        payload: hide,
    }
  };

export function setLineas(lineas){
  return {
      type: SET_LINEAS,
      payload: lineas,
  }
};

export function setLinea(linea){
  return {
      type: SET_LINEA,
      payload: linea,
  }
};

export function setReclamo(reclamo){
    return {
        type: SET_RECLAMO,
        payload: reclamo,
    }
  };

/*export const fetchData = () => {
    return (dispatch) => {
        
        dispatch(getData())

        fetchSchedule()
        .then(([response, json]) => {
            dispatch(getDataSuccess(json))
        })
        .catch((error) => console.log(error))
    }
}

export const fetchDataActors = () => {
    return (dispatch) => {
        
        dispatch(getData())

        fetchPeople()
        .then(([response, json]) => {
            dispatch(getDataPeopleSuccess(json))
        })
        .catch((error) => console.log(error))
    }
}*/