import { actionTypes } from './constants'

const initialState = {
}

function uiAccountsTable(state = initialState, action) {
  switch (action.type) {

    case actionTypes.DOWNLOAD_XLS: {
      return state
    }
    case actionTypes.CREATE_TRANSACTION: {
      return state
    }

    case actionTypes.SHOW_DEATAILS: {
      return state
    }

    default:
      return state
  }
}

export default uiAccountsTable
