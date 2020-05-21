import React, { useMemo, useEffect } from 'react'
import { MuiThemeProvider, CssBaseline, useMediaQuery } from '@material-ui/core'
import { connect } from 'react-redux'

import { toggleDarkMode } from '../store/actions'
import getBaseTheme from './base'

const ThemeProvider = ({ children, paletteType, toggleDarkMode }) => {
  // const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${window.__theme})`)
  useEffect(() => {
    toggleDarkMode(window.__theme)
    window.__onThemeChange = () => {
      toggleDarkMode(window.__theme)
    }
  }, [toggleDarkMode])
  const theme = useMemo(() => getBaseTheme({ paletteType }), [paletteType])
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
        {children}
    </MuiThemeProvider>
  )
}
export default connect(
  state => ({
    paletteType: state.app.paletteType,
  }),
  dispatch => ({
    toggleDarkMode: paletteType => dispatch(toggleDarkMode(paletteType)),
  }),
)(ThemeProvider)
