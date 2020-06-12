import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Typography } from "@material-ui/core";

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
    <div className={`${classes.root} contentWrapper`}>
      <Typography variant="h2">Projects</Typography>
      <div className={classes.placeholder}>
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
      </div>
    </div>
  )
})
WorkPage.propTypes = {
  classes: PropTypes.object,
}
export default WorkPage
