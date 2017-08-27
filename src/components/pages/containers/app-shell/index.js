import React from 'react'
import { Switch, Route } from 'react-router-dom'

// reset css before loading our css!
import '../../../../assets/css/reset.css'
import '../../../../components/app-shell.css'

import { MobileHeader } from '../../../../components/mobile-header'
import { ConnectionStatus } from '../../../../components/connection-status'
import { MobileNavigation } from '../../../../components/mobile-nav'

import { HomePage, ProfilePage, SettingsPage, NotFoundPage } from '../../../pages'

import connectionStatus from '../../../../assets/js/connectionStatus'

function getTitle(props) {
  if (props && props.location) {
    return props.location.pathname
  }
  return 'Basketapp'
}

export const AppShell = (props) => {
  const appTitle = getTitle(props)
  return (
    <div className='app'>
      <MobileHeader appTitle={appTitle} />
      <ConnectionStatus />
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/home' component={HomePage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/settings' component={SettingsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <MobileNavigation />
    </div>
  )
}

connectionStatus();