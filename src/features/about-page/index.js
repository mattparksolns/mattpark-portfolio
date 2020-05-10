import React from 'react'
import { Typography } from '@material-ui/core'
import SEO from '../seo'


const AboutPage = ({ location }) => {
  return (
    <>
      <SEO pageTitle="About" canonical={location.pathname} />
      <Typography variant="h1">About Me</Typography>
      <Typography variant="h2">
        Under construction..
      </Typography>
    </>
  )
}

export default AboutPage
