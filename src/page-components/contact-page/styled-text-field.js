import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, TextField } from '@material-ui/core'

const StyledTextField = withStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(2),
    '& > .MuiFormHelperText-root': {
      margin: 0,
    }
  },
  label: {
    // color: theme.text.hover2,
    '&$focused': {
      // color: theme.text.primary,
    }
  },
  focused: {
  },
  outlinedInput: {
    borderRadius: 0,
      '&$focused $notchedOutline': {
      // borderColor: theme.text.primary,
    },
  },
  notchedOutline: {
    // borderColor: theme.text.primary,
  }
}))(({ classes, label, value, error, onChange, ...props }) => {
  return (
    <TextField required type={'text'} className={classes.root} label={label}
               value={value} error={error} onChange={onChange}
               variant={'outlined'} style={{ marginBottom: error && 0 }}
               InputLabelProps={{ classes: {
                 root: classes.label,
                   focused: classes.focused,
               }}}
               InputProps={{ classes: {
                 root: classes.outlinedInput,
                   focused: classes.focused,
                   notchedOutline: classes.notchedOutline
               }}}
               {...props}/>
  )
})
StyledTextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}
export default StyledTextField
