import * as actionTypes from '../actions/actionTypes'

const initialState = {
  themeType: 'light',
  ipv4: '',
  ipv6: '',
  geoData: {},
}


export const getIpv4 = ipv4 => ({
  type: actionTypes.SET_IPV4, ipv4
})

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DARKMODE:
      return { ...state, themeType: action.themeType }
    case actionTypes.GET_IPV4:
      return state.ipv4
    case actionTypes.SET_IPV4:
      return { ...state, ipv4: action.ipv4 }
    case actionTypes.GET_IPV6:
      return state.ipv6
    case actionTypes.SET_IPV6:
      return { ...state, ipv6: action.ipv6 }
    case actionTypes.GET_GEODATA:
      return state.geoData
    case actionTypes.SET_GEODATA:
      return { ...state, geoData: action.geoData }
    default:
      return state
  }
}