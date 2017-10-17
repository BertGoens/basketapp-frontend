import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

// TODO: abstract these to individual files to reuse them in other components?
const Container = styled.div`
  background: red;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Main = styled.div`
  background: #fff;
  max-height: 100vh; /* for 100% viewport height */
  flex: 1;
  -webkit-overflow-scrolling: touch; /* mobile safari */
  overflow-y: auto; /* make element scrollable  */
`

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
    <Container>
      <MobileHeader appTitle={appTitle} />
      <ConnectionStatus />
      <Main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/settings" component={SettingsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Main>
      <MobileNavigation />
    </Container>
  )
}

connectionStatus()
