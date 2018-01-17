import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoadError from './LoadError'

class LoadErrors extends PureComponent {
  static propTypes = {
    loadErrors: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  renderErrors = () => {
    const { loadErrors } = this.props

    return loadErrors.map((error, index) => (
      <LoadError message={error} key={index} />
    ))
  }

  render() {
    const { loadErrors } = this.props
    if (loadErrors.length === 0) return null

    return (
      <div className="LoadErrors">
        {this.renderErrors()}
      </div>
    )
  }
}

const mapStateToProps = ({ loadErrors }) => ({ loadErrors })

export default connect(mapStateToProps)(LoadErrors)