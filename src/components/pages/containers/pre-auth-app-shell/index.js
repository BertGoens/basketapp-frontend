import React from 'react'
import { Switch, Route } from 'react-router-dom'

// reset css before loading our css!
import '../../../../assets/css/reset.css'
import '../../../../components/app-shell.css'

import { MobileHeader } from '../../../../components/mobile-header'
import { ConnectionStatus } from '../../../../components/connection-status'

import {
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  NotFoundPage,
} from '../../../pages'

import connectionStatus from '../../../../assets/js/connectionStatus'

export const PreAuthAppShell = props => {
  const appTitle = props.location.pathname
  return (
    <div className="app">
      <MobileHeader appTitle={appTitle} />
      <ConnectionStatus />
      <main>
        <Switch>
          <Route exact path="/auth/" component={LoginPage} />
          <Route path="/auth/login" component={LoginPage} />
          <Route path="/auth/register" component={RegisterPage} />
          <Route path="/auth/reset-password" component={ResetPasswordPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  )
}

connectionStatus()
