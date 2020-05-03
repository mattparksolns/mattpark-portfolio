import React from "react"
import { Provider } from "react-redux"
import { MuiThemeProvider } from "@material-ui/core";

import getTheme from './src/themes'
import createStore from "./src/state/createStore"

export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore()
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={getTheme('darkTheme')}>
        {element}
      </MuiThemeProvider>
    </Provider>
  )
}