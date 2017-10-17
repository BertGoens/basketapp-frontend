import React from 'react'
import { Switch, Route } from 'react-router-dom'
import '../app-shell.css'

import { MobileHeader } from '@@/header/mobile-header'
import { ConnectionStatus } from '@@/connection-status'
import { MobileNavigation } from '@@/header/mobile-nav'

import { HomePage, ProfilePage, SettingsPage, NotFoundPage } from '@@/pages'

import connectionStatus from '@/assets/js/connectionStatus'

function getTitle(props) {
  console.log('APPSTATE')
  console.log(props)
  console.log('------------------------------')
  if (props && props.location) {
    return 'BasketApp | ' + (props.location.pathname.split('/')[1] || 'Home')
  }
  return 'Basketapp | Home'
}

export const AppShell = props => {
  const appTitle = getTitle(props)
  return (
    <div className="app">
      <MobileHeader appTitle={appTitle} />
      <ConnectionStatus />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/settings" component={SettingsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <MobileNavigation />
    </div>
  )
}

connectionStatus()
