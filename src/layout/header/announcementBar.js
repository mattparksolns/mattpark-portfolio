import React, { useState } from 'react'
import {
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core'
import {
  Close,
} from "@material-ui/icons"


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    left: 0,
    backgroundColor: 'gray',
    // color: 'black',
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

const AnnouncementBar = ({ handleCloseAnnouncementBar }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.announcement} variant="h6">
          COVID-19 Update
        </Typography>
        <Button
          className={classes.button}
          color="inherit"
          aria-label="Close AnnouncementBar Button"
          onClick={handleCloseAnnouncementBar}
          disableRipple
          disableFocusRipple
        >
          <Close />
        </Button>
      </div>
    </div>
  )
}

export default AnnouncementBar