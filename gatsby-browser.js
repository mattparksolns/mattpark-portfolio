/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'

import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider

import { getTheme } from './src/themes'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import Layout from './src/layout'


// export const wrapPageElement = ({ element, props }) => {
//   return (
//     <MuiThemeProvider theme={getTheme(window.__theme)}>
//       <CssBaseline />
//       <Layout>
//         {element}
//       </Layout>
//   </MuiThemeProvider>
//   )
// }
