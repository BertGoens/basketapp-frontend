import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { AppShell } from './screens/.app-shell/';
import { Login } from './screens/auth/login'
import { Register } from './screens/auth/register'
import { ResetPassword } from './screens/auth/reset-password'
import { Offline } from './screens/offline'
import { Home } from './screens/home'
import { Profile } from './screens/profile'
import { Settings } from './screens/settings'

import registerServiceWorker from './assets/js/registerServiceWorker';
import connectionStatus from './assets/js/connectionStatus'


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" render={() =>
          <Login appTitle='Login' />
        } />

        <Route exact path="/offline" render={() =>
          <AppShell appTitle={'Offline'} content={Offline()} />
        } />

        <Route exact path="/login" render={() =>
          <Login appTitle='Login' />
        } />

        <Route exact path="/register" render={() =>
          <Register appTitle={'Register'} />
        } />
        <Route exact path="/reset-password" render={() =>
          <ResetPassword appTitle={'Reset Password'} />
        } />

        <Route exact path="/home" render={() =>
          <AppShell appTitle={'Basketapp'} content={Home()} />
        } />
        <Route exact path="/profile" render={() =>
          <AppShell appTitle={'Profile'} content={Profile()} />
        } />
        <Route exact path="/settings" render={() =>
          <AppShell appTitle={'Settings'} content={Settings()} />
        } />
        <Route component={AppShell} />
      </Switch>
    </div>
  </BrowserRouter>,

  document.getElementById('root')
);

registerServiceWorker();
connectionStatus();