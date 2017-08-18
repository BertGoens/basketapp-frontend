import { Link } from 'react-router-dom'
import React from 'react';

export const LoginLink = (props) => {
  return (
    <div className="row center-align">
      <div className="col s3"></div>
      <Link to="/login">
        <button className='col s6 btn btn-large waves-effect'>
          <i className="material-icons left">account_circle</i>
          Login
    </button>
      </Link>
      <div className="col s3"></div>
    </div>
  )
}