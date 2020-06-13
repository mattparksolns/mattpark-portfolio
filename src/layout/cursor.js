import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core'

const Cursor = withStyles(theme => ({
    mouseIndicator: {
        zIndex: 9999,
        position: 'fixed',
        width: 20,
        height: 20,
        marginLeft: -10,
        marginTop: -10,
        borderRadius: '50%',
        background: theme.palette.text.mouseIndicator,
        mixBlendMode: 'luminosity',
        pointerEvents: 'none',
        transition: 'opacity 0.3s 0s ease-out',
        opacity: 0,
        '&.show': {
            opacity: 0.5,
        },
        '&.active': {
            height: 40,
            width: 40,
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            border: `2px solid ${theme.palette.text.innerMouseIndicator}`,
            '-webkit-transform': 'translate(-10px, -10px)',
            '-moz-transform': 'translate(-10px, -10px)',
            '-o-transform': 'translate(-10px, -10px)',
            '-ms-transform': 'translate(-10px, -10px)',
            transform: 'translate(-10px, -10px)',
            /*
                Set each transition individually so that mouseIndicator
                does not have delay when moving mouse over activators
            */
            '-webkit-transition':
                'height 0.3s ease-out, width 0.3s ease-out, transform 0.3s ease-out',
            '-moz-transition':
                'height 0.3s ease-out, width 0.3s ease-out, transform 0.3s ease-out',
            '-o-transition':
                'height 0.3s ease-out, width 0.3s ease-out, transform 0.3s ease-out',
            '-ms-transition':
                'height 0.3s ease-out, width 0.3s ease-out, transform 0.3s ease-out',
            transition:
                'height 0.3s ease-out, width 0.3s ease-out, transform 0.3s ease-out',
        },
    },
    innerMouseIndicator: {
        zIndex: 9999,
        position: 'fixed',
        width: 4,
        height: 4,
        marginLeft: -2,
        marginTop: -2,
        borderRadius: '50%',
        background: theme.palette.text.innerMouseIndicator,
        pointerEvents: 'none',
        '-webkit-transition': 'opacity 0.3s 0s ease-out',
        '-moz-transition': 'opacity 0.3s 0s ease-out',
        '-o-transition': 'opacity 0.3s 0s ease-out',
        transition: 'opacity 0.3s 0s ease-out',
        opacity: 0,
        '&.show': {
            opacity: 1,
        },
    },
}))(({ classes, location }) => {
    useEffect(() => {
        document.body.addEventListener('mouseleave', e => {
            document
                .querySelector('.innerMouseIndicator')
                .classList.remove('show')
            document.querySelector('.mouseIndicator').classList.remove('show')
        })
        document.body.addEventListener('mousemove', e => {
            document.querySelector('.innerMouseIndicator').classList.add('show')
            document.querySelector('.mouseIndicator').classList.add('show')
            let mouseX = e.pageX
            let mouseY = e.pageY - document.scrollingElement.scrollTop
            document.querySelector(
                '.innerMouseIndicator'
            ).style.left = `${mouseX}px`
            document.querySelector(
                '.innerMouseIndicator'
            ).style.top = `${mouseY}px`
            document.querySelector('.mouseIndicator').style.left = `${mouseX}px`
            document.querySelector('.mouseIndicator').style.top = `${mouseY}px`
            setTimeout(() => {}, 100)
        })
        const hoverElements = document.querySelectorAll(
            'a, .MuiLink-root, .MuiButtonBase-root, .MuiFormControl-root, .MuiFormControlLabel-root'
        )
        for (const element of hoverElements) {
            element.addEventListener('mouseover', e => {
                document
                    .querySelector('.mouseIndicator')
                    .classList.add('active')
            })
            element.addEventListener('mouseleave', e => {
                document
                    .querySelector('.mouseIndicator')
                    .classList.remove('active')
            })
        }
    }, [location.pathname])
    return (
        <>
            <div className={`${classes.mouseIndicator} mouseIndicator`} />
            <div
                className={`${classes.innerMouseIndicator} innerMouseIndicator`}
            />
        </>
    )
})
export default Cursor
