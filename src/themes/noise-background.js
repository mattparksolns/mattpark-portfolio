import React from 'react'
import { withStyles, Box } from '@material-ui/core'

import noise from '../../static/assets/images/noise.png'

const NoiseBackground = withStyles(() => ({
    '@keyframes grain': {
        '0%, 100%': {
            transform: 'translate(0, 0)',
        },
        '10%': {
            transform: 'translate(-5%, -10%)',
        },
        '20%': {
            transform: 'translate(-15%, 5%)',
        },
        '30%': {
            transform: 'translate(7%, -25%)',
        },
        '40%': {
            transform: 'translate(-5%, 10%)',
        },
        '50%': {
            transform: 'translate(-15%, 0%)',
        },
        '60%': {
            transform: 'translate(15%, 0%)',
        },
        '70%': {
            transform: 'translate(0%, 15%)',
        },
        '80%': {
            transform: 'translate(3%, 35%)',
        },
        '90%': {
            transform: 'translate(-10%, 10%)',
        },
    },
    noiseWrapper: {
        position: 'fixed',
        boxSizing: 'content-box',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        zIndex: 1301,
        pointerEvents: 'none',
    },
    noiseOverlay: {
        position: 'absolute',
        top: '-120%',
        left: '-50%',
        height: '300%',
        width: '300%',
        background: `url(${noise}) center`,
        // backgroundSize: 'auto',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'repeat',
        // backgroundColor: 'transparent',
        animation: '$grain 8s steps(10) infinite',
        opacity: 0.7,
    },
    noiseBackground: {
        backgroundSize: 'auto',
    },
}))(({ classes }) => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         noiseBackground: file(relativePath: { eq: "images/noise.png" }) {
    //             childImageSharp {
    //                 fluid(quality: 90) {
    //                     ...GatsbyImageSharpFluid_withWebp
    //                 }
    //             }
    //         }
    //     }
    // `)
    return (
        <Box className={classes.noiseWrapper}>
            <Box className={classes.noiseOverlay} />
        </Box>
    )
})
export default NoiseBackground
