import React, { Component } from 'react'
import { LoginForm } from './login-form'
import { RegisterLink } from '../register/register-link'
import { ResetPasswordLink } from '../resetPassword/reset-password-link'
import { POST_Request, Auth } from '@/modules'
import API_helpers from '@@/api'

export class LoginPage extends Component {
  /**
   * Class constructor.
   *
   * @param {Object} props - props that the component needs
   * @param {Object} history - application route history
   *
   */
  constructor(props, history) {
    super(props, history)

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
   * Process the form.
   *
   * @param {Event} e - Form Event
   *
   */
  processForm(e) {
    // Prevent the default form action
    e.preventDefault()

    const email = this.state.user.email
    const password = this.state.user.password

    // Gather credentials
    let FORM_DATA = {
      email,
      password,
    }

    // Execute Fetch call
    fetch(POST_Request('/auth/login/jwt', FORM_DATA))
      .then(response =>
        this::API_helpers.checkIfRequestHasBeenAllowed(response)
      )
      .then(acceptedResponse =>
        API_helpers.getDataFromResponse(acceptedResponse)
      )
      .then(data => {
        this.finalizeAuthenication(data)
        Materialize.toast(data.message, 3000)
      })
      .catch(e => this::API_helpers.handleRequestErrors(e))
  }

  /**
   * Set the token in localStorage and redirect user to the homepage
   * 
   * @param {Object} data 
   */
  finalizeAuthenication(data) {
    Auth.authenticateUser(data.token)
    this.props.history.push('/home')
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   *
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
   * Render the component.
   *
   * @returns {Component} component login-page
   *
   */
  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />{' '}
        <div className="section">
          <RegisterLink />
          <ResetPasswordLink />
        </div>{' '}
      </div>
    )
  }
}
