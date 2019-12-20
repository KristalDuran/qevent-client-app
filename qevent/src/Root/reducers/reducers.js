import { combineReducers } from 'redux'

// Reducers: Import all your reducers here
import { reducer as burgerMenu } from 'redux-burger-menu'
import uiAccountsTable from '../../modules/UIAccountsTable/uiAccountsTable'


//MULTLANG
import {i18nState} from "redux-i18n"

const reducers = combineReducers({
  burgerMenu,
  i18nState, //MULTLANG,
  uiAccountsTable
})

export default reducers
