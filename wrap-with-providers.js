import React from "react"
import { Provider as ReduxProvider } from "react-redux";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

import { getTheme } from './src/themes'
import Layout from './src/layout'
import createStore from "./src/state/createStore"

const wrapWithProviders = ({ element }) => {
  const store = createStore()

  return (
    <ReduxProvider store={store}>
      <MuiThemeProvider theme={getTheme(window.__theme)}>
        <CssBaseline />
        <Layout>
          {element}
        </Layout>
      </MuiThemeProvider>
    </ReduxProvider>
  )
}
export default wrapWithProviders
