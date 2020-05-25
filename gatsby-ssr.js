import { SsrRootWrapper, PageWrapper } from "./src/utils/provider-wrappers"
export const wrapRootElement = SsrRootWrapper
export const wrapPageElement = PageWrapper

import React, { createElement } from 'react'

import Terser from 'terser'
export const onRenderBody = ({ setPreBodyComponents }) => {
  const boundFn = () => {
    window.__onThemeChange = () => {};
    window.__setThemeType = themeType => {
      window.__theme = themeType;
      window.__onThemeChange();
      try {
        localStorage.setItem('themeType', themeType);
      } catch (error) {
        console.error(error);
      }
    }
    let preferredTheme
    try {
      preferredTheme = localStorage.getItem('themeType')
    } catch (error) {
      console.error(error)
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    mql.addEventListener('change', e => {
      window.__setThemeType(e.matches ? 'dark' : 'light');
    })
    window.__theme = preferredTheme || (mql.matches ? 'dark' : 'light')
    document.documentElement.style.setProperty(
      '--color-bg',
      window.__theme === 'dark' ? '#121317' : '#ffffff')
  }
  let calledFunction = `(${String(boundFn)})()`
  calledFunction = Terser.minify(calledFunction).code

  const ThemeScript = createElement('script', {
    key: 'theme-script',
    dangerouslySetInnerHTML: {
      __html: calledFunction
    }
  })
  setPreBodyComponents([ThemeScript])
}

import { Provider as ReduxProvider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheets, StylesProvider } from '@material-ui/core'
import ThemeProvider from './src/themes'
import configureAppStore from './src/store'
// import { getPageContext } from './src/themes'
import getBaseTheme from './src/themes/base'

// export const replaceRenderer = ({
//   bodyComponent,
//   replaceBodyHTMLString,
//   setHeadComponents,
// }) => {
//   const store = configureAppStore()
//   const sheets = new ServerStyleSheets()
//   const bodyHTML = renderToString(
//     sheets.collect(
//       <ReduxProvider store={store}>
//         <ThemeProvider>
//           {bodyComponent}
//         </ThemeProvider>
//       </ReduxProvider>
//     )
//   )
//   replaceBodyHTMLString(bodyHTML)
//   setHeadComponents([
//     <style type={"text/css"}
//            id={"jss-server-side"}
//            key={"jss-server-side"}
//            dangerouslySetInnerHTML={{
//              __html: sheets.toString()
//            }}/>
//   ])
// }

