import React from 'react'

// reset css before loading our css!
import './css/reset.css'
import './app-shell.css';

import { MobileHeader } from './components/mobile-header'
import { ConnectionStatus } from './components/connection-status'
import { MobileNavigation } from './components/mobile-nav'

import connectionStatus from '../../assets/js/connectionStatus'

export const AppShell = (props) => {
  console.dir(props)
  return (
    <div>
      <MobileHeader appTitle={props.appTitle} />
      <ConnectionStatus />
      <main>
        {props.content}
      </main>
      <MobileNavigation />
    </div>
  )
}

connectionStatus();