import React from "react"
import {
  makeStyles,
} from '@material-ui/core'

import SEO from "../../layout/seo"
import Layout from "../../layout"

import BlobVideo from '../../../assets/videos/blob-video2.mp4'
import Greeting from './greeting'
import Introduction from './introduction'
import Farewell from './farewell'


const useStyles = makeStyles((theme) => ({
  root: {
  },
  container: {
  },
  video: {
    opacity: '70%',
    // height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  miniStripe: {
    height: 2,
    // background: '#d91616',
    background: 'white',
    width: '12.2vw',
    position: 'absolute',
    top: '40%',
    right: '20vw',
    transform: 'rotate(45deg)',
    transition: 'all .6s ease-out',
  },
  stripe: {
    // marginTop: '100vh',
    height: 2,
    // background: '#d91616',
    background: 'white',
    width: '130%',
    position: 'absolute',
    top: '165%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
    transition: 'all 2s ease-out',
    transitionDelay: '.6s',
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Layout>
      <video className={classes.video} autoPlay muted loop id="blobVideo">
        <source src={BlobVideo} type="video/mp4" />
        <p>video</p>
      </video>
      <div className={classes.root}>
        <SEO title="Home" />
        <div className={classes.container}>
          <Greeting />
          <div className={classes.miniStripe} />
          <div className={classes.stripe} />
          <Introduction />
        </div>
        <Farewell />
      </div>
    </Layout>
)}

export default Home
