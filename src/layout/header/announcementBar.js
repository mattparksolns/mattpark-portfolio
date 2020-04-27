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
    zIndex: 2,
    position: 'fixed',
    backgroundColor: 'gray',
    // color: 'black',
    width: '100%',
    height: '5.5vh',
    textAlign: 'center',
    pointerEvents: 'none',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '1vh',
    pointerEvents: 'none',
  },
  announcement: {
    width: '98%',
    fontSize: 18,
  },
  button: {
    color: 'black',
    // '&:hover': {
    //   backgroundColor: 'transparent',
    // },
    padding: 0,
  },
  empty: {
  },
}))

const AnnouncementBar = ({ handleCloseAnnouncementBar }) => {
  const classes = useStyles()
  const [isHidden, setIsHidden] = useState(false)

  const handleClose = () => {
    console.log('isHidden: ' + isHidden)
    setIsHidden(!isHidden)
    if(isHidden) {
      return 'none'
    }
  }

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
          disableRipple
          disableFocusRipple
        >
          <Close onClick={handleCloseAnnouncementBar} />
        </Button>
      </div>
      {/*{ isHidden*/}
      {/*  ? <div className={classes.empty} />*/}
      {/*  : <div className={classes.container}>*/}
      {/*      <Typography className={classes.announcement} variant="h6">*/}
      {/*        COVID-19 Update*/}
      {/*      </Typography>*/}
      {/*      <IconButton*/}
      {/*        edge="start"*/}
      {/*        className={classes.button}*/}
      {/*        color="inherit"*/}
      {/*        aria-label="Close AnnouncementBar Button"*/}
      {/*        onClick={(e) => handleClose(e)}*/}
      {/*        disableRipple*/}
      {/*        disableFocusRipple*/}
      {/*      >*/}
      {/*        <Close />*/}
      {/*      </IconButton>*/}
      {/*    </div>*/}
      {/*}*/}
    </div>
  )
}

export default AnnouncementBar