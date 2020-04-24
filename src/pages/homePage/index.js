import React from "react"
import {
  makeStyles,
} from '@material-ui/core'

import Image from "../../Layout/image"
import SEO from "../../Layout/seo"
import Layout from "../../Layout"

import Greeting from './greeting'
import Introduction from './introduction'
import Farewell from './farewell'


const useStyles = makeStyles((theme) => ({
  root: {
  },
  container: {
  },
}))

const HomePage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <SEO title="Home" />
        <div className={classes.container}>
          <Greeting />
          <Introduction />
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </div>
        <Farewell />
      </div>
    </Layout>
)}

export default HomePage
