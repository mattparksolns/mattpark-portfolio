import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import promise from 'redux-promise'
import logger from 'redux-logger'

import rootReducer from './reducers'

const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware: () => any[]) =>
    //     getDefaultMiddleware().concat(promise, logger),
    middleware: [...getDefaultMiddleware(), logger, promise],
})

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
        const newRootReducer = require('./reducers').default
        store.replaceReducer(newRootReducer)
    })
}

// export type AppDispatch = typeof store.dispatch
// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store

// typeof window !== 'undefined' && store.dispatch(getUserData())
// export default preloadedState => configureAppStore(preloadedState)
