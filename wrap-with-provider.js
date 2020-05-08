import React from "react"
import { Provider } from "react-redux";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";

import { getTheme } from './src/themes'
import Layout from './src/layout'
import createStore from "./src/state/createStore"

const wrapWithProvider = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore()

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={getTheme(window.__theme)}>
        <CssBaseline />
        <Layout>
          {element}
        </Layout>
      </MuiThemeProvider>
    </Provider>
  )
}
export default wrapWithProvider
