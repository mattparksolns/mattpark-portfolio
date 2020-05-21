import * as actionTypes from './actionTypes'
import axios from 'axios'

export const toggleDarkMode = (paletteType) => ({
  type: actionTypes.TOGGLE_DARKMODE,
  paletteType,
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
  type: actionTypes.SET_GEO_DATA,
  geoData,
})

export const getUserData = () => dispatch => {
  axios.get('https://api.ipify.org?format=json').then((response) => {
    console.log(response)
    dispatch(setIPv4(response.data))
  }).catch((error) => {
    console.log(error)
  })
  axios.get('https://api6.ipify.org?format=json').then((response) => {
    console.log(response)
    dispatch(setIPv6(response.data))
  }).catch((error) => {
    console.log(error)
  })
  axios.get('https://geolocation-db.com/json/6db070f0-7c27-11ea-8264-e974339fc182').then((response) => {
    console.log(response)
    dispatch(setGeoData(response.data))
  }).catch((error) => {
    console.log(error)
  })
}
