import './mobile-nav.css'

import { NavLink } from 'react-router-dom'
import React from 'react'

export const MobileNavigation = (props) => {
  return (
    <nav className="mobile-nav">
      <div className="row">
        <div className="col s4 center-align">
          <NavLink to='/home' activeClassName="active" ><i className="material-icons">view_list</i></NavLink>
        </div>
        <div className="col s4 center-align">
          <NavLink to='/profile' activeClassName="active"><i className="material-icons">person_pin</i></NavLink>
        </div>
        <div className="col s4 center-align">
          <NavLink to='/settings' activeClassName="active"><i className="material-icons">settings</i></NavLink>
        </div>
      </div>
    </nav>
  )
}