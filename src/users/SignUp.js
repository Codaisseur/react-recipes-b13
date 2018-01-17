import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signUpUser as signUp } from '../actions/user'
import Title from '../components/Title'
// import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

export class SignUp extends PureComponent {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const { name, email, password } = this.state
      this.props.signUp({ name, email, password })
    }
  }

  validateAll() {
    return this.validateName() &&
      this.validateEmail() &&
      this.validatePassword() &&
      this.validatePasswordConfirmation()
  }

  validateName() {
    const { name } = this.state

    if (name.length > 1) {
      this.setState({
        nameError: null
      })
      return true
    }

    this.setState({
      nameError: 'Please provide your name'
    })
    return false
  }

  validateEmail() {
    const { email } = this.state

    // this is wrong! (TIP: use https://validatejs.org/)
    if (email.match(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/)) {
      this.setState({
        emailError: null
      })
      return true
    }

    if (email === '') {
      this.setState({
        emailError: 'Please provide your email address'
      })
      return false
    }

    this.setState({
      emailError: 'Please provide a valid email address'
    })
    return false
  }

  validatePassword() {
    const { password } = this.state

    if (password.length < 6) {
      this.setState({
        passwordError: 'Password is too short'
      })
      return false
    }

    if (password.match(/[a-zA-Z]+/) && password.match(/[0-9]+/)) {
      this.setState({
        passwordError: null
      })
      return this.validatePasswordConfirmation()
    }

    this.setState({
      passwordError: 'Password should contain both letters and numbers'
    })
    return false
  }

  validatePasswordConfirmation() {
    const { password, passwordConfirmation } = this.state

    if (password === passwordConfirmation) {
      this.setState({
        passwordConfirmationError: null
      })
      return true
    }

    this.setState({
      passwordConfirmationError: 'Passwords do not match'
    })
    return false
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    }, this.validateField(name))
  }

  validateField = name => _ => {
    switch(name) {
      case 'name' :
        return this.validateName()
      case 'email' :
        return this.validateEmail()
      case 'password' :
        return this.validatePassword()
      case 'passwordConfirmation' :
        return this.validatePasswordConfirmation()
      default :
        return this.validateAll()
    }
  }

  render() {
    const {
      name, nameError,
      email, emailError,
      password, passwordError,
      passwordConfirmation, passwordConfirmationError
    } = this.state

    console.table(this.state)

    return (
      <Paper style={{ padding: '2rem', margin: '2rem auto' }} className="sign-up form">
        <Title content="Sign Up" />

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <TextField
              type="text"
              label={nameError || 'Your name'}
              onChange={this.handleChange('name')}
              value={name}
              error={!!nameError}
            />
          </div>
          <div className="input">
            <TextField
              type="email"
              label={emailError || 'Your email'}
              onChange={this.handleChange('email')}
              value={email}
              error={!!emailError}
            />
          </div>
          <div className="input">
            <TextField
              type="password"
              label={passwordError || 'Your password'}
              onChange={this.handleChange('password')}
              value={password}
              error={!!passwordError}
            />
          </div>
          <div className="input">
            <TextField
              type="password"
              label={passwordConfirmationError || 'Repeat your password'}
              onChange={this.handleChange('passwordConfirmation')}
              value={passwordConfirmation}
              error={!!passwordConfirmationError}
            />
          </div>
          <Button type="submit" raised color="primary">
            Sign up
          </Button>
          <p>Already signed up?
            <Link to="/sign-in">
              <Button>Sign in</Button>
            </Link>
          </p>
        </form>
      </Paper>
    )
  }
}

export default connect(null, { signUp })(SignUp)
