import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles, createStyles, Switch } from '@material-ui/core'

const useStyles = makeStyles(({ palette, breakpoints, transitions, spacing }) =>
    createStyles({
        root: {
            transition: 'all .8s cubic-bezier(.19,1,.9,1)',
            [breakpoints.down('xs')]: {
                marginRight: spacing(2),
            },
            padding: 0,
            width: 24,
            height: 14,
        },
        switchBase: {
            padding: 0,
            color: palette.primary.main,
            top: 1,
            left: 1,
            '&$checked': {
                color: palette.primary.main,
                transform: 'translateX(10px)',
                '& + $track': {
                    backgroundColor: palette.background.default,
                    opacity: 1,
                },
            },
        },
        thumb: {
            width: 12,
            height: 12,
        },
        track: {
            borderRadius: 26 / 2,
            border: `2px solid ${palette.primary.main}`,
            backgroundColor: palette.background.default,
            opacity: 1,
            transition: transitions.create(['background-color', 'border']),
        },
        checked: {},
        // eslint-disable-next-line no-unused-vars
    }),
)
const DarkModeSwitch = props => {
    const themeType = useSelector(state => state.app.themeType)
    const classes = useStyles()
    return (
        <Switch
            classes={{ ...classes }}
            checked={themeType === 'dark'}
            onChange={() => window.__setThemeType(themeType === 'dark' ? 'light' : 'dark')}
            inputProps={{ 'aria-label': 'dark-mode switch' }}
            {...props}
        />
    )
}
export default DarkModeSwitch
