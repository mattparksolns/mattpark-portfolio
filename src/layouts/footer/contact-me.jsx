import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { makeStyles, createStyles, Typography, Link, SvgIcon } from '@material-ui/core'

import Socials from '../../components/socials'
// import GradientPoster from '../../../static/assets/images/gradient-poster.jpg'
import Gradient from '../../../static/assets/videos/gradient.mp4'
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
                position: 'absolute',
                fontFamily: 'tungsten',
                fontWeight: 900,
                whiteSpace: 'nowrap',
                width: '100%',
                height: '12.5vw',
                lineHeight: '12.5vw',
                textAlign: 'center',
                fontSize: '9.9vw',
                [breakpoints.down('xs')]: {
                    fontSize: 54.144,
                    height: 75,
                    lineHeight: '75px',
                },
                '@media only screen and (max-width: 390px)': {
                    fontSize: '14vw',
                    height: '19.2307vw',
                    lineHeight: '19.2307vw',
                },
            },
        },
        gradient: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 2,
        },
        messageAndSignature: {
            position: 'absolute',
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
                    <span className={classes.gradient}>
                        <video
                            muted
                            playsInline
                            preload={'auto'}
                            poster={'../../../static/assets/images/gradient-poster.jpg'}
                            // src={'../../../static/assets/videos/gradient.mp4'}
                            src={Gradient}
                            type={'video/mp4'}
                        />
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306 174" aria-hidden="true">
                        <defs>
                            <clipPath
                                id="title-mask"
                                clipPathUnits="objectBoundingBox"
                                transform="scale(0.003268, 0.005747)"
                            >
                                <path
                                    d="M21.7 49.4c-4.1 0-7.6-1.4-10.2-4.2-2.7-2.7-4-6-4-10A14 14 0 0121.6 21c4.2 0 7.6 1.4 10.4 4.2 2.7 2.8 4 6.2 4 10.1 0 4-1.3 7.3-4 10a14 14 0 01-10.4 4.2zm-11.5 6.3h23V129h-23V55.7zm111-33.1V129H98v-10.3c-2 3.6-5.1 6.6-9.3 8.9a33.5 33.5 0 01-32.4-1.6c-5.2-3.4-9.2-8-12-13.8a46.1 46.1 0 01-4-19.8c0-7.3 1.4-14 4.2-19.8a32.8 32.8 0 0130.6-18.8c5.1 0 9.8 1 13.8 3.3 4 2.2 7.1 5.3 9.1 9.1V22.6h23.1zm-39.7 89c5.5 0 9.8-1.8 12.9-5.4 3-3.6 4.5-8.3 4.5-13.8s-1.5-10-4.5-13.7c-3-3.7-7.4-5.5-13-5.5-5.2 0-9.4 1.8-12.6 5.3A19.9 19.9 0 0064 92.4c0 5.6 1.6 10.3 4.8 13.9 3.2 3.6 7.4 5.4 12.7 5.4zm124-23c0 3.1-.2 6.5-.6 10.2h-54.1c.2 4.7 1.8 8.4 4.9 10.9 3 2.5 7.1 3.8 12.3 3.8 7.2 0 11.7-2.2 13.6-6.5h22.8c-1 7.2-5 13-11.7 17.4-6.8 4.4-15 6.6-24.7 6.6a41.2 41.2 0 01-29.6-10.2 37.3 37.3 0 01-10.7-28.4c0-8 1.6-14.8 4.8-20.6a32.6 32.6 0 0113.9-13.4c6-3 12.9-4.6 20.8-4.6 7.5 0 14.2 1.4 20 4.4a32.5 32.5 0 0118.3 30.4zm-23-4.3c0-4.9-1.4-8.6-4-11-2.7-2.6-6.5-3.9-11.4-3.9-5 0-9 1.4-11.8 4a14.6 14.6 0 00-4.5 11h31.8zm59.8 46.7a32.2 32.2 0 01-30.4-18.8 46.1 46.1 0 01-4.1-19.8c0-7.3 1.4-14 4.3-19.8a32.8 32.8 0 0130.5-18.8c5.2 0 9.8 1 13.8 3.3 4 2.2 7.1 5.3 9.2 9.1V55.7h23V129h-23v-10.3c-2 3.6-5.2 6.6-9.4 8.9a28.7 28.7 0 01-13.9 3.4zm6.7-19.3c5.6 0 9.9-1.9 13-5.5 3-3.6 4.5-8.3 4.5-13.8s-1.5-10-4.6-13.7c-3-3.7-7.3-5.5-13-5.5-5.2 0-9.4 1.8-12.6 5.3a19.9 19.9 0 00-4.8 13.9c0 5.6 1.6 10.3 4.8 13.9 3.2 3.6 7.4 5.4 12.7 5.4z"
                                    fill="#000"
                                    fillRule="nonzero"
                                />
                            </clipPath>
                        </defs>
                    </svg>
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
