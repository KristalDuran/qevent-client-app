import apiRequest from './api-request';
import {
  EVENTS,
  MISION,
  PATH,
  PLACES,
  DISTRITOS,
  RESENA,
  VISION,
  } from '../utils/url.constants';

  export const llamadoAPI = (parametros, successCallback, errorCallback) => {
    apiRequest({
      url: PATH,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        parametros: parametros
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

  export const getMision = (successCallback, errorCallback) => {
    apiRequest({
      url: MISION,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
      },
      onSuccess: response => { successCallback(response); },
      onError: error => { errorCallback(error) }
    })
  }

  export const getVision = (successCallback, errorCallback) => {
    apiRequest({
      url: VISION,
      method: 'post',
      headers: {},
      data: {
      },
      onSuccess: response => { successCallback(response); },
      onError: error => { errorCallback(error) }
    })
  }

  export const getResena = (successCallback, errorCallback) => {
    apiRequest({
      url: RESENA,
      method: 'post',
      headers: {},
      data: {
      },
      onSuccess: response => { successCallback(response); },
      onError: error => { errorCallback(error) }
    })
  }

  export const getEvents = (successCallback, errorCallback) => {
    apiRequest({
      url: EVENTS,
      method: 'post',
      headers: {},
      data: {
      },
      onSuccess: response => { successCallback(response); },
      onError: error => { errorCallback(error) }
    })
  }

  export const getAtractivos = (successCallback, errorCallback) => {
    apiRequest({
      url: PLACES,
      method: 'post',
      headers: {},
      data: {
      },
      onSuccess: response => { successCallback(response); },
      onError: error => { errorCallback(error) }
    })
  }

  export const getDistritos = (successCallback, errorCallback) => {
    apiRequest({
      url: DISTRITOS,
      method: 'post',
      headers: {},
      data: {
      },
      onSuccess: response => { successCallback(response); },
      onError: error => { errorCallback(error) }
    })
  }