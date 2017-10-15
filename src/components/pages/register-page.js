import React, { Component } from 'react'

import { RegisterForm } from '../register/register-form'
import { LoginLink } from '../login/login-link'
import { ResetPasswordLink } from '../resetPassword/reset-password-link'

export class RegisterPage extends Component {
  /**
     * Class constructor.
     *
     * @param {Object} props for this Component
     */
  constructor(props) {
    super(props)

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: '',
      },
    }

    this.processForm = ::this.processForm
    this.changeUser = ::this.changeUser
  }

  /**
     * Change the user object.
     *
     * @param {object} event - the JavaScript event object
     */
  changeUser(event) {
    const field = event.target.name
    const user = this.state.user
    user[field] = event.target.value

    this.setState({
      user,
    })
  }

  /**
     * Process the form.
     *
     * @param {object} event - the JavaScript event object
     */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault()

    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email)
    const password = encodeURIComponent(this.state.user.password)
    const formData = `email=${email}&password=${password}`

    // create an AJAX request
    const xhr = new XMLHttpRequest()
    xhr.open('post', '/auth/register/jwt')
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.responseType = 'json'
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {},
        })

        // TODO Display login message
        alert(xhr.response.message)

        // Save user object
        localStorage.setItem('user', JSON.stringify(xhr.response.user))

        // Make a redirect
        this.props.history.replace('/home')
      } else {
        // failure

        // change the component state
        this.setState({
          errors: xhr.response
            ? xhr.response.errors
            : { message: '🚧 Server unavailable 🚧' },
        })
      }
    })
    xhr.addEventListener('error', function() {
      this.setState({
        errors: { message: '🚧 Server unavailable 🚧' },
      })
    })
    xhr.send(formData)
  }

  /**
     * Render the component.
     *
     * @returns {Component} component register-page
     */
  render() {
    return (
      <div>
        <RegisterForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
        <div className="section">
          <LoginLink />
          <ResetPasswordLink />
        </div>
      </div>
    )
  }
}
