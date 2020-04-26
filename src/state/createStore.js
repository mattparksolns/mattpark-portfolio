import { createStore as reduxCreateStore, applyMiddleware, } from 'redux'
import * as actionTypes from '../actions/actionTypes'
import LogRocket from 'logrocket'
import { init } from "../../.cache/navigation"

const initialState = {
  ipv4: '',
  ipv6: '',
  geodata: {},
}
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_IPV4:
      return [...state, ...action.ipv4]
    default:
      return state
  }
}

// preloadedState will be passed in by the plugin
const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
