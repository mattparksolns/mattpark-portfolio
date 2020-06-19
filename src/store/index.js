import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer, { getUserData } from './reducers'
import promise from 'redux-promise'
import logger from 'redux-logger'

const configureAppStore = (preloadedState = {}) => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [...getDefaultMiddleware(), logger, promise],
        preloadedState,
    })
    if (process.env.NODE_ENV === 'development' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }
    typeof window !== 'undefined' && store.dispatch(getUserData())
    return store
}
export default preloadedState => configureAppStore(preloadedState)
