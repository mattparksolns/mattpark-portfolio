import React from "react"
import { Provider as ReduxProvider } from 'react-redux'
// import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout"
import ThemeProvider from '../../../themes'

import configureAppStore from '../../../store'

export default function TopLayout({ children, theme }) {
  const store = configureAppStore()
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
      {/*<ThemeTopLayout theme={theme}>{children}</ThemeTopLayout>*/}
    </ReduxProvider>
  )
}
