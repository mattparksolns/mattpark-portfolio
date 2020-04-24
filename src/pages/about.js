import React from 'react'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'

import Layout from '../layout'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  titleContainer: {
    marginBottom: '5vh',
  },
  aboutContainer: {
    marginBottom: '7vh',
  },
}))


const About = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.titleContainer}>
          <Typography variant="h1">About Me</Typography>
        </div>
        <div className={classes.aboutContainer}>
          <Typography variant="h4">
            Adaptable and self motivated learner that's passionate about the
            latest and greatest technologies with an emphasis on security
            research/analysis and penetration testing.
            <br /><br />
            I enjoy doing ctf's in my spare time and writing scripts using either
            bash or python to simplify workflow that becomes too repetitive.
            <br /><br />
            My willingness to learn and adapt may surely be an asset to you, your
            team and your company; with time, relevant skills, right mindset and
            a chance, I believe anyone can be valuable to any company.
            <br /><br />
            I am currently open to opportunities within the cyber security
            discipline and if you feel as though my listed skills or willingness
            to learn/improve would be a great match for your company then it
            would be my utmost pleasure to hear from you.
          </Typography>
        </div>
      </div>
    </Layout>
  )
}

export default About