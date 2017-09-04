import React from 'react'

import { ResetPasswordForm } from '../reset-password-form'
import { LoginLink } from '../login-link'
import { RegisterLink } from '../register-link'

export class ResetPasswordPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
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
    const formData = `email=${email}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/reset-password');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

      } else {
        // failure

        // change the component state
        this.setState({
          errors : xhr.response ? xhr.response.errors : { message: '🚧 Server unavailable 🚧' }
        });
      }
    });
    xhr.addEventListener('error', function () {
      this.setState({
        errors: { message: '🚧 Server unavailable 🚧' }
      });
    })
    xhr.send(formData);
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <div>
        <ResetPasswordForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
        />
        <div className="section">
          <LoginLink />
          <RegisterLink />
        </div>
      </div>
    );
  }

}
