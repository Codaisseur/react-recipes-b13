import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Snackbar from 'material-ui/Snackbar'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'
import { clearError } from '../actions/loading'

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
})

class LoadError extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  state = {
    open: false,
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    const { dispatch, message } = this.props
    dispatch(clearError(message))
  }

  render() {
    const { classes, message } = this.props
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={true}
          autoHideDuration={6000}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            <Button key="undo" color="accent" dense onClick={this.handleClose}>
              DISMISS
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    )
  }
}

export default connect()(withStyles(styles)(LoadError))