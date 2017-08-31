import React from 'react';
import setupProfileDateOfBirth from '../../assets/js/setupProfile'
import { ProfileForm } from '../profile-form'

export class ProfilePage extends React.Component {
  /**
  * Class constructor.
  */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: JSON.parse(localStorage.getItem('user'))
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const first_name = encodeURIComponent(this.state.user.individual_first_name);
    const last_name = encodeURIComponent(this.state.user.individual_last_name);
    const email = encodeURIComponent(this.state.user.individual_email);
    const cellphone = encodeURIComponent(this.state.user.individual_cellphone);
    const sex = encodeURIComponent(this.state.user.individual_sex);
    const date_of_birth = encodeURIComponent(this.state.user.individual_date_of_birth);

    const formData = 
    `
    first_name=${first_name}
    &last_name=${last_name}
    &email=${email}
    &cellphone=${cellphone}
    &sex=${sex}
    &date_of_birth=${date_of_birth}
    `;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/profile');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        alert('success')
        localStorage.setItem('user', JSON.stringify(xhr.response.user))
      } else {
        // failure

        // change the component state
        let errors
        if (xhr.response) {
          errors = xhr.response.errors ? xhr.response.errors : {};
          errors.message = xhr.response.message;
        } else {
          errors = { message: '🚧 Server unavailable 🚧' }
        }

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  componentDidMount() {
    setupProfileDateOfBirth();
  }

  /**
  * Render the component.
  */
  render() {
    return (
      <ProfileForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    )
  }
}
