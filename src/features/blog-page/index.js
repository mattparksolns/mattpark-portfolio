import React from 'react'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
  },
}))

const BlogPage = ({ data, location }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="h1">My Blog</Typography>
      <Typography variant="h4">
        Under construction..
      </Typography>
    </div>
  )
}

export default BlogPage