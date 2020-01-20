import apiRequest from './api-request';
import {
  DELETE_USER,
  DISLIKE,
  EDIT_USER,
  EVENTS,
  EVENT,
  NEW_USER,
  NEW_EVENT,
  EVALUATE,
  LIKE,
  SHARE,
  USER,
  USERS,
  GUEST,
  LOGIN,
  DELETE_EVENT,
  EDIT_EVENT,
  FILTER_EVENT
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

  export const likeEvent = (event, successCallback, errorCallback) => {
    apiRequest({
      url: `${LIKE}?id=${event.id}&userId=${event.userId}`,
      method: 'get',
      data: {
        event
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const evaluateEvent = (evaluate, successCallback, errorCallback) => {
    apiRequest({
      url: `${EVALUATE}?id=${evaluate.id}&number=${evaluate.number}&comment=${evaluate.comment}`,
      method: 'get',
      data: {
        evaluate
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const dislikeEvent = (event, successCallback, errorCallback) => {
    apiRequest({
      url: `${DISLIKE}?id=${event.id}&userId=${event.userId}`,
      method: 'get',
      data: {
        event
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const shareEvent = (event, successCallback, errorCallback) => {
    apiRequest({
      url: `${SHARE}?id=${event.id}`,
      method: 'get',
      data: {
        event
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const editUser = (user, successCallback, errorCallback) => {
    apiRequest({
      url: `${EDIT_USER}?id=${user.ID_usuario}&name=${user.Nombre}&email=${user.Correo}&rol=${user.Rol}&nameuser=${user.NombreUsuario}`,
      method: 'get',
      data: {
        user
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const editEvent = (event, successCallback, errorCallback) => {
    apiRequest({
      url: `${EDIT_EVENT}?id=${event.ID_evento}&name=${event.NombreEvento}&description=${event.DescEvento}&address=${event.Ubicacion}
      &type=${event.Tipo}&date=${event.Fecha}&time=${event.Hora}&restriction=${event.Restricciones}&URLimgEv=${event.FuenteEvento}`,
      method: 'get',
      data: {
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

  export const getGuest = (id, successCallback, errorCallback) => {
    apiRequest({
      url: `${GUEST}?id=${id}`,
      method: 'get',
      data: {
        id
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const login = (nameuser, password, successCallback, errorCallback) => {
    apiRequest({
      url: `${LOGIN}?nameuser=${nameuser}&password=${password}`,
      method: 'get',
      data: {
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const deleteEvent = (id, successCallback, errorCallback) => {
    apiRequest({
      url: `${DELETE_EVENT}?idEvento=${id}`,
      method: 'get',
      data: {
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const getEventFilter = (filtrer, successCallback, errorCallback) => {
    apiRequest({
      url: `${FILTER_EVENT}?filter=${filtrer}`,
      method: 'get',
      data: {
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }
