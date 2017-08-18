import {styles} from '../../components/style.css'

import { LoginLink, ResetPasswordLink } from '../../components'
import React from 'react';

export const RegisterContent = (props) => {
  return (
    <div className="container" style={{styles}}>
      <div className="z-depth-1 grey lighten-4 row form-action">
        <form className="col s12" method="post" action="/register" >
          <div className='row'>
            <div className='input-field col s12'>
              <i className="tiny material-icons prefix">email</i>
              <input className='validate' type='email' name='email' id='email' />
              <label htmlFor='email'>Enter your email</label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s12'>
              <i className="tiny material-icons prefix">lock</i>
              <input className='validate' type='password' name='password' id='password' pattern=".{0}|.{8,50}" required />
              <label htmlFor='password'>Enter your password</label>
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

      <div className="section">
        <LoginLink />
        <ResetPasswordLink />
      </div>
    </div>
  )
}