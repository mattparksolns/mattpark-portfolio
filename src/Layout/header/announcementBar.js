import React, { useState } from 'react'
import {
  makeStyles,
  Typography,
  IconButton,
} from '@material-ui/core'
import {
  Close,
} from "@material-ui/icons"


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    backgroundColor: 'darkgray',
    color: 'black',
    width: '100%',
    height: '5.5vh',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '1vh',
  },
  announcement: {
    width: '98%',
    fontSize: 18,
  },
  button: {
    color: 'black',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    padding: 0,
  },
  empty: {
  },
}))

const AnnouncementBar = () => {
  const classes = useStyles()
  const [isHidden, setIsHidden] = useState(false)

  const handleClose = () => {
    console.log('isHidden: ' + isHidden)
    setIsHidden(!isHidden)
  }

  return (
    <div className={classes.root}>
      { isHidden
        ? <div className={classes.empty} />
        : <div className={classes.container}>
            <Typography className={classes.announcement} variant="h6">
              COVID-19 Update
            </Typography>
            <IconButton
              edge="start"
              className={classes.button}
              color="inherit"
              aria-label="Close AnnouncementBar Button"
              onClick={handleClose}
              disableRipple
              disableFocusRipple
            >
              <Close />
            </IconButton>
          </div>
      }
    </div>
  )
}

export default AnnouncementBar