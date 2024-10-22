/*
El reducer es el encargado de gestionar los datos que van a interactuar en el store, 
cuando se realice el llamado de la acción correspondiente, 
el retornara el objeto de datos que se estableció
*/
import { SET_LINEAS, SET_LINEA, SET_HIDE, SET_RECLAMO, SET_CANTIDAD_RECLAMOS, SET_TOKEN, LOGOUT } from '../actions/index';
import AsyncStorage from '@react-native-community/async-storage';

const InitialState = {
    hasError: false,
    isLoading: false,
    hide: false,
    token: '',
    reclamos: 0,
};

export default function teleReducer(state = InitialState, action) {
    switch(action.type) {
        case SET_TOKEN:
            AsyncStorage.setItem('token', action.payload) 
            return {
                ...state,
                token: action.payload,      
            };
        case LOGOUT:
            AsyncStorage.removeItem('token') 
            return {
                ...state,
                token: '',      
            };
        case SET_HIDE:
            return {
                ...state,
                isLoading: true,
                hide: action.payload,      
            };
        case SET_LINEAS:
            return {
                ...state,
                isLoading: true,
                lineas: action.payload,      
            };
        case SET_LINEA:
            return {
                ...state,
                isLoading: true,
                linea: action.payload,      
            };
        case SET_RECLAMO:
            return {
                ...state,
                isLoading: true,
                reclamo: action.payload,      
            };   
        case SET_CANTIDAD_RECLAMOS:
            return {
                ...state,
                reclamos: action.payload,      
            };        
        default:
            // Si el Action no existe en este reducer, retorna el estado sin modificar.
            return state;
    };
};