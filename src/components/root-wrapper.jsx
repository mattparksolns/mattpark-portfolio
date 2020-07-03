import React from 'react'
import PropTypes from 'prop-types'
import { Provider as ReduxProvider } from 'react-redux'

import store from '../store'
import { getUserData } from '../store/reducers'
import ThemeProvider from '../themes'

const RootWrapper = ({ element }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    store.dispatch(getUserData())
    return (
        <ReduxProvider store={store}>
            <ThemeProvider>{element}</ThemeProvider>
        </ReduxProvider>
    )
}
RootWrapper.propTypes = {
    element: PropTypes.element.isRequired,
}
export default RootWrapper
