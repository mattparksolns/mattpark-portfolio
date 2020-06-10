import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Box, Typography } from "@material-ui/core";
import SEO from '../../features/seo'

const WorkPage = withStyles(theme => ({
  root: {
  },
  placeholder: {
    padding: theme.spacing(5, 0),
    '& > h3': {
      marginTop: '10vh',
      textAlign: 'center',
    },
  }
}))(({ classes }) => {
  return (
    <Box className={`${classes.root} contentWrapper`}>
      <SEO pageTitle="Work" />
      <Typography variant="h2">Projects</Typography>
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
    </Box>
  )
})
WorkPage.propTypes = {
  classes: PropTypes.object,
}
export default WorkPage
