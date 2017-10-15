import React from 'react'

export const NotFoundPage = () => {
  return (
    <div className="center-align">
      <div className="row" />
      <div className="row">
        <div className="col s8 offset-s2">
          <p className="flow-text">Page not found!</p>
          <p className="flow-text">Are you lost?</p>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <img src="src/assets/img/pageNotFound.jpg" alt="Page not found" />
        </div>
      </div>
    </div>
  )
}
