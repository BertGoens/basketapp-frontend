import React from 'react'

import '../../.app-shell/css/reset.css'
import '../../.app-shell/app-shell.css';

import { MobileHeader } from '../../.app-shell/components/mobile-header'
import { ConnectionStatus } from '../../.app-shell/components/connection-status'
import { RegisterContent } from './components/register-content'

export const Register = (props) => {
  return (
    <div>
      <MobileHeader appTitle={props.appTitle} />
      <ConnectionStatus />
      <main>
        <RegisterContent />
      </main>
    </div>
  )
}
