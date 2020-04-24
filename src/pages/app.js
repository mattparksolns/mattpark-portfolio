import React from "react"
import { Router } from '@reach/router'

import HomePage from './homePage'
import ContactPage from "./contact"

const App = () => {
  return (
    <Router>
      <HomePage path="/" />
      <ContactPage path="/contact" />
    </Router>
  )
}

export default App
