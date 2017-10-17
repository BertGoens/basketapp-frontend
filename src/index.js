import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { observer } from 'mobx-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { appState } from './store'

import { PreAuthAppShell } from '@@/pages/containers/pre-auth-app-shell/index'
import { AppShell } from '@@/pages/containers/app-shell/index'

@observer
class RootComponent extends Component {
  constructor(props) {
    super(props)
  }

  // As for the reason why I changed from component={AppShell} to render
  // https://stackoverflow.com/questions/43469071/react-react-router-dom-pass-props-to-component
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/auth"
            render={props => (
              <PreAuthAppShell {...props} appState={this.props.appState} />
            )}
          />
          <Route path="/api" />
          <Route
            path="/"
            render={props => (
              <AppShell {...props} appState={this.props.appState} />
            )}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <RootComponent appState={appState} />,
  document.getElementById('root')
)
