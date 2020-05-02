import React from "react"
import { Router } from '@reach/router'
// import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../features/home-page'
import About from './about'
import Work from './work'
import Blog from './blog'
import Contact from './contact'
import TestPage from './test-page'
import SEO from "../layout"
import Layout from "../layout"


const App = () => {
  return (
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
  )
}

export default App
