import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import promise from 'redux-promise'
import logger from 'redux-logger'

const configureAppStore = (preloadedState={}) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger, promise],
    preloadedState,
  })
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(rootReducer))
  }
  return store
}
export default configureAppStore
