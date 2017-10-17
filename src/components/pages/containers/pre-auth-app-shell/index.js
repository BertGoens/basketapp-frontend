import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { MobileHeader } from '@@/header/mobile-header'
import { ConnectionStatus } from '@@/connection-status'
import {
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  NotFoundPage,
} from '@@/pages'

import { Main, Container } from '@@/styledComponents'

import connectionStatus from '@/assets/js/connectionStatus'

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
