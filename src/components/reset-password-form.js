import React from 'react';

export const ResetPasswordForm = (props) => {
  return (
    <div className="container">
      <div className="z-depth-1 grey lighten-4 row form-action">
        <form className="col s12" method="post">
          <div className='row'>
            <div className='input-field col s12'>
              <i className="tiny material-icons prefix">email</i>
              <input className='validate' type='email' name='email' id='email' />
              <label htmlFor='email'>Enter your email</label>
            </div>
          </div>

          <div className='row center-align'>
            <div className="col s3"></div>
            <button type='submit' className='col s6 btn btn-large waves-effect'>
              <i className="material-icons left">lock_outline</i>
              Reset
          </button>
            <div className="col s3"></div>
          </div>
        </form>
      </div>
    </div>
  )
}