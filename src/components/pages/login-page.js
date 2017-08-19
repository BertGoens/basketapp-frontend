import React from 'react'

import { LoginForm } from '../login-form'
import { RegisterLink } from '../register-link'
import { ResetPasswordLink } from '../reset-password-link'

export const LoginPage = (props) => {
  return (
    <div>
      <LoginForm />
      <div className="section">
        <RegisterLink />
        <ResetPasswordLink />
      </div>
    </div>
  )
}


