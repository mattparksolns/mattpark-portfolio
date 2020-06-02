import React, { useMemo, useEffect, useState, Suspense } from 'react'
import { StylesProvider, MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { connect } from 'react-redux'
import PropTypes from "prop-types";

import { setThemeType } from '../store/reducers'
import getBaseTheme from './base'
import NoiseBackground from './noise-background'

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
    <Suspense fallback={<NoiseBackground />}>
      <StylesProvider>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <NoiseBackground />
          {children}
        </MuiThemeProvider>
      </StylesProvider>
    </Suspense>
  )
}
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  themeType: PropTypes.string.isRequired,
  setThemeType: PropTypes.func.isRequired
}
export default connect(
  state => ({
    themeType: state.app.themeType,
  }),
  dispatch => ({
    setThemeType: themeType => dispatch(setThemeType(themeType))
  })
)(ThemeProvider)
