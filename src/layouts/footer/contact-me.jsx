import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { makeStyles, createStyles, Typography, Link, SvgIcon } from '@material-ui/core'

import Socials from '../../components/socials'
import Signature from '../../../static/assets/images/signature.svg'

const useStyles = makeStyles(({ palette, breakpoints, spacing }) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '6.944444vw',
            [breakpoints.down('sm')]: {
                paddingTop: spacing(6),
            },
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            [breakpoints.down('xs')]: {
                flexDirection: 'column',
                '& > div': {
                    paddingTop: spacing(2),
                },
            },
        },
        message: {
            width: '65%',
            fontSize: '3.5vw',
            [breakpoints.down('sm')]: {
                fontSize: 30,
                width: 360,
            },
            '@media only screen and (max-width: 390px)': {
                width: '100%',
                fontSize: '7.5vw',
            },
            '@media only screen and (max-width: 280px)': {
                fontSize: '7vw',
            },
            '& > a': {
                fontStyle: 'italic',
                '&:hover': {},
            },
        },
        letsConnect: {
            textAlign: 'right',
            [breakpoints.down('xs')]: {
                textAlign: 'left',
            },
            '& > p': {
                fontStyle: 'italic',
                fontSize: '1vw',
                [breakpoints.down('md')]: {
                    fontSize: 14,
                },
            },
        },
        socials: {
            marginTop: 5,
            '& svg': {
                fontSize: 20,
            },
            '& > a:nth-last-of-type(n+2)': {
                marginRight: 20,
                // marginRight: '1.3888889vw',
                // [breakpoints.down('sm')]: {
                //     marginRight: 20,
                // },
            },
        },
        thankYou: {
            margin: '6.944vw 0',
            position: 'relative',
        },
        logo: {
            color: palette.secondary.main,
            height: '12.5vw',
            width: '12.5vw',
            borderRadius: '50%',
            border: '2px solid',
            boxShadow: `0px 0px 5px ${palette.secondary.main}`,
            // textShadow: `0px 0px 10px ${palette.secondary.main}`,
            position: 'relative',
            overflow: 'hidden',
            margin: '0 auto',
            [breakpoints.down('xs')]: {
                margin: 0,
                height: 75,
                width: 75,
            },
            '@media only screen and (max-width: 390px)': {
                height: '19.2307vw',
                width: '19.2307vw',
            },
            '& > h2': {
                fontFamily: 'tungsten',
                fontWeight: 900,
                whiteSpace: 'nowrap',
                position: 'absolute',
                width: '100%',
                height: '100%',
                textAlign: 'center',
                fontSize: '9.9vw',
                [breakpoints.down('xs')]: {
                    fontSize: 54.144,
                },
                '@media only screen and (max-width: 390px)': {
                    fontSize: '14vw',
                },
            },
        },
        messageAndSignature: {
            position: 'absolute',
            // top: '20%',
            top: '0%',
            left: 'calc(50% + 9.027777vw)',
            height: 'auto',
            width: '24vw',
            [breakpoints.down('xs')]: {
                width: 150,
                left: 100,
            },
            '@media only screen and (max-width: 390px)': {
                left: '25.5vw',
            },
            '& > p': {
                fontFamily: 'NanumPenScript',
                marginBottom: '1vw',
                fontStyle: 'italic',
                fontSize: '1.4vw',
                [breakpoints.down('md')]: {
                    fontSize: 17.99,
                },
                '@media only screen and (max-width: 390px)': {
                    fontSize: '4.4vw',
                },
            },
            '& > svg': {
                marginLeft: '2.08333vw',
                width: '20vw',
                height: 'auto',
                [breakpoints.down('xs')]: {
                    width: 120,
                },
                '@media only screen and (max-width: 390px)': {
                    width: '31vw',
                },
            },
        },
    }),
)

const ContactMe = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography className={classes.message} variant={'h1'}>
                    <Link color={'secondary'} component={GatsbyLink} to="/contact/">
                        Drop me a line,
                    </Link>{' '}
                    I&#39;d like to hear from you!
                </Typography>
                <div className={classes.letsConnect}>
                    <Typography variant={'body1'}>Lets connect!</Typography>
                    <Socials className={classes.socials} />
                </div>
            </div>
            <div className={classes.thankYou}>
                <div className={classes.logo}>
                    <Typography variant={'h2'}>MP</Typography>
                </div>
                <div className={classes.messageAndSignature}>
                    <Typography variant={'body1'}>
                        Thank you for visiting
                        <br />
                        my portfolio!
                    </Typography>
                    <SvgIcon component={Signature} viewBox={'0 0 204.13 35.46'} />
                </div>
            </div>
        </div>
    )
}
export default ContactMe
