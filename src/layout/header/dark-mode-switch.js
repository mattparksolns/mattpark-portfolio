import React from 'react'
import { withStyles, Switch } from '@material-ui/core'


const DarkModeSwitch = withStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 1, 1.5, 0),
    padding: 0,
    width: 42,
    height: 26,
  },
  switchBase: {
    padding: 1,
    color: 'black',
    '&$checked': {
      color: 'white',
      transform: 'translateX(16px)',
      '& + $track': {
        backgroundColor: 'gray',
        opacity: 1,
        border: 'none',
      }
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[900]}`,
    backgroundColor: theme.palette.grey[500],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  checked: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      classes={classes}
      {...props}
    />
  )
})

export default DarkModeSwitch