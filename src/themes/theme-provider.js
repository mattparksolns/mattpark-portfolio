import React, { useState } from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { getThemeByName } from '.'


export const ThemeContext = (themeName) => ({})
const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('lightTheme')

  const theme = getThemeByName(themeName)

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider