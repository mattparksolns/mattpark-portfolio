import React from "react"
import { Router } from '@reach/router'

import Home from './home'
import About from './about'
import Blog from './blog'
import Contact from "./contact"


const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={"<p>Loading...</p>"}>
    <Component {...props} />
  </React.Suspense>
)

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Blog path="/blog" />
      <Contact path="/contact" />
    </Router>
  )
}

export default App
