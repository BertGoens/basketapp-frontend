import React from 'react'

import { ResetPasswordForm } from '../reset-password-form'
import { LoginLink } from '../login-link'
import { RegisterLink } from '../register-link'

export const ResetPasswordPage = (props) => {
  return (
    <div>
      <ResetPasswordForm />
      <div className="section">
        <LoginLink />
        <RegisterLink />
      </div>
    </div>
  )
}
