import * as actionTypes from './actionTypes'


export const toggleDarkMode = (isDarkMode) => ({
  type: actionTypes.TOGGLE_DARKMODE,
  isDarkMode,
})

export const setIPv4 = (ipv4) => ({
  type: actionTypes.SET_IPV4,
  ipv4,
})

export const setIPv6 = (ipv6) => (dispatch) => {
  return dispatch({
    type: actionTypes.SET_IPV6,
    ipv6,
  })
}

export const setGeoData = (geoData) => (dispatch) => {
  return dispatch({
    type: actionTypes.SET_GEODATA,
    geoData,
  })
}