import { createStore as reduxCreateStore, applyMiddleware, } from 'redux'
import rootReducer from '.'
import LogRocket from 'logrocket'
import { init } from "../../.cache/navigation"


// preloadedState will be passed in by the plugin
const createStore = () => reduxCreateStore(rootReducer)
export default createStore
