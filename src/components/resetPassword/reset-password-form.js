import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from '../error/error'

export const ResetPasswordForm = ({ onSubmit, onChange, errors }) => {
  return (
    <div className="container">
      <div className="z-depth-1 grey lighten-4 row form-action">
        {errors.message && <ErrorMessage message={errors.message} />}

        <form className="col s12" onSubmit={onSubmit} method="post">
          <div className="row">
            <div className="input-field col s12">
              <i className="tiny material-icons prefix">email</i>
              <input
                className="validate"
                type="email"
                name="email"
                id="email"
                onChange={onChange}
              />
              <label htmlFor="email" data-error={errors.email}>
                Enter your email
              </label>
            </div>
          </div>

          <div className="row center-align">
            <div className="col s3" />
            <button type="submit" className="col s6 btn btn-large waves-effect">
              <i className="material-icons left">lock_outline</i>
              Reset
            </button>
            <div className="col s3" />
          </div>
        </form>
      </div>
    </div>
  )
}

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
}
