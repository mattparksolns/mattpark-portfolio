import React from "react"
import { Router } from '@reach/router'

import Home from './home'
import About from './about'
import Work from './work'
import Blog from './blog'
import Contact from "./contact"


const App = () => {

  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Work path="work" />
      <Blog path="/blog" />
      <Contact path="/contact" />
    </Router>
  )
}

export default App
