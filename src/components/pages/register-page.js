import React from 'react'

import { LoginForm } from '../login-form'
import { LoginLink } from '../login-link'
import { ResetPasswordLink } from '../reset-password-link'

export const RegisterPage = (props) => {
  return (
    <div>
      <LoginForm />
      <div className="section">
        <LoginLink />
        <ResetPasswordLink />
      </div>
    </div>
  )
}

