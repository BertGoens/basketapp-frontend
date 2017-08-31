import React from 'react';
import PropTypes from 'prop-types'
import { Error } from './error'

export const RegisterForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => {
  return (
    <div className="container">
      <div className="z-depth-1 grey lighten-4 row form-action">
        <form className="col s12" method="post" action="/register" onSubmit={onSubmit} >

          {errors.message && <Error message={errors.message} />}

          <div className='row'>
            <div className='input-field col s12'>
              <i className="tiny material-icons prefix">email</i>
              <input className='validate' type='email' name='email' id='email'
                onChange={onChange}
                value={user.email}
              />
              <label htmlFor='email' data-error={errors.email}>Enter your email</label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s12'>
              <i className="tiny material-icons prefix">lock</i>
              <input className='validate' type='password' name='password' id='password' pattern=".{0}|.{8,50}" required
                onChange={onChange}
                value={user.password}
              />
              <label htmlFor='password' data-error={errors.password}>Enter your password</label>
            </div>
          </div>

          <div className='row center-align'>
            <div className="col s3"></div>
            <button type='submit' className='col s6 btn btn-large waves-effect'>
              <i className="material-icons left">perm_identity</i>
              Register
          </button>
            <div className="col s3"></div>
          </div>
        </form>
      </div>
    </div>
  )
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};