import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {PreAuthAppShell} from "@@/pages/containers/pre-auth-app-shell/index"
import {AppShell} from "@@/pages/containers/app-shell/index"

ReactDOM.render((
  <BrowserRouter>
    <Switch>
    <Route path="/auth" component={PreAuthAppShell}></Route>
    <Route path="/api"></Route>
    <Route path="/" component={AppShell}></Route>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))