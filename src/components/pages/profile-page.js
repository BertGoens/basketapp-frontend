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
      user: {
        first_name: '',
        last_name: '',
        email: '',
        cellphone: '',
        sex: '',
        date_of_birth: ''
      }
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
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        console.log('The form is valid');
      } else {
        // failure

        // change the component state
        let errors
        if (xhr.response) {
          errors = xhr.response.errors ? xhr.response.errors : {};
          errors.summary = xhr.response.message;
        } else {
          errors = { summary: '🚧 Server unavailable 🚧' }
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
