import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createStyles, TextField } from '@material-ui/core'

// type StyledTextFieldProps = {
//     label?: string
//     value?: string
//     error?: boolean
//     helperText?: string
//     variant?: 'standard' | 'filled' | 'outlined'
//     onChange?: (event: FormEvent) => void
//     onFocus?: () => void
//     onInput?: () => void
//     onBlur?: () => void
//     inputProps?: Record<string, unknown>
//     InputLabelProps?: Record<string, unknown>
//     InputProps?: Record<string, unknown>
//     multiline?: boolean
//     rows?: number
// }

const useStyles = makeStyles(({ palette, spacing }) =>
    createStyles({
        root: ({ error }) => ({
            width: '100%',
            marginBottom: error ? 0 : spacing(2),
            '& > .MuiFormHelperText-root': {
                margin: '0px 0px 4px 0px',
            },
        }),
        label: {
            // color: text.hover2,
            '&$focused': {
                // color: text.primary,
            },
        },
        focused: {},
        outlinedInput: {
            borderRadius: 0,
            '&$focused': {
                backgroundColor: palette.background.default,
            },
            '&$focused $notchedOutline': {
                // borderColor: text.primary,
            },
        },
        notchedOutline: {
            // borderColor: text.primary,
        },
    }),
)

const StyledTextField = ({
    label,
    value,
    error,
    helperText,
    variant = 'outlined',
    onChange,
    onFocus,
    onInput,
    onBlur,
    inputProps,
    InputLabelProps,
    InputProps,
    multiline,
    rows,
    ...props
}) => {
    const classes = useStyles({ error })
    return (
        <TextField
            required
            type={'text'}
            className={classes.root}
            label={label}
            value={value}
            error={error}
            helperText={helperText}
            variant={variant}
            onChange={onChange}
            onFocus={onFocus}
            onInput={onInput}
            onBlur={onBlur}
            inputProps={inputProps}
            InputLabelProps={
                InputLabelProps || {
                    classes: {
                        root: classes.label,
                        focused: classes.focused,
                    },
                }
            }
            InputProps={
                InputProps || {
                    classes: {
                        root: classes.outlinedInput,
                        focused: classes.focused,
                        notchedOutline: classes.notchedOutline,
                    },
                }
            }
            multiline={multiline}
            rows={rows}
            {...props}
        />
    )
}
StyledTextField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onInput: PropTypes.func,
    onBlur: PropTypes.func,
    inputProps: PropTypes.object,
    InputLabelProps: PropTypes.object,
    InputProps: PropTypes.object,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
}
export default StyledTextField
