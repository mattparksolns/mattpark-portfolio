import React, { useState } from "react";
import { withStyles, Typography, IconButton } from '@material-ui/core'
import { Close } from "@material-ui/icons"

const AnnouncementBar = withStyles(theme => ({
  root: {
    // backgroundColor: theme.text.primary,
    backgroundColor: 'black',
    padding: 0,
    margin: 0,
    height: '4.5vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& > h6': {
      width: '100%',
      fontSize: 14,
      marginBottom: 0,
      // color: theme.text.inverse,
    },
  },
}))(({ classes }) => {
  const [announcementShown, closeAnnouncement] = useState(true)
  return announcementShown && (
      <div className={classes.root}>
        <Typography variant={"h6"}>COVID-19 Update</Typography>
        <IconButton aria-label="close" onClick={e => closeAnnouncement(false)} color={"inherit"}>
          <Close /></IconButton>
      </div>
    )
})
export default AnnouncementBar
