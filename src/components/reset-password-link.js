import { Link } from 'react-router-dom'
import React from 'react';

export const ResetPasswordLink = (props) => {
  return (
    <div className="row center-align">
      <div className="col s3"></div>
      <Link to="/auth/reset-password">
        <button className='col s6 btn btn-large waves-effect'>
          <i className="material-icons left">lock_outline</i>
          Reset Password
        </button>
      </Link>
      <div className="col s3"></div>
    </div>
  )
}
