import config from '../config/index';

const BASE_URL = config.server.api.baseURL

export const USERS = `${BASE_URL}/gets/getUsers`
export const USER = `${BASE_URL}/gets/getUser`
export const NEW_USER = `${BASE_URL}/puts/addUser`
export const EDIT_USER = `${BASE_URL}/updates/editUser`
export const DELETE_USER = `${BASE_URL}/drops/deleteUser`
export const EVENTS = `${BASE_URL}/gets/getEvents`
export const EVENT = `${BASE_URL}/gets/getEvent`
export const NEW_EVENT = `${BASE_URL}/puts/addEvent`
export const EDIT_EVENT = `${BASE_URL}/updates/editEvent`
export const DELETE_EVENT = `${BASE_URL}/drops/deleteEvent`
