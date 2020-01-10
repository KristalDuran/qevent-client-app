import apiRequest from './api-request';
import {
  DELETE_USER,
  EDIT_USER,
  EVENTS,
  EVENT,
  NEW_USER,
  NEW_EVENT,
  USER,
  USERS
} from '../utils/url.constants';

  export const addEvent = (event, successCallback, errorCallback) => {
    apiRequest({
      url: `${NEW_EVENT}?nameEv=${event.NombreEvento}&descripcionEV=${event.DescEvento}&ubicacion=${event.Ubicacion}
      &tipo=${event.Tipo}&fecha=${event.Fecha}&hora=${event.Hora}&restriccion=${event.Restricciones}&URLimgEv=${event.FuenteEvento}`,
      method: 'get',
      data: {
        event
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const getEvents = (successCallback, errorCallback) => {
    apiRequest({
      url: EVENTS,
      method: 'get',
      data: {},
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const getUsers = (successCallback, errorCallback) => {
    apiRequest({
      url: USERS,
      method: 'get',
      data: {
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const getUser = (id, successCallback, errorCallback) => {
    apiRequest({
      url: `${USER}?id=${id}`,
      method: 'get',
      data: {
        id
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const getEvent = (id, successCallback, errorCallback) => {
    apiRequest({
      url: `${EVENT}?id=${id}`,
      method: 'get',
      data: {
        id
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const addUser = (user, successCallback, errorCallback) => {
    apiRequest({
      url: `${NEW_USER}?name=${user.Nombre}&email=${user.Correo}&rol=${user.Rol}&password=${user.Contrasena}&nameuser=${user.NombreUsuario}`,
      method: 'get',
      data: {
        user
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const editUser = (user, successCallback, errorCallback) => {
    apiRequest({
      url: `${EDIT_USER}?id=${user.ID_usuario}&name=${user.Nombre}&email=${user.Correo}&rol=${user.Rol}`,
      method: 'get',
      data: {
        user
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const deleteUser = (id, successCallback, errorCallback) => {
    apiRequest({
      url: `${DELETE_USER}?id=${id}`,
      method: 'get',
      data: {
        id
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

