/*
El reducer es el encargado de gestionar los datos que van a interactuar en el store, 
cuando se realice el llamado de la acción correspondiente, 
el retornara el objeto de datos que se estableció
*/
import { DATA_PENDING, DATA_SUCCESS } from '../actions/index';

const InitialState = {
    pending: false,
    success: false
};

export default function loadDataReducer(state = InitialState, action) {
    switch(action.type) {
        case DATA_PENDING:
            return {
                ...state,
                pending: true,      
            };
        case DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,     
            };
        default:
            // Si el Action no existe en este reducer, retorna el estado sin modificar.
            return state;
    };
    
};