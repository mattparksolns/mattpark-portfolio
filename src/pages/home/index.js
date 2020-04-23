import React from "react"
import { Link } from "gatsby"
import {
  makeStyles,
  Grid,
} from '@material-ui/core'

import Image from "../../Layout/image"
import SEO from "../../Layout/seo"

import Greeting from './greeting'
import Introduction from './introduction'
import Farewell from './farewell'


const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

const HomePage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SEO title="Home" />
      <Greeting />
      <Introduction />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Farewell />
    </div>
)}

export default HomePage
