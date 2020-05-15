import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Container, Typography, Button } from '@material-ui/core'
import { Close } from "@material-ui/icons"

const AnnouncementBar = withStyles((theme) => ({
  root: {
    backgroundColor: theme.text.primary,
    padding: 0,
    margin: 0,
    height: '5.5vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  announcement: {
    width: '100%',
    fontSize: 18,
    marginTop: 10,
    color: theme.text.inverse,
  },
  button: {
    color: theme.text.inverse,
  },
}))(({ classes, closeAnnouncementBar }) => {
  return (
    <Container className={classes.root} maxWidth="xl">
      <Typography className={classes.announcement} variant="h1">
        COVID-19 Update
      </Typography>
      <Button aria-label="close" onClick={closeAnnouncementBar}>
        <Close className={classes.button} />
      </Button>
    </Container>
  )
})
AnnouncementBar.propTypes = {
  closeAnnouncementBar: PropTypes.func.isRequired,
}
export default AnnouncementBar
