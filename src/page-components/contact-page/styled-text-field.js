import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, TextField } from '@material-ui/core'

const StyledTextField = withStyles((theme) => ({
  label: {
    color: theme.text.hover2,
    '&$focused': {
      color: theme.text.primary,
    }
  },
  focused: {
  },
  outlinedInput: {
    borderRadius: 0,
      '&$focused $notchedOutline': {
      borderColor: theme.text.primary,
    },
  },
  notchedOutline: {
    borderColor: theme.text.primary,
  }
}))(({ classes, label, value, onChange, ...props }) => {
  return (
    <TextField
      required
      label={label}
      variant={'outlined'}
      type={'text'}
      value={value}
      onChange={onChange}
      InputLabelProps={{ classes: {
        root: classes.label,
        focused: classes.focused,
      }}}
      InputProps={{ classes: {
        root: classes.outlinedInput,
        focused: classes.focused,
        notchedOutline: classes.notchedOutline
      }}}
      {...props}
    />
  )
})
StyledTextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
export default StyledTextField
