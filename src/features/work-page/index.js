import React from 'react'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
  },
}))

const WorkPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h1">My Projects</Typography>
      <Typography variant="h4">
        Under construction..
      </Typography>
    </div>
  )
}

export default WorkPage