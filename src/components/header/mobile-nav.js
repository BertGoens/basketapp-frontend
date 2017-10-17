import React from 'react'
import { MobileNavLink } from '@@/styledComponents'

export const MobileNavigation = props => {
  return (
    <nav className="mobile-nav blue">
      <div className="row">
        <div className="col s4 center-align">
          <MobileNavLink exact to="/" activeClassName="active">
            <i className="material-icons">view_list</i>
          </MobileNavLink>
        </div>
        <div className="col s4 center-align">
          <MobileNavLink exact to="/profile" activeClassName="active">
            <i className="material-icons">person_pin</i>
          </MobileNavLink>
        </div>
        <div className="col s4 center-align">
          <MobileNavLink exact to="/settings" activeClassName="active">
            <i className="material-icons">settings</i>
          </MobileNavLink>
        </div>
      </div>
    </nav>
  )
}
