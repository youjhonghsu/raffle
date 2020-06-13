import { combineReducers } from 'redux'
import memberList from './memberList'
import winner from './winner'

export default combineReducers({ memberList, winner })
