import React from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import Intro from './intro'
import Projects from './projects'

const HomePage = withStyles(theme => ({
  miniStripe: {
    position: 'absolute',
    height: 2,
    width: '12.15277vw',
    top: '20.4861111vw',
    transformOrigin: 'top right',
    // right: '19.44444vw',
    right: '11.44444vw',
    background: theme.palette.text.primary,
    // opacity: 0.2,
    '-webkit-transform': 'rotate(45deg)',
    '-moz-transform': 'rotate(45deg)',
    '-o-transform': 'rotate(45deg)',
    '-ms-transform': 'rotate(45deg)',
    transform: 'rotate(45deg)',
    '-webkit-transition': 'all .6s ease-out',
    '-moz-transition': 'all .6s ease-out',
    '-o-transition': 'all .6s ease-out',
    transition: 'all .6s ease-out',
    '-webkit-transition-delay': '.6s',
    '-moz-transition-delay': '.6s',
    '-o-transition-delay': '.6s',
    transitionDelay: '.6s',
    [theme.breakpoints.down('sm')]: {
      top: 150,
      right: 20,
      width: 60,
    },
    // [theme.breakpoints.down('md')]: {
    //   top: '35%',
    //   right: '12%',
    // },
    // [theme.breakpoints.down('sm')]: {
    //   top: '30%',
    //   right: '4%',
    // },
    // [theme.breakpoints.down('xs')]: {
    //   top: '27%',
    // },
  },
  stripe: {
    position: 'absolute',
    height: 2,
    width: '200%',
    top: '125%',
    left: '50%',
    background: theme.palette.text.primary,
    opacity: 0.4,
    '-webkit-transform': 'translate(-50%, -50%) rotate(-45deg)',
    '-moz-transform': 'translate(-50%, -50%) rotate(-45deg)',
    '-o-transform': 'translate(-50%, -50%) rotate(-45deg)',
    '-ms-transform': 'translate(-50%, -50%) rotate(-45deg)',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
    '-webkit-transition': 'all 2s ease-out',
    '-moz-transition': 'all 2s ease-out',
    '-o-transition': 'all 2s ease-out',
    transition: 'all 2s ease-out',
    '-webkit-transition-delay': '.6s',
    '-moz-transition-delay': '.6s',
    '-o-transition-delay': '.6s',
    transitionDelay: '.6s',
    [theme.breakpoints.down('md')]: {
      top: '125%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: -200,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: -400,
    },
    '@media only screen and (max-width: 450px)': {
      marginTop: -500,
    },
    '@media only screen and (max-width: 390px)': {
      marginTop: -550,
    },
    // [theme.breakpoints.down('sm')]: {
    //   top: '95%',
    // },
    // [theme.breakpoints.down('xs')]: {
    //   top: '80%',
    // },
  },
  letter: {
    border: '1px solid black',
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  letterText: {
    stroke: 'black',
    strokeWidth: 2,
    transform: 'translate(720 1106)',
    fill: 'transparent',
    fontSize: 400,
    fontFamily: 'TimesNewRomanPS-BoldMT, Times New Roman',
    fontWeight: 700,
    letterSpacing: '1em',
  },
  svg: {
    boxSizing: 'border-box',
  },
}))(({ classes }) => {
  return (
    <>
      <div className={classes.miniStripe} />
      {/*<div className={classes.stripe} />*/}
      {/*<div className={classes.letter}>*/}
      {/*  <svg className={classes.svg} width="405" height="443" viewBox="0 0 405 443">*/}
      {/*    <g transform="translate(-531 -750)">*/}
      {/*      <text className={classes.letterText}>*/}
      {/*        <tspan x="-188.77" y="0">M</tspan>*/}
      {/*      </text>*/}
      {/*    </g>*/}
      {/*  </svg>*/}
      {/*</div>*/}
      <Intro />
      <Projects />
    </>
  )
})
HomePage.propTypes = {
  classes: PropTypes.object,
}
export default HomePage
