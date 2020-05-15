import React, { useEffect } from 'react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import lightTheme from './light'
import darkTheme from './dark'
import { connect } from 'react-redux'
import { toggleDarkMode } from '../store/actions'

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export const getTheme = (theme) => (
  themes[theme]
)

const ThemeProvider = ({ children, themeType, toggleDarkMode }) => {
  useEffect(() => {
    toggleDarkMode(window.__theme)
    window.__onThemeChange = () => toggleDarkMode(window.__theme)
    // if (window) {
    // } else {
    //   toggleDarkMode(themeType)
    // }
  }, [themeType, toggleDarkMode])
  return (
    <MuiThemeProvider theme={themes[themeType]}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
export default connect(
  (state) => ({
    themeType: state.app.themeType,
  }),
  (dispatch) => ({
    toggleDarkMode: (themeType) => dispatch(toggleDarkMode(themeType))
  }),
)(ThemeProvider)
