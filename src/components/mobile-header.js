import './mobile-header.css'

import React from 'react';
import { Link } from 'react-router-dom'

export const MobileHeader = (props) => {
  return (
    <div className="navbar">
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <Link to='/' className="brand-logo truncate">{props.appTitle}</Link>
        </div>
      </nav>
    </div>
  )
}