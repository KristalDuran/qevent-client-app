import apiRequest from './api-request';
import {
  DELETE_USER,
  EDIT_USER,
  NEW_USER,
  USER,
  USERS
} from '../utils/url.constants';

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
      url: USER,
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
      url: NEW_USER,
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
      url: EDIT_USER,
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
      url: DELETE_USER,
      method: 'get',
      data: {
        id
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }