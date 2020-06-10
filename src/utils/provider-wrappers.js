import React from "react"
import { Provider as ReduxProvider } from "react-redux"

import configureAppStore from "../store"
import ThemeProvider from "../themes"

export const RootWrapper = ({ element }) => {
  const store = configureAppStore()
  return (
    <ReduxProvider store={store}>
      {/*<ThemeProvider>*/}
        {element}
      {/*</ThemeProvider>*/}
    </ReduxProvider>
  )
}

export const SsrRootWrapper = ({ element }) => {
  const store = configureAppStore()
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        {element}
      </ThemeProvider>
    </ReduxProvider>
  )
}
