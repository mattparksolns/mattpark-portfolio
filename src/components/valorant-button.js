import React from 'react'
import { withStyles, useTheme, Button } from "@material-ui/core"

const ValorantButton = withStyles(theme => ({
  root: {
    // overflow: 'hidden',
    background: 'transparent',
    fontFamily: 'muli',
    fontWeight: 900,
    position: 'relative',
    borderRadius: 0,
    width: 198,
    height: 72,
    fontSize: '1.1rem',
    '& > *': {
      // color: theme.colors.whiteText,
      color: theme.palette.secondary.main,
    },
    '& > span > span > svg': {
      zIndex: 1,
      width: 20,
      height: 20,
      opacity: 0,
      transition: 'opacity .5s cubic-bezier(.19,1,.22,1)',
    },
    '&:hover': {
      // background: 'transparent',
      '& $hoverBg': {
        transform: 'translateX(100%)',
      },
      '& $base': {
        boxShadow: '0 0 20px 10px hsla(355.1, 100%, 63.7%, 0.5)',
      },
      '& $text': {
        transform: 'translate(0px)',
      },
      '& > span > span > svg': {
        opacity: 1,
      }
    },
    '&:before, &:after': {
      content: '""',
      width: 1,
      position: 'absolute',
      height: 8,
      background: theme.palette.background.paper,
      left: -1,
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '&:before': {
      right: -1,
      left: 'initial',
    },
  },
  text: {
    transition: 'all .8s cubic-bezier(.19,1,.9,1)',
    transform: 'translate(12px)',
  },
  base: {
    display: 'block',
    boxSizing: 'border-box',
    position: 'absolute',
    margin: 8,
    width: 180,
    height: 54,
    top: 0,
    left: 0,
    border: `1px solid ${theme.colors.pink}`,
    background: theme.isDark ? 'transparent' : theme.palette.primary.main,
    '&:before, &:after': {
      content: '""',
      width: 4,
      height: 4,
      background: theme.palette.background.paper,
      position: 'absolute',
    },
    '&:before': {
      left: -1,
      top: -1,
    },
    '&:after': {
      right: -1,
      bottom: -1,
    }
  },
  hoverBg: {
    display: 'block',
    zIndex: -1,
    boxSizing: 'border-box',
    position: 'absolute',
    width: 180,
    height: 54,
    background: `linear-gradient(120deg, transparent, hsla(355.1, 100%, 63.7%, 0.5), transparent)`,
    // background: theme.colors.pink,
    opacity: 0,
    transform: 'translateX(-100%)',
    transition: '0.6s',
  },
}))(({ classes, handleSubmit, children, ...props }) => {
  // const theme = useTheme()
  return (
    <Button className={classes.root}
            // variant={ theme.isDark ? "outlined" : "contained" }
            variant={"outlined"}
            onClick={e => handleSubmit()}
            { ...props }>
      {/*<span className={classes.hoverBg} />*/}
      <span className={classes.base} />
      <span className={classes.text}>
        {children}
      </span>
    </Button>
  )
})
export default ValorantButton
