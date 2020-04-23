import React from 'react'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'darkgray',
    color: 'black',
    width: '100vw',
    height: '5vh',
    textAlign: 'center',
  },
  container: {
    border: '1px solid black',
  },
}))

const AnnouncementBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h6">
          COVID-19 Update
        </Typography>
      </div>
    </div>
  )
}

export default AnnouncementBar