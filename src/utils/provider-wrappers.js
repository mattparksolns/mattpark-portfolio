import React from "react"
import { Provider as ReduxProvider } from "react-redux"

import configureAppStore from "../store"
import { getUserData } from "../store/actions"
import ThemeProvider from "../themes"

export const BrowserRootWrapper = ({ element }) => {
  const store = configureAppStore()
  store.dispatch(getUserData())
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
      {/*<ThemeProvider>*/}
        {element}
      {/*</ThemeProvider>*/}
    </ReduxProvider>
  )
}

import Layout from '../layout'
export const PageWrapper = ({ element, props }) => {
  return (
    <ThemeProvider>
      <Layout {...props}>
        {element}
      </Layout>
    </ThemeProvider>
  )
}
