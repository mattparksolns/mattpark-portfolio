import { combineReducers } from "redux"
import actionTypes from '../actions/actionTypes'

const initialState = {
  themeType: '',
  ipv4: '',
  ipv6: '',
  geoData: {},
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_THEME_TYPE:
      return { ...state, themeType: action.themeType }
    case actionTypes.SET_IPV4:
      return { ...state, ipv4: action.ipv4 }
    case actionTypes.SET_IPV6:
      return { ...state, ipv6: action.ipv6 }
    case actionTypes.SET_GEO_DATA:
      return { ...state, geoData: action.geoData }
    default:
      return state
  }
}
export default combineReducers({ app })
