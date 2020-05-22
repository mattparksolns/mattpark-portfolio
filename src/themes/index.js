import React, { useMemo, useEffect, useState, createContext } from 'react'
import { MuiThemeProvider, CssBaseline, useMediaQuery } from '@material-ui/core'
import { connect } from 'react-redux'

import { toggleDarkMode } from '../store/actions'
import getBaseTheme from './base'
import GlobalStyles from "./global-styles";

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  // const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${window.__theme})`)
  const [themeType, rawSetThemeType] = useState(undefined)

  useEffect(() => {
    const root = window.document.documentElement
    const initialThemeType = root.style.getPropertyValue('--initial-theme-type')
    rawSetThemeType(initialThemeType)
    // toggleDarkMode(window.__theme)
    window.__onThemeChange = () => {
      rawSetThemeType(window.__theme)
      // toggleDarkMode(window.__theme)
    }
  }, [])
  const contextValue = useMemo(() => {
    const setThemeType = (newType) => {
      const root = window.document.documentElement
      root.style.setProperty('--color-bg', 'black')
      rawSetThemeType(newType)
    }
    return { themeType, setThemeType }
  }, [themeType])

  const theme = useMemo(() => getBaseTheme({ themeType }), [themeType])
  return (
    <ThemeContext.Provider value={contextValue}>
      <GlobalStyles />
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
          {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
export default ThemeProvider
// export default connect(
//   state => ({
//     paletteType: state.app.paletteType,
//   }),
//   dispatch => ({
//     toggleDarkMode: paletteType => dispatch(toggleDarkMode(paletteType)),
//   }),
// )(ThemeProvider)
