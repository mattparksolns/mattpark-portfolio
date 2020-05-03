import * as actionTypes from './actionTypes'


export const toggleDarkMode = (themeType) => ({
  type: actionTypes.TOGGLE_DARKMODE,
  themeType,
})

export const setIPv4 = (ipv4) => ({
  type: actionTypes.SET_IPV4,
  ipv4,
})

export const setIPv6 = (ipv6) => ({
  type: actionTypes.SET_IPV6,
  ipv6,
})

export const setGeoData = (geoData) => ({
  type: actionTypes.SET_GEODATA,
  geoData,
})
