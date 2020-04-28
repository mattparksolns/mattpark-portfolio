import React from "react"
import {
  makeStyles,
} from '@material-ui/core'

import SEO from "../../layout/seo"
import Layout from "../../layout"

import Greeting from './greeting'
import Farewell from './farewell'


const useStyles = makeStyles((theme) => ({
  root: {
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  video: {
    opacity: '60%',
    // height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  miniStripe: {
    zIndex: 1,
    height: 2,
    // background: '#d91616',
    background: 'darkslategray',
    width: '12.2vw',
    position: 'absolute',
    transform: 'rotate(45deg)',
    transition: 'all .6s ease-out',
    top: '35%',
    right: '11%',
    [theme.breakpoints.down('md')]: {
      top: '32%',
    },
    [theme.breakpoints.down('sm')]: {
      top: '30%',
      right: '4%',
    },
    [theme.breakpoints.down('xs')]: {
      top: '27%',
    },
  },
  stripe: {
    height: 2,
    // background: '#d91616',
    background: 'darkslategray',
    width: '140%',
    position: 'absolute',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
    transition: 'all 2s ease-out',
    transitionDelay: '.6s',
    left: '50%',
    top: '160%',
    [theme.breakpoints.down('md')]: {
      top: '120%',
    }
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Layout className={classes.root}>
      <div className={classes.container}>
        <SEO title="Home" />
        <div className={classes.miniStripe} />
        <div className={classes.stripe} />
        <Greeting />
        <Farewell />
      </div>
    </Layout>
)}

export default Home
