import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUserData, signOutUser as signOut } from '../actions/user'

export class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  componentWillMount() {
    this.props.fetchUserData()
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  render() {
    const { signedIn } = this.props
    return (
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            { signedIn ?
              <a href="#" onClick={this.signOut.bind(this)}>Sign out</a> :
              <Link to="/sign-up">Sign up</Link>
            }
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut, fetchUserData })(Navigation)
