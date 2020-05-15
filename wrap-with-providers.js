import React from "react"
import { Provider as ReduxProvider } from "react-redux";

import ThemeProvider from './src/themes'
import configureAppStore from "./src/store/configureStore"

const wrapWithProviders = ({ element }) => {
  const store = configureAppStore()

  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        {element}
      </ThemeProvider>
    </ReduxProvider>
  )
}
export default wrapWithProviders
