import { createStore as reduxCreateStore, applyMiddleware, compose } from 'redux'
import rootReducer from '.'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'

const middlewares = [ thunk, promise ]
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger())
}
const middlewareEnhancer = applyMiddleware(...middlewares)
const composedEnhancers = compose(middlewareEnhancer)

// preloadedState will be passed in by the plugin
const createStore = (state={}) => {
  const store = reduxCreateStore(
    rootReducer,
    state,
    composedEnhancers
  )
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('.', () => store.replaceReducer(rootReducer))
  }
  return store
}

export default createStore
