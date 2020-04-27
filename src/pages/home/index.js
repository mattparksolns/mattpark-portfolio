import React from "react"
import {
  makeStyles,
} from '@material-ui/core'

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
  video: {
    // height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  miniStripe: {
    height: 2,
    background: '#d91616',
    width: '12.2vw',
    position: 'absolute',
    top: '30vh',
    right: '20vw',
    transform: 'rotate(45deg)',
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Layout>
      <video className={classes.video} autoPlay muted loop id="blobVideo">
        <source src="https://meesverberne.com/wp-content/uploads/2020/01/background-video.mp4" type="video/mp4" />
        <p>video</p>
      </video>
      <div className={classes.root}>
        <SEO title="Home" />
        <div className={classes.container}>
          <Greeting />
          <div className={classes.miniStripe} />
          <Introduction />
        </div>
        <Farewell />
      </div>
    </Layout>
)}

export default Home
