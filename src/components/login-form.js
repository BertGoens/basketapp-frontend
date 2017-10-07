import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from './error'

export const LoginForm = ({ onSubmit, onChange, errors, user }) => {
  return (
    <div className="container">
      <div className="z-depth-1 grey lighten-4 row form-action">
        <form
          className="col s12"
          method="post"
          action="/login"
          onSubmit={onSubmit}
        >
          {errors &&
            errors.message && <ErrorMessage message={errors.message} />}

          <div className="row">
            <div className="input-field col s12">
              <i className="tiny material-icons prefix">email</i>
              <input
                className="validate"
                type="email"
                name="email"
                id="email"
                onChange={onChange}
                value={user.email}
              />
              <label htmlFor="email" data-error={errors.email}>
                Enter your email
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="tiny material-icons prefix">lock</i>
              <input
                className="validate"
                type="password"
                name="password"
                id="password"
                pattern=".{0}|.{4,50}"
                required
                onChange={onChange}
                value={user.password}
              />
              <label htmlFor="password" data-error={errors.password}>
                Enter your password
              </label>
            </div>
          </div>

          <div className="row center-align">
            <div className="col s3" />
            <button
              type="submit"
              name="btn_login"
              className="col s6 btn btn-large waves-effect"
            >
              <i className="material-icons left">account_circle</i>
              Login
            </button>
            <div className="col s3" />
          </div>
        </form>
      </div>
    </div>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}
