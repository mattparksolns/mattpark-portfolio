import React, { useMemo, useEffect, useState } from 'react'
import {
    StylesProvider,
    MuiThemeProvider,
    CssBaseline,
} from '@material-ui/core'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setThemeType } from '../store/reducers'
import getBaseTheme from './base'

const ThemeProvider = ({ children, themeType, setThemeType }) => {
    const [isClient, setClient] = useState(false)
    useEffect(() => {
        setClient(true)
        setThemeType(window.__theme)
        window.__onThemeChange = () => {
            setThemeType(window.__theme)
        }
    }, [setThemeType])

    const theme = useMemo(() => getBaseTheme({ themeType }), [themeType])

    // use <Suspense fallback={<Loader />} ></Suspense> for loader? I may not want to use suspense for the entire app
    return (
        isClient && (
            <StylesProvider>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </MuiThemeProvider>
            </StylesProvider>
        )
    )
}
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
    themeType: PropTypes.string.isRequired,
    setThemeType: PropTypes.func.isRequired,
}
export default connect(
    state => ({
        themeType: state.app.themeType,
    }),
    dispatch => ({
        setThemeType: themeType => dispatch(setThemeType(themeType)),
    })
)(ThemeProvider)
