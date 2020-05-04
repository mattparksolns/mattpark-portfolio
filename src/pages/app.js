import React from "react"
import { Router } from '@reach/router'
// import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

import getTheme from '../themes'
// import ThemeProvider from '../themes/ThemeProvider'
import Layout from "../layout"
import Home from '../features/home-page'
import About from './about'
import Work from './work'
import Blog from './blog'
import Contact from './contact'
import TestPage from './test-page'
import { connect } from "react-redux";


const App = ({ dispatch, themeType }) => {

  return (
    <ThemeProvider theme={getTheme(themeType)}>
      <CssBaseline />
      <Layout>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Work path="/work" />
          <Blog path="/blog" />
          <Contact path="/contact" />
          <TestPage path="/test" />
          {/*<Layout>*/}
          {/*  <Route component={Home} path="/" exact />*/}
          {/*  <Route component={About} path="/about" />*/}
          {/*  <Route component={Work} path="/work-page" />*/}
          {/*  <Route component={Blog} path="/blog-page" />*/}
          {/*  <Route component={Contact} path="/contact-page" />*/}
          {/*</Layout>*/}
        </Router>
      </Layout>
    </ThemeProvider>
  )
}

// export default App

const mapStateToProps = (state) => ({
  themeType: state.app.themeType,
})

const mapDispatchToProps = (dispatch) => ({
  // getTheme: themeType => dispatch(getTheme(themeType)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)