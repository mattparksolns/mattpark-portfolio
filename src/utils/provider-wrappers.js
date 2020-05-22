import React from "react"
import { Provider as ReduxProvider } from "react-redux"

import configureAppStore from "../store/configureStore"
import { getUserData } from "../store/actions"
import ThemeProvider from "../themes"

export const BrowserRootWrapper = ({ element }) => {
  const store = configureAppStore()
  store.dispatch(getUserData())
  return (
    <ThemeProvider>
      <ReduxProvider store={store}>
        {element}
      </ReduxProvider>
    </ThemeProvider>
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
