import React from "react"
import { Provider as ReduxProvider } from "react-redux";

import ThemeProvider from "./src/themes";
import configureAppStore from "./src/store/configureStore"
import { getUserData } from "./src/store/actions";

export const BrowserRootWrapper = ({ element }) => {
  const store = configureAppStore()
  store.dispatch(getUserData())
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        {element}
      </ThemeProvider>
    </ReduxProvider>
  )
}

export const SsrRootWrapper = ({element }) => {
  const store = configureAppStore()

  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        {element}
      </ThemeProvider>
    </ReduxProvider>
  )
}

export const SsrPageWrapper = ({ element }) => {
  return (
    <ThemeProvider>
      {element}
    </ThemeProvider>
  )
}
