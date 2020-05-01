import React from "react"
import { Router } from '@reach/router'
// import { BrowserRouter, Route } from 'react-router-dom'

import Layout from '../layout'
import NavBar from  '../layout/header/navbar'
import Home from './home'
import About from './about'
import Work from './work'
import Blog from './blog'
import Contact from "./contact"
import Test from './test'


const App = () => {

  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Work path="/work" />
      <Blog path="/blog" />
      <Contact path="/contact" />
      <Test path="/test" />
      {/*<Layout>*/}
      {/*  <Route component={Home} path="/" exact />*/}
      {/*  <Route component={About} path="/about" />*/}
      {/*  <Route component={Work} path="/work" />*/}
      {/*  <Route component={Blog} path="/blog-page" />*/}
      {/*  <Route component={Contact} path="/contact" />*/}
      {/*</Layout>*/}
    </Router>
  )
}

export default App
