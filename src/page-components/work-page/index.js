import React from 'react'
import { withStyles, Box, Typography } from "@material-ui/core";
import SEO from '../../features/seo'

const WorkPage = withStyles(theme => ({
  placeholder: {
    marginTop: '10vh',
    '& > h3': {
      marginTop: '10vh',
      textAlign: 'center',
    },
    marginBottom: '10vh'
  }
}))(({ classes }) => {
  return (
    <>
      <SEO pageTitle="Work" />
      <Typography variant="h2">Projects</Typography>
      <Typography variant="h4">
        Under construction..
        <Box className={classes.placeholder}>
          <Typography variant={"h3"}>
            Project 1
          </Typography>
          <Typography variant={"h3"}>
            Project 2
          </Typography>
          <Typography variant={"h3"}>
            Project 3
          </Typography>
          <Typography variant={"h3"}>
            Project 4
          </Typography>
          <Typography variant={"h3"}>
            Project 5
          </Typography>
        </Box>
      </Typography>
    </>
  )
})

export default WorkPage
