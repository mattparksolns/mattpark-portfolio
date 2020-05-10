import React from 'react'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'
import SEO from '../seo'


const useStyles = makeStyles((theme) => ({
  root: {
  },
}))

const WorkPage = () => {
  // const classes = useStyles()

  return (
    <>
      <SEO pageTitle="Work" />
      <Typography variant="h1">My Projects</Typography>
      <Typography variant="h4">
        Under construction..
      </Typography>
    </>
  )
}

export default WorkPage
