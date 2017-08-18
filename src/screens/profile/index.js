import React from 'react';

export const Profile = (props) => {
  return (
    <div className="row s12">
      <form method="POST" action="/profile" className="col s12">
        <div className="input-field col s12">
          <i className="material-icons prefix">account_circle</i>
          <input placeholder="" value="" name="first_name" id="first_name" type="text" className="validate">
          </input>
          <label htmlFor="first_name">First Name</label>

        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">account_circle</i>
          <input placeholder="" value="" name="last_name" id="last_name" type="text" className="validate">
          </input>
          <label htmlFor="last_name">Last Name</label>

        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">email</i>
          <input placeholder="" value="" name="email" id="email" type="email" className="validate">
          </input>
          <label htmlFor="email">Email</label>

        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">phone</i>
          <input placeholder="" value="" name="cellphone" id="icon_telephone" type="tel" className="validate">
          </input>
          <label htmlFor="icon_telephone">Telephone</label>

        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">perm_identity</i>
          <select name="sex">

          </select>
          <label>Sex</label>
        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">today</i>
          <label htmlFor="birthdate" className="">Birthdate</label>
          <input id="birthdate" name="date_of_birth" type="text" className="datepicker picker__input"
            readOnly="" tabIndex="-1" aria-haspopup="true"
            aria-readonly="false" aria-owns="birthdate_root"
            data-value="=">
          </input>
        </div>

        <div>
          <div className="col s12 center-align">
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">done</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}