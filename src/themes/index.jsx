import React, { useMemo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { StylesProvider, MuiThemeProvider, CssBaseline } from '@material-ui/core'

import { setThemeType } from '@store/reducers'
import getBaseTheme from './base'

// type ThemeProviderProps = {
//     children?: ReactNode,
// }

const ThemeProvider = ({ children }) => {
    const dispatch = useDispatch()
    const themeType = useSelector(state => state.app.themeType)

    const [isClient, setClient] = useState(false)
    useEffect(() => {
        setClient(true)
        window.__onThemeChange = () => {
            dispatch(setThemeType(window.__theme))
        }
    }, [dispatch])

    const theme = useMemo(() => getBaseTheme(themeType), [themeType])

    // use <Suspense fallback={<Loader />} ></Suspense> for loader? I may not want to use suspense for the entire app
    return isClient ? (
        <StylesProvider>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </StylesProvider>
    ) : (
        <></>
    )
}
ThemeProvider.propTypes = {
    children: PropTypes.node,
}
export default ThemeProvider
