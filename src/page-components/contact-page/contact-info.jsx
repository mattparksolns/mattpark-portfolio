import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { makeStyles, createStyles, Typography, Link } from '@material-ui/core'
import { MdLocationCity, GoLocation, FiPhone, FiPhoneCall, RiMailLine, RiMailSendLine } from 'react-icons/all'
import { parsePhoneNumber } from 'libphonenumber-js'

import Socials from '../../components/socials'

const useStyles = makeStyles(({ breakpoints }) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '45%',
            [breakpoints.down('sm')]: {
                justifyContent: 'flex-start',
                width: '100%',
            },
        },
        myName: {
            whiteSpace: 'nowrap',
            fontSize: '7vw',
            [breakpoints.down('sm')]: {
                fontSize: '18vw',
            },
            '@media only screen and (max-width: 360px)': {
                fontSize: '17vw',
            },
        },
        myInfo: {
            [breakpoints.down('sm')]: {
                marginTop: '2vw',
                marginBottom: '5vw',
            },
            [breakpoints.down('xs')]: {
                marginTop: '2vw',
            },
            display: 'flex',
            flexDirection: 'column',
            '& svg': {
                fontSize: '4vw',
                [breakpoints.down('sm')]: {
                    fontSize: '8vw',
                },
                '@media only screen and (max-width: 360px)': {
                    fontSize: 28,
                },
            },
        },
        contactInfo: {
            display: 'flex',
            flexDirection: 'column',
            '& > a': {
                whiteSpace: 'nowrap',
                marginTop: '1vw',
                [breakpoints.down('xs')]: {
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
                    '& > $hoverIcon': {
                        opacity: 1,
                    },
                },
                '& > span': {
                    marginLeft: '1.5vw',
                    // transition: 'all .8s cubic-bezier(.19,1,.9,1)',
                },
                // transition: 'font-size .8s ease',
            },
        },
        hoverIcon: {
            position: 'absolute',
            opacity: 0,
        },
        locationLink: {
            fontSize: '2.9vw',
            [breakpoints.down('sm')]: {
                fontSize: '7.8vw',
            },
            '@media only screen and (max-width: 360px)': {
                fontSize: '7.2vw',
            },
        },
        phoneLink: {
            fontSize: '2.9vw',
            [breakpoints.down('sm')]: {
                fontSize: '8vw',
            },
            '@media only screen and (max-width: 450px)': {
                fontSize: 36,
            },
            '@media only screen and (max-width: 375px)': {
                fontSize: '10vw',
            },
        },
        emailLink: {
            fontSize: '1.83vw',
            [breakpoints.down('sm')]: {
                fontSize: '5vw',
            },
            '@media only screen and (max-width: 350px)': {
                fontSize: '4.5vw',
            },
        },
        socials: {
            marginTop: '4vh',
            [breakpoints.down('xs')]: {
                marginTop: 0,
            },
            '& > a': {
                fontSize: 40,
                marginRight: '2vw',
                [breakpoints.down('xs')]: {
                    marginRight: '4vw',
                },
            },
        },
    }),
)

export const PureContactInfo = ({
    data: {
        site: {
            siteMetadata: {
                author: { name, email, phone_number },
            },
        },
    },
    ...props
}) => {
    const classes = useStyles()
    const phoneNumber = parsePhoneNumber(phone_number)

    return (
        <div className={classes.root} {...props}>
            <Typography className={classes.myName} variant="h1">
                {name}
            </Typography>
            <div className={classes.myInfo}>
                <div className={classes.contactInfo}>
                    <Link
                        className={classes.locationLink}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        href={'https://goo.gl/maps/qm8HMXfbXSABazKRA'}
                    >
                        <GoLocation className={classes.hoverIcon} />
                        <MdLocationCity />
                        <span>
                            New York, New York
                            <br />
                            United States
                        </span>
                    </Link>
                    <Link className={classes.emailLink} target={'_top'} href={`mailto:${email}`}>
                        <RiMailSendLine className={classes.hoverIcon} />
                        <RiMailLine />
                        <span>{email}</span>
                    </Link>
                    <Link className={classes.phoneLink} target={'_top'} href={phoneNumber.getURI()}>
                        <FiPhoneCall className={classes.hoverIcon} />
                        <FiPhone />
                        <span>{phoneNumber.formatNational()}</span>
                    </Link>
                </div>
                <Socials className={classes.socials} />
            </div>
        </div>
    )
}
PureContactInfo.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                author: PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    email: PropTypes.string.isRequired,
                    phone_number: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
}

const ContactInfo = props => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author {
                        name
                        email
                        phone_number
                    }
                }
            }
        }
    `)

    return <PureContactInfo data={data} {...props} />
}
export default ContactInfo
