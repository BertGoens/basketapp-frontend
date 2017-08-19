import React from 'react';

export const SettingsPage = (props) => {
  return (
    <div className="row s12">
      <form action="/logout" method="POST" className="col s12">
        <div className="input-field col s12 center-align">
          <button className="btn waves-effect waves-light" type="submit" name="action">Logout</button>
        </div>
      </form>
    </div>
  )
}