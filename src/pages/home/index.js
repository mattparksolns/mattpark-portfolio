import React from "react"
import {
  makeStyles,
} from '@material-ui/core'

import Image from "../../layout/image"
import SEO from "../../layout/seo"
import Layout from "../../layout"

import Greeting from './greeting'
import Introduction from './introduction'
import Farewell from './farewell'


const useStyles = makeStyles((theme) => ({
  root: {
  },
  container: {
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <SEO title="Home" />
        <div className={classes.container}>
          <Greeting />
          <Introduction />
          <div style={{ marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </div>
        <Farewell />
      </div>
    </Layout>
)}

export default Home
