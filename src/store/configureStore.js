import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import promise from 'redux-promise'
import logger from 'redux-logger'

import { getIPv4, getIPv6, getGeoData } from './actions'

const configureAppStore = (preloadedState={}) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger, promise],
    preloadedState,
  })
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => (
      store.replaceReducer(rootReducer))
    )
  }
  // if (window !== undefined) {
  // store.dispatch(getIPv4())
  // store.dispatch(getIPv6())
  // store.dispatch(getGeoData())
  // }
  return store
}
export default configureAppStore
