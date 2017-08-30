import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { PreAuthAppShell } from './components/pages/containers/pre-auth-app-shell'
import { AppShell } from './components/pages/containers/app-shell'

import registerServiceWorker from './assets/js/registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/auth" component={PreAuthAppShell} />
      <Route path="/api" />
      <Route path="/" render={AppShell} />
    </Switch>
  </BrowserRouter >,
  document.getElementById('root')
);

registerServiceWorker();