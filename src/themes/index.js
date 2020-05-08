import lightTheme from './light'
import darkTheme from './dark'



const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export const getTheme = (theme) => (
  themes[theme]
)

import React from "react"
import { connect } from "react-redux"
import { CssBaseline, ThemeProvider } from "@material-ui/core";

const MyThemeProvider = ({ children, themeType }) => {
  console.log(themeType)
  return (
    <ThemeProvider theme={getTheme(themeType)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
// export default ThemeProvider


const mapStateToProps = (state) => ({
  themeType: state.app.themeType,
})

const mapDispatchToProps = (dispatch) => ({
  // getTheme: themeType => dispatch(getTheme(themeType)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyThemeProvider)
