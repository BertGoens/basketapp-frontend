import './connection-status.css'

import React from 'react'

export const ConnectionStatus = () => {
  return (
    <div className="connection row">
      <div className="online col s12 center-align">
        <p>You are online!</p>
      </div>
      <div className="offline col s12 center-align">
        <p>You are offline!</p>
      </div>
    </div>
  )
}
