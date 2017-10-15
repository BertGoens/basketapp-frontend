import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from '../error/error'

export const ProfileForm = ({ onSubmit, onChange, errors, user }) => (
  <div className="row s12">
    {errors && errors.message && <ErrorMessage message={errors.message} />}
    <form action="/profile" onSubmit={onSubmit} className="col s12">
      <div className="input-field col s12">
        <i className="material-icons prefix">account_circle</i>
        <input
          name="first_name"
          id="first_name"
          type="text"
          className="validate"
          placeholder={user.individual_first_name}
          onChange={onChange}
        />
        <label htmlFor="first_name" data-error={errors.first_name}>
          First Name
        </label>
      </div>
      <div className="input-field col s12">
        <i className="material-icons prefix">account_circle</i>
        <input
          name="last_name"
          id="last_name"
          type="text"
          className="validate"
          placeholder={user.individual_last_name}
          onChange={onChange}
          value={user.individual_last_name}
        />
        <label htmlFor="last_name" data-error={errors.last_name}>
          Last Name
        </label>
      </div>
      <div className="input-field col s12">
        <i className="material-icons prefix">email</i>
        <input
          name="email"
          id="email"
          type="email"
          className="validate"
          placeholder={user.individual_email}
          onChange={onChange}
          value={user.individual_email}
        />
        <label htmlFor="email" data-error={errors.email}>
          Email
        </label>
      </div>

      <div className="input-field col s12">
        <i className="material-icons prefix">phone</i>
        <input
          name="cellphone"
          id="icon_telephone"
          type="tel"
          className="validate"
          placeholder={user.individual_cellphone}
          onChange={onChange}
          value={user.individual_cellphone}
        />
        <label htmlFor="icon_telephone" data-error={errors.cellphone}>
          Telephone
        </label>
      </div>

      <div className="input-field col s12">
        <i className="material-icons prefix">perm_identity</i>
        <select name="sex">
          <option value="" disabled defaultValue>
            Select your sex
          </option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <label>Sex</label>
      </div>

      <div className="input-field col s12">
        <i className="material-icons prefix">today</i>
        <label htmlFor="birthdate" className="">
          Birthdate
        </label>
        <input
          id="birthdate"
          name="date_of_birth"
          type="text"
          className="datepicker picker__input"
          readOnly=""
          tabIndex="-1"
          aria-haspopup="true"
          aria-readonly="false"
          aria-owns="birthdate_root"
          data-value="="
        />
      </div>

      <div>
        <div className="col s12 center-align">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">done</i>
          </button>
        </div>
      </div>
    </form>
  </div>
)

ProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}
