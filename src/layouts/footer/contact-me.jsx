import React, { useRef, useEffect } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { makeStyles, createStyles, Typography, Link, SvgIcon } from '@material-ui/core'

import Socials from '../../components/socials'
import GradientPoster from '../../../static/assets/images/gradient-poster.jpg'
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
            '& > svg': {
                height: '100%',
            },
        },
        gradient: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 2,
            top: '23%',
            left: '14.5%',
            clipPath: 'url(#logo-mask)',
            '& > video': {
                position: 'absolute',
                height: '100%',
                top: '-24%',
                left: '-180%',
            },
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
    const gradientReference = useRef()

    useEffect(() => {
        const { current: videoElement } = gradientReference
        videoElement.setAttribute('muted', '')
        const interval = setInterval(() => videoElement.play(), 1000)
        return function cleanup() {
            clearInterval(interval)
        }
    })

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
                            ref={gradientReference}
                            muted
                            playsInline
                            preload={'auto'}
                            poster={GradientPoster}
                            src={Gradient}
                        />
                    </span>
                    <svg viewBox="0 0 134 107" xmlns="http://www.w3.org/2000/svg" aria-hidden={'true'}>
                        <defs>
                            <clipPath id={'logo-mask'} clipPathUnits={'objectBoundingBox'} transform={'scale(0.00537)'}>
                                <path
                                    d="M31.169 0.555196L37.4037 64.8783L43.7903 0.555196H74.6593V107H53.6745V37.2026L45.6151 107H25.5427L17.4833 36.4423V107H0.452105V0.555196H31.169ZM103.565 70.0484V107H82.2756V0.555196H113.449C126.628 0.555196 133.217 7.14464 133.217 20.3235V50.2801C133.217 63.459 126.628 70.0484 113.449 70.0484H103.565ZM111.928 22.6045C111.928 20.0701 110.661 18.8029 108.126 18.8029H103.565V51.8008H108.126C110.661 51.8008 111.928 50.5336 111.928 47.9992V22.6045Z"
                                    fill={'black'}
                                    fillRule={'nonzero'}
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
