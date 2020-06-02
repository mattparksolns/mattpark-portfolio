import React from 'react'
import { withStyles, Box, Typography, Link } from '@material-ui/core'
import {
  MdLocationCity, GoLocation,
  FiPhone, FiPhoneCall,
  RiMailLine, RiMailSendLine,
  FiGithub, FaLinkedinIn
} from 'react-icons/all'

const ContactInfo = withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '45%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      width: '100%',
    },
  },
  myName: {
    whiteSpace: 'nowrap',
    fontSize: '7vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18vw',
    },
    '@media only screen and (max-width: 360px)': {
      fontSize: '17vw'
    },
  },
  myInfo: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '2vw',
      marginBottom: '5vw',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2vw',
    },
    display: 'flex',
    flexDirection: 'column',
    '& svg': {
      fontSize: '4vw',
      [theme.breakpoints.down('sm')]: {
        fontSize: '8vw',
      },
      '@media only screen and (max-width: 360px)': {
        fontSize: 28,
      }
    },
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    '& > a': {
      whiteSpace: 'nowrap',
      marginTop: '1vw',
      [theme.breakpoints.down('xs')]: {
        marginTop: '3vw',
      },
      '@media only screen and (max-width: 200px)': {
        marginTop: 0,
      },
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& > svg': {
        transition: 'opacity .8s cubic-bezier(.19,1,.22,1)',
      },
      '&:hover': {
        '& > svg:not($hoverIcon)': {
          opacity: 0,
        },
        '& > $hoverIcon':{
          opacity: 1
        },
      },
      '& > span': {
        marginLeft: '1.5vw',
      },
    }
  },
  hoverIcon: {
    position: "absolute",
    opacity: 0,
  },
  locationLink: {
    fontSize: '2.9vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '7.8vw',
    },
    '@media only screen and (max-width: 360px)': {
      fontSize: '7.2vw'
    },
  },
  phoneLink: {
    fontSize: '4vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10.5vw',
    },
    '@media only screen and (max-width: 360px)': {
      fontSize: '10vw'
    },
  },
  emailLink: {
    fontSize: '1.83vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '5vw',
    },
    '@media only screen and (max-width: 350px)': {
      fontSize: '4.5vw',
    },
  },
  socials: {
    marginTop: '4vh',
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
    '& > a': {
      fontSize: 40,
      marginRight: '2vw',
      [theme.breakpoints.down('xs')]: {
        marginRight: '4vw',
      },
    },
  },
}))(({ classes }) => {
  return (
    <Box className={classes.root}>
      <Typography className={classes.myName} variant="h1">
        Matt Park
      </Typography>
      <div className={classes.myInfo}>
        <Typography className={classes.contactInfo} variant="h2">
          <Link className={classes.locationLink}
                target={"_blank"} rel={"noopener noreferrer"}
                href={"https://goo.gl/maps/qm8HMXfbXSABazKRA"}>
            <GoLocation className={classes.hoverIcon} /><MdLocationCity />
            <span>
              New York, New York<br />
              United States
            </span>
          </Link>
          <Link className={classes.phoneLink}
                target={"_top"} href={"tel:+1201-591-3323"}>
            <FiPhoneCall className={classes.hoverIcon} /><FiPhone />
            <span>(201) 591 - 3323</span>
          </Link>
          <Link className={classes.emailLink}
                target={"_top"} href={"mailto:mattparksolutions@gmail.com"}>
            <RiMailSendLine className={classes.hoverIcon} /><RiMailLine />
            <span>mattparksolutions@gmail.com</span>
          </Link>
        </Typography>
        <Typography className={classes.socials} variant="h2">
          <Link title="GitHub" target="_blank" rel="noopener noreferrer"
                href="https://github.com/mattparksolutions"><FiGithub /></Link>
          <Link title="LinkedIn" target="_blank" rel="noopener noreferrer"
                href="https://linkedin.com/in/mattparksolutions"><FaLinkedinIn /></Link>
        </Typography>
      </div>
    </Box>
  )
})
export default ContactInfo
