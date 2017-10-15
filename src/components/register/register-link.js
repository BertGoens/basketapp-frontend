import { Link } from 'react-router-dom'
import React from 'react'

export const RegisterLink = props => {
  return (
    <div className="row center-align">
      <div className="col s3" />

      <Link to="/auth/register">
        <button className="col s6 btn btn-large waves-effect">
          <i className="material-icons left">perm_identity</i>
          Register
        </button>
      </Link>
      <div className="col s3" />
    </div>
  )
}
