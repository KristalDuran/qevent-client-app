import config from '../config/index';

const BASE_URL = config.server.api.baseURL

export const USERS = `${BASE_URL}/gets/getUsers`
export const USER = `${BASE_URL}/gets/getUser`
export const NEW_USER = `${BASE_URL}/puts/addUser`
export const EDIT_USER = `${BASE_URL}/updates/updateUser`
export const DELETE_USER = `${BASE_URL}/drops/deleteUser`
export const EVENTS = `${BASE_URL}/gets/getEvents`
export const EVENT = `${BASE_URL}/gets/getEvent`
export const LIKE = `${BASE_URL}/updates/updateLikeEvent`
export const NEW_EVENT = `${BASE_URL}/puts/addEvent`
export const EDIT_EVENT = `${BASE_URL}/updates/updateEvent`
export const DELETE_EVENT = `${BASE_URL}/drops/deleteEvent`
export const DISLIKE = `${BASE_URL}/updates/updateDislikeEvent`
export const SHARE = `${BASE_URL}/puts/shareEvent`
export const EVALUATE = `${BASE_URL}/puts/evaluateEvent`
export const GUEST = `${BASE_URL}/gets/getInvitadosEvent`
export const LOGIN = `${BASE_URL}/gets/getAcces`
export const FILTER_EVENT = `${BASE_URL}/gets/searchEvent`
export const INSCRIPTION = `${BASE_URL}/puts/addInscripcion`
export const PUBLIC_EVENT = `${BASE_URL}/updates/changeStatusEvent`
export const IS_SUSCRIPTED = `${BASE_URL}/gets/isRegistered`
export const COMMENTS = `${BASE_URL}/gets/getComments`
export const INSCRITOS = `${BASE_URL}/gets/getRegistered`
