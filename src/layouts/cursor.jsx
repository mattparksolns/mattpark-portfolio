import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createStyles } from '@material-ui/core'

// type CursorProps = {
//     path: string
// }

const useStyles = makeStyles(({ palette: { cursor } }) =>
    createStyles({
        mouseIndicator: {
            zIndex: 9999,
            position: 'fixed',
            width: 20,
            height: 20,
            marginLeft: -10,
            marginTop: -10,
            borderRadius: '50%',
            background: cursor.mouseIndicator,
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
                border: `2px solid ${cursor.innerMouseIndicator}`,
                '-webkit-transform': 'translate(-10px, -10px)',
                '-moz-transform': 'translate(-10px, -10px)',
                '-o-transform': 'translate(-10px, -10px)',
                '-ms-transform': 'translate(-10px, -10px)',
                transform: 'translate(-10px, -10px)',
                /*
                    Set each transition individually so that mouseIndicator
                    does not have delay when moving mouse over activators
                */
                '-webkit-transition': 'height 0.3s ease-out, width 0.3s ease-out, transform 0.3s ease-out',
                '-moz-transition': 'height 0.3s ease-out, width 0.3s ease-out, transform 0.3s ease-out',
                '-o-transition': 'height 0.3s ease-out, width 0.3s ease-out, transform 0.3s ease-out',
                '-ms-transition': 'height 0.3s ease-out, width 0.3s ease-out, transform 0.3s ease-out',
                transition: 'height 0.3s ease-out, width 0.3s ease-out, transform 0.3s ease-out',
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
            background: cursor.innerMouseIndicator,
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
    }),
)
const Cursor = ({ path }) => {
    const classes = useStyles()
    useEffect(() => {
        const innerMouseIndicator = document.querySelector(`.${classes.innerMouseIndicator}`)
        const mouseIndicator = document.querySelector(`.${classes.mouseIndicator}`)
        document.body.addEventListener('mouseleave', () => {
            innerMouseIndicator.classList.remove('show')
            mouseIndicator.classList.remove('show')
        })
        document.body.addEventListener('mousemove', event => {
            innerMouseIndicator.classList.add('show')
            mouseIndicator.classList.add('show')
            const mouseX = event.pageX
            const mouseY = event.pageY - document.scrollingElement.scrollTop
            innerMouseIndicator.style.left = `${mouseX}px`
            innerMouseIndicator.style.top = `${mouseY}px`
            mouseIndicator.style.left = `${mouseX}px`
            mouseIndicator.style.top = `${mouseY}px`
            // setTimeout(() => {
            //     mouseIndicator.style.left = `${mouseX}px`
            //     mouseIndicator.style.top = `${mouseY}px`
            // }, 100)
        })
        document
            .querySelectorAll('a, .MuiLink-root, .MuiButtonBase-root, .MuiFormControl-root, .MuiFormControlLabel-root')
            .forEach(element => {
                element.addEventListener('mouseover', () => mouseIndicator.classList.add('active'))
                element.addEventListener('mouseleave', () => mouseIndicator.classList.remove('active'))
            })
    }, [classes, path])
    return (
        <>
            <div className={classes.mouseIndicator} />
            <div className={classes.innerMouseIndicator} />
        </>
    )
}
Cursor.propTypes = {
    path: PropTypes.string.isRequired,
}
export default Cursor
