import React from "react"
import {
  makeStyles,
} from '@material-ui/core'

import Greeting from './greeting'
import Farewell from './farewell'


const useStyles = makeStyles((theme) => ({
  root: {
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
    top: '40%',
    right: '16%',
    [theme.breakpoints.down('md')]: {
      top: '35%',
      right: '12%',
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
    width: '141%',
    position: 'absolute',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
    transition: 'all 2s ease-out',
    transitionDelay: '.6s',
    left: '50%',
    top: '140%',
    [theme.breakpoints.down('md')]: {
      top: '120%',
    },
    [theme.breakpoints.down('sm')]: {
      top: '95%',
    },
    [theme.breakpoints.down('xs')]: {
      top: '80%',
    },
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
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.miniStripe} />
      <div className={classes.stripe} />
      <div className={classes.letter}>
        <svg className={classes.svg} width="405" height="443" viewBox="0 0 405 443">
          <g transform="translate(-531 -750)">
            <text className={classes.letterText}>
              <tspan x="-188.77" y="0">M</tspan>
            </text>
          </g>
        </svg>
      </div>
      <Greeting />
      <Farewell />
    </div>
)}

export default Home
