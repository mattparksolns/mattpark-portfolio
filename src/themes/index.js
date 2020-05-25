import React, { useMemo, useEffect, useState, createContext } from 'react'
import { StylesProvider, MuiThemeProvider, ThemeProvider as MThemeProvider, CssBaseline, createGenerateClassName } from '@material-ui/core'
import { connect } from 'react-redux'

import { setThemeType } from '../store/actions'
import getBaseTheme from './base'

const ThemeProvider = ({ children, themeType, setThemeType }) => {
  const [isClient, setClient] = useState(false)
  useEffect(() => {
    setClient(true)
    setThemeType(window.__theme)
    window.__onThemeChange = () => {
      setThemeType(window.__theme)
    }
  }, [])

  const theme = useMemo(() =>
    getBaseTheme({ themeType }),[themeType])

  return isClient && (
    <StylesProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StylesProvider>
  )
}
// export default ThemeProvider
export default connect(
  state => ({
    themeType: state.app.themeType,
  }),
  dispatch => ({
    setThemeType: themeType => dispatch(setThemeType(themeType))
  }),
)(ThemeProvider)
