import {actionTypes} from './constants'


export const downloadXLS = () => {
  return {
    type: actionTypes.DOWNLOAD_XLS
  }
}
export const createTransaction = () => {
  return {
    type: actionTypes.CREATE_TRANSACTION
  }
}

export const showDetails = accountId => {
  return {
    type: actionTypes.SHOW_DEATAILS,
    accountId
  }
}
