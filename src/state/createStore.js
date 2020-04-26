import { createStore, applyMiddleware, } from 'redux'
import LogRocket from 'logrocket'

function reducer() {
  //...
}

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(LogRocket.reduxMiddleware()),
  )
}