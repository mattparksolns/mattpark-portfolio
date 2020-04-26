import * as actionTypes from './actionTypes'
import axios from 'axios'


const receiveIPv4 = (ipv4) => ({
  type: actionTypes.GET_IPV4,
  ipv4,
})

const getIPv4 = (url, props) => {
  return (dispatch) => {
    axios.get(url)
    .then((response) => {
      dispatch(receiveIPv4(response.data))
    })
    .catch((error) => {
      console.log(error)
    })
  }
}